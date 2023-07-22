import { cardsPerPage } from '$lib/config'
import fetchCards from '$lib/assets/js/fetchCards'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async () => {
  const options = {
    limit: cardsPerPage
  }

  const { cards } = await fetchCards(options)
  return json(cards)
}