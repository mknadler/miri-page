<script>
	export let pins = []
</script>

<!-- name, url, num, image -->


<ul class="pins-list">
	{#each pins as pin}
		<li class="pins-list__work">
			<div class="pins-list__info">
				{pin.machine}: {pin.division}
				{@html pin.body}
			</div>
		</li>
	{/each}
</ul>

<style>
	.pins-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		column-gap: .5rem;
		row-gap: 2rem;
	}

	.pins-grid__item {
		width: 250px;
		height: 275px;
		display: grid-item;
	}

	.pins-grid__item a {
		display: block;
		width: 100%;
		height: 100%;
		position: relative;
	}

	.pins-grid__item img {
		width: 250px;
		height: 250px;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.pins-grid h4 {
		font-size: 1.25rem;
		margin-top: 0;
		margin-bottom: 0;
	}
</style>