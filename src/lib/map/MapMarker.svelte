<script>
  import { x, y, height, markerWidth, current, setDefault } from "./store.js";
  export let p;

  function handleClick() {
    console.log("a")
    if ($current === p.name) {
      current.set(-1)
      setDefault();
    } else {
      current.set(p.name)
      height.set(innerHeight);
      markerWidth.set(20);
      if (p.name == 'jameson') {
        x.set(p.x-500);
        y.set(p.y-700);
      } else {
        x.set(p.x-200);
        y.set(p.y-500);
      }
    }
  }

</script>

<rect on:click={handleClick} x="{p.x}px" y="{p.y}px" width="{$markerWidth}px" height="{$markerWidth}px" />
