<script>
	import { cubicIn, cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { fly } from 'svelte/transition';

	export let data;
	export let delay;

	let imageOpacity = tweened(1, { delay: 0, duration: 500, easing: cubicInOut });
	let nameOpacity = tweened(0, { delay: 200, duration: 300, easing: cubicIn });
  let thumb;

	function handleEnter() {
		imageOpacity.set(0.03);
		nameOpacity.set(1);
    thumb.style.border = "1px solid var(--black)"
	}

	function handleExit() {
		imageOpacity.set(1);
		nameOpacity.set(0);
    thumb.style.border = "1px solid var(--white)"
	}
</script>

<div in:fly={{ y: 100, delay: delay, duration: 1000 }} class="link">
	<h4 class="date">{data.date}</h4>
	<svg width="1px" height="20px">
		<line x1="0" y1="0" x2="0" y2="100" stroke="var(--border)" />
	</svg>
	<a href="/projects/{data.name}" on:mouseenter={handleEnter} on:mouseleave={handleExit}>
		<div bind:this={thumb} class="thumb" >
			<img  style:opacity={$imageOpacity} src="/thumbnails/{data.name}.jpg" alt={data.name} />
			<h4 style:opacity={$nameOpacity} class="name">{data.title}</h4>
		</div>
	</a>
</div>

<style>
	h4 {
		font-size: 16px;
	}

	img {
		width: 100%;
		aspect-ratio: 4/1;
		object-fit: cover;
	}

	.link {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1.5vh 0;
		z-index: 5;
	}

	.thumb {
		background-color: var(--white);
		position: relative;
		display: flex;
		transition: border 0.5s;
		border: 1px solid var(--white);
	}

	.name {
		font-size: 18px;
		font-weight: 500;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.date {
		color: var(--black);
		font-size: 12px;
		font-weight: 600;
		margin-bottom: 3px;
	}

	@media (min-aspect-ratio: 1/1) {
		img {
			width: 100%;
			aspect-ratio: 8/1;
			object-fit: cover;
			opacity: 100%;
		}

		h4 {
			font-size: 17px;
		}

		.name {
			font-size: 32px;
		}
	}

	@media (max-aspect-ratio: 1/1) {
		img {
			opacity: 60%;
		}
	}
</style>
