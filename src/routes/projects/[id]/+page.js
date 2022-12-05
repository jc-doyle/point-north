const projects = [
	{
		name: 'talbragar',
		title: 'Talbragar',
		date: '2019/20',
		location: 'Craighall, Johannesburg',
    intro: 'Launched as a multi-unit development of 4 spacious and modern homes in a quiet cul-de-sac within the Suburbs of Craighall.',
    tagline: 'A contemporary appeal. Clients had the option of choosing from varied house designs.',
		land: '5000',
		units: '4',
		size: '372-501',
		period: "12 Months to Develop",
    options: 'Developed Off-Plan',
    imagecount: Array(6),
    files: [{name: "Detailed Description", file:"description.pdf"}, {name: "Site Plan", file:"site-plan.pdf"}]
	},
	{
		name: 'jameson',
		title: 'Jameson',
		date: '2013-14',
		location: 'Melrose, Johannesburg',
    intro: 'These projects consisted of 2 large stands for high-end clientele. Both stands had generous living & entertainment areas complemented with state-of-the-art finishes.',
    tagline: 'A traditional feel. Clients had substantial control over finishes and design.',
		land: '5000',
		size: '600-800',
		units: '2',
		period: "12 Months to Develop",
    options: 'Client Specific',
    imagecount: Array(4),
    files: [{name: "Floor Plan", file:"floor-plan.pdf"}, {name: "North Elevation", file:"elevation.pdf"}]
	},
	{
		name: 'cawdor',
		title: 'Cawdor',
		date: 'Under Development',
    intro: 'Positioned in the prime suburb of Hurlingham on a very quiet and leafy street, minutes away from prime metropolitan areas.',
    tagline: 'Construction is scheduled to complete in 2023. Enquire for availability.',
		land: '5000',
		units: '6',
		size: '350-600',
		period: 'Currently Under Development',
		location: 'Hurlingham, Johannesburg',
    options: 'Off-Plan',
    imagecount: Array(6),
    files: [{name: "Site Plan", file:"site-plan.pdf"}, {name: "Brochure", file:"brochure.pdf"}]
	}
];

import fs from 'fs/promises'; 
export async function load({ params }) {
  const project = projects.find(project => project.name == params.id)
  return project
}
