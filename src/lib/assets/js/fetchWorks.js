import { workPerPage } from '$lib/config'

const fetchWorks = async ({ offset = 0, limit = workPerPage, category = '' } = {}) => {

	const sites = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/work/newsdev/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path.split('/').pop().slice(0, -3)
			return { ...metadata, slug }
		})
	)

	const pens = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/work/codepens/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path.split('/').pop().slice(0, -3)
			return { ...metadata, slug }
		})
	)

	let sortedSites = sites.sort((a, b) => {
		return a.num - b.num }
	);
	let sortedPens = pens.sort((a, b) => {
		return a.num - b.num }
	);
	
	if (category) {
    	sortedSites = sortedSites.filter(work => work.categories.includes(category))
	}
  
	if (offset) {
		sortedSites = sortedSites.slice(offset)
	}
	
	if (limit && limit < sortedSites.length && limit != -1) {
		sortedSites = sortedSites.slice(0, limit)
	}

	sortedSites = sortedSites.map(work => ({
		type: 'site',
		name: work.name,
		url: work.url,
		num: work.num,
		image: work.image,
		alt: work.imageAlt,
		desc: work.desc
	}));

	sortedPens = pens.map(pen => ({
		type: 'pen',
		name: pen.name,
		url: pen.url,
		num: pen.num,
		image: pen.image,
		alt: pen.imageAlt,
		desc: pen.desc
	}));

	return {
		works: {
			sites: sortedSites,
			pens: sortedPens
		}
	}
}

export default fetchWorks