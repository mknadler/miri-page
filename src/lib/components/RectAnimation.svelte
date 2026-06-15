<script>
	import { animate } from '$lib/scripts/animate.ts';
	import gsap from 'gsap';
	import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { onMount } from 'svelte';
	import { throttle } from '$lib/scripts/utils';

	let containerEl, morphtarget, pent, hex, tri, tri2, square, square2, square3;

	let tris;

	let x = $state();
	let y = $state();

	const handlePointer = throttle((event) => {
		//console.log("Event is", event);
		x = event.x;
		y = event.y;
	}, 100);

	onMount(() => {
		gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger, ScrollSmoother);
		//MorphSVGPlugin.defaultType = "rotational";

		let tl = gsap.timeline({
			defaults: { duration: 1, ease: "power1.inOut" },
			scrollTrigger: {
				trigger: containerEl,
				start: 'top top+=48',
				pin: true,
				end: 'bottom+=150',
				scrub: 1,
				toggleActions: 'play none none reverse'
			}
		})
		.to(document.querySelectorAll('.morphtarg'), { morphSVG: square }, 0)
		.to(document.querySelectorAll('.morphtarg2'), { morphSVG: square2 }, 0)
		.to(document.querySelectorAll('.morphtarg3'), { morphSVG: square3 }, 0)

		let tl2 = gsap.timeline({
			defaults: {duration: 2, ease: "linear" },
			scrollTrigger: {
				trigger: containerEl,
				start: 'top top',
				pin: false,
				end: 'bottom-=48',
				scrub: 1,
				toggleActions: 'play none none reverse',
			}
		})
		.to(document.querySelectorAll('.morphtarg'), { stroke: "transparent" }, 0)
		.to(document.querySelectorAll('.morphtarg2'), { stroke: "transparent" }, 0)
		.to(document.querySelectorAll('.morphtarg3'), { stroke: "transparent" }, 0)

		tris = document.querySelectorAll('.triangle');
	});

$effect(() => {
	if (x && y && tris?.length > 0) {
		tris.forEach((triangle, index) => {
			let triangleBounds = triangle.parentElement.getBoundingClientRect();
			let deltaX = x - (triangleBounds.x + 12);
			let deltaY = y - (triangleBounds.y + 12);
			let rads = Math.atan2(deltaY, deltaX) - Math.PI/2;
			let degrees = rads * (180 / Math.PI);
			let rotation = degrees;
			if (rotation < -90) {
				rotation += 360
			}
			let scaleAmount = 1;
			if (Math.abs(deltaX) <= 24 && Math.abs(deltaY) <= 24) {
				scaleAmount = 1.5;
			}
			let lastRotation = triangle.parentElement.dataset.lastRotation;
			let delay;
			if (lastRotation && (Math.abs(rotation - lastRotation) > 160)) {
				triangle.parentElement.classList.add('no-delay')
			} else {
				triangle.parentElement.classList.remove('no-delay');
			}

			triangle.parentElement.style = `transform: rotate(${rotation}deg) scaleY(${scaleAmount});  transform-origin: center center;`
			triangle.parentElement.dataset.lastRotation = rotation;
			if (index === 0) {
				//console.log("rotation",  rotation, triangle.parentElement.dataset.lastRotation)
			}
		});
	}

})


</script>

<svelte:window onpointermove={handlePointer} />


<div class="container" bind:this={containerEl}>
	<svg viewbox="0 0 200 200" class="no-delay">
	  <polygon bind:this={pent} id="apent" style="opacity: 0" points="100,20 180,80 150,180 50,180 50,180 20,80" fill="#434C6D" stroke="#000" stroke-width="2" />
	  <polygon bind:this={hex} id="ahex" style="opacity: 0" points="100,20 180,65 180,155 100,200 20,155 20,65"
	           fill="#4CAF50" stroke="#388E3C" stroke-width="4" />
	  <polygon bind:this={square} id="ahex" style="opacity: 0" points="20,20 180,20 180,180 20,180"/>
	  <polygon bind:this={square2} style="opacity: 0;" points="180,180 20,180 20,20 180,20" />
	  <polygon bind:this={square3} style="opacity: 0;" points="180,20 180,180 20,180 20,20" />

	   <polygon bind:this={tri} style="opacity: 0" points="100,186.6026 0,13.3974 200,13.3974" fill="#e74c3c" />
	   <polygon bind:this={tri2} style="opacity: 0" points="100,13.3974 200,186.6026 0,186.6026" fill="#e74c3c" />
	  <polygon class="morphtarg3 triangle" style="opacity: .5" points="100,186.6026 0,13.3974 200,13.3974" stroke="#ffffff"  stroke-width="10" fill="transparent" />
	</svg>
	{#each { length: 8 }}
		<svg viewbox="0 0 200 200">
		   <polygon class="morphtarg triangle" style="opacity: .5;" points="100,186.6026 0,13.3974 200,13.3974" stroke="#ffffff"  stroke-width="10" fill="transparent" />
		</svg>
		<svg viewbox="0 0 200 200">
		   <polygon class="morphtarg2 triangle" style="opacity: .5;" points="100,186.6026 0,13.3974 200,13.3974" stroke="#ffffff" stroke-width="10"  fill="transparent" />
		</svg>
		<svg viewbox="0 0 200 200">
		   <polygon class="morphtarg3 triangle" style="opacity: .5;" points="100,186.6026 0,13.3974 200,13.3974" stroke="#ffffff" stroke-width="10"  fill="transparent" />
		</svg>
	{/each}
</div>

<!--
<div use:animate={{
	type: 'to',
	duration: 0,
	y: 0,
	ease: 'power4.out',
	scrollTrigger: {
		start: 'top top',
		pin: true,
		end: 'bottom+=500',
		toggleActions: 'play none none reverse',
	}
}}>
</div>
-->

<style>
	section {
		position: sticky;
		top: 0;
	}
	.container {
		width: calc(24px * 5 + 16px);
		/*overflow: hidden;*/
		height: calc(24px * 5 + 16px);
		border: 0px solid black;
		z-index: 2;
		position: absolute;
		top: 3.5rem;
		right: 5rem;
		display: grid;
		justify-content: space-around;
		border: 1px dashed #ccc;
		corner-shape: bevel;
		border-radius: 8px;
		padding: 8px;
		grid-template-columns: repeat(5, 24px);
		grid-template-rows: repeat(5, 24px);
		svg {
			width: 24px;
			height: 24px;
			display: inline-block;
			stroke: 3px black;
		}
		&:after {
			content: 'Spectators';
			font-family: "Iosevka Charon Mono";
			color: #aaa;
			font-style: italic;
			position: absolute;
			bottom: -20px;
			right: 8px;
			font-size: 12px;
		}
	}

	.triangle {
		transform-origin: center center;
	}

	svg {
		transition: transform 100ms ease;
		&.no-delay {
			transition: transform 0ms ease;
		}
	}
</style>