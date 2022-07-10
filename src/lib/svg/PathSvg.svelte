<script>
	export let data;
</script>

<div class="path-svg">
	<svg class="path" width="50vw" height="60vh" viewBox="0 0 1060 680">
		<path style="stroke: var(--blue); fill: none;" d={data} />
	</svg>
</div>

<style>
	.path-svg {
		position: absolute;
    opacity: 80%;
		z-index: -5;
		display: block;
		overflow-x: clip;
	}

	svg {
		width: 100vw;
		height: 50vh;
		overflow: auto;
		display: block;
		overflow-x: clip;
	}
	@media (min-width: 920px) {
		.path-svg {
			left: 36vw;
			top: 5vh;
		}
    svg {
		  width: 44vw;
		  height: 60vh;

    }
	}
</style>
