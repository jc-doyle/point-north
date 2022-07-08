<script>
	import { page } from '$app/stores';
	import { isOpen, hoverSpringHeight, hoverSpringWidth } from './store.js';
	import MenuLink from './MenuLink.svelte';
	const pages = ['cawdor', 'talbragar', 'jameson', 'about'];

	function getHeight(i) {
		const base = 20;
		const between = 8;
		const bottom = 15;
		if (i != 3) {
			return base + between * i;
		} else {
			return base + between * i + bottom;
		}
	}

	function currentPageHeight(id) {
		if (id) {
			return getHeight(pages.indexOf(id));
		} else {
			return getHeight(pages.indexOf('about'));
		}
	}

	hoverSpringHeight.set(currentPageHeight($page.params.id));

	let open;
	isOpen.subscribe((o) => (open = o));
</script>

<div class="menu-items">
	<div class="indicator">
		<svg width="100%" height="100%">
			<rect
				class="rectangle"
				x="0"
				y="{$hoverSpringHeight}%"
				width="{$hoverSpringWidth}%"
				height="4.5%"
				fill="#DFDFDF"
			/>
			<rect
				class="dot"
				x="1%"
				y="{2 + $hoverSpringHeight}%"
				width="3px"
				height="3px"
				fill="#444"
			/>
		</svg>
	</div>
	<div class="menu-links">
		{#each pages as item, i}
			<MenuLink {item} height={getHeight(i)} />
		{/each}
	</div>
</div>

<style>
	.menu-items {
		position: inherit;
		width: inherit;
	}
	.indicator {
		left: 31vw;
		top: 0;
		position: fixed;
	}
  svg {
    height: 100vh;
    width: 100vw;
  }
	.rectangle {
		opacity: 0;
	}

	@media (min-width: 600px) {
		.rectangle {
			opacity: 60%;
		}
		.indicator {
			left: 41vw;
		}
	}
</style>
