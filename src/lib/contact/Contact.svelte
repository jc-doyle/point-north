<script>
	import { active } from './store.js';
	import { fade } from 'svelte/transition';
	import Button from '$lib/Button.svelte';

	active.subscribe(() => {});

	function handleClick() {
		if ($active != -1) {
			active.set(-1);
		}
	}
</script>

{#key $active}
	{#if $active != -1}
		<div
			transition:fade={{ duration: 300 }}
			on:click={handleClick}
			on:keydown={handleClick}
			class="bg"
		>
			<div class="content">
				<div class="title">
					<h1>Anthony Doyle</h1>
					<h2>Managing Director</h2>
				</div>
				<a href="tel:+27823721600">082 470 1052</a>
				<a href="mailto:ant.doyle@telkomsa.net">ant.doyle@telkomsa.net</a>
				<div class="button">
					<Button href="/" text="Back" />
				</div>
			</div>
		</div>
	{/if}
{/key}

<style>
	h1 {
		font-size: 22px;
		margin: 12px 0 2px 0;
	}

	h2 {
		font-size: 12px;
		color: var(--text-light);
	}

	a {
		text-decoration: underline;
		text-underline-offset: 5px;
		text-decoration-color: var(--border);
		color: var(--black);
		font-size: 15px;
	}

	.bg {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0%;
		left: 0%;
		background-color: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(10px);
    z-index: 10;
	}

	.content {
		width: 80%;
		height: 25%;
		top: 25%;
		left: 10%;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		border: 1px solid var(--border);
    z-index: 11;
	}

  .button {
    margin: 5%;
  }

	@media (min-aspect-ratio: 1/1) {
		h1 {
		}

		.bg {
			position: fixed;
			width: 100vw;
			height: 100vh;
			top: 0%;
		}

		.content {
			width: 20%;
			height: 22%;
			top: 40%;
			left: 40%;
			position: absolute;
			border: 1px solid var(--border);
		}
	}
</style>
