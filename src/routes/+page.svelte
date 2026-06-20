<script>
	import { onMount } from 'svelte';
	import { PaperTexture } from '@devmischief/shaders-svelte';
  import RectAnimation from '$lib/components/RectAnimation.svelte';
  import Work from '$lib/components/work/Work.svelte';
  import Header from '$lib/components/header/Header.svelte';
  import Intro from '$lib/components/intro/Intro.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';

	
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

<Header />

<Intro />

<RectAnimation/>

<Work />

<Footer />

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
	.shader-container {
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		min-height: 500px;
		opacity: .15;
		transition: opacity 1000ms;
		pointer-events: none;
		&:before {
			content: '';
			display: block;
			width: 100%;
			height: 100%;

			background: linear-gradient(to bottom, transparent,  rgba(0,0,0,.6) 20rem, rgba(0,0,0,.6));
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
		}
	}

	.shader-container--hidden {
		opacity: 0;
	}
</style>