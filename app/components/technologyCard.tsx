"use client";
import Image from "next/image";
import Link from "next/link";
import { Technology } from "@/app/lib/definitions";
import { mavenPro } from '../fonts';


type TechnologyCardProps = {
  tech: Technology;
};

export default function TechlogyCard({tech}: TechnologyCardProps) {
  return (
        <section
          className={`p-5 min-h-120 ${tech.bgColor} duration-300 ease-out hover:scale-102 rounded-xl flex flex-col justify-between`}
        >
          <span>
            <Image
              src={tech.image}
              width={400}
              height={500}
              className="rounded-md"
              alt={`${tech.id} logo`}
            />
            <h2 className="text-2xl font-bold my-4">{tech.id}</h2>
            <p className={mavenPro.className}>{tech.description}</p>
          </span>
          <span className="flex justify-center mt-4">
            <Link
              href={`/technologies/${tech.id}`}
              className={`rounded p-2 ${tech.buttonColor} text-xl font-bold text-gray-100 hover:text-gray-300`}
            >
             Explore {tech.id} projects
            </Link>
          </span>
        </section>
  );
}