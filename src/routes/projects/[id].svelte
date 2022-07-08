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
	import Image from '$lib/image/Image.svelte';
</script>

{#key project}
	<div class="content">
		<section class="header">
			<div class="header-svg">
				<svg width="100%" height="100%" viewBox="0 0 1600 800">
					<path class="header-path" style="stroke: var(--grey); fill: none;" d={project.header} />
					<rect class="header-rect" x="0" y="0" height="200%" width="200%" fill="blue" />
				</svg>
			</div>
			<div class="header-text">
				<h1>{project.title}</h1>
				<h2>{project.date}</h2>
				<h3>{project.location}</h3>
			</div>
		</section>
		<section class="intro">
			<p>{project.intro}</p>
		</section>
		{#each project.imagecount as _, i}
			<Image name={project.name} {i} />
		{/each}
	</div>
{/key}

<style>
	section {
		z-index: -1;
	}
	.content {
		display: flex;
		flex-direction: column;
	}
	.header {
		height: 45vh;
		position: relative;
	}

	.intro {
		background-color: var(--blue);
	}

	.header-svg {
		height: 45vh;
		position: relative;
		overflow: hidden;
		left: 0;
	}

	.header-text {
		top: 25%;
		left: 5%;
		position: absolute;
	}

	.header-path {
	}

	.header-rect {
		opacity: 20%;
	}

	svg {
		position: inherit;
	}

	p {
		width: inherit;
		height: inherit;
		margin: 5vh 8vw;
		color: var(--white);
		line-height: 150%;
	}

	path {
		stroke-dasharray: 1000;
		stroke-dashoffset: 800;
	}

	@media (min-width: 600px) {
		.header-text {
			left: 25%;
		}
		p {
			margin: 10vh 30vw;
		}
		svg {
			left: 40%;
		}
	}
</style>
