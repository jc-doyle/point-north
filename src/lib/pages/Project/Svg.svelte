<script>
  import { onMount } from "svelte";
  import { pSBC } from "$lib/tools/pSBC.js";
  import { tweened } from "svelte/motion";
  import { expoOut } from "svelte/easing";
  import { writable } from "svelte/store";
  export let data;
  let length, innerWidth;
  let tween;
  let mobile = false;

  onMount(() => {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;

    if (w / h < 1) {
      mobile = true;
    }

    var path = document.querySelector(".path");
    length = path.getTotalLength();
    if (innerWidth > 600) {
      tween = tweened(0, { duration: 40000, easing: expoOut });
      tween.set(1);
    } else {
      tween = writable(2);
    }
  });
</script>

<svelte:window bind:innerWidth />
{#if !mobile}
  <div class="path-svg">
    <svg viewBox="0 0 1060 680">
      <path
        class="path"
        style:stroke={pSBC(0.5, '#CCC')}
        style:stroke-dasharray={length}
        style:stroke-dashoffset={length - 1000 * $tween}
        d={data}
      />
    </svg>
  </div>
{/if}

<style>
  .path-svg {
    fill: none;
    stroke-dashoffset: 27000;
    position: fixed;
    bottom: 8vh;
    left: 10vw;
    height: 20vh;
    width: 60vw;
    opacity: 30%;
    z-index: -5;
  }

  @media (min-aspect-ratio: 1/1) {
    .path-svg {
      left: 0vw;
      bottom: -40vh;
      opacity: 60%;
      width: 80vw;
    }
  }
</style>
