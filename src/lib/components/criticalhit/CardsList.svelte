<script>
	export let cards = []
	//console.log("Cards is", cards)
</script>


<ul class="cards-list">
	{#each cards as card}
		<li>
			<div class="cards-list__card">
				<img src="{card.image}"/>
			</div>
			<div class="cards-list__info">
				<h2 class="cards-list__name">{card.name}</h2>
				<p class="cards-list__rule">{card.rule}</p>
				<p class="cards-list__time">
					<strong>Cast:</strong>
					{#if card.castTime == 'before-round'}
						Before round begins
					{:else if card.castTime == 'before-selection'}
						Before group selection
					{:else if card.castTime == 'end-of-game'}
						At end of game
					{:else if card.castTime == 'during-round'}
						During round
					{:else}
						ewwor
					{/if}
			</div>
		</li>
	{/each}
</ul>