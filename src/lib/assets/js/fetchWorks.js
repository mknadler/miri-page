import { workPerPage } from '$lib/config'

const fetchWorks = async ({ offset = 0, limit = workPerPage, category = '' } = {}) => {

	const works = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/work/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path.split('/').pop().slice(0, -3)
			return { ...metadata, slug }
		})
	)

	let sortedWorks = works.sort((a, b) => {
		return a.num - b.num }
	);
	
	if (category) {
    	sortedWorks = sortedWorks.filter(work => work.categories.includes(category))
	}
  
	if (offset) {
		sortedWorks = sortedWorks.slice(offset)
	}
	
	if (limit && limit < sortedWorks.length && limit != -1) {
		sortedWorks = sortedWorks.slice(0, limit)
	}

	sortedWorks = sortedWorks.map(work => ({
		name: work.name,
		url: work.url,
		num: work.num,
		image: work.image
	}))

	return {
		works: sortedWorks
	}
}

export default fetchWorks