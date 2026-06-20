<script>
	let { cardData, comingSoonData = null, orientation, size, cardType, imgSize = "", hasBorder = false } = $props();


</script>

	<div class={`card ${size} ${cardType} ${imgSize == 'large' ? 'large-image' : ''} ${hasBorder === true ? 'has-border' : ''}`}>
		{#if cardData}
			<div class="card-image" style={`background-image: url("/${cardData.img_url}")`}><a href={cardData.url}></a></div>
			<div class="card-content">
 				<div class="card-title-lockup">
 					<h3>
 						<a href="{cardData.url}">{cardData.title}</a>
					</h3>
 				</div>

	 			{#if cardData.role}
	 				<span class="card-role">{cardData.role}</span>
	 			{/if}
	 			{#if cardData.blurb}
	 				<p>{@html cardData.blurb}</p>
	 			{/if}
	 		</div>
	 	{:else if cardType === 'art'}
	 		<div class="art-actual"></div>
	 	{:else if comingSoonData}
	 		<div class="coming-soon-content">
	 			<div class="coming-soon-art">
	 				<div class="coming-soon-art__inner">
	 					<h3>{comingSoonData.title}</h3>
	 					<span>Coming soon</span>
	 				</div>
	 			</div>
	 			<p>{comingSoonData.blurb}
	 		</div>

	 	{/if}
	 </div>

<style>
.card {
		/*width: 30rem;*/
		width: auto;

		
		&:before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, .5);
			z-index: -1;
		}
		h3 {
			top: 0;
			color: #eee;
			text-shadow: 1px 1px 4px #444;
			font-size: 16px;
			text-transform: uppercase;
		}
		h3, p, span {
			display: block;
			margin-top: 12px;
			font-size: 16px;
		}
		p {
			font-style: italic;
			color: #ccc;
			padding-right: .25rem;
		}
		h3 a {
			color: #eee;
			text-decoration-style: dotted;
			text-decoration-color: #555;
			line-height: 1.5;
		}
	}

	.card.link {
		display: grid;
		align-content: start;
		grid-template-rows: 8rem 1fr;
	}

	.card.large {
		/*width: 480px;*/
		/*height: 280px;*/
	}

	.card.large-image {
		@media (min-width: 30rem) {
			display: grid;
			grid-template-rows: 3fr 1fr;
			.card-image {
				height: auto;
			}
		}
	}

	.card-role {
		font-style: italic;
	}

	.card.has-border .card-image {
		border: 1px dashed #aaa;
	}

	.card-image {
		background-size: cover;
		background-position: center center;
		width: 100%;
		height: 8rem;
		position: relative;
		a {
			display: block;
			width: 100%;
			height: 100%;
		}
	}

	.card-contsent {
		border-right: 1px dashed #222;
		border-left: 1px dashed #222;
		border-bottom: 1px dashed #222;
	}

	.art {
		width: 100%;
		height: 100%;
	}

	.art-actual {
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, #222, #333);
		animation: artcard 2s ease-in-out infinite alternate;
		animation-play-state: paused;
		&:hover {
			animation-play-state: running;
		}
	}

	.coming-soon-content {
		display: grid;
		height: 100%;
		grid-template-rows: 1fr 4rem;
		h3 {
			text-transform: initial;
		}
		span {
			font-style: italic;
		}
	}
	.coming-soon-art {
		border: 1px solid #444;
		display: grid;
		place-content: center;
	}
	.coming-soon-art__inner {
		border: 1px solid #777;
		width: min-content;
		height: min-content;
		padding: .5rem;
				text-align: center;
	}

	@keyframes artcard {
		from {
			background: black;
		}
		to {
			background: #ccc;
		}
	}

	.card h3 a {
		color: currentColor;
		position: relative;
		display: inline-block;
		text-shadow: 1px 1px 1px black, -1px 0px 1px black, 0px 1px 1px black;
		position: relative;
		z-index: 1;
		text-decoration-style: wavy;
		text-decoration-color: #ccc;
		text-decoration-thickness: 1px;
		&:hover {
			color: #ccc;
			text-decoration-line: line-through;
			text-decoration-color: white;
		}
		&:after {
			display: block;
			background-image: linear-gradient(to right, transparent, transparent 75%, white 75%, white 100%);
			position: absolute;
			bottom: 0rem;
			left: 0;
			width: 100%;
			height: 1px;
			background-size: 1px 16px;
			background-repeat: repeat;
		}
		&:hover:after {
			background-size: 1px 2px;
		}
	}
</style>