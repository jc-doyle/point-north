<script>
	import { active } from './store.js';
	import { fade } from 'svelte/transition';

	export let name;
	let source;

	active.subscribe(() => {
		if ($active != -1) {
			source = `/images/${name}/${name}-${$active}.jpg`;
		}
	});

	function handleClick() {
		if ($active != -1) {
			active.set(-1);
		}
	}
</script>

{#if $active != -1}
	{#key source}
		<div transition:fade={{duration: 300}} on:click={handleClick} on:keydown={handleClick} class="bg">
			<img on:click={handleClick} on:keydown={handleClick} src={source} alt={source} />
		</div>
	{/key}
{/if}

<style>
	.bg {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0%;
		left: 0%;
		background-color: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(10px);
		z-index: 10;
    cursor: pointer;
	}

	img {
		position: fixed;
		width: 100vw;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
    border: 1px solid var(--black);
	}

	@media (min-aspect-ratio: 1/1) {
		.bg {
			position: fixed;
			width: 100vw;
			height: 100vh;
			top: 0%;
		}

		img {
			position: fixed;
			width: 50vw;
			height: 30vw;
			top: 50%;
			left: 50%;
			transform: translateY(-50%) translateX(-50%);
		}
	}
</style>
