import { workPerPage } from '$lib/config'
import fetchWorks from '$lib/assets/js/fetchWorks'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async () => {
  const options = {
    limit: workPerPage
  }

  const { works } = await fetchWorks(options)
  console.log("+server cards.json works", works )
  return json(works)
}