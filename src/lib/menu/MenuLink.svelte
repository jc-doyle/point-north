<script>
	import { hoverSpring } from './store.js';
	export let item;
	export let height;

	function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	const itemRoute = item.toLowerCase();

	function hoverEnter() {
		hoverSpring.set(height);
	}

</script>

<div class="menu-link" on:mouseenter={hoverEnter}>
	<svg width="50" height="50">
		<clipPath id="clip">
			<rect class="masker" x="0" y="0" width="100" height="100" fill="#444" />
		</clipPath>
	</svg>
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
		font-family: 'Poiret One';
		font-size: 4vh;
		position: fixed;
		text-decoration: none;
		outline: none;
		box-shadow: none;
		left: 35vw;
    stroke-width: 3;
	}

	@media (min-width: 600px) {
		a {
		  left: 43vw;
		}
  }
</style>
