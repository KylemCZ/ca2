import Image from "next/image";
import { mavenPro } from "@/app/fonts";
import { web } from "@/app/data/technologies";

export default function Home() {
  return (
      <main className="w-4/5 mx-auto my-4 flex flex-col items-center">
      <div id="intro-container" className="w-11/12 sw:w-3/5 bg-cyan-950 p-4 rounded-2xl border-solid border-4 border-emerald-400">
        <h1 className="text-4xl font-bold my-4">Learn to code with <span className="text-emerald-400">Web</span></h1>
        <p className={`${mavenPro.className}`}>Begin your adventure in digital making, by learning to code animations, stories, and games in Scratch.</p>
      </div>
      <article id="article-container" className="mx-5 my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {web.map((web) => (
        <section
          key={web.id}
          className={`p-5 min-h-120 ${web.bgColor} rounded-xl flex flex-col justify-between`}
        >
          <span>
            <Image
              src={web.image}
              width={400}
              height={500}
              className="rounded-md"
              alt={web.imageAlt}
            />
            <h2 className="text-2xl font-bold my-4">{web.title}</h2>
            <p className={mavenPro.className}>{web.description}</p>
          </span>
        </section>
      ))}
      </article>
      </main>
  );
}
