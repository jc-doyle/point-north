<script>
	export let data;
	import Projects from '$lib/pages/Projects.svelte';
</script>

<svelte:head>
	<title>Projects | Point North</title>
  <meta name="description" content="Our Projects"/>
</svelte:head>
<Projects {data} />
