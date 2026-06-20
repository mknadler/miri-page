<script lang="ts">
	import { onMount } from 'svelte';
	import { ShaderMount, getShaderNoiseTexture, paperTextureFragmentShader, voronoiFragmentShader, ShaderFitOptions, defaultObjectSizing,
  getShaderColorFromString,
  type ImageShaderPreset,
  type PaperTextureParams,
  type PaperTextureUniforms } from '@paper-design/shaders';

	let gradient;

	const noiseTexture = getShaderNoiseTexture();

	onMount(() => {
		noiseTexture.onload = () => {
				new ShaderMount(
					gradient,
					paperTextureFragmentShader,
		  		{
 						u_fit: 2,
            u_scale: 1,
            u_rotation: 0,
            u_originX: 0.5,
            u_originY: 0.5,
            u_offsetX: 0,
            u_offsetY: 0,
            u_worldWidth: 400,
            u_worldHeight: 400,
				    u_colorFront: [0, 0, 0, 1],
				    u_colorBack: [250, 250, 250, 1],
				    u_contrast: 0.3,
				    u_roughness: 0.4,
				    u_fiber: 0.3,
				    u_fiberSize: 0.2,
				    u_crumples: 0.3,
				    u_crumpleSize: 0.35,
				    u_folds: 0.65,
				    u_foldCount: 5,
				    u_fade: .5,
				    u_drops: 0.2,
				    u_seed: 5.8,
				    u_noiseTexture: noiseTexture
			  },
		  	undefined,
		  	1
			);
		}

		if (noiseTexture.complete) {
			noiseTexture.onload();
		}
	});

	
</script>

<div id="grad" bind:this={gradient}></div>

<style>
	h1 {
		font-size: 48px;
		font-family: "Iosevka Charon Mono";
	}
	div {
		width: 100%;
		height: 100%;
		min-height: 500px;
		border: 1px solid black;
	}
</style>