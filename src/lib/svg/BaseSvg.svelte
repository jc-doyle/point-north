<script>
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { isOpen } from '$lib/menu/store.js';
	let widthSpring = spring(100, { stiffness: 0.03, damping: 0.8, precision: 0.04 });
	let width = 38;
	let innerWidth, innerHeight;
	let y;

  onMount(() => {
    console.log(innerHeight)
    if (innerWidth < 600) {
			width = 36;
    }
  })
	isOpen.subscribe((o) => {
		if (innerWidth < 600) {
		}
		if (o) {
			setTimeout(async () => {
				widthSpring.set(100);
			}, 150);
		} else {
			setTimeout(async () => {
				widthSpring.set(width);
			}, 500);
		}
	});

	function handleScroll() {
		if (y > 300) {
			widthSpring.set(100);
		} else {
			widthSpring.set(width);
		}
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={y} on:scroll={handleScroll} />
<div class="bg-svg">
	<svg width="{$widthSpring}vw" height="100vh">
		<rect class="header-rect" x="0" y="0" height="100%" width="100%" fill="var(--white)" />
	</svg>
</div>

<style>
	svg {
		position: fixed;
		left: 0;
		z-index: -4;
	}

	@media (min-width: 600px) {
		svg {
			left: 0;
		}
	}
</style>
