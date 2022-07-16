<script>
  import {} from "./store.js";
  export let r;
</script>

<text class="bg-text" x="{r.x}px" y="{r.y}px" transform="rotate({r.r}, {r.x}, {r.y})" text-anchor="middle">{r.name}</text>
<text class="road-text" x="{r.x}px" y="{r.y}px" transform="rotate({r.r}, {r.x}, {r.y})" text-anchor="middle">{r.name}</text>

<style>
  text {
    font-size: 20px;
  }
  .road-text {
    stroke: var(--black);
  }
  .bg-text {
    stroke: var(--background);
    stroke-width: 10px;
  }
</style>
