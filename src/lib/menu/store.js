import { writable } from 'svelte/store';
import { spring } from 'svelte/motion';

export const isOpen = writable(0);
export const hoverSpring = spring(0, { stiffness: 0.05, damping: 0.3 });
