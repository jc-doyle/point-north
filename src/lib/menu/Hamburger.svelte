<script>
	import { isOpen } from './store.js';
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	let slow = { delay: 0, duration: 400, easing: cubicInOut };
	let fast = { delay: 0, duration: 300, easing: cubicInOut };
	let slowTweenOpen = tweened(0, slow);
	let fastTweenOpen = tweened(0, fast);
	let slowTweenClosed = tweened(1, slow);
	let fastTweenClosed = tweened(1, fast);

	isOpen.subscribe((o) => {
		const params = { delay: 600 };
		if (o) {
			slowTweenOpen.set(1, params);
			fastTweenOpen.set(1, params);
			slowTweenClosed.set(0);
			fastTweenClosed.set(0);
		} else {
			slowTweenOpen.set(0);
			fastTweenOpen.set(0);
			slowTweenClosed.set(1, params);
			fastTweenClosed.set(1, params);
		}
	});
</script>

<svg width="27" height="27" viewBox="0 0 27 27" class="open-icon">
	<line y1="1" x2={$slowTweenClosed * 27} y2="1" stroke="var(--black)" stroke-width="1" />
	<line y1="13" x2={$fastTweenClosed * 27} y2="13" stroke="var(--black)" stroke-width="1" />
	<line y1="26" x2={$slowTweenClosed * 27} y2="26" stroke="var(--black)" stroke-width="1" />
</svg>
<svg
	width="27"
	height="27"
	viewBox="0 0 27 27"
	class="close-icon"
	transform="rotate(225) scale(1.1)"
>
	<line y1="13" x2={$fastTweenOpen * 27} y2="13" stroke="#3F3F3F" stroke-width="2" />
</svg>
<svg
	width="27"
	height="27"
	viewBox="0 0 27 27"
	class="close-icon"
	transform="rotate(135) scale(1.1)"
>
	<line y1="13" x2={$slowTweenOpen * 27} y2="13" stroke="#3F3F3F" stroke-width="2" />
</svg>

<style>
	.open-icon {
		position: fixed;
		width: inherit;
		height: inherit;
	}

	.close-icon {
		position: fixed;
		width: inherit;
		height: inherit;
	}
	@media (min-width: 900px) {
		.open-icon {
		}
		.close-icon {
		}
	}
</style>
