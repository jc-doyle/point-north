import { spring } from 'svelte/motion';
import { writable } from 'svelte/store';

export const height = writable(5);
export const width = writable(90);
export const x = writable(5);
export const y = spring(3, { stiffness: 0.05, damping: 0.3 });
