const projects = [
	{
		name: 'talbragar',
	},
	{
		name: 'jameson',
	},
	{
		name: 'cawdor',
	}
];

import fs from 'fs/promises'; 
export async function get({ params }) {
  const project = projects.find(project => project.name == params.id)
  const asset = await fs.readFile(`assets/images/${project.name}/${project.name}-${params.image}.jpg`);

  if (project) {
    return {
      headers: {
            "Content-Type": "image/jpeg"
        },
      body: asset
    };
  }
 
  return {
    status: 404
  };
}
