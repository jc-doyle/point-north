<script>
  import { cubicInOut } from "svelte/easing";
  import { spring, tweened } from "svelte/motion";
  import { active, heightSpring, widthSpring, ySpring } from "./store.js";

  export let name;
  export let i;

  const imageTween = spring(60, { stiffness: 0.05, damping: 0.3, precision: 0.5 });

  function setSpring() {}

  active.subscribe(() => {
    if ($active === i) {
      imageTween.set(100)
    } else {
      imageTween.set(60)
    }
  })

  function handleClick() {
    if ($active != i) {
      active.set(i);
    } else {
      active.set(-1);
    }
    console.log($active);
  }

  function handleExit() {
    active.set(-1);
  }
</script>

<div class="image" on:mouseout={handleExit} on:mouseenter={setSpring} on:click={handleClick}>
  <img
    width="{$imageTween}%"
    id="{name}{i}"
    alt="{name}{i}"
    src="/images/{name}/{i}"
  />
</div>

<style>
  img {
    position: relative;
    margin-bottom: 10vw;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 600px) {
    img {
      margin-bottom: 3vw;
    }
  }
</style>
