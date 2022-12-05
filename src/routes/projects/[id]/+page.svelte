<script>
	import Project from '$lib/pages/Project/Project.svelte';
	export let data;
</script>

{#key data}
<Project {data} />
{/key}
