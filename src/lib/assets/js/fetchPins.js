const fetchPins = async ({ offset = 0, limit = 999, category = '' } = {}) => {

	const pins = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/pinball/*.md')).map(async ([path, resolver]) => {
			const all = await resolver();
			const metadata = all.metadata;
			const html = all.default.render().html;
			const slug = path.split('/').pop().slice(0, -3)
			console.log('metadata', metadata, path);
			return { ...metadata, slug, html }
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

	console.log("Sorted is", sortedPins);
	
	sortedPins = sortedPins.map(pin => ({
		machine: pin.machine,
		division: pin.division,
		body: pin.html
	}))

	return {
		pins: sortedPins
	}
}

export default fetchPins