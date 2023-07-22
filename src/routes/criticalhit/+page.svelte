<script>
	import CardsList from '$lib/components/criticalhit/CardsList.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>


<svelte:head>
	<title>Critical Hit</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<h1>Critical Hit</h1>
<p>Slapped this together for <a href="https://www.facebook.com/events/733649338497048" target="_blank">Critical Hit: Help-Us-Figure-This-Out!!! Edition</a>.</p>

<CardsList cards={data.cards} />