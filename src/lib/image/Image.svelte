<script>
	import { height, width, x, y } from './store.js';
	export let name;
	export let i;

	function setSpring() {
		var elem = document.getElementById(`${name}${i}`);
		var container = document.getElementById('image-container');
		var elemRect = elem.getBoundingClientRect();
		var containerRect = container.getBoundingClientRect();
		var heightFromStart = elemRect.top - containerRect.top;
		var clientWidth = document.documentElement.clientWidth;
    console.log(elem.height)
		var vw = clientWidth / 100;

		if (clientWidth < 600) {
			y.set(heightFromStart - 5 * vw);
			x.set(5);
			width.set(90);
			height.set(elem.height + 10 * vw);
		} else {
			y.set(heightFromStart - 1.5 * vw);
			x.set(29);
			width.set(42);
			height.set(elem.height + 3 * vw);
		}
	}
</script>

<div class="image" on:mouseenter={setSpring}>
	<img id="{name}{i}" alt="{name}{i}" src="/images/{name}/{i}" />
</div>

<style>
	.image {
		width: 100%;
	}
	img {
		position: relative;
		margin-bottom: 10vw;
		width: 80vw;
		left: 50%;
		transform: translateX(-50%);
	}

	@media (min-width: 600px) {
		img {
			margin-bottom: 3vw;
			width: 39vw;
		}
	}
</style>
