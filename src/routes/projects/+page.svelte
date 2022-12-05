<script>
	export let data;
	import Projects from '$lib/pages/Projects.svelte';
</script>

<svelte:head>
	<title>Projects | Point North</title>
</svelte:head>
<Projects {data} />
