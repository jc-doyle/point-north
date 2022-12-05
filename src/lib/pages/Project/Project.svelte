<script>
	import Button from '$lib/Button.svelte';
	import Gallery from '$lib/image/Gallery.svelte';
	import Downloads from './Downloads.svelte';
	import { fade } from 'svelte/transition';
	import Tilde from '../../Tilde.svelte';
	export let data;
</script>

<div in:fade={{ duration: 400, delay: 500 }} out:fade={{ duration: 300 }} class="content">
		<h1>{data.title}</h1>
		<h3>{data.location}</h3>
		<div class="specs">
			<h4><b>{data.date}</b></h4>
		</div>
		<img alt="cover" src="/images/{data.name}/header.jpg" />
		<div class="intro">
			<p>{data.intro}</p>
			<p>{data.tagline}</p>
		</div>
		<Tilde />
		<div class="images">
			<Gallery {data} />
		</div>
		<div class="downloads">
			<Downloads {data} />
		</div>
		<Tilde />
		<div class="buttons">
			<Button href=" " text="Home" />
			<Button href="projects" text="Projects" />
		</div>
</div>

<style>
	h1 {
    font-size: 4.1vh;
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
		height: 24vh;
		object-fit: cover;
		margin: 6vh 0 8vh 0;
		border: 1px solid var(--white);
	}

  p {
    margin-bottom: 5vh;
  }
  
	.content {
    margin: 14vh 5vw 3vh 5vw;
		background-color: var(--white);
		border: 1px solid var(--border);
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 90%;
    height: inherit;
	}

	.specs {
		display: flex;
		align-items: center;
	}

	.intro {
		width: 80%;
	}

	.images {
    width: 90%;
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
		margin: 6vh 0 2vh 0;
	}

	@media (min-aspect-ratio: 1/1) {
		h1 {
			transform: translateY(-50%);
			margin: 0 25%;
		}

		img {
			width: 110%;
			height: 34vh;
		  margin: 7vh 0 7vh 0;
		}

		.content {
      margin: 18vh 25vw;
			width: 50%;
		}

		.intro {
			width: 48%;
		}

		.images {
			margin: 10vh 0 0 0;
      width: 110%;
		}

    .downloads {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 6vh 0 6vh 0;
    }

		.buttons {
			width: 48%;
			margin-top: 4vh;
			margin-bottom: 3vh;
		}
	}
</style>
