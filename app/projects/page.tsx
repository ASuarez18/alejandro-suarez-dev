import Image from "next/image";
import type { Metadata } from "next";

import { getProjects } from "@/lib/projects";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import openInNewIcon from "@/public/images/icons/open-in-new.svg";

export const metadata: Metadata = {
  title: "Featured Projects | Alejandro Suarez DEV",
  description:
    "A collection of web development work ranging from full-stack React applications to high-performance frontend interfaces and responsive designs.",
};

export const revalidate = 60;

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <header className="flex! flex-col! items-start! justify-center!">
        <h1 className="font-semibold!">
          Selected <span>Work</span>
        </h1>
        <p className="text-text-color! text-lg! tracking-wide font-normal! font-secondary!">
          A collection of web development work ranging from full-stack React
          applications to high-performance web experiences.
        </p>
      </header>

      <main>
        <div className="project-container">
          {projects.map((project) => {
            const fields = project.fields;
            const imageUrl = fields.thumbnail?.fields?.file?.url
              ? `https:${fields.thumbnail.fields.file.url}`
              : "";
            return (
              <div key={project.sys.id} className="project-card">
                <Image
                  src={imageUrl}
                  alt={fields.title}
                  width={500}
                  height={300}
                  className="showcase-img"
                />
                <div className="project-content">
                  <ul className="project-keys justify-start!">
                    {fields.technologies?.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <h4>{fields.title}</h4>
                  <div className="project-desc">
                    {documentToReactComponents(fields.description)}
                  </div>
                  <a
                    href={fields.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site{" "}
                    <Image src={openInNewIcon} alt="" width={16} height={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
