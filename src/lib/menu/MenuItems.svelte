<script>
  import { page } from '$app/stores'
	import { isOpen, hoverSpring } from './store.js';
	import MenuLink from './MenuLink.svelte';
	const pages = ['cawdor', 'talbragar', 'jameson', 'about'];

	function setHeight(i) {
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
      return setHeight(pages.indexOf(id))
    } else {
      return setHeight(pages.indexOf('about'))
    }
  }

  hoverSpring.set(currentPageHeight($page.params.id))

  let open
	isOpen.subscribe((o) => (open = o));
</script>

<div class="menu-items">
	<div class="indicator">
		<svg width="2vw" height="100vh">
			<line y1="{$hoverSpring}vh" y2="{$hoverSpring+4.5}vh" stroke="black"  />
		</svg>
	</div>
	<div class="menu-links">
		{#each pages as item, i}
			<MenuLink {item} height={setHeight(i)} />
		{/each}
	</div>
</div>

<style>
	.menu-items {
		position: inherit;
		width: inherit;
	}
	.indicator {
    left: 42vw;
    top: 0;
    position: fixed;
	}
  line {
    opacity: 0;
    stroke: grey;
  }

	@media (min-width: 600px) {
		line {
			opacity: 100%;
      stroke-width: 3;
		}
	}
  
</style>
