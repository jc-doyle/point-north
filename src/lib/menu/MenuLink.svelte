<script>
	export let name;
	export let href;
</script>

<a {href}>
	<h2>{name}</h2>
</a>

<style>
  a {
    cursor: pointer;
  }

  h2 {
    cursor: pointer;
    margin-bottom: 2%;
    margin-top: 10px;
    text-decoration: underline;
    text-decoration-color: var(--white);
    text-underline-offset: 10px;
    text-decoration-thickness: 1px;
    transition: all 0.5s;
  }

  h2:hover {
    text-decoration-color: var(--border);
  }

	@media (min-aspect-ratio: 1/1) {
    h2 {
      font-size: 4vh;
    }
  }

</style>
