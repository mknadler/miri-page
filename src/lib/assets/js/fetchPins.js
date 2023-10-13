const fetchPins = async ({ offset = 0, limit = 999, category = '' } = {}) => {

	const pins = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/pinball/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path.split('/').pop().slice(0, -3)
			return { ...metadata, slug }
		})
	)

	let sortedPins = pins.sort((a, b) => {
		if (a.machine < b.machine) {
			return -1;
		}
		if (a.machine > b.machine) {
			return 1;
		}
		return 0;
	})
	
	sortedPins = sortedPins.map(pin => ({
		machine: pin.machine,
		division: pin.division
	}))

	return {
		pins: sortedPins
	}
}

export default fetchPins