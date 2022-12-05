<script>
	import { isOpen, menuHeight, menuOpacity } from './store.js';
	import { page } from '$app/stores';
	import logo from '$lib/menu/logo.svg';
	import MenuItems from './MenuItems.svelte';
	import Hamburger from './Hamburger.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let y, innerHeight, innerWidth;
	let heightInPx;
	let OPACITY = 0.8;

	page.subscribe(() => {
		menuOpacity.set(OPACITY);
	});

	onMount(() => {
		let w = document.documentElement.clientWidth;
		let h = document.documentElement.clientHeight;

		if (w / h < 1) {
			heightInPx = 70;
		} else {
			heightInPx = 100;
		}
		menuOpacity.set(getOpacity());
		menuHeight.set(heightInPx);
	});

	function updateMenu() {
		if (!$isOpen) {
			/* Open the Menu */
			isOpen.set(true);
			menuHeight.set(innerHeight);
			menuOpacity.set(1);
		} else {
			/* Close the Menu */
			isOpen.set(false);
			menuHeight.set(heightInPx);
			menuOpacity.set(0);
		}
	}

	function goHome() {
		if ($isOpen) {
			/* Close the Menu */
			isOpen.set(false);
			menuHeight.set(heightInPx);
		}
	}

	function getOpacity() {
		if (y < 25) {
			return OPACITY;
		} else {
			return 1;
		}
	}

	function handleScroll() {
		menuHeight.set(heightInPx);
		menuOpacity.set(getOpacity());
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth bind:scrollY={y} on:scroll={handleScroll} />
<div class="menu">
	<div class="menu-header">
		<a on:click={goHome} href="/">
			<img class="menu-logo" src={logo} alt="Point North" />
		</a>

		<div class="hamburger" on:click={updateMenu} on:keydown={updateMenu}>
			<Hamburger />
		</div>
	</div>
	<div style:opacity={$menuOpacity} class="menu-bg">
		<svg class="menu-bar" height="{$menuHeight}px">
			<rect x="0" y="0" width="100%" height="100%" />
		</svg>
	</div>

	{#if $isOpen}
		<div
			in:fade={{ duration: 200, easing: cubicInOut }}
			out:fade={{ duration: 50, easing: cubicInOut }}
			on:click={updateMenu}
			on:keydown={updateMenu}
		>
			<MenuItems />
		</div>
	{/if}
</div>

<style>
	.menu {
		height: 100vh;
		position: absolute;
		z-index: 3;
	}

	.menu-header {
		position: fixed;
		justify-content: space-between;
		z-index: 2;
		height: 70px;
		width: 90vw;
		left: 5vw;
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
		cursor: pointer;
	}

	.menu-logo {
		z-index: inherit;
		width: 12vh;
	}

	@media (min-aspect-ratio: 1/1) {
		.menu-logo {
			left: 25%;
			width: 15vh;
		}
		.menu-header {
			height: 100px;
			width: 80vw;
			left: 10vw;
		}
	}
</style>
