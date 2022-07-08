<script>
	import { imageSpringHeight, imageSpringWidth } from './store.js';
</script>

<div class="image-spring">
	<svg width="100%" height="100%">
		<rect
			class="rectangle"
			x="29%"
			y="{$imageSpringHeight}%"
			width="42%"
			height="30%"
			fill="var(--grey)"
		/>
	</svg>
</div>

<style>
	.image-spring {
    width: 100%;
    height: 100%;
		top: 0;
		position: absolute;
    z-index: 3;
	}
</style>
