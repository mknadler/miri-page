export const load = async ({ url, fetch }) => {
	const worksRes = await fetch(`${url.origin}/api/work/cards.json`)
	const works = await worksRes.json()

	//console.log("Loaded cards", cards);

	return { works }
}
