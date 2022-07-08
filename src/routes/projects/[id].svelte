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
	import { draw } from 'svelte/transition';
	import SvgHeader from '../../lib/svg/SvgHeader.svelte';
	export let project;
</script>

{#key project}
	<div class="content">
		<div class="header">
			<svg width="100%" height="100%" viewBox="0 0 1055 617">
				<path style="stroke: #000; fill: none;" d={project.header} />
			</svg>
			<h1>{project.title}</h1>
			<h1>{project.date}</h1>
		</div>
		<div class="intro">
			<p>{project.intro}</p>
		</div>
	</div>
{/key}

<style>
	.content {
		z-index: -1;
	}
	.header {
		height: 30vh;
	}
  path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 800;
  }
</style>
