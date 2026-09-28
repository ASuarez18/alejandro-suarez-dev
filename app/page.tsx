import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

import "@/app/globals.css";

import meSmiling from "@/public/images/portraits/me-smiling.jpg";
import codeLogo from "@/public/images/icons/code_logo.svg";
import softSkillsLogo from "@/public/images/icons/soft-skills.svg";
import mailIcon from "@/public/images/icons/mail.svg";
import phoneIcon from "@/public/images/icons/phone.svg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const hardSkills: string[] = ["TypeScript", "JavaScript (ES6+)", "Next.js", "Node.js", "Express.js", "Astro", "Tailwind CSS", "PostgreSQL", "Neon Database", "MongoDB", "Prisma ORM", "Contentful CMS", "RESTful APIs", "Git & GitHub", "Docker", "Vercel", "Netlify", "Figma", "HTML5 & CSS3", "Responsive Design", "Data Structures & Algorithms"];
const softSkills = ["Project Planning", "Prioritization", "Adaptability", "Motivational Leadership", "Active Listening", "Critical Thinking", "Clear Communication", "Team Collaboration", "Time Management", "Problem Solving", "Team Leadership", "Conflict Resolution", "Agile Methodologies", "Emotional Intelligence"]


export default async function Home() {
  const projects = await getProjects();
  const firstThreeProjects = projects.slice(0, 3);

  return (
    <>
      <header>
        <div>
          <div className="available-work">
            <span className="heartbeat">•</span> Available to work
          </div>
          <h1 className="i-am font-semibold">
            Hi, I&apos;m <span>Alex!</span>
          </h1>
          <p className="text-text-color! tracking-wide font-normal! font-secondary!">
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
            <h2 className="font-semibold">ABOUT ME</h2>
            <h3 className="font-semibold">
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
          <h2 className="font-semibold">EXPERTISE</h2>
          <h3 className="font-semibold">Technical Arsenal</h3>
          <div className="skills-container">
            <div className="hard-skills">
              <h4>
                <Image src={codeLogo} alt="Coding icon" width={24} height={24} />
                Hard Skills
              </h4>
              <ul className="skills-list">
                {hardSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
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
                {softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr />

        <section className="featured-projects">
          <div className="projects-headline">
            <div>
              <h2 className="font-semibold">PORTFOLIO</h2>
              <h3 className="font-semibold">Featured Projects</h3>
            </div>
            <Link href="/projects">View All Projects -&gt;</Link>
          </div>

          <div className="projects-container">
            {firstThreeProjects.map((project) => {
              const fields = project.fields;
              const imageUrl = fields.thumbnail?.fields?.file?.url 
                ? `https:${fields.thumbnail.fields.file.url}` 
                : "";

              return (
                <div className="project-card" key={project.sys.id}>
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={fields.title}
                      width={500}
                      height={300}
                      className="showcase-img"
                    />
                  )}
                  <div className="project-content">
                    <ul className="project-keys">
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
                      Visit site -&gt;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr />

        <section className="connect" id="connect">
          <div className="connect-info">
            <h2 className="font-semibold">CONNECT</h2>
            <h3 className="font-semibold">Let&apos;s work together</h3>
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

          {/* TODO: Implement  */}
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
                rows={6 }
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