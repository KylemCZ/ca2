import { mavenPro } from "@/app/fonts";
import { fetchProjectsByTech } from "@/app/action/fetch";
import TechnologyInfo from "@/app/components/technologyInfo";
import Add from "@/app/components/addProjectCard";

export default async function TechnologyPage({ 
  params, 
}: { 
  params: Promise<{ id: string }>;
  searchParams: Promise<{ success?: string }>;
}) {
  //params to get the technology ID from the URL
  const { id } = await params;

  //fetch projects matching this specific technology
  const projects = await fetchProjectsByTech(id);

  return (
      <div className="w-3/4 mx-auto my-4 flex flex-col items-center">
      <div id="intro-container" className="w-11/12 sw:w-3/5 bg-cyan-950 p-4 rounded-2xl border-solid border-4 border-emerald-400">
        <h1 className="text-4xl font-bold my-4">Learn to code with <span className="text-emerald-400">{ id }</span></h1>
        <p className={`${mavenPro.className}`}>Our projects have step-by-step instruction to teach you how to create games, animations, and much more. Choose from hundreds of options, in up to 30 languages</p>
      </div>
      <article id="article-container" className="min-w-full mx-5 my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((tech) => (
          <TechnologyInfo key={tech.id} projects={tech} />
        ))}
        <Add id={id}/>
      </article>
      </div>
  );
}
