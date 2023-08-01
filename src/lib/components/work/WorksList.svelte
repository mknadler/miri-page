<script>
	export let works = []
	export let displayType = 'river';
</script>

<!-- name, url, num, image -->

{#if displayType === 'river'}
<ul class="works-list">
	{#each works as work}
		<li class="works-list__work">
			<div class="works-list__image">
				<a href="{work.url}" target="_blank"><img alt="{work.alt}" src="{work.image}"/></a>
			</div>
			<div class="works-list__info">
				<h4><a href="{work.url}">{work.name}</a></h4>
				<span>{work.desc}</span>
			</div>
		</li>
	{/each}
</ul>
{:else if displayType === 'grid'}
	<div class="works-grid">
		{#each works as work}
			<div class="works-grid__item">
				<a href="{work.url}" target="_blank">
					<h4>{work.name}</h4>
					<img alt="{work.alt}" src="{work.image}">
				</a>
			</div>
		{/each}
	</div>
{/if}

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