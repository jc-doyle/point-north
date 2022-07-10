<script>
	import { height, width, x, y } from './store.js';
</script>

<div class="image-spring">
	<svg width="100%" height="100%">
		<rect
			class="rectangle"
			x="{$x}%"
			y="{$y}px"
			width="{$width}%"
			height="{$height}px"
			fill="var(--black)"
		/>
	</svg>
</div>

<style>
	.image-spring {
    width: 100%;
    height: 100%;
    opacity: 10%;
		position: absolute;
    top: 0;
    z-index: -4;
	}
</style>
