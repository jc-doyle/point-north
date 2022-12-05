<script>
	export let data;
	import Home from '$lib/pages/Home.svelte';
</script>

<svelte:head>
	<title>Point North</title>
  <meta name="description" content="An independent, high-end residential property development company based in Johannesburg, South Africa."/>
</svelte:head>

<Home {data} />
