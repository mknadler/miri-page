<script>
	import WorksList from '$lib/components/work/WorksList.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>


<svelte:head>
	<title>Things</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<h1>Things</h1>
<p>Here are some of the things that I have made.</p>

<WorksList works={data.works} />