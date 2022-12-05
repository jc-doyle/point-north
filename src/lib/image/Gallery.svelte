<script>
	import Image from '$lib/image/Image.svelte';
	import ZoomedImage from '$lib/image/ZoomedImage.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<div in:fly={{ y: 400, duration: 300 }} class="images">
	{#each data.imagecount as _, i}
		<Image name={data.name} {i} />
	{/each}
	<ZoomedImage name={data.name} />
</div>

<style>
	.images {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	@media (min-aspect-ratio: 1/1) {
		.images {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
