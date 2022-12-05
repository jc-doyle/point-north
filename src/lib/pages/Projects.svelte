<script>
	import Button from '$lib/Button.svelte';
	import ProjectLink from '$lib/pages/Project/ProjectLink.svelte';
	import { fade } from 'svelte/transition';

	export let data;
</script>

<div in:fade={{ duration: 400, delay: 200 }} out:fade={{ duration: 200 }} class="content">
	<h1>Projects</h1>
	<div class="links">
		{#each data.projects as p, i}
			<ProjectLink data={p} delay={200 + i * 300} />
		{/each}
	</div>
	<div class="buttons">
		<Button href=" " text="Home" />
	</div>
</div>

<style>
	h1 {
		background-color: var(--background);
		transform: translateY(-50%);
		padding: 0 5%;
	}

	.content {
		border: 1px solid var(--border);
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 90%;
		left: 4.8%;
		top: 18%;
	}

	.links {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: space-between;
	}

	.buttons {
		margin-top: 3vh;
		margin-bottom: 3vh;
	}

	@media (min-aspect-ratio: 1/1) {
		h1 {
			transform: translateY(-50%);
			margin: 0 25%;
		}

    .links {
		  width: 110%;
    }

		.content {
			width: 50%;
			left: 25%;
			top: 18%;
		}

		.buttons {
			margin-top: 3vh;
			margin-bottom: 3vh;
		}
	}
</style>
