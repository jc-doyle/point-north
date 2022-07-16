import { writable, derived } from 'svelte/store';
import { spring } from 'svelte/motion';

export const current = writable(-1)

export const x = spring(0, { stiffness: 0.2, damping: 0.8 });
export const y = spring(0, { stiffness: 0.2, damping: 0.8 });
export const width = writable(2000);
export const height = spring(2000, { stiffness: 0.2, damping: 0.8 });
export const markerWidth = spring(50, { stiffness: 0.2, damping: 0.9 });

export function setDefault() {
    x.set(100);
    y.set(-200);
    width.set(innerWidth);
    height.set(innerHeight * 2);
    markerWidth.set(50);
}
