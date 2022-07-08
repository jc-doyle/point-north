import { spring } from 'svelte/motion';

export const imageSpringWidth = spring(3, { stiffness: 0.05, damping: 0.3 });
export const imageSpringHeight = spring(3, { stiffness: 0.05, damping: 0.3 });
