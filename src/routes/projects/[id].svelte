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
	import { pageColor } from '../../store';
</script>

<div class="container">
	{#key project}
		<PathSvg data={project.header} />
		<section class="header">
			<div class="title">
				<svg>
					<rect x="0" y="0" height="100%" width="100%" fill={$pageColor} />
					<text x="0" y="20%" stroke="var(--white)" stroke-width="2">Hello</text>
				</svg>
				<h1>{project.title}</h1>
			</div>
		</section>
		<section class="intro" style:background-color={$pageColor}>
			<p>{project.intro}</p>
		</section>
		<section id="image-container" class="image-container">
			<div class="images">
				{#each project.imagecount as _, i}
					<Image name={project.name} {i} />
				{/each}
			</div>
			<ImageSpring />
		</section>
	{/key}
</div>

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
		position: absolute;
    top: 30%;
    width: 30vw;
	}

	svg {
		top: 0;
		left: 20vw;
		position: absolute;
	}

	text {
		font-family: 'Poiret One';
		font-size: 10vh;
	}

	p {
		width: inherit;
		height: inherit;
		padding: 5vh 8vw;
		margin: 0;
		color: var(--white);
		line-height: 180%;
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

	@media (min-width: 900px) {
		.header-text {
			left: 25%;
		}
		p {
			padding: 12vh 30vw;
		}
		.header {
			height: 60vh;
		}
		.image-container {
			padding-top: 8vh;
			padding-bottom: 4vh;
		}
	}
</style>
