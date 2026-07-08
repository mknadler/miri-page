<script>
	let { name, children } = $props();
</script>

<section>
	<h2>{name}</h2>
	{@render children?.()}
</section>

<style>
	h2 {
		font-size: 24px;
		font-weight: 600;
		position: sticky;
		top: 0;
		background: black;
		padding: 1rem 0;
		margin-bottom: 8px;
	}
	section {
		margin: 40px 0;
		background: black;
	}
</style>