import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Project from "../components/Project";

export default function Home() {
  function smoothScroll() {
    document.querySelector("#projectsBlock")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <section id="mainBlock" className="mb-6">
        <div className="mb-8">
          <span className="text-3xl sm:text-[38px]">Hi, I'm Paolo</span>
        </div>
        <div className="flex flex-col gap-5 text-lg sm:text-xl">
          <h2>Full Stack Developer @ Mapal Group</h2>
          <h2>
            Explore my personal{" "}
            <span
              className="cursor-pointer text-secondary underline"
              onClick={() => smoothScroll()}
            >
              projects
            </span>{" "}
            below
          </h2>
          <h2>Reach me out for a chat</h2>
          <div className="flex flex-row gap-3">
            <a href="https://linkedin.com/in/paolomissagia" target="_blank">
              <FaLinkedin size={"1.3em"} className="text-secondary" />
            </a>
            <a href="https://github.com/paolomissagia" target="_blank">
              <FiGithub size={"1.3em"} className="text-secondary" />
            </a>
            <a href="mailto:hello@paolomissagia.com">
              <FiMail size={"1.3em"} className="text-secondary" />
            </a>
            <a href="https://leetcode.com/u/paolomissagia">
              <SiLeetcode size={"1.3em"} className="text-secondary" />
            </a>
          </div>
        </div>
      </section>

      <div className="custom-border h-1 w-3/4 self-center" />

      <section id="projectsBlock" className="mt-6">
        <div className="mb-5">
          <span className="text-2xl">Projects</span>
        </div>
        <div className="flex flex-col gap-7">
          <Project
            name="Primadonna"
            url="https://primadonna.vercel.app"
            date="October 2024"
            description="In-deep information about the fascinating world of opera"
          />
          <Project
            name="Big Three"
            url="https://bigthree.vercel.app"
            date="February 2024"
            description="Statistics about the the best tennis players ever"
          />
          <Project
            name="Cultural Roadmap"
            url="https://culturalroadmap.vercel.app"
            date="September 2023"
            description="Interactive guides for classical music, books and films - curated by me"
          />
        </div>
      </section>
    </div>
  );
}
