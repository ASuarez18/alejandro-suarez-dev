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
  return (
    <>
      <header>
        <h1>
          About <span>Me</span>
        </h1>
        <p>Designer, Developer &amp; Lifelong Learner</p>
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
          between complex technology and human emotion. Whether it&apos;s crafting a
          comprehensive brand identity or architecting a user-centric SaaS
          platform, my approach remains the same: listen deeply, prototype
          quickly, and refine obsessively.
        </p>

        <hr />

        <section className="values">
          <h2>Values &amp; Philosophy</h2>
          <div className="values-container">
            <div className="value-item">
              <h3>
                <Image
                  src={bulbIcon}
                  alt="Lightbulb Icon"
                  width={24}
                  height={24}
                />
                Clarity First
              </h3>
              <p>
                Design should simplify, not complicate. I strive for clarity in
                every interface and communication.
              </p>
            </div>

            <div className="value-item">
              <h3>
                <Image
                  src={heartIcon}
                  alt="Heart Icon"
                  width={24}
                  height={24}
                />
                Empathy Always
              </h3>
              <p>
                Understanding the user&apos;s struggle is the first step toward
                creating a meaningful solution.
              </p>
            </div>

            <div className="value-item">
              <h3>
                <Image
                  src={wandIcon}
                  alt="Magic Wand Icon"
                  width={24}
                  height={24}
                />
                Continuous Growth
              </h3>
              <p>
                The digital landscape never stops evolving, and neither do I.
                Learning is a daily practice.
              </p>
            </div>
          </div>
        </section>

        <hr />

        <section className="hobbies">
          <h2>Beyond the Screen</h2>
          <div className="hobbies-container">
            <div className="hobbie">
              <h3>
                <Image
                  src={videogameIcon}
                  alt="Videogame icon"
                  width={24}
                  height={24}
                />
                Gaming Enthusiast
              </h3>
              <p>
                I find inspiration in the immersive worlds of video games, where
                storytelling and interactivity converge.
              </p>
            </div>

            <div className="hobbie">
              <h3>
                <Image
                  src={musicIcon}
                  alt="Music icon"
                  width={24}
                  height={24}
                />
                Music Enjoyer
              </h3>
              <p>
                Music is my creative fuel, whether I&apos;m exploring new genres or
                attending live concerts to experience the energy of a shared
                moment.
              </p>
            </div>

            <div className="hobbie">
              <h3>
                <Image
                  src={bookIcon}
                  alt="Book icon"
                  width={24}
                  height={24}
                />
                Avid Reader
              </h3>
              <p>
                From design theory to science fiction, reading expands my
                perspective and sparks new ideas that I bring into my work.
              </p>
            </div>
          </div>
        </section>

        <section className="get-in-touch">
          <h2>Want to work together?</h2>
          <p>
            I&apos;m currently open to new projects and interesting collaborations.
            Let&apos;s create something remarkable.
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
              href="/assets/Alejandro_Suarez.pdf"
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