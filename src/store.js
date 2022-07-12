import { tweened } from 'svelte/motion';
import { readable } from 'svelte/store';
import { interpolateRgb } from 'd3-interpolate';

const colorList = [
	{ name: 'about', color: '#85ADA1' },
	{ name: 'talbragar', color: '#7C93A8' },
	{ name: 'jameson', color: '#B48683' },
	{ name: 'cawdor', color: '#9D90AD' }
];

export const pageColor = tweened(colorList[0].color, { interpolate: interpolateRgb }, 100);
export const colors = readable(colorList);
