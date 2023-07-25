<script>
	import WorksList from '$lib/components/work/WorksList.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>


<svelte:head>
	<title>Things</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<h2>Things</h2>
<p>Here are some of the things that I have made, whether solo or in collaboration. Right now it's just websites and other code-related things, but I'll be adding some of the books and boxes I've made in the future.</p>
<p>You can also check out my <a  href="https://codepen.io/mknadler">CodePen</a> for some neat animations, "you shouldn't be able to do this with just CSS / Sass" shenanigans, cellular automata, and other experimental work.</p>

<WorksList works={data.works} />