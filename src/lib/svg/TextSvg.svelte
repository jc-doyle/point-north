<script>
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';
	import { page } from '$app/stores';
	import { spring, tweened } from 'svelte/motion';
	import { expoOut } from 'svelte/easing';

	export let id;
	export let text;
	export let color;

	let elem;
	let widthSpring = tweened(0, { delay: 300, duration: 1200, easing: expoOut });
	let height = 0;
	let width = 0;
	let y = 0;
	let x = 0;

	page.subscribe(() => {
		widthSpring.set(0);

		setTimeout(async () => {
			widthSpring.set(width), 200;
		});
	});
	afterUpdate(() => {
		elem = document.getElementById(`${id}`);
		height = elem.getBBox().height;
		width = elem.getBBox().width + 20;
		x = elem.getBBox().x;
		y = elem.getBBox().y;
	});
</script>

<g>
	<rect x={x - 5} {y} {height} width="{$widthSpring}px" fill={color} />
	<text {id} x="2%" y="60%" fill="var(--white)">{text}</text>
</g>

<style>
</style>
