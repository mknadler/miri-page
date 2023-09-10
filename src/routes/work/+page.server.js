export const load = async ({ url, fetch }) => {
	const worksRes = await fetch(`${url.origin}/api/work/cards.json`)
	let works = await worksRes.json();

	let sites = works.sites;
	let pens = works.pens;

	//console.log("Loaded cards", cards);

	return { sites, pens }
}
