<script>
	import Button from '$lib/Button.svelte';
	import Gallery from '$lib/image/Gallery.svelte';
	import Downloads from './Downloads.svelte';
	import { fade } from 'svelte/transition';
	import Tilde from '../../Tilde.svelte';
	export let data;
</script>

<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }} class="container">
	<div class="content">
		<h1>{data.title}</h1>
		<h3>{data.location}</h3>
		<div class="specs">
			<h4><b>{data.date}</b></h4>
		</div>
		<img alt="cover" src="/images/{data.name}/header.jpg" />
		<div class="intro">
			<p>{data.intro}</p>
		</div>
		<Tilde />
		<div class="images">
			<Gallery {data} />
		</div>
		<Tilde />
		<div class="downloads">
			<Downloads {data} />
		</div>
		<div class="buttons">
			<Button href=" " text="Home" />
			<Button href="projects" text="Projects" />
		</div>
	</div>
</div>

<style>
	h1 {
		background-color: var(--background);
		transform: translateY(-50%);
		padding: 0 5%;
	}

	h3 {
		margin-top: -2%;
		margin-bottom: 1%;
	}

	img {
		width: 90%;
		height: 34vh;
		object-fit: cover;
		margin: 6vh 0;
		border: 1px solid var(--black);
	}

	.content {
		background-color: var(--white);
		border: 1px solid var(--border);
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 90%;
		left: 5%;
		top: 18%;
	}

	.specs {
		display: flex;
		align-items: center;
	}

	.intro {
		width: 80%;
		margin-bottom: 6vh;
	}

	.images {
		margin: 4vh 0 2vh 0;
	}

	.buttons {
		display: flex;
		width: 80%;
		justify-content: space-between;
		margin: 2vh 0;
	}

	.downloads {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 2vh;
	}

	.footer {
		height: 10%;
	}

	@media (min-aspect-ratio: 1/1) {
		h1 {
			transform: translateY(-50%);
			margin: 0 25%;
		}

		img {
			width: 110%;
			height: 34vh;
			margin: 7vh 0 9vh 0;
		}

		.content {
			width: 50%;
			left: 25%;
			top: 18%;
		}

		.intro {
			width: 48%;
			margin-bottom: 8vh;
		}

		.images {
			margin: 10vh 0 0 0;
		}

		.buttons {
			width: 48%;
			margin-top: 3vh;
			margin-bottom: 3vh;
		}
	}
</style>
