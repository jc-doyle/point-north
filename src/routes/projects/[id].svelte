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

<div class="container">
	{#key project}
		<PathSvg data={project.header} />
		<section class="header">
			<div class="header-text">
				<div class="title">
					<h1>{project.title}</h1>
					<svg>
						<rect x="0" y="0" height="100%" width="100%" fill="blue" />
					</svg>
				</div>
				<h2 class="date">{project.date}</h2>
				<h3 class="location">{project.location}</h3>
			</div>
		</section>
		<section class="intro">
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

	.header-text {
		position: absolute;
		top: 30%;
		left: 5%;
	}

	.title {
    position: relative;
	}

	svg {
    top: 0;
    position: absolute;
	}

	.intro {
		background-color: var(--blue);
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
