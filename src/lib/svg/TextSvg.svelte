<script>
  import { afterUpdate, beforeUpdate, onMount } from "svelte";
  import { spring } from "svelte/motion";
  export let id;
  export let text;
  export let color;
  let elem;
  let width = spring(10, { stiffness: 0.05, damping: 0.8, precision: 1 });
  let height = 0;
  let x,
    y = 0;

  afterUpdate(() => {
    width.set(10);
    elem = document.getElementById(`${id}`);
    height = elem.getBBox().height;
    x = elem.getBBox().x;
    y = elem.getBBox().y;
    setTimeout(async () => {
      width.set(elem.getBBox().width), 200;
    });
  });
</script>

<g>
  <rect {x} {y} {height} width="{$width}px" fill={color} />
  <text {id} x="0" y="70%" fill="var(--white)">{text}</text>
</g>

<style>
  text {
    font-family: "Poiret One";
    font-size: 7vw;
    text-anchor: top;
    stroke: var(--white);
  }
</style>
