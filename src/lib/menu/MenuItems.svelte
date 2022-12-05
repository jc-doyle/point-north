<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { isOpen, menuSpringWidth, menuSpringY } from './store.js';
	import { pageColor } from '../../store.js';
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
		if ($page.params.id) {
			var elem = document.getElementById(`menu-link-${$page.params.id}`);
		} else {
			var elem = document.getElementById(`menu-link-home`);
		}
		menuSpringY.set(elem.getBoundingClientRect().top);
		menuSpringWidth.set(
			elem.getBoundingClientRect().right - elem.getBoundingClientRect().left + 20
		);
	});
</script>

<div class="menu-items">
	<div class="menu-svg">
		<svg width="100%" height="100%">
			<defs>
				<clipPath id="clip-menu">
					<rect
						class="rectangle"
						x="0%"
						y="{$menuSpringY}px"
						width="{$menuSpringWidth}px"
						height="5.6%"
					/>
				</clipPath>
			</defs>
			<rect width="100%" height="100%" clip-path="url(#clip-menu)" fill={$pageColor} />
			{#each pages as item, i}
				{#if item == 'home'}
					<a href="/">
						<MenuLink {item} height={getHeight(i)} />
					</a>
				{:else}
					<a href="/projects/{item}">
						<MenuLink {item} height={getHeight(i)} />
					</a>
				{/if}
			{/each}
		</svg>
	</div>
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
