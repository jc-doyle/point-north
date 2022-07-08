<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const url = `../data/${params.id}`;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				project: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
	export let project;
	import PathSvg from '$lib/svg/PathSvg.svelte';
	import ImageSpring from '$lib/image/ImageSpring.svelte';
	import Image from '$lib/image/Image.svelte';
</script>

{#key project}
	<PathSvg data={project.header} />
	<section class="header">
		<div class="header-text">
			<h1>{project.title}</h1>
			<h2>{project.date}</h2>
			<h3>{project.location}</h3>
		</div>
	</section>
	<section class="intro">
		<p>{project.intro}</p>
	</section>
	<section class="image-container">
		<div class="images">
			{#each project.imagecount as _, i}
					<Image name={project.name} {i} />
			{/each}
		</div>
		<ImageSpring />
	</section>
{/key}

<style>
	section {
		z-index: -1;
		display: block;
	}

	.header {
		height: 38vh;
		position: relative;
		z-index: -2;
	}

	.header-text {
		top: 25%;
		left: 5%;
		position: absolute;
	}

	.intro {
		background-color: var(--blue);
	}

	p {
		width: inherit;
		height: inherit;
		margin: 5vh 8vw;
		color: var(--white);
		line-height: 160%;
	}

	.image-container {
	}

	.images {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 600px) {
		.header-text {
			left: 25%;
		}
		p {
			margin: 10vh 30vw;
			line-height: 160%;
		}
		.header {
			height: 66vh;
		}
	}
</style>
