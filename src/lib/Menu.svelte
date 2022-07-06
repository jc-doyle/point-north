<script>
	import { spring } from 'svelte/motion';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import logo from '$lib/menu/logo.svg';

	export let open = false;

	let menuHeight = 11;
	let menuSpring = spring(menuHeight, { stiffness: 0.05, damping: 0.32 });
	let slow = { delay: 0, duration: 400, easing: cubicInOut };
	let fast = { delay: 0, duration: 300, easing: cubicInOut };
	let slowTweenOpen = tweened(0, slow);
	let fastTweenOpen = tweened(0, fast);
	let slowTweenClosed = tweened(1, slow);
	let fastTweenClosed = tweened(1, fast);

	function updateMenu() {
		const params = { delay: 600 };
		if (!open) {
			/* Open the Menu */
			open = true;
			menuSpring.set(100);
			slowTweenOpen.set(1, params);
			fastTweenOpen.set(1, params);
			slowTweenClosed.set(0);
			fastTweenClosed.set(0);
		} else {
			/* Close the Menu */
			open = false;
			menuSpring.set(menuHeight);
			slowTweenOpen.set(0);
			fastTweenOpen.set(0);
			slowTweenClosed.set(1, params);
			fastTweenClosed.set(1, params);
		}
	}
</script>

<div class="menu">
	<img class="menu-logo" src={logo} alt="Point North" />
	<svg class="menu-bar">
		<rect x="0" y="0" width="100vw" height="{$menuSpring}vh" />
	</svg>
	<svg on:click={updateMenu} width="27" height="27" viewBox="0 0 27 27" class="open-icon">
		<line y1="1" x2={$slowTweenClosed * 27} y2="1" stroke="#3F3F3F" stroke-width="2" />
		<line y1="13" x2={$fastTweenClosed * 27} y2="13" stroke="#3F3F3F" stroke-width="2" />
		<line y1="26" x2={$slowTweenClosed * 27} y2="26" stroke="#3F3F3F" stroke-width="2" />
	</svg>
	<svg
		on:click={updateMenu}
		width="27"
		height="27"
		viewBox="0 0 27 27"
		class="close-icon"
		transform="rotate(225) scale(1.1)"
	>
		<line y1="13" x2={$fastTweenOpen * 27} y2="13" stroke="#3F3F3F" stroke-width="2" />
	</svg>
	<svg
		on:click={updateMenu}
		width="27"
		height="27"
		viewBox="0 0 27 27"
		class="close-icon"
		transform="rotate(135) scale(1.1)"
	>
		<line y1="13" x2={$slowTweenOpen * 27} y2="13" stroke="#3F3F3F" stroke-width="2" />
	</svg>
</div>

<style>
	.menu {
		height: 100vh;
	}
	.menu-bar {
		position: fixed;
		width: 100%;
		height: 100vh;
	}
	rect {
		fill: lightgrey;
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

	.menu-logo {
		position: fixed;
		z-index: 1;
		left: 6%;
		top: 3%;
		width: 18vh;
	}
	.open-icon {
		position: fixed;
		right: 0%;
		width: 3.7vh;
		height: 3.7vh;
		padding: 3.6vh 5vh;
	}

	.close-icon {
		position: fixed;
		right: 0%;
		width: 3.7vh;
		height: 3.7vh;
		padding: 3.6vh 5vh;
	}
  
  svg text {
    font-family: 'Raleway', sans-serif;
    font-size: 32px;
  }

	@media (min-width: 900px) {
		.menu-logo {
			left: 25%;
		}
		.open-icon {
			right: 30%;
		}
		.close-icon {
			right: 30%;
		}
	}
</style>
