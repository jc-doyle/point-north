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
	import { fly } from 'svelte/transition';

	export let project;
	$: p = project['project'];
</script>

{#key p}
	<div class="content" >
		<h1>{p.title}</h1>
		<h1>{p.date}</h1>
		<p>{p.intro}</p>
	</div>
{/key}

<style>
  .content {
    z-index: -1;
  }
</style>
