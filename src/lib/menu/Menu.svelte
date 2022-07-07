<script>
	import { spring, tweened } from 'svelte/motion';
	import { isOpen } from './store.js';
	import logo from '$lib/menu/logo.svg';
	import MenuItems from './MenuItems.svelte';
	import Hamburger from './Hamburger.svelte';
	import { cubicIn } from 'svelte/easing';

	const menuHeight = 11;
	const menuOpacity = 80;
	let menuSpring = spring(menuHeight, { stiffness: 0.05, damping: 0.3 });
	let menuTween = spring(menuOpacity, { stiffness: 0.2, damping: 0.9 });

	function updateMenu() {
		if (!$isOpen) {
			/* Open the Menu */
			isOpen.set(true);
			menuSpring.set(94);
			menuTween.set(100);
		} else {
			/* Close the Menu */
			isOpen.set(false);
			setTimeout(async () => {
				menuSpring.set(menuHeight);
			}, 500);
			setTimeout(async () => {
				menuTween.set(menuOpacity);
			}, 1000);
		}
	}
</script>

<div class="menu">
	<div class="menu-header">
		<img class="menu-logo" src={logo} alt="Point North" />
		<div class="hamburger" on:click={updateMenu}>
			<Hamburger />
		</div>
	</div>
	<svg class="menu-bar">
		<rect x="0" y="0" width="100vw" height="{$menuSpring}vh" style:opacity="{$menuTween}%" />
	</svg>
	{#if $isOpen}
		<div class="menu-items" on:click={updateMenu}>
			<MenuItems />
		</div>
	{/if}
</div>

<style>
	.menu {
		height: 100vh;
		position: absolute;
	}

	.menu-header {
		position: fixed;
		justify-content: space-between;
		z-index: 1;
		height: 11vh;
		width: 80vw;
		right: 10vw;
		top: 0;
		display: flex;
		align-items: center;
	}

	.menu-bar {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100vh;
	}

	rect {
		fill: #eee;
	}

	.hamburger {
		z-index: inherit;
		width: 2.8vh;
		height: 2.8vh;
	}

	.menu-logo {
		z-index: inherit;
		width: 18vh;
	}

	.menu-items {
		z-index: 1;
		position: fixed;
	}

	@media (min-width: 600px) {
		.menu-logo {
			left: 25%;
		}
	}
</style>
