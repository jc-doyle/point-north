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
		font-size: 17px;
		line-height: 230%;
		font-weight: 300;
		color: var(--black);
    margin-left: -2%;
	}
</style>
