<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/style.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap" rel="stylesheet">
</svelte:head>

<main>
	{@render children()}
</main>

<style>
	main {
		padding: 1rem;
		height: 100%;
		position: relative;
		background: black;
		outline: 5px solid transparent;
		color: white;
	}
</style>