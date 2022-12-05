<script>
	import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

	import Button from '$lib/Button.svelte';
	import Tilde from '$lib/Tilde.svelte';
	import Contact from '$lib/contact/Contact.svelte';
	import cover from '$lib/assets/images/cover.jpg';

	export let data;
  let page;

  onMount(() => {
    page.style.opacity = 1;
  })

</script>

<div bind:this={page} in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }} class="content">
	<h1>Boutique Property Developments</h1>
	<h4><i>est.</i> <b>2019</b></h4>
	<img alt="cover" src={cover} />
	<div class="intro">
		<p>{data.intro.first}</p>
		<p>{data.intro.second}</p>
	</div>
	<Tilde />
	<div class="buttons">
		<Button href=" " text="Contact" />
		<Button href="projects" text="Projects" />
	</div>
</div>
  <Contact />

<style>
	h1 {
		background-color: var(--background);
		transform: translateY(-50%);
		margin: 0 10%;
	}

	h4 {
		margin-top: -8%;
	}

	p {
		margin-bottom: 3%;
	}

	img {
		width: 90%;
		height: 20vh;
		object-fit: cover;
		margin: 10% 0;
    border: 1px solid var(--white);
	}

	.content {
    opacity: 0;
		position: absolute;
		border: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
    margin: 16vh 4vw 2vh 4vw;
    height: 82vh;
    transition: opacity 2s ease;
	}

	.intro {
		width: 80%;
	}

	.buttons {
		display: flex;
		width: 80%;
		justify-content: space-between;
		margin-top: 4vh;
		margin-bottom: 4vh;
	}

	@media (min-aspect-ratio: 1/1) {
		h1 {
			background-color: var(--background);
			transform: translateY(-50%);
			margin: 0 25%;
		}

		h4 {
			margin-top: -5%;
		}

		p {
			margin-bottom: 5%;
		}

		.intro {
			width: 48%;
		}

		.content {
      margin: 17vh 25vw 4vh 25vw;
      height: 79vh;
		}

		img {
			width: 110%;
			height: 27vh;
			margin: 5% 0 6% 0;
		}

		.buttons {
			width: 48%;
			margin-top: 4vh;
			margin-bottom: 3vh;
		}
	}
</style>
