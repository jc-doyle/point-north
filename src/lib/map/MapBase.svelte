<script>
  import MapMarker from "./MapMarker.svelte";
  import RoadText from "./RoadText.svelte";
  import AreaText from "./AreaText.svelte";

  import { onMount } from "svelte";
  import { map } from "./map-data.js";
  import { points, roads, areas } from "./map-points.js";
  import { x, y, width, height, markerWidth, setDefault, current } from "./store.js";

  let innerWidth, innerHeight;

  onMount(setDefault);
  function handleClick() {
    if ($current != -1) {
      console.log("h")
      setDefault();
    }
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight/>
<svg on:click={handleClick} viewBox="{$x} {$y} {$width} {$height}">
  <path fill="none" stroke="var(--grey)" d={map.highway} />
  <path fill="none" stroke="var(--grey2)" d={map.residential} />
  {#each points as p}
    <MapMarker {p} />
  {/each}
  {#each roads as r}
    <RoadText {r} />
  {/each}
  {#each areas as a}
    <AreaText {a} />
  {/each}
</svg>

<style>
  svg {
    position: absolute;
    height: 100vh;
    left: 38vw;
    z-index: -5;
  }
</style>
