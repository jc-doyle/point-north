<script>
	import { isOpen, menuSpringWidth, menuSpringY } from './store.js';
	import { pageColor, colors } from '../../store.js';
  import { onDestroy } from 'svelte';
	export let item;
	export let height;

	function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function hoverEnter() {
		var elem = document.getElementById(`menu-link-${item}`);
		menuSpringY.set(elem.getBoundingClientRect().top);
		menuSpringWidth.set(elem.getBoundingClientRect().right - elem.getBoundingClientRect().left+20);
    const color = $colors.find(pages => pages.name == item).color
    pageColor.set(color)
	}

  onDestroy(() => {
  })
</script>

<g on:mouseenter={hoverEnter}>
	<text class="background-text" id="menu-link-{item}" x="10" y="{height}%">{capitalize(item)}</text>
</g>
<g class="foreground-text" clip-path="url(#clip-menu)">
	<text x="10" y="{height}%">{capitalize(item)}</text>
</g>

<style>
	text {
		font-family: 'Poiret One';
		font-size: 5vh;
	}
	.foreground-text {
		stroke: var(--white);
    stroke-width: 1;
	}

	.foreground-text text {
		fill: var(--white);
	}
	.background-text {
		fill: #3d3e55;
	}
</style>
