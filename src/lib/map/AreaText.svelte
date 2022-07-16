<script>
  import {} from "./store.js";
  export let a;
</script>

<text class="bg-text" x="{a.x}px" y="{a.y}px" stroke-alignment>{a.name}</text>
<text class="area-text" x="{a.x}px" y="{a.y}px" stroke-alignment>{a.name}</text>

<style>
  text {
    font-size: 40px;
    background-color: var(--background);
  }

  .area-text {
    font-size: 40px;
    stroke: var(--black);
  }
  .bg-text {
    stroke: var(--background);
    stroke-width: 10px;
  }
</style>
