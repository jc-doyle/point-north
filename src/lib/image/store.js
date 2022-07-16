import { spring } from 'svelte/motion';
import { writable, derived } from 'svelte/store';
import { cubicInOut } from 'svelte/easing';
import { tweened } from 'svelte/motion';


export const active = writable(-1);
export const widthSpring = spring(3, { stiffness: 0.05, damping: 0.3 });
export const heightSpring = spring(3, { stiffness: 0.05, damping: 0.3 });
export const ySpring = spring(3, { stiffness: 0.05, damping: 0.3 });
export const x = derived(
  widthSpring,
  ($widthSpring) => (100 - $widthSpring) / 2
);
