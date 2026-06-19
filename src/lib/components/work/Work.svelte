<script>
	import Card from '$lib/components/work/Card.svelte';
const works = [
{
	title: "The Haunting of Girlstown",
	role: "Developed",
	blurb: "Custom code for a longform article for Vox's \"The&nbsp;Highlight\". Illustrations are by Will Staehle (not me). Article optioned for film by Blumhouse.",
	url: "https://www.vox.com/c/the-highlight/21242299/outbreak-girlstown-chalco-world-villages-villa-de-las-ninas",
	img_url: "girlstown.png"
},
{
	title: "Thunderheads",
	role: "Developed",
	blurb: "Custom code for a longform article for The Verge about clouds, climate change, and stormchasers.",
	url: "https://www.theverge.com/c/2019/9/5/20699849/climate-change-cloud-storm-chasers-argentina-floods-heat-planet",
	img_url: "thunderheads2.png"
},
{
	title: "Vetch",
	role: "Developed, Designed",
	blurb: "Website for a poetry publication. Now offline, link goes to archive.org's Wayback Machine snapshot.",
	url: "https://web.archive.org/web/20240708112832/http://www.vetchpoetry.org/",
	archived: true,
	img_url: "vetch.png"
},
{
	title: "The Peace Reporters",
	role: "Developed",
	blurb: "Custom code for a longform article for The Verge about the general public capturing video of police brutality.",
	url: "https://www.theverge.com/c/21355122/police-brutality-violence-video-effects-trauma-civil-rights-black-lives-matter",
	archived: true,
	img_url: "peace-reporters.png"
},
{
	title: "Dead Friend: A Game of Necromancy",
	role: "Illustration, Graphic Design",
	blurb: "All graphic design (interior illustrations, typography, layout) for an indie storytelling game. I handled all of the visual work besides the cover illustration. Game nominated for the 2019 Indie Game Developer Network's \"Most Innovative\" award.",
	url: "https://en.wikipedia.org/wiki/Dead_Friend:_A_Game_of_Necromancy",
	img_url: "deadfriend2.png"
}
]

const pens = [
	{
		title: '"Virtual Ant Farm"',
		blurb: "",
		url: "https://codepen.io/mknadler/full/gwdYEg",
		img_url: "pens/virtual-ant-farm.png"
	},
	{
		title: '"Particle Ring"',
		url: "https://codepen.io/mknadler/full/evLGvj",
		img_url: "pens/particle-ring.png"
	},
	{
		title: '"Hodge / Plague"',
		url: "https://codepen.io/mknadler/full/zNPMmW",
		img_url: "pens/hodge-plague.png"
	},
	{
		title: '"Anamnesis"',
		url: "https://codepen.io/mknadler/full/oWRGKQ",
		img_url: "pens/anamnesis.png"
	},
	{
		title: '"Orbits / Fog"',
		url: "https://codepen.io/mknadler/full/yJEjOW",
		img_url: "pens/fog.png"
	}
]

const comingSoon = [
	{
		title: "pinball.tools",
		blurb: "A suite of tools for competitive pinball players"
	}
]

// 480, 240, 164, 96
// 480, 320, 214, 142
// for 16 gcf: 480, 320, 208, 144
</script>

<section class="cards">
	<h2>Some of my past work</h2>
	<p class="cards-blurb">
		Most of my career's output thus far has been behind closed doors at companies like Vox Media (I worked on the <a href="https://www.youtube.com/watch?v=fV3PyCmXKyk">content management system</a> there that powered 350+ sites) or <a href="https://sequence.film">Sequence</a> (I worked on the multiplayer video editor) and thus is not publicly accessible.

		Below is a sampling of some of the things I have worked on over the last 10+ years which <em>are</em> publicly accessible.
	</p>

	<section class="cards-grid">
		<Card cardType="coming-soon" comingSoonData={comingSoon[0]} size="large" />
		<Card cardType="link" cardData={works[0]} size="large" />
		<Card cardType="link" imgSize="large" cardData={pens[1]} size="large" />
		<Card cardType="link" cardData={works[1]} size="large" />
		<Card cardType="link" imgSize="large" cardData={pens[0]} size="large" />
		<Card cardType="link" cardData={works[2]} size="large" />
		<Card cardType="link" imgSize="large" cardData={pens[2]} size="large" hasBorder={true} />
		<Card cardType="link" cardData={works[4]} size="large" />
		<Card cardType="link" cardData={works[3]} size="large" />
		<Card cardType="link" imgSize="large" cardData={pens[4]} size="large" />
		<Card cardType="link" imgSize="large" cardData={pens[3]} size="large" hasBorder={true} />
	</section>
