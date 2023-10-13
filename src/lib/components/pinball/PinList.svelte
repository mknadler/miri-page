<script>
	export let pins = []
</script>

<!-- name, url, num, image -->


<ul class="works-list">
	{#each pins as pin}
		<li class="works-list__work">
			<div class="works-list__info">
				{pin.machine}: {pin.division}
			</div>
		</li>
	{/each}
</ul>

<style>
	.works-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		column-gap: .5rem;
		row-gap: 2rem;
	}

	.works-grid__item {
		width: 250px;
		height: 275px;
		display: grid-item;
	}

	.works-grid__item a {
		display: block;
		width: 100%;
		height: 100%;
		position: relative;
	}

	.works-grid__item img {
		width: 250px;
		height: 250px;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.works-grid h4 {
		font-size: 1.25rem;
		margin-top: 0;
		margin-bottom: 0;
	}
</style>