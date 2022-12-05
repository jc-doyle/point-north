import { writable } from 'svelte/store';
import { spring } from 'svelte/motion';

export const isOpen = writable(0);
export const menuSpringY = spring(0, { stiffness: 0.1, damping: 0.6 });
export const menuSpringWidth = spring(3, { stiffness: 0.08, damping: 0.3 });
export const menuOpacity = spring(0, { stiffness: 0.2, damping: 0.9 });
export const menuHeight = spring(0, { stiffness: 0.2, damping: 0.9 });
