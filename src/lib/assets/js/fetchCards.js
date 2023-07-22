import { cardsPerPage } from '$lib/config'

const fetchCards = async ({ offset = 0, limit = cardsPerPage, category = '' } = {}) => {

	const cards = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/criticalhit/cards/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path.split('/').pop().slice(0, -3)
			return { ...metadata, slug }
		})
	)

	let sortedCards = cards.sort((a, b) => {
		return a.num - b.num }
	);
	
	if (category) {
    	sortedCards = sortedCards.filter(card => card.categories.includes(category))
	}
  
	if (offset) {
		sortedCards = sortedCards.slice(offset)
	}
	
	if (limit && limit < sortedCards.length && limit != -1) {
		sortedCards = sortedCards.slice(0, limit)
	}
 
	//console.log("cards", cards)

	sortedCards = sortedCards.map(card => ({
		name: card.name,
		num: card.num,
		image: card.image,
		rule: card.rule,
		castTime: card.castTime
	}))

	return {
		cards: sortedCards
	}
}

export default fetchCards