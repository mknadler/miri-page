import { cardsPerPage } from '$lib/config'
import fetchCards from '$lib/assets/js/fetchCards'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async ({ params }) => {
  const { page } = params || 1

  const options = {
    offset: (page - 1) * cardsPerPage,
    limit: cardsPerPage
  }

  const { cards } = await fetchCards(options)
  
  return json(cards)
}