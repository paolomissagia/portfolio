import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Project from "../components/Project";
import { projects } from "../data/projects";

const iconSize = "1.3em";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <section id="mainBlock" className="mb-6">
        <h1 className="mb-8 text-3xl sm:text-[38px]/9">Hi, I'm Paolo</h1>
        <div className="flex flex-col gap-5 text-lg sm:text-xl">
          <p>Full Stack Developer @ Mapal Group</p>
          <p>
            Explore my personal{" "}
            <a className="text-secondary underline" href="#projectsBlock">
              projects
            </a>{" "}
            below
          </p>
          <p>Reach out for a chat</p>
          <div className="flex flex-row gap-3">
            <a
              href="https://linkedin.com/in/paolomissagia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={iconSize} className="text-secondary" />
            </a>
            <a
              href="https://github.com/paolomissagia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={iconSize} className="text-secondary" />
            </a>
            <a
              href="https://leetcode.com/u/paolomissagia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode size={iconSize} className="text-secondary" />
            </a>
            <a href="mailto:hello@paolomissagia.com" aria-label="Email">
              <FiMail size={iconSize} className="text-secondary" />
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 w-3/4 self-center custom-border" />

      <section id="projectsBlock" className="mt-6">
        <h2 className="mb-5 text-2xl">Projects</h2>
        <div className="flex flex-col gap-7">
          {projects.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
