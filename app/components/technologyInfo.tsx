import { mavenPro } from "@/app/fonts";
import { Projects } from "../lib/definitions";
import Image from "next/image";

interface TechnologyInfoTypes {
    projects : Projects;
}

const TechnologyInfo = ({ projects }: TechnologyInfoTypes) => {
    return (
                <section
                  className={`p-5 min-h-120 ${projects.bgColor} rounded-xl flex flex-col justify-between`}
                >
                  <span>
                    <Image
                      src={projects.image}
                      alt={`${projects.id} logo`}
                      width={400}
                      height={500}
                      className="rounded-md"
                    />
                    <h2 className="text-2xl font-bold my-4">{projects.id}</h2>
                    <p className={mavenPro.className}>{projects.description}</p>
                  </span>
                </section>
    );
}

export default TechnologyInfo;
