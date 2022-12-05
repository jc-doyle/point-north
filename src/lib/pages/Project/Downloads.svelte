<script>
	export let data;
</script>

{#each data.files as f}
	<li class="item">
		<a href="/downloads/{data.name}/{f.file}">{f.name} <i>(.pdf)</i></a>
	</li>
{/each}

<style>
  li {
    list-style-type: circle;
    list-style-position: outside;
  }

  i {
    color: var(--grey);
  }
	a {
		font-family: 'Raleway', serif;
		font-size: 1.8vh;
		line-height: 230%;
		font-weight: 600;
		color: var(--black);
    margin-left: -2%;
	}
</style>
