import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

import "@/app/globals.css";
import "@/styles/pages/projects.css";

import weatherForecastImg from "@/public/images/media/weather-forecat.png";
import auraArcImg from "@/public/images/media/aura-arc.png";
import carlaBeautyImg from "@/public/images/media/carla-beauty.png";
import minimalissimoImg from "@/public/images/media/minimalissimo.png";
import hungryGuysImg from "@/public/images/media/hungry-guys-kitchen.png";
import myFirstPageImg from "@/public/images/media/my-first-page.png";
import openInNewIcon from "@/public/images/icons/open-in-new.svg";

export const metadata: Metadata = {
  title: "Featured Projects | Alejandro Suarez DEV",
  description:
    "A collection of web development work ranging from full-stack React applications to high-performance frontend interfaces and responsive designs.",
};

export default function Projects() {
  return (
    <>
      <header>
        <h1>
          Selected <span>Work</span>
        </h1>
        <p>
          A collection of web development work ranging from full-stack React
          applications to high-performance web experiences.
        </p>
      </header>

      <main>
        <div className="project-container">
          <div className="project-card">
            <Image
              src={weatherForecastImg}
              alt="Weather Forecast project preview"
              className="showcase-img"
            />
            <div className="project-content">
              <ul className="project-keys">
                <li>Astro</li>
                <li>TailwindCSS</li>
                <li>Fetch API</li>
              </ul>
              <h4>Weather Forecast</h4>
              <p>
                Acted as Project Captain for a collaborative weather application
                built with Astro and TailwindCSS. Architected the repository
                workflow, established global styling tokens, and integrated
                multiple third-party APIs (Open-Meteo and PlaceKit
                Autocomplete). Led the final code integration and ensured a fully
                responsive mobile and desktop UI.
              </p>
              <a
                href="https://weather-forecats.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site{" "}
                <Image
                  src={openInNewIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>

          <div className="project-card">
            <Image
              src={auraArcImg}
              alt="Aura & Arc project preview"
              className="showcase-img"
            />
            <div className="project-content">
              <ul className="project-keys">
                <li>Astro</li>
                <li>Typescript</li>
                <li>TailwindCSS</li>
              </ul>
              <h4>Aura &amp; Arc</h4>
              <p>
                A performance-focused product listing and detail website built
                individually using Astro and strict TypeScript. Leveraged
                Object-Oriented Programming (OOP) to abstract JSON data into
                robust data models, implementing custom component architecture and
                dynamic routing without external UI frameworks.
              </p>
              <a
                href="https://aura-arc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site{" "}
                <Image
                  src={openInNewIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>

          <div className="project-card">
            <Image
              src={carlaBeautyImg}
              alt="Carla Beauty project preview"
              className="showcase-img"
            />
            <div className="project-content">
              <ul className="project-keys">
                <li>HTML5</li>
                <li>SCSS</li>
                <li>Figma</li>
              </ul>
              <h4>Carla Beauty</h4>
              <p>
                A responsive multi-page beauty website built from a Figma mockup
                using semantic HTML, SCSS, and vanilla JavaScript. Led the
                development team, managed Git workflows, and personally drove the
                UI layout and styling for key pages, ensuring high design accuracy
                without external CSS frameworks.
              </p>
              <a
                href="https://hello-beauty.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site{" "}
                <Image
                  src={openInNewIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>

          <div className="project-card">
            <Image
              src={minimalissimoImg}
              alt="Minimalissimo project preview"
              className="showcase-img"
            />
            <div className="project-content">
              <ul className="project-keys">
                <li>Flexbox</li>
                <li>Grid</li>
              </ul>
              <h4>Minimalissimo</h4>
              <p>
                A minimalist magazine-style landing page inspired by modern
                editorial design. Built using Flexbox and CSS Grid to create a
                responsive layout with clean typography and structured content
                sections.
              </p>
              <a
                href="https://minimalissimo.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site{" "}
                <Image
                  src={openInNewIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>

          <div className="project-card">
            <Image
              src={hungryGuysImg}
              alt="Hungry Guys Kitchen project preview"
              className="showcase-img"
            />
            <div className="project-content">
              <ul className="project-keys">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <h4>Hungry Guys Kitchen</h4>
              <p>
                A restaurant landing page designed to showcase menu items and
                brand identity. Developed using HTML and CSS with a focus on
                layout structure, visual hierarchy, and responsive design.
              </p>
              <a
                href="https://hungry-guys-kitchen.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site{" "}
                <Image
                  src={openInNewIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>

          <div className="project-card">
            <Image
              src={myFirstPageImg}
              alt="My First Page project preview"
              className="showcase-img"
            />
            <div className="project-content">
              <ul className="project-keys">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <h4>My First Page</h4>
              <p>
                My first web development project, created to practice the
                fundamentals of HTML and CSS. It focuses on basic page structure,
                styling, and understanding how websites are built from scratch.
              </p>
              <a
                href="https://alejandro-first-page.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site{" "}
                <Image
                  src={openInNewIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}