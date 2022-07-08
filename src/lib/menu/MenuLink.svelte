<script>
	import { menuSpringHeight, menuSpringWidth } from './store.js';
	export let item;
	export let height;

	function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	const itemRoute = item.toLowerCase();

	function hoverEnter() {
		menuSpringHeight.set(height);
		menuSpringWidth.set(Math.random() * 2 + 8);
	}

	function mouseDown() {
		menuSpringWidth.set(Math.random() * 2 + 12);
	}

	function mouseUp() {
		setTimeout(async () => {
			menuSpringWidth.set(Math.random() * 2 + 3);
		}, 400);
	}
</script>

<div class="menu-link" on:mouseenter={hoverEnter} on:mousedown={mouseDown} on:mouseup={mouseUp}>
	{#if item == 'about'}
		<a href="/{itemRoute}" style:top="{height}vh">{capitalize(item)}</a>
	{:else}
		<a href="/projects/{itemRoute}" style:top="{height}vh">{capitalize(item)}</a>
	{/if}
</div>

<style>
	.menu-link {
		width: 100%;
		height: 100%;
	}
	a {
		color: #3d3e55;
		font-family: 'Poiret One';
		font-size: 4vh;
		position: fixed;
		text-decoration: none;
		outline: none;
		box-shadow: none;
		left: 35vw;
    text-shadow: 3px black;
	}
	a:hover {
		color: black;
	}
	@media (min-width: 600px) {
		a {
			left: 43vw;
		}
	}
</style>
