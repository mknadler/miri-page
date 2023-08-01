export const load = async ({ url, fetch }) => {
	const worksRes = await fetch(`${url.origin}/api/work/cards.json`)
	let works = await worksRes.json();
	console.log("Works is", works)

	let sites = works.sites;
	let pens = works.pens;

	//console.log("Loaded cards", cards);

	return { sites, pens }
}
