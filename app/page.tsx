import Image from "next/image";
import Link from "next/link";
import { mavenPro } from './fonts';
import { technologies } from "./data/technologies";



export default function Home() {
  return (
      <main className="w-4/5 mx-auto my-4 flex flex-col items-center">
      <div id="intro-container" className="w-11/12 sw:w-3/5 bg-cyan-950 p-4 rounded-2xl border-solid border-4 border-emerald-400">
        <h1 className="text-4xl font-bold my-4">Learn to code with <span className="text-emerald-400">Code Club</span></h1>
        <p className={`${mavenPro.className}`}>Our projects have step-by-step instruction to teach you how to create games, animations, and much more. Choose from hundreds of options, in up to 30 languages</p>
      </div>
      <article id="article-container" className="mx-5 my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech) => (
        <section
          key={tech.id}
          className={`p-5 min-h-120 ${tech.bgColor} rounded-xl flex flex-col justify-between`}
        >
          <span>
            <Image
              src={tech.image}
              width={400}
              height={500}
              className="rounded-md"
              alt={tech.imageAlt}
            />
            <h2 className="text-2xl font-bold my-4">{tech.title}</h2>
            <p className={mavenPro.className}>{tech.description}</p>
          </span>
          <span className="flex justify-center mt-4">
            <Link
              href={tech.link}
              className={`rounded p-2 ${tech.buttonColor} text-xl font-bold text-gray-100 hover:text-gray-300`}
            >
              {tech.buttonText}
            </Link>
          </span>
        </section>
      ))}
      </article>
      </main>
  );
}
