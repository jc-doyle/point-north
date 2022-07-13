<script context="module">
	/* export const prerender = true; */

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
	import TextSvg from '$lib/svg/TextSvg.svelte';
	import ImageSpring from '$lib/image/ImageSpring.svelte';
	import Image from '$lib/image/Image.svelte';
	import { pSBC } from '$lib/tools/pSBC.js';
</script>

{#key project}
	<PathSvg data={project.header} color={project.color} />
	<section class="header">
		<svg class="title">
			<TextSvg text={project.title} id="title-{project.name}" color={project.color} />
		</svg>
		<div class="title-details">
			<h2 style:color={pSBC(-0.5, project.color)}>{project.date}</h2>
			<h3 style:color={pSBC(-0.9, project.color)}>{project.location}</h3>
		</div>
	</section>
	<section class="intro" style:background-color={project.color}>
		<p>{project.intro}</p>
	</section>
	<section id="image-container" class="image-container">
		<div class="images">
			{#each project.imagecount as _, i}
				<Image name={project.name} {i} />
			{/each}
		</div>
		<ImageSpring color={project.color} />
	</section>
{/key}

<style>
	section {
		z-index: 1;
		display: flex;
		flex-direction: column;
	}

	.header {
		width: 100%;
		height: 38vh;
		position: relative;
		z-index: -2;
	}

	.title {
		font-size: 18vw;
		text-anchor: top;
		stroke: var(--white);
		top: 25%;
		width: 80%;
		height: 40%;
		left: 8%;
		position: absolute;
	}

	.title-details {
		opacity: 70%;
		position: relative;
		top: 54%;
		left: 8%;
		width: 20%;
	}

	h2 {
		font-size: 5vw;
	}

	h3 {
		font-size: 3vw;
	}

	p {
		width: inherit;
		height: inherit;
		padding: 5vh 8vw;
		line-height: 180%;
	}

	p::first-letter {
		font-size: 4vh;
	}

	.image-container {
		position: relative;
		padding-top: 6vh;
	}

	.images {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 600px) {
		.header {
			height: 66vh;
		}
		.title {
			left: 15%;
			font-size: 8vw;
		}
		.title-details {
			left: 17%;
		}
		h2 {
			font-size: 3vw;
		}
		h3 {
			font-family: 'Poiret One';
			font-size: 1.2vw;
			font-weight: 200;
		}
		p {
			padding: 12vh 30vw;
		}
		.image-container {
			padding-top: 8vh;
			padding-bottom: 4vh;
		}
	}
</style>
