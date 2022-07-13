<script>
	import { onMount } from 'svelte';
	import { pSBC } from '$lib/tools/pSBC.js';
	import { tweened } from 'svelte/motion';
	import { expoOut } from 'svelte/easing';
	import { writable } from 'svelte/store';
	export let data;
	export let color;
	let length, innerWidth;
	let tween;

	onMount(() => {
		var path = document.querySelector('.path');
		length = path.getTotalLength();
		if (innerWidth > 600) {
			tween = tweened(0, { duration: 40000, easing: expoOut });
			tween.set(1);
		} else {
			tween = writable(2);
		}
	});
</script>

<svelte:window bind:innerWidth />
<div class="path-svg">
	<svg viewBox="0 0 1060 680">
		<path
			class="path"
			style:stroke={pSBC(-0.8, color)}
			style:stroke-dasharray={length}
			style:stroke-dashoffset={length - 1000 * $tween}
			d={data}
		/>
	</svg>
</div>

<style>
	.path-svg {
		fill: none;
		stroke-dashoffset: 27000;
		position: absolute;
		top: 10vh;
		left: 10vw;
		height: 30vh;
		width: 90vw;
		opacity: 30%;
		z-index: -5;
	}

	@media (min-width: 920px) {
		.path-svg {
			left: 36vw;
			top: 8vh;
			opacity: 60%;
			width: 50vw;
		}
	}
</style>
