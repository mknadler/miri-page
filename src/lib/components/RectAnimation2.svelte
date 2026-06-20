<script>
	import { onMount } from 'svelte';
	import { createTimeline, animate, utils, svg } from 'animejs';
	import Hexagon from './Hexagon.svg.svelte';
	import Pentagon from './Pentagon.svg.svelte';

	let hexPoints = "M72.8826859,36.7886752 L72.8826859,63.2113248 L50,76.4226497 L27.1173141,63.2113248 L27.1173141,36.7886752 L50,23.5773503 Z";
	let pentPoints = "M75.0907407,41.8475242 L65.5069305,71.3434588 L34.4930695,71.3434588 L24.9092593,41.8475242 L50,23.618034 Z";

	let animationContainer;

	let refHex, refPent, animationTarget;

	let testTarget;

	let bpent, bhex, tri;

	onMount(() => {
		const pent = document.querySelector('#apent');
		const hex = document.querySelector('#ahex');
		/*
		animate(pent, {
			points: "100,20 180,65 180,155 100,200 20,155 20,65",
			duration: 500,
			ease: 'inOutCirc',
			alternate: true,
			autoplay: false,
			loop: 'infinite'
		})*/

		//const animtest = animate(testTarget, { background: '#FFFFFF', duration: 1000, loop: true});
		
		/*
		const animtest = animate(bpent, {
			points: svg.morphTo(bhex),
		})

		const animtest2 = animate(bpent, {
			points: svg.morphTo(tri),
		})
		*/

		const morphing = createTimeline({
			playbackEase: "linear",
			loop: true,
			autoplay: false,
		});
		morphing.set(pent, {
			points: svg.morphTo(bpent),
			opacity: 1
		}, 0)
		morphing.add(pent, {
			opacity: 1,
			points: svg.morphTo(bhex),
			duration: 500
		})
		morphing.add(pent, {
			opacity: 1,
			points: svg.morphTo(tri),
			duration: 500
		})
		morphing.add(pent, {
			opacity: 1,
			points: svg.morphTo(bhex),
			duration: 500
		})
		morphing.add(pent, {
			opacity: 1,
			points: svg.morphTo(bpent),
			stroke: "#FF0033",
			duration: 500
		})
		morphing.play()
		//morphing.add(animtest2, {duration: 1000}, 3000);
		//morphing.play()
	})

</script>

test
<!--
<Hexagon bind:this={refHex}></Hexagon>
<Pentagon bind:this={refPent}></Pentagon>

<svg bind:this={animationTarget} width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>Frame</title>
  <g id="Frame" stroke="none" fill="none" stroke-width="1">
      <path id="polypath" d="M72.8826859,36.7886752 L72.8826859,63.2113248 L50,76.4226497 L27.1173141,63.2113248 L27.1173141,36.7886752 L50,23.5773503 Z"  stroke="#979797"></path>
  </g>
</svg>

<svg id="square" width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Frame 3</title>
    <g id="Frame" stroke="none" fill="none" stroke-width="1">
        <path d="M76.2928932,50 L50,76.2928932 L23.7071068,50 L50,23.7071068 Z" id="squaree" stroke="#979797"></path>
    </g>
</svg>
-->

<div class="test" bind:this={testTarget}></div>

<svg height="200" width="200">
  <polygon bind:this={bpent} id="apent" style="opacity: 0" points="100,20 180,80 150,180 50,180 50,180 20,80" fill="#434C6D" stroke="#000" stroke-width="2" />
  <polygon bind:this={bhex} id="ahex" style="opacity: 0" points="100,20 180,65 180,155 100,200 20,155 20,65"
           fill="#4CAF50" stroke="#388E3C" stroke-width="4" />
   <polygon bind:this={tri} style="opacity: 0" points="100,13.3974 200,186.6026 0,186.6026" fill="#e74c3c" />
</svg>

<div bind:this={animationContainer}>
</div>

<style>
	.test {
		background: '#000000';
	}

	div {
		width: 400px !important;
		height: 28px;
		border: 1px solid black;
		z-index: 2;
		position: absolute;
		top: 3rem;
		right: 3rem;
		overflow: hidden;
	}
</style>