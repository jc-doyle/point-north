<script>
	import { spring } from 'svelte/motion';

	export let open = false;
	let menuSpring = spring(200, { stiffness: 0.05, damping: 0.25 });

	function updateMenu() {
		if (!open) {
			menuSpring.set(window.innerHeight);
			open = true;
		} else {
			menuSpring.set(200);
			open = false;
		}
	}
</script>

<div class="menu">
	<div class:open class="menu-items">
		<h2>About</h2>
		<h2>About</h2>
		<h2>About</h2>
	</div>
	<svg>
		<rect
			on:drag={updateMenu}
			on:click={updateMenu}
			x="0"
			y="0"
			width="100%"
			height={$menuSpring}
		/>
	</svg>
</div>

<style>
	.menu {
		width: 100vw;
		height: 100vh;
	}
	svg {
		position: fixed;
		width: 100vw;
		height: 100vh;
	}
	rect {
		fill: lightgray;
		opacity: 80%;
	}
	.menu-items {
    opacity: 0%;
		position: fixed;
		display: flex;
		flex-direction: column;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.open {
		color: blue;
    opacity: 100%;
	}
</style>
