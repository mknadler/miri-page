<script>
	import { siteTitle } from '$lib/config';
	import Nervous from '$lib/components/Nervous.svelte'

	export let data;


</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<Nervous />

<p>My name is <strong>miri</strong>am nadler<strong>.</strong> Welcome to my web<strong>page</strong>.</p>

<p>I make things with my hands, like books and boxes. I make things with code, like websites and animations and other tchotchkes. The things i make are usually mostly visual in nature because my brain is happiest when it's looking at something complicated.</p>



<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<!-- <svelte:component this={data.ReadMe} /> -->