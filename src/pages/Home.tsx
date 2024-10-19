import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiCodewars } from "react-icons/si";
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
          <h2>
            View my{" "}
            <a
              href="/CV.pdf"
              target="_blank"
              className="text-secondary underline"
            >
              CV
            </a>{" "}
            for detailed professional information
          </h2>
          <h2>Reach me out for a chat</h2>
          <div className="flex flex-row gap-4">
            <a href="https://github.com/paolomissagia" target="_blank">
              <FiGithub size={"1.3em"} className="text-secondary" />
            </a>
            <a href="https://linkedin.com/in/paolomissagia" target="_blank">
              <FiLinkedin size={"1.3em"} className="text-secondary" />
            </a>
            <a href="mailto:hello@paolomissagia.com">
              <FiMail size={"1.3em"} className="text-secondary" />
            </a>
            <a href="https://www.codewars.com/users/paolomissagia">
              <SiCodewars size={"1.3em"} className="text-secondary" />
            </a>
          </div>
        </div>
      </section>

      <div className="box h-1 w-2/3 self-center" />

      <section id="projectsBlock" className="mt-6">
        <div className="mb-5">
          <span className="text-2xl">Projects</span>
        </div>
        <div className="flex flex-col gap-7">
          <Project
            name="Primadonna"
            url="https://primadonna.vercel.app"
            date="17 April 2024"
            description="Find in-deep information about the opera world."
          />
          <Project
            name="Big Three"
            url="https://bigthree.vercel.app"
            date="6 April 2024"
            description="Numbers about the the tennis GOATs"
          />
          <Project
            name="Cultural Roadmap"
            url="https://culturalroadmap.vercel.app"
            date="20 November 2023"
            description="Interactive guides for classical music, books and films."
          />
        </div>
      </section>
    </div>
  );
}
