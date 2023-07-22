export const load = async ({ url, fetch }) => {
	const cardRes = await fetch(`${url.origin}/api/criticalhit/cards.json`)
	const cards = await cardRes.json()

	//console.log("Loaded cards", cards);

	return { cards }
}
