<script>
	import { onMount } from 'svelte';
	import { PaperTexture } from '@devmischief/shaders-svelte';
  import ShaderPaper from '$lib/components/ShaderPaper.svelte';
  import ShaderVoronoi from '$lib/components/ShaderVoronoi.svelte';
  import RectAnimation2 from '$lib/components/RectAnimation2.svelte';
  import RectAnimation from '$lib/components/RectAnimation.svelte';

	
  let shaderContainer, shaderEl;
  $inspect(shaderContainer);

  let shaderLoaded = $state(false);

	onMount(() => {
		console.log("Shader container", shaderContainer);
		let shaderComponent = shaderContainer.firstChild;
		const mutationCallback = (mutationList, observer) => {
	  	for (const mutation of mutationList) {
	  		if (mutation.type === 'attributes') {
	  			console.log("Added attr", mutation.attributeName)
	  			if (mutation.attributeName == 'data-paper-shader') {
	  				shaderLoaded = true;
	  			}
	  		}
	  	}
	  }
	  const observer = new MutationObserver(mutationCallback);
	  observer.observe(shaderComponent, { attributes: true })
	})
 
</script>

<header>
	<h1>miriam nadler</h1>
	<p>web developer<sup>1</sup></p>
</header>

<RectAnimation/>

<section class="cards">
 <h2>My work</h2>
 <div class="card-container">
	 <div class="card">
	 </div>
	 <div class="card">
	 </div>
	 	 <div class="card">
	 </div>
	 	 <div class="card">
	 </div>
	</div>
</section>

	<div bind:this={shaderContainer} class={shaderLoaded ? 'shader-container' : 'shader-container shader-container--hidden'}>
		<PaperTexture
			image=""
			width={"100vw"}
		  height={"100%"}
		  colorBack="#ffffff"
		  colorFront="#696969"
		  contrast={0.3}
		  roughness={0.4}
		  fiber={0.3}
		  fiberSize={0.2}
		  crumples={0.3}
		  crumpleSize={0.35}
		  folds={0.65}
		  foldCount={5}
		  drops={0.2}
		  fade={1}
		  seed={9}
		  scale={.3}
		  fit="cover"
		/>
	</div>
<style>
	header {
		position: relative;
		padding: 2rem;
		opacity: 1;
		transition: opacity 50ms;
		font-family: "Iosevka Charon Mono";
		z-index: 1;
	}
	h1 {
		font-size: 60px;
		font-family: "Iosevka Charon Mono";
		width: fit-content;
		font-family: "Texturina";
		margin-bottom: 0;
	}
	p {
		font-size: 40px;
		margin-top: 8px;
		font-family: "Texturina";
		font-style: italic;
	}

	header:has(~ .shader-container--hidden) {
		opacity: 1;
	}
	.shader-container {
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		opacity: .9;
		min-height: 500px;
	}
	.shader-container {
		opacity: .0;
		transition: opacity 500ms;
		pointer-events: none;
	}
	.shader-container--hidden {
		opacity: 0;
	}

	.cards {
		height: 3000px;
		margin-top: 13rem;
		padding-left: 2rem;
		background: black;
	}

	.card {
		width: 250px;
		height: 250px;
		border: 1px solid #ddd;
	}

	.card-container {
		margin-top: 6rem;
		display: grid;
		grid-template-rows: repeat(auto-fill, 250px);
		grid-template-columns: repeat(auto-fill, 250px);
		gap: 24px;
	}

	sup {
		color: #ff0033;
		font-style: normal;
		font-family: "Iosekva Charon Mono";
	}
</style>