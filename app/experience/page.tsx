import Image from "next/image";
import type { Metadata } from "next";

import {
  experienceData,
  technicalSkills,
  softSkills,
  educationData,
} from "@/data/experience";

import suitcaseIcon from "@/public/images/icons/suitcase-icon.svg";
import terminalIcon from "@/public/images/icons/terminal-icon.svg";
import cognitionIcon from "@/public/images/icons/cognition-icon.svg";
import schoolIcon from "@/public/images/icons/school-icon.svg";
import { Database, MonitorDot, Server, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience & Skills | Alejandro Suarez DEV",
  description:
    "Explore the professional journey, technical expertise, and education of Alejandro Suarez, Full-Stack Developer and Project Lead.",
};

export default function Experience() {
  return (
    <>
      <header className="flex! flex-col! items-start! justify-center! text-center! mb-4!">
        <h1 className="font-semibold">
          Experience &amp; <span>Expertise</span>
        </h1>
        <p className="text-text-color! font-secondary! font-normal! text-lg!">
          Building scalable digital solutions, leading web project workflows,
          and delivering high-performance applications.
        </p>
      </header>

      <main className="flex! lg:flex-row! items-start! justify-center!">
        <div className="professional-journey">
          <h2 className="font-semibold! text-left!">
            <Image
              src={suitcaseIcon}
              alt="Suitcase Icon"
              width={24}
              height={24}
            />
            Professional Journey
          </h2>

          <div className="experience">
            {experienceData.map((experience, index) => (
              <div className="experience-item" key={index}>
                <div className="time-line">
                  <div
                    className={`circle ${index === 0 ? "current" : ""}`}
                  ></div>
                  <div className={`line ${index === 0 ? "current" : ""}`}></div>
                </div>
                <div className="experience-data">
                  <p className="dates tracking-wide">{experience.dates}</p>
                  <h3 className="job-position font-semibold! tracking-wide">
                    {experience.jobPosition}
                  </h3>
                  <h4 className="company">{experience.company}</h4>
                  <p className="job-description">{experience.jobDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-education">
          {/* <div className="technical-skills">
            <h2 className="skills-headline font-semibold!">
              <Image
                src={terminalIcon}
                alt="Terminal Icon"
                width={24}
                height={24}
              />
              Technical Skills
            </h2>

            {skillsData.map((skill, index) => (
              <div className="tech-skill-item" key={index}>
                <div className="tech-skill-data">
                  <p className="tracking-wide">{skill.name}</p>
                  <p className="percentage tracking-widest">{skill.percentage}%</p>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div> */}

          <div className="soft-skills">
            <h2 className="skills-headline font-semibold!">
              <Image
                src={terminalIcon}
                alt="Terminal Icon"
                width={24}
                height={24}
              />
              Technical Skills
            </h2>

            {/* {skillsData.map((skill, index) => (
              <div className="tech-skill-item" key={index}>
                <div className="tech-skill-data">
                  <p className="tracking-wide">{skill.name}</p>
                  <p className="percentage tracking-widest">{skill.percentage}%</p>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))} */}

            <h3 className="font-primary font-medium px-2! text-text-color text-lg flex flex-row items-center gap-2 -mb-1.5!">
              {" "}
              <MonitorDot
                size={24}
                strokeWidth={1.5}
                className="text-primary-color"
              />
              Front End
            </h3>
            <ul className="skills-list gap-x-4! gap-y-2! px-2!">
              {technicalSkills.frontend.map((skill, index) => (
                <li key={index} className="skill-item tracking-wide">
                  {skill}
                </li>
              ))}
            </ul>
            <h3 className="font-primary font-medium px-2! text-text-color text-lg flex flex-row items-center gap-2 -mb-1.5!">
              <Server
                size={24}
                strokeWidth={1.5}
                className="text-primary-color"
              />
              Back End
            </h3>
            <ul className="skills-list gap-x-4! gap-y-2! px-2!">
              {technicalSkills.backend.map((skill, index) => (
                <li key={index} className="skill-item tracking-wide">
                  {skill}
                </li>
              ))}
            </ul>
            <h3 className="font-primary font-medium px-2! text-text-color text-lg flex flex-row items-center gap-2 -mb-1.5!">
              {" "}
              <Database
                size={24}
                strokeWidth={1.5}
                className="text-primary-color"
              />
              Databases
            </h3>
            <ul className="skills-list gap-x-4! gap-y-2! px-2!">
              {technicalSkills.database.map((skill, index) => (
                <li key={index} className="skill-item tracking-wide">
                  {skill}
                </li>
              ))}
            </ul>
            <h3 className="font-primary font-medium px-2! text-text-color text-lg flex flex-row items-center gap-2 -mb-1.5!">
              <Wrench
                size={24}
                strokeWidth={1.5}
                className="text-primary-color"
              />
              Tools
            </h3>
            <ul className="skills-list gap-x-4! gap-y-2! px-2!">
              {technicalSkills.tools.map((skill, index) => (
                <li key={index} className="skill-item tracking-wide">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="soft-skills">
            <h2 className=" font-semibold!">
              <Image
                src={cognitionIcon}
                alt="Cognition Icon"
                width={24}
                height={24}
              />
              Soft Skills
            </h2>
            <ul className="skills-list px-1!">
              {softSkills.map((skill, index) => (
                <li key={index} className="skill-item tracking-wide">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="education">
            <h2 className="skills-headline font-semibold!">
              <Image
                src={schoolIcon}
                alt="School Icon"
                width={24}
                height={24}
              />
              Education
            </h2>

            {educationData.map((education, index) => (
              <div className="education-item" key={index}>
                <h3 className="degree">{education.degree}</h3>
                <h4 className="institution">{education.institution}</h4>
                <p className="generation">{education.generation}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
