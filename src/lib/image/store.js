import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { expoOut } from 'svelte/easing';

export const active = writable(-1);
export const opacity = tweened(0, { delay: 300, duration: 500, easing: expoOut });

