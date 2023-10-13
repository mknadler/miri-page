export const load = async ({ url, fetch }) => {
	const pinRes = await fetch(`${url.origin}/api/pins/pins.json`)
	const pins = await pinRes.json()

	return { pins }
}