</section>



<style>


	.cards {
		margin-top: 4rem;
		padding-left: 5.5rem;
		padding-right: 4rem;
		background: black;
		width: 100%;
		padding-bottom: 4rem;
		@media (max-width: 30rem) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}

	.cards-blurb {
		font-size: 16px;
		color: #ccc;
		max-width: 40rem;
		a {
			color: #ddd;
		}
	}

	.cards-grid {
		width: 100%;
		display: grid;
		margin-top: 3rem;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		gap: 4rem;
	}

	.card {
		border: 1px solid white;
	}

	@media (min-width: 30rem) {
		.cards {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.cards-grid {
			grid-auto-columns: 1.25rem;
			grid-auto-rows: 1.25rem;
			grid-template-columns: unset;
			grid-template-rows: unset;
			gap: unset;
		}
		:global(.cards-grid .card:nth-child(1)) {
				grid-row: 2 / span 14;
				grid-column: 1 / span 8;
		}
		:global(.cards-grid .card:nth-child(2)) {
				grid-row: 1 / span 14;
				grid-column: 10 / span 12;
		}
		:global(.cards-grid .card:nth-child(3)) {
				grid-row: 19 / span 14;
				grid-column: 1 / span 5;
		}
		:global(.cards-grid .card:nth-child(4)) {
				grid-row: 21 / span 24;
				grid-column: 8 / span 14;
		}
		:global(.cards-grid .card:nth-child(5)) {
				grid-row: 35 / span 14;
				grid-column: 1 / span 5;
		}	
		:global(.cards-grid .card:nth-child(6)) {
				grid-row: 37 / span 24;
				grid-column: 8 / span 14;
		}
		:global(.cards-grid .card:nth-child(7)) {
				grid-row: 50 / span 24;
				grid-column: 1 / span 5;
		}
		:global(.cards-grid .card:nth-child(8)) {
				grid-row: 54 / span 14;
				grid-column: 8 / span 14;
		}
		:global(.cards-grid .card:nth-child(9)) {
				grid-row: 80 / span 24;
				grid-column: 1 / span 20;
		}
		:global(.cards-grid .card:nth-child(10)) {
				grid-row: 96 / span 8;
				grid-column: 1 / span 8;
		}
		:global(.cards-grid .card:nth-child(11)) {
				grid-row: 96 / span 8;
				grid-column: 12 / span 8;
		}
	}

	@media (min-width: 40rem) {
		.cards {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.cards-grid {
			grid-auto-columns: 1.25rem;
			grid-auto-rows: 1.25rem;
			grid-template-columns: unset;
			grid-template-rows: unset;
			gap: unset;
		}
		:global(.cards-grid .card:nth-child(1)) {
				grid-row: 2 / span 14;
				grid-column: 1 / span 8;
		}
		:global(.cards-grid .card:nth-child(2)) {
				grid-row: 1 / span 14;
				grid-column: 11 / span 12;
		}
		:global(.cards-grid .card:nth-child(3)) {
				grid-row: 3 / span 14;
				grid-column: 25 / span 5;
		}
		:global(.cards-grid .card:nth-child(4)) {
				grid-row: 21 / span 24;
				grid-column: 1 / span 14;
		}
		:global(.cards-grid .card:nth-child(5)) {
				grid-row: 20 / span 14;
				grid-column: 17 / span 10;
		}	
		:global(.cards-grid .card:nth-child(6)) {
				grid-row: 37 / span 24;
				grid-column: 1 / span 14;
		}
		:global(.cards-grid .card:nth-child(7)) {
				grid-row: 34 / span 20;
				grid-column: 17 / span 10;
		}
		:global(.cards-grid .card:nth-child(8)) {
				grid-row: 54 / span 14;
				grid-column: 1 / span 24;
		}
		:global(.cards-grid .card:nth-child(9)) {
				grid-row: 74 / span 24;
				grid-column: 1 / span 14;
		}
		:global(.cards-grid .card:nth-child(10)) {
				grid-row: 74 / span 8;
				grid-column: 17 / span 10;
		}
		:global(.cards-grid .card:nth-child(11)) {
				grid-row: 91 / span 8;
				grid-column: 1 / span 8;
		}
	}

	@media (min-width: 45rem) {
		.cards {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.cards-grid {
			grid-auto-columns: 1.25rem;
			grid-auto-rows: 1.25rem;
			grid-template-columns: unset;
			grid-template-rows: unset;
			gap: unset;
		}
		:global(.cards-grid .card:nth-child(1)) {
				grid-row: 2 / span 14;
				grid-column: 1 / span 8;
		}
		:global(.cards-grid .card:nth-child(2)) {
				grid-row: 1 / span 14;
				grid-column: 11 / span 22;
		}
		:global(.cards-grid .card:nth-child(3)) {
				grid-row: 19 / span 14;
				grid-column: 1 / span 8;
		}
		:global(.cards-grid .card:nth-child(4)) {
				grid-row: 17 / span 24;
				grid-column: 11 / span 12;
		}
		:global(.cards-grid .card:nth-child(5)) {
				grid-row: 18 / span 14;
				grid-column: 25 / span 8;
		}	
		:global(.cards-grid .card:nth-child(6)) {
				grid-row: 37 / span 24;
				grid-column: 1 / span 20;
		}
		:global(.cards-grid .card:nth-child(7)) {
				grid-row: 35 / span 14;
				grid-column: 23 / span 10;
		}
		:global(.cards-grid .card:nth-child(8)) {
				grid-row: 53 / span 14;
				grid-column: 1 / span 14;
		}
		:global(.cards-grid .card:nth-child(9)) {
				grid-row: 53 / span 24;
				grid-column: 17 / span 14;
		}
		:global(.cards-grid .card:nth-child(10)) {
				grid-row: 79 / span 8;
				grid-column: 3 / span 10;
		}
		:global(.cards-grid .card:nth-child(11)) {
				grid-row: 75 / span 8;
				grid-column: 16 / span 8;
		}
	}

	@media (min-width: 52rem) {
		.cards {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.cards-grid {
			grid-auto-columns: 1.25rem;
			grid-auto-rows: 1.25rem;
			grid-template-columns: unset;
			grid-template-rows: unset;
			gap: unset;
		}
		:global(.cards-grid .card:nth-child(1)) {
				grid-row: 2 / span 14;
				grid-column: 1 / span 12;
		}
		:global(.cards-grid .card:nth-child(2)) {
				grid-row: 1 / span 14;
				grid-column: 15 / span 24;
		}
		:global(.cards-grid .card:nth-child(3)) {
				grid-row: 19 / span 14;
				grid-column: 1 / span 8;
		}
		:global(.cards-grid .card:nth-child(4)) {
				grid-row: 17 / span 24;
				grid-column: 11 / span 14;
		}
		:global(.cards-grid .card:nth-child(5)) {
				grid-row: 18 / span 14;
				grid-column: 27 / span 10;
		}	
		:global(.cards-grid .card:nth-child(6)) {
				grid-row: 34 / span 24;
				grid-column: 1 / span 24;
		}
		:global(.cards-grid .card:nth-child(7)) {
				grid-row: 35 / span 14;
				grid-column: 27 / span 10;
		}
		:global(.cards-grid .card:nth-child(8)) {
				grid-row: 49 / span 14;
				grid-column: 1 / span 20;
		}
		:global(.cards-grid .card:nth-child(9)) {
				grid-row: 50 / span 24;
				grid-column: 23 / span 14;
		}
		:global(.cards-grid .card:nth-child(10)) {
				grid-row: 70 / span 8;
				grid-column: 3 / span 14;
		}
		:global(.cards-grid .card:nth-child(11)) {
				grid-row: 69 / span 8;
				grid-column: 20 / span 14;
		}
	}

	@media (min-width: 60rem) {
		.cards {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.cards-grid {
			grid-auto-columns: 1.25rem;
			grid-auto-rows: 1.25rem;
			grid-template-columns: unset;
			grid-template-rows: unset;
			gap: unset;
		}
		:global(.cards-grid .card:nth-child(1)) {
				grid-row: 2 / span 14;
				grid-column: 1 / span 10;
		}
		:global(.cards-grid .card:nth-child(2)) {
				grid-row: 1 / span 14;
				grid-column: 13 / span 24;
		}
		:global(.cards-grid .card:nth-child(3)) {
				grid-row: 2 / span 14;
				grid-column: 39 / span 6;
		}
		:global(.cards-grid .card:nth-child(4)) {
				grid-row: 19 / span 24;
				grid-column: 1 / span 24;
		}
		:global(.cards-grid .card:nth-child(5)) {
				grid-row: 18 / span 14;
				grid-column: 27 / span 14;
		}	
		:global(.cards-grid .card:nth-child(6)) {
				grid-row: 34 / span 24;
				grid-column: 1 / span 24;
		}
		:global(.cards-grid .card:nth-child(7)) {
				grid-row: 35 / span 14;
				grid-column: 27 / span 14;
		}
		:global(.cards-grid .card:nth-child(8)) {
				grid-row: 49 / span 14;
				grid-column: 1 / span 20;
		}
		:global(.cards-grid .card:nth-child(9)) {
				grid-row: 50 / span 24;
				grid-column: 23 / span 20;
		}
		:global(.cards-grid .card:nth-child(10)) {
				grid-row: 70 / span 8;
				grid-column: 3 / span 14;
		}
		:global(.cards-grid .card:nth-child(11)) {
				grid-row: 68 / span 8;
				grid-column: 23 / span 20;
		}
	}

	@media (min-width: 80rem) {
		.cards {
			padding-left: 5.5rem;
			padding-right: 4rem;
		}
		:global(.cards-grid .card:nth-child(1)) {
				grid-row: 2 / span 14;
				grid-column: 1 / span 14;
		}
		:global(.cards-grid .card:nth-child(2)) {
				grid-row: 1 / span 14;
				grid-column: 17 / span 24;
		}
		:global(.cards-grid .card:nth-child(3)) {
				grid-row: 1 / span 14;
				grid-column: 43 / span 8;
		}
		:global(.cards-grid .card:nth-child(4)) {
				grid-row: 17 / span 24;
				grid-column: 1 / span 24;
		}
		:global(.cards-grid .card:nth-child(5)) {
				grid-row: 17 / span 14;
				grid-column: 27 / span 14;
		}	
		:global(.cards-grid .card:nth-child(6)) {
				grid-row: 15 / span 24;
				grid-column: 43 / span 14;
		}
		:global(.cards-grid .card:nth-child(7)) {
				grid-row: 32 / span 14;
				grid-column: 1 / span 8;
		}
		:global(.cards-grid .card:nth-child(8)) {
				grid-row: 32 / span 14;
				grid-column: 11 / span 24;
		}
		:global(.cards-grid .card:nth-child(9)) {
				grid-row: 33 / span 24;
				grid-column: 37 / span 14;
		}
		:global(.cards-grid .card:nth-child(10)) {
				grid-row: 46 / span 8;
				grid-column: 1 / span 8;
		}
		:global(.cards-grid .card:nth-child(11)) {
				grid-row: 52 / span 8;
				grid-column: 11 / span 8;
		}
	}

	
</style>
