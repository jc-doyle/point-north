import { writable } from 'svelte/store';
import { spring } from 'svelte/motion';

export const isOpen = writable(0);
export const hoverSpringHeight = spring(0, { stiffness: 0.05, damping: 0.3 });
export const hoverSpringWidth = spring(3, { stiffness: 0.05, damping: 0.3 });
