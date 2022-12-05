<script>
	export let data;
</script>

{#each data.files as f}
	<li class="item">
		<a href="/downloads/{data.name}/{f.file}">{f.name}</a>
	</li>
{/each}

<style>
  li {
    list-style: none;
  }

	a {
    font-family: 'Nanum Myeongjo', serif;
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-color: var(--grey);
		font-size: 15px;
		line-height: 250%;
		font-weight: 300;
		color: var(--black);
	}

	@media (min-aspect-ratio: 1/1) {
    a {
      font-size: 15px;
    }
  }
</style>
