<script>
	import Project from '$lib/pages/Project/Project.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.title} | Point North</title>
</svelte:head>
{#key data}
	<Project {data} />
{/key}
