<script>
	import Button from '$lib/Button.svelte';
	import Tilde from '$lib/Tilde.svelte';

	import cover from '$lib/assets/images/cover.jpg';
	import { fade } from 'svelte/transition';

	export let data;
</script>

<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }} class="content">
	<h1>Boutique Property Developments</h1>
	<h4><i>est.</i> <b>2019</b></h4>
	<img alt="cover" src={cover} />
	<div class="intro">
		<p>{data.intro.first}</p>
		<p>{data.intro.second}</p>
	</div>
	<Tilde />
	<div class="buttons">
		<Button href="contact" text="Contact" />
		<Button href="projects" text="Projects" />
	</div>
</div>

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
    border: 1px solid var(--black);
	}

	.content {
		position: absolute;
		border: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 90%;
		left: 5%;
		top: 18%;
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
			width: 50%;
			left: 25%;
			top: 18%;
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
