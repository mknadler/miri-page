<script>
	import PinList from '$lib/components/pinball/PinList.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>


<svelte:head>
	<title>Things</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<h2>NYCPC Pinball Strategies</h2>

<p>I whipped this together in a few hours for <a href="https://www.nycpinballchamps.com/">NYCPC 2023</a>.</p>

<PinList pins={data.pins} />