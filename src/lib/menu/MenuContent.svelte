<script>
	import { isOpen } from './store.js';
	import MenuItems from './MenuItems.svelte';
	import { spring } from 'svelte/motion';

	let open;
	isOpen.subscribe((o) => (open = o));
</script>

<div class="menu-items" >
  <MenuItems hoverSpring={hoverSpring}/>
</div>

<style>
  .menu-items {
    position: inherit;
    width: inherit;
    display: flex;
    flex-direction: row;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
	.open {
	}
</style>
