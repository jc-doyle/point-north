<script>
	import { onMount } from 'svelte';
	import MenuLink from './MenuLink.svelte';
	const pages = ['cawdor', 'talbragar', 'jameson', 'home'];

	function getHeight(i) {
		const base = 30;
		const between = 8;
		const bottom = 15;
		if (i != 3) {
			return base + between * i;
		} else {
			return base + between * i + bottom;
		}
	}

	onMount(() => {
	});
</script>

<div class="menu-items">
	{#each pages as item, i}
		{#if item == 'home'}
			<a href="/">
				<MenuLink {item} height={getHeight(i)} />
			</a>
		{:else}
			<a href="/projects/{item}">
			</a>
		{/if}
	{/each}
</div>

<style>
	h3 {
		z-index: 20;
	}

	.menu-items {
		position: fixed;
		width: inherit;
	}

	.menu-svg {
		position: relative;
		left: 25vw;
		width: 75vw;
		height: 100vh;
	}
	@media (min-width: 600px) {
		.menu-svg {
			left: 42vw;
			width: 35vw;
		}
	}
</style>
