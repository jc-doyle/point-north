<script>
	export let href;
	export let text;
  import { active } from '$lib/contact/store.js';
  import { onMount } from 'svelte';

  onMount(() => {
    if (href == " ") {
      href = "";
    }
  })

  function handleClick() {
      if ($active == 1) {
        active.set(-1);
      } else {
        active.set(1)
      }
  }
</script>

<h2 on:click={handleClick} data-sveltekit-noscroll>{text}</h2>

<style>
	h2 {
    font-family: 'Nanum Myeongjo', serif;
		padding: 1vh 4vw;
    font-size: 18px;
		margin: 1%;
		transition: border 1s, font-style 0.5s;
		border: 1px solid var(--grey);
	}

	h2:hover {
		border: 1px solid var(--black);
    font-style: bold;
	}

	@media (min-aspect-ratio: 1/1) {
    h2 {
      padding: 1vh 1.6vw;
      margin: 1%;
    }
	}
</style>
