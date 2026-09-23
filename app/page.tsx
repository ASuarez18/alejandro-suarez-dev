import React from "react";
import Image from "next/image";
import Link from "next/link";

import "@/app/globals.css";

import "@/styles/pages/home.css";

import meSmiling from "@/public/images/portraits/me-smiling.jpg";
import codeLogo from "@/public/images/icons/code_logo.svg";
import softSkillsLogo from "@/public/images/icons/soft-skills.svg";
import weatherForecastImg from "@/public/images/media/weather-forecat.png";
import auraArcImg from "@/public/images/media/aura-arc.png";
import carlaBeautyImg from "@/public/images/media/carla-beauty.png";
import openInNewIcon from "@/public/images/icons/open-in-new.svg";
import mailIcon from "@/public/images/icons/mail.svg";
import phoneIcon from "@/public/images/icons/phone.svg";

export default function Home() {
  return (
    <>
      <header>
        <div>
          <div className="available-work">
            <span className="heartbeat">•</span> Available to work
          </div>
          <h1 className="i-am">
            Hi, I&apos;m <span>Alex!</span>
          </h1>
          <p>
            A Passionate Full-Stack Developer specializing in building
            high-performance web applications and exceptional digital
            experiences.
          </p>
          <div className="header-buttons">
            <Link href="/experience" className="my-work-btn">
              View My Work
            </Link>
            <Link href="#connect" className="contact-btn">
              Let&apos;s talk
            </Link>
          </div>
        </div>
        <figure>
          <Image
            src={meSmiling}
            alt="Alex giving a big smile"
            priority
          />
        </figure>
      </header>

      <main>
        <hr />
        <section className="about-me">
          <div className="metrics">
            <div>
              <p className="number-metric">+2</p>
              <p className="metric-text">Years Experience</p>
            </div>
            <div>
              <p className="number-metric-white">7</p>
              <p className="metric-text">Projects Completed</p>
            </div>
            <div>
              <p className="number-metric-white">3</p>
              <p className="metric-text">Awards Won</p>
            </div>
            <div>
              <p className="number-metric">100%</p>
              <p className="metric-text">Client Satisfaction</p>
            </div>
          </div>
          <div className="about-info">
            <h2>ABOUT ME</h2>
            <h3>
              Crafting scalable digital solutions with a human-centric approach
            </h3>
            <p>
              I am a dedicated Full-Stack Developer with a passion for building
              scalable web applications and elegant user experiences. With a
              background in computer science and years of hands-on experience, I
              thrive on solving complex problems.
            </p>
            <p>
              My approach combines technical excellence with a deep understanding
              of user needs, ensuring that every project I touch is not only
              functional but also intuitive and delightful to use.
            </p>
          </div>
        </section>

        <hr />

        <section className="skills">
          <h2>EXPERTISE</h2>
          <h3>Technical Arsenal</h3>
          <div className="skills-container">
            <div className="hard-skills">
              <h4>
                <Image src={codeLogo} alt="Coding icon" width={24} height={24} />
                Hard Skills
              </h4>
              <ul className="skills-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Git &amp; GitHub</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>TypeScript</li>
                <li>Astro</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>Data Structures &amp; Algorithms</li>
                <li>Docker</li>
                <li>Express.js</li>
                <li>API Rest</li>
                <li>CRUD Operations</li>
                <li>PostgreSQL</li>
                <li>Jest</li>
                <li>Supabase</li>
              </ul>
            </div>
            <div className="soft-skills">
              <h4>
                <Image
                  src={softSkillsLogo}
                  alt="Speaking Icon"
                  width={24}
                  height={24}
                />
                Soft Skills
              </h4>
              <ul className="skills-list">
                <li>Project Planning</li>
                <li>Prioritization</li>
                <li>Adaptability</li>
                <li>Motivational Leadership</li>
                <li>Active Listening</li>
                <li>Critical Thinking</li>
                <li>Clear Communication</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
                <li>Problem Solving</li>
                <li>Team Leadership</li>
                <li>Conflict Resolution</li>
                <li>Agile Methodologies</li>
                <li>Emotional Intelligence</li>
              </ul>
            </div>
          </div>
        </section>

        <hr />

        <section className="featured-projects">
          <div className="projects-headline">
            <div>
              <h2>PORTFOLIO</h2>
              <h3>Featured Projects</h3>
            </div>
            <Link href="/projects">View All Projects -&gt;</Link>
          </div>
          <div className="projects-container">
            <div className="project-card">
              <Image
                src={weatherForecastImg}
                alt="Weather Forecast Project"
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
                  Autocomplete). Led the final code integration and ensured a
                  fully responsive mobile and desktop UI.
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
                alt="Aura & Arc Project"
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
                  robust data models, implementing custom component architecture
                  and dynamic routing without external UI frameworks.
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
                alt="Carla Beauty Project"
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
                  A responsive multi-page beauty website built from a Figma
                  mockup using semantic HTML, SCSS, and vanilla JavaScript. Led
                  the development team, managed Git workflows, and personally
                  drove the UI layout and styling for key pages, ensuring high
                  design accuracy without external CSS frameworks.
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
          </div>
        </section>

        <hr />

        <section className="connect" id="connect">
          <div className="connect-info">
            <h2>CONNECT</h2>
            <h3>Let&apos;s work together</h3>
            <p>
              I&apos;m always open to discussing new projects, collaboration
              opportunities, or tech-related conversations. If you have an
              idea, a question, or just want to connect, feel free to reach out.
            </p>
            <div className="contact-medium">
              <div className="img-medium">
                <Image src={mailIcon} alt="Email icon" width={24} height={24} />
              </div>
              <div className="medium-info">
                <h4>EMAIL ME</h4>
                <a href="mailto:alejandro.sg.1825@gmail.com">
                  alejandro.sg.1825@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-medium">
              <div className="img-medium">
                <Image src={phoneIcon} alt="Phone icon" width={24} height={24} />
              </div>
              <div className="medium-info">
                <h4>CALL ME</h4>
                <a href="tel:+17785139439">+1 (778) 513-9439</a>
              </div>
            </div>
          </div>

          <form className="send-message-form">
            <div className="name-email">
              <div className="name-input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="email-input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="message-input">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}