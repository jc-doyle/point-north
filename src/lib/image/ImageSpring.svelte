<script>
	import { heightSpring, widthSpring, ySpring, x } from './store.js';
	import { pSBC } from '$lib/tools/pSBC.js';
  export let color;

</script>

<div class="image-spring">
	<svg width="100%" height="100%">
		<rect
			class="rectangle"
			x="{$x}%"
			y="{$ySpring}px"
			width="{$widthSpring}%"
			height="{$heightSpring}px"
			fill={color}
		/>
	</svg>
</div>

<style>
	.image-spring {
    width: 100%;
    height: 100%;
    opacity: 100%;
		position: absolute;
    top: 0;
    z-index: -4;
	}
</style>
