import { workPerPage } from '$lib/config'
import fetchPins from '$lib/assets/js/fetchPins'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async () => {
  const options = {
    limit: workPerPage
  }

  const { pins } = await fetchPins(options)
  return json(pins)
}