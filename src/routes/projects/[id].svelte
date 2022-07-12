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
	import TextSvg from '$lib/svg/TextSvg.svelte';
	import ImageSpring from '$lib/image/ImageSpring.svelte';
	import Image from '$lib/image/Image.svelte';
</script>

<div class="container">
	{#key project}
		<PathSvg data={project.header} color={project.color} />
		<section class="header">
			<svg class="title">
				<TextSvg text={project.title} id="title-{project.name}" color={project.color} />
			</svg>
			<div class="title-details">
				<h2>{project.date}</h2>
				<h3>{project.location}</h3>
			</div>
		</section>
		<section class="intro" style:background-color={project.color}>
			<p>{project.intro}</p>
		</section>
		<section id="image-container" class="image-container">
			<div class="images">
				{#each project.imagecount as _, i}
					<a href="/images/{project.name}/{i}">
						<Image name={project.name} {i} />
					</a>
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
		top: 30%;
		width: 70%;
		height: 40%;
		left: 15%;
		position: absolute;
	}

	.title-details {
		position: relative;
		top: 59%;
		left: 15%;
		width: 60%;
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

	@media (min-width: 600px) {
		p {
			padding: 12vh 30vw;
		}
		.header {
			height: 66vh;
		}
		.title {
			left: 15%;
		}
		.title-details {
			left: 17%;
		}
		.image-container {
			padding-top: 8vh;
			padding-bottom: 4vh;
		}
	}
</style>
