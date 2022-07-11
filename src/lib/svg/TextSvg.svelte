<script>
	import { afterUpdate } from 'svelte';
	export let id;
	let elem;

	afterUpdate(() => {
		elem = document.getElementById(`${id}`);
		var elemRect = elem.getBoundingClientRect();
		var height = elemRect.top - containerRect.top;
		console.log(elem.width);
		console.log(elem.height);
	});
	setSpring(() => {
		console.log(elem.height);
		var vw = clientWidth / 100;

		if (clientWidth < 600) {
			y.set(height - 5 * vw);
			x.set(5);
			width.set(90);
			height.set(elem.height + 10 * vw);
		} else {
			y.set(height - 1.5 * vw);
			x.set(29);
			width.set(42);
			height.set(elem.height + 3 * vw);
		}
	});
</script>

<svg width="100%" height="100%">
  <defs>
    <clipPath id="clip">
      <rect
        class="rectangle"
        x="0%"
        y="{$menuSpringY}px"
        width="{$menuSpringWidth}%"
        height="4.6%"
      />
    </clipPath>
  </defs>

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
