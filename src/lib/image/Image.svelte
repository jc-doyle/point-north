<script>
	import { active } from './store.js';
  import { onMount } from 'svelte';

	export let name;
	export let i;

	let img;
	let y;

  onMount(() => {
    img.style.opacity = 0
    handleScroll()
  })

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY
    };
  }

  function handleScroll() {
    let MARGIN = document.documentElement.clientHeight * 0.82;
    console.log(y);
    let pos = getOffset(img);
    console.log(pos);

    if (y + MARGIN > pos.y && img.style.opacity != 1) {
      img.style.opacity = 1;
    }
  }

	function handleClick() {
		if ($active != i) {
			active.set(i);
		} else {
			active.set(-1);
		}
	}

	function handleHover() {}
</script>

<svelte:window bind:scrollY={y} on:scroll={handleScroll} />
<div class="image" >
	<img
    bind:this={img}
		on:mouseover={handleHover}
		on:focus={handleHover}
		on:click={handleClick}
		on:keydown={handleClick}
		width="80%"
		id="{name}{i}"
		alt="{name}{i}"
		src="/images/{name}/{name}-{i}.jpg"
	/>
</div>

<style>
	.image {
		justify-content: center;
		align-items: center;
		display: flex;
		position: relative;
		margin-bottom: 8%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	}

	img {
		cursor: pointer;
		object-fit: cover;
    border: 1px solid var(--black);
		transition: opacity 1s ease-in, border 0.5s;
	}

  img:hover {
    box-shadow: 0 0 5px var(--grey);
  }

	@media (min-aspect-ratio: 1/1) {
		img {
			margin-bottom: 8vh;
		}
	}
</style>
