<script>
	import { spring } from 'svelte/motion';
	import { isOpen } from './store.js';
	import { page } from '$app/stores';
	import logo from '$lib/menu/logo.svg';
	import MenuItems from './MenuItems.svelte';
	import Hamburger from './Hamburger.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let y, innerHeight, innerWidth;
	let menuHeight;
	let menuSpring = spring(0, { stiffness: 0.05, damping: 0.3, precision: 1 });
	let menuTween = spring(0, { stiffness: 0.2, damping: 0.9 });

	page.subscribe(() => {
		setTimeout(async () => {
			menuTween.set(0);
			menuSpring.set(menuHeight);
		}, 600);
	});

	onMount(() => {
		if (innerHeight < 900) {
			menuHeight = 70;
		} else {
			menuHeight = 100;
		}
	});

	function updateMenu() {
		if (!$isOpen) {
			/* Open the Menu */
			isOpen.set(true);
			menuSpring.set(innerHeight);
			menuTween.set(100);
		} else {
			/* Close the Menu */
			setTimeout(async () => {
				menuSpring.set(menuHeight);
				isOpen.set(false);
			}, 500);
		}
	}

	function handleScroll() {
		if (y < 5) {
			menuTween.set(0);
		} else {
			menuTween.set(100);
		}
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth bind:scrollY={y} on:scroll={handleScroll} />
<div class="menu">
	<div class="menu-header">
		<img class="menu-logo" src={logo} alt="Point North" />
		<div class="hamburger" on:click={updateMenu}>
			<Hamburger />
		</div>
	</div>
	<svg class="menu-bar" height="{$menuSpring}px">
		<rect x="0" y="0" width="100%" height="100%" style:opacity="{$menuTween}%" />
	</svg>
	{#if $isOpen}
		<div
			in:fade={{ duration: 200, easing: cubicInOut }}
			out:fade={{ duration: 50, easing: cubicInOut }}
			on:click={updateMenu}
		>
			<MenuItems />
		</div>
	{/if}
</div>

<style>
	.menu {
		height: 100vh;
		position: absolute;
		z-index: 2;
	}

	.menu-header {
		position: fixed;
		justify-content: space-between;
		z-index: 1;
		height: 70px;
		width: 90vw;
		right: 5vw;
		top: 0;
		display: flex;
		align-items: center;
	}

	.menu-bar {
		position: fixed;
		top: 0;
		width: 100%;
	}

	rect {
		fill: var(--white);
	}

	.hamburger {
		z-index: inherit;
		width: 2.8vh;
		height: 2.8vh;
		padding: 2vh;
	}

	.menu-logo {
		z-index: inherit;
		width: 12vh;
	}

	@media (min-width: 600px) {
		.menu-logo {
			left: 25%;
		  width: 15vh;
		}
    .menu-header {
      height: 100px;
    }
	}
</style>
