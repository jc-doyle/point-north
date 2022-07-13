import { spring } from 'svelte/motion';
import { writable, derived } from 'svelte/store';

export const widthSpring = spring(3, { stiffness: 0.05, damping: 0.3 });
export const heightSpring = spring(3, { stiffness: 0.05, damping: 0.3 });
export const ySpring = spring(3, { stiffness: 0.05, damping: 0.3 });
export const x = derived(widthSpring, $widthSpring => (100 - $widthSpring)/2);
