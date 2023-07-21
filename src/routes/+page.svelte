<script>
	import { siteTitle } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<p>my name is <strong>miri</strong>am nadler<strong>.</strong> welcome to my web<strong>page</strong>.</p>

<p>i make things with my hands, like books and boxes. i make things with code, like websites and animations and other tchotchkes.
the things i make are usually mostly visual in nature because my brain is happiest when it's looking at something complicated.</p>

<p>this site is under <strong>active development</strong>. come back later :)</p>

<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<!-- <svelte:component this={data.ReadMe} /> -->