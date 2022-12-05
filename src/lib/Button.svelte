<script>
	export let href;
	export let text;
  import { active } from '$lib/contact/store.js';

  function handleClick() {
    if (text === 'Contact' || text === 'Back') {
      if ($active == 1) {
        active.set(-1);
      } else {
        active.set(1)
      }
    }
  }
</script>

<a on:click={handleClick} href="/{href}" data-sveltekit-noscroll>{text}</a>

<style>
	a {
    font-family: 'Nanum Myeongjo', serif;
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
