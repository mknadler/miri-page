<script>
	export let works = []
</script>


<ul class="cards-list">
	{#each works as work}
		<li>
			<div class="cards-list__card">
				<img src="{work.image}"/>
			</div>
			<div class="cards-list__info">
				<h2 class="cards-list__name">{work.name}</h2>
				<p class="cards-list__rule">{work.rule}</p>
				<p class="cards-list__time">
					<strong>Cast:</strong>
					{#if work.castTime == 'before-round'}
						Before round begins
					{:else if work.castTime == 'before-selection'}
						Before group selection
					{:else if work.castTime == 'end-of-game'}
						At end of game
					{:else if work.castTime == 'during-round'}
						During round
					{:else}
						ewwor
					{/if}
			</div>
		</li>
	{/each}
</ul>