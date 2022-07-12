<script>
	export let data;
	export let color;
	import { pSBC } from '$lib/tools/pSBC.js';
</script>

<div class="path-svg">
	<svg class="path" viewBox="0 0 1060 680">
		<path style="stroke: {pSBC(-0.9, color)}; fill: none;" d={data} />
	</svg>
</div>

<style>
	.path-svg {
		position: absolute;
		top: 8vh;
		left: 0vw;
		height: 30vh;
		width: 100vw;
		opacity: 20%;
		z-index: -5;
		display: block;
		overflow-x: clip;
	}

	@media (min-width: 920px) {
		.path-svg {
			left: 36vw;
			top: 8vh;
		  opacity: 50%;
		  width: 50vw;
		}
	}
</style>
