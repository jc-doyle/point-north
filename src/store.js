import { readable } from 'svelte/store';

const projectData = [
	{
		name: 'talbragar',
		title: 'Talbragar',
		date: '2019/20',
		location: 'Craighall, Johannesburg',
		intro: 'Launched in early 2018 as a multi-unit development of four modern and contemporary homes in a quiet cul-de-sac within Craighall. Our clients had the option of choosing from varied house designs. Homes were then pre-sold (off-plan) by mid-2018 to expectant buyers. Construction began in early 2019 a year later.',
		size: '372-501 sqm.',
		units: '4 Units Built',
		period: '12 Months to Complete',
		rooms: 'Sold Off-Plan',
		catch: 'A new benchmark in design, quality and contemporary appeal.'
	},
	{
		name: 'jameson',
		title: 'Jameson',
		date: '2013/14',
		location: 'Melrose, Johannesburg',
		intro: 'Initiated in 2013, the projects consisted of two large stands for high-end clients. Both stands had generous living & entertainment areas along with excellent modern finishes. High focus was placed on open livingspaces providing access to stunning garden landscapes.',
		size: '2974 & 1950 sqm.',
		units: '2 Units Built',
		rooms: '4 Bedrooms, all En-Suite',
		period: '12 Months to Complete',
		catch: 'A traditional feel. With high quality finishes and state-of-the-art home automation.'
	},
	{
		name: 'cawdor',
		title: 'Cawdor',
		date: '2020+',
		intro: 'Cawdor is the next and most highly anticipated development from Point North Properties to date. The land portion extent of 4200 m2 was secured in June 2020 and is planned for eight residential units with homes ranging in size from 325m2 to 460m2 under roof on stand sizes from 420m2 to 500m2. Positioned in the prime suburb of Hurlingham on a very quiet and leafy street, it is just 3 minutes from Sandton City and Hyde Park.',
		units: '8 (Projected)',
		size: '4200 sqm. total',
		location: 'Hurlingham, Johannesburg',
		catch: 'Launching in Q1 2021 … Watch this Space!'
	}
];

export const projects = readable(projectData);
