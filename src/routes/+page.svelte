<script>
	export let data;
	import Home from '$lib/pages/Home.svelte';
</script>

<svelte:head>
	<title>Point North</title>
</svelte:head>

<Home {data} />
