import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

import bulbIcon from "@/public/images/icons/bulb-icon.svg";
import heartIcon from "@/public/images/icons/heart-icon.svg";
import wandIcon from "@/public/images/icons/wand-icon.svg";
import videogameIcon from "@/public/images/icons/videogame-icon.svg";
import musicIcon from "@/public/images/icons/music-icon.svg";
import bookIcon from "@/public/images/icons/book-icon.svg";

export const metadata: Metadata = {
  title: "About Me | Alejandro Suarez DEV",
  description:
    "Learn more about Alejandro Suarez, a Full-Stack Developer passionate about crafting scalable digital solutions, functional design, and human-centric web applications.",
};

export default function About() {
  const values = [
    {
      icon: bulbIcon,
      alt: "Lightbulb Icon",
      title: "Clarity First",
      description:
        "Design should simplify, not complicate. I strive for clarity in every interface and communication.",
    },
    {
      icon: heartIcon,
      alt: "Heart Icon",
      title: "Empathy Always",
      description:
        "Understanding the user's struggle is the first step toward creating a meaningful solution.",
    },
    {
      icon: wandIcon,
      alt: "Magic Wand Icon",
      title: "Continuous Growth",
      description:
        "The digital landscape never stops evolving, and neither do I. Learning is a daily practice.",
    },
  ];

  const hobbies = [
    {
      icon: videogameIcon,
      alt: "Videogame Icon",
      title: "Gaming Enthusiast",
      description:
        "I find inspiration in the immersive worlds of video games, where storytelling and interactivity converge.",
    },
    {
      icon: musicIcon,
      alt: "Music Icon",
      title: "Music Enjoyer",
      description:
        "Music is my creative fuel, whether I'm exploring new genres or attending live concerts to experience the energy of a shared moment.",
    },
    {
      icon: bookIcon,
      alt: "Book Icon",
      title: "Avid Reader",
      description:
        "From design theory to science fiction, reading expands my perspective and sparks new ideas that I bring into my work.",
    },
  ];
  return (
    <>
      <header className="flex! flex-col! items-center lg:items-start justify-center text-center">
        <h1 className="font-semibold ">
          About <span>Me</span>
        </h1>
        <p className="pt-0!">Designer, Developer &amp; Lifelong Learner</p>
      </header>

      <main>
        <p className="about-p">
          With over a decade of experience in the creative industry, I&apos;ve
          dedicated my career to blending aesthetics with functional design. My
          journey began in a small coastal town where nature inspired my early
          sketches, leading me to work with global brands today. I believe that
          every pixel should serve a purpose and every interaction should feel
          intuitive.
        </p>

        <p className="about-p">
          Currently, I focus on building digital experiences that bridge the gap
          between complex technology and human emotion. Whether it&apos;s
          crafting a comprehensive brand identity or architecting a user-centric
          SaaS platform, my approach remains the same: listen deeply, prototype
          quickly, and refine obsessively.
        </p>

        <hr />

        <section className="values px-0! py-6.25!">
          <h2 className="font-semibold">Values &amp; Philosophy</h2>
          <div className="values-container">
            {values.map((value, index) => (
              <div className="value-item" key={index}>
                <h3 className="font-medium tracking-wide">
                  <Image
                    src={value.icon}
                    alt={value.alt}
                    width={24}
                    height={24}
                  />
                  <span className="text-left">{value.title}</span>
                </h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr />

        <section className="hobbies px-0! py-6.25!">
          <h2 className="font-semibold">Beyond the Screen</h2>
          <div className="hobbies-container">
            {hobbies.map((hobbie, index) => (
              <div className="hobbie" key={index}>
                <h3 className="font-medium tracking-wide">
                  <Image
                    src={hobbie.icon}
                    alt={hobbie.alt}
                    width={24}
                    height={24}
                  />
                  <span className="text-left">{hobbie.title}</span>
                </h3>
                <p>{hobbie.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="get-in-touch">
          <h2 className="font-semibold text-3xl!">Want to work together?</h2>
          <p>
            I&apos;m currently open to new projects and interesting
            collaborations. Let&apos;s create something remarkable.
          </p>
          <div className="get-in-touch-buttons">
            <a
              href="https://www.linkedin.com/in/alejandrosuarezgonzalez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get In Touch -&gt;
            </a>
            <a
              href="/assets/AlejandroSuarez_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume &darr;
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
