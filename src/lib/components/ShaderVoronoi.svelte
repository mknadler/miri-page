<script>
	import { onMount } from 'svelte';
	import { ShaderMount, getShaderNoiseTexture, paperTextureFragmentShader, voronoiFragmentShader } from '@paper-design/shaders';

	let gradient;

	const noiseTexture = getShaderNoiseTexture();

	onMount(() => {
		noiseTexture.onload = () => {
				new ShaderMount(
					gradient,
					voronoiFragmentShader,
  				{
            u_fit: 2,
            u_scale: 1,
            u_rotation: 0,
            u_originX: 0.5,
            u_originY: 0.5,
            u_offsetX: 0,
            u_offsetY: 0,
            u_worldWidth: 0,
            u_worldHeight: 0,
            u_speed: 1,
            u_colors: [
                [0.05, 0.20, 0.35, 1],  // deep blue
                [0.10, 0.45, 0.55, 1],  // teal
                [0.20, 0.70, 0.65, 1],  // seafoam
                [0.40, 0.85, 0.80, 1],  // aqua
                [0.70, 0.95, 0.90, 1],  // mint
            ],
            u_colorsCount: 5,
            u_stepsPerColor: 1,
            u_colorGap: [0, 0, 0, 1],
            u_colorGlow: [0, 0, 0, 0.3],

            u_distortion: 0.5,
            u_gap: 0.02,
            u_glow: 0.3,

            u_noiseTexture: noiseTexture,
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

<h1>miri.page</h1>

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