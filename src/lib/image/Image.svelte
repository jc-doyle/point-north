<script>
	import { heightSpring, widthSpring, ySpring } from './store.js';
	export let name;
	export let i;
	let enlarged = false;

	function setSpring() {
		var elem = document.getElementById(`${name}${i}`);
		var container = document.getElementById('image-container');
		var elemRect = elem.getBoundingClientRect();
		var containerRect = container.getBoundingClientRect();
		var heightFromStart = elemRect.top - containerRect.top;
		var width = elemRect.left - elemRect.right;
		var clientWidth = document.documentElement.clientWidth;
		var vw = clientWidth / 100;

		if (clientWidth < 600) {
			ySpring.set(heightFromStart - 5 * vw);
			widthSpring.set(60);
			heightSpring.set(elem.height + 10 * vw);
		} else {
			ySpring.set(heightFromStart - 5 * vw);
			widthSpring.set(width / clientWidth + 3 * vw);
			heightSpring.set(elem.height + 10 * vw);
		}
	}

	function handleClick() {
		if (enlarged) {
			enlarged = false;
		} else {
			enlarged = true;
		}
	}
</script>

<div class="image" on:mouseenter={setSpring} on:click={handleClick}>
	<img class:enlarged id="{name}{i}" alt="{name}{i}" src="/images/{name}/{i}" />
</div>

<style>
	.enlarged {
		width: 98vw;
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
		.enlarged {
			width: 50vw;
		}
	}
</style>
