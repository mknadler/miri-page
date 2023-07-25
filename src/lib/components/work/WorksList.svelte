<script>
	export let works = []
	console.log("Works", works);
</script>

<!-- name, url, num, image -->

<ul class="works-list">
	{#each works as work}
		<li class="works-list__work">
			<div class="works-list__image">
				<a href="{work.url}" target="_blank"><img alt="{work.alt}" src="{work.image}"/></a>
			</div>
			<div class="works-list__info">
				<h3><a href="{work.url}">{work.name}</a></h3>
				<span>{work.desc}</span>
			</div>
		</li>
	{/each}
</ul>