"use server";
import { Technology } from '@/app/lib/definitions';
import { Projects } from '@/app/lib/definitions';
import sql from '@/app/lib/db';


export async function fetchAllTechs() : Promise <Technology[]> {
    const res = await sql`SELECT * FROM technologies ORDER BY sort_order`;
    if (res.length === 0) {
        return [];
}

const technologies: Technology[] = res.map(
    (row) => ({
    id: row.id,
    description: row.description,
    image: row.image,
    bgColor: row.bg_color,
    buttonColor: row.button_color,
    sort_order: row.sort_order,
}));
return technologies;
}

export async function fetchAllProjects() : Promise <Projects[]> {
    const res = await sql`  SELECT * FROM projects ORDER BY sort_order`;
  if (res.length === 0) {
    return [];
  }

  const projects: Projects[] = res.map((row) => ({
    id: row.id,
    description: row.description,
    image: row.image,
    bgColor: row.bg_color,
    buttonColor: row.button_color,
    sort_order: row.sort_order,
  }));

  return projects;

}

export async function fetchProjectsByTech(techId: string) : Promise <Projects[]> {
  const res = await sql`SELECT * FROM projects WHERE technology_id = ${techId} ORDER BY sort_order`;
  
  if (res.length === 0) {
    return [];
  }

  const projects: Projects[] = res.map((row) => ({
    id: row.id,
    description: row.description,
    image: row.image,
    bgColor: row.bg_color,
    buttonColor: row.button_color,
    sort_order: row.sort_order,
  }));

  return projects;
}

export async function addTechnology(formData: FormData) {
  const id = formData.get('id') as string;
  const description = formData.get('description') as string;
  const image = formData.get('image') as string;
  const bgColor = formData.get('bgColor') as string;
  const buttonColor = formData.get('buttonColor') as string;

  const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  await sql`
    INSERT INTO technologies (id, description, image, bg_color, button_color)
    VALUES (${capitalizeFirst(id)}, ${capitalizeFirst(description)}, ${image}, ${bgColor}, ${buttonColor})
  `;
}

export async function addProject(formData: FormData) {
  const id = formData.get('id') as string;
  const technologyId = formData.get('technologyId') as string;
  const description = formData.get('description') as string;
  const image = formData.get('image') as string;
  const bgColor = formData.get('bgColor') as string;
  const buttonColor = formData.get('buttonColor') as string;
  
  const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  await sql`
  INSERT INTO projects (
    id,
    description,
    image,
    bg_color,
    button_color,
    technology_id
  )
  VALUES (
    ${capitalizeFirst(id)},
    ${description},
    ${image},
    ${bgColor},
    ${buttonColor},
    ${technologyId}              
  )
  `;
}