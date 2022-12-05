<script>
	export let href;
	export let text;
</script>

<a href="/{href}" data-sveltekit-noscroll>{text}</a>

<style>
	a {
		padding: 1vh 4vw;
		margin: 1%;
		transition: border 1s, font-style 0.5s;
		border: 1px solid var(--grey);
	}

	a:hover {
		border: 1px solid var(--black);
    font-style: bold;
	}

	@media (min-aspect-ratio: 1/1) {
    a {
      padding: 1vh 1.6vw;
      margin: 1%;
    }
	}
</style>
