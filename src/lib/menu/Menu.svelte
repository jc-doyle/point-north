<script>
	import { isOpen } from './store.js';
	import { fade } from 'svelte/transition';
  import { page} from '$app/stores'
	import logo from '$lib/menu/logo.svg';
	import MenuLink from './MenuLink.svelte';
	import Hamburger from './Hamburger.svelte';
	import { onMount } from 'svelte';

	let y;
	let bar;

  page.subscribe(() => {
    if (bar != null) {
			bar.style = 'border-bottom: 1px solid var(--white)';
    }
  })

	isOpen.subscribe(() => {
		if ($isOpen) {
		} else {
		}
	});

	onMount(() => {
    if (bar != null) {
			bar.style = 'border-bottom: 1px solid var(--white)';
    }
  });

	function updateMenu() {
		if (!$isOpen) {
			/* Open the Menu */
			isOpen.set(true);
			bar.style = 'border-bottom: 1px solid var(--white)';
		} else {
			/* Close the Menu */
      setTimeout(async () => {
			  isOpen.set(false);
      }, 500)
			bar.style = 'border-bottom: 1px solid var(--grey)';
		}
	}

	function goHome() {
		if ($isOpen) {
			/* Close the Menu */
			isOpen.set(false);
		}
	}

	function handleScroll() {
    if (y > 25 && $page.route.id.includes('projects/')) {
			bar.style = 'border-bottom: 1px solid var(--grey)';
    } else {
			bar.style = 'border-bottom: 1px solid var(--white)';
    }
  }
</script>

<svelte:window bind:scrollY={y} on:scroll={handleScroll} />
<div class="menu">
	<div class="menu-header" bind:this={bar}>
		<a on:click={goHome} href="/">
			<img class="menu-logo" src={logo} alt="Point North" />
		</a>
		<div class="hamburger" on:click={updateMenu} on:keydown={updateMenu}>
			<Hamburger />
		</div>
	</div>
	{#if $isOpen}
		<div transition:fade class="menu-contents" on:click={updateMenu} on:keydown={updateMenu}>
			<MenuLink href="/" name="Home" />
			<div class="projects">
				<h3>Projects</h3>
				<MenuLink href="/projects/jameson" name="Jameson" />
				<MenuLink href="/projects/talbragar" name="Talbragar" />
				<MenuLink href="/projects/cawdor" name="Cawdor" />
			</div>
		</div>
	{/if}
</div>

<style>
	h3 {
		text-align: center;
		font-size: 2vh;
	}

	.menu {
		height: 100vh;
		position: absolute;
		z-index: 6;
	}

	.menu-header {
		position: fixed;
		padding: 0 5vw;
		width: 90%;
		z-index: 2;
		height: 70px;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--white);
	}

	.menu-contents {
    overflow: hidden;
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		top: 0;
		height: 40vh;
		width: 80vw;
		padding: 30vh 10vw;
		background-color: var(--white);
		transition: all 1s;
	}

	.hamburger {
		z-index: inherit;
		width: 2.5vh;
		height: 2.5vh;
		padding: 2vh;
		cursor: pointer;
	}

	.menu-logo {
		z-index: inherit;
		width: 12vh;
	}

	@media (min-aspect-ratio: 1/1) {
		.menu-logo {
			left: 25%;
			width: 15vh;
		}
		.menu-header {
			height: 80px;
			padding: 0 10%;
			width: 80%;
		}
	}
</style>
