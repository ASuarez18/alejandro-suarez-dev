import Image from "next/image";
import type { Metadata } from "next";

import { values, hobbies } from "@/data/about";

export const metadata: Metadata = {
  title: "About Me | Alejandro Suarez DEV",
  description:
    "Learn more about Alejandro Suarez, a Full-Stack Developer passionate about crafting scalable digital solutions, functional design, and human-centric web applications.",
};

export default function About() {
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
