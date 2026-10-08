import { FaCalendarAlt } from "react-icons/fa";
import type { ProjectData } from "../data/projects";

export default function Project({ name, url, date, description }: ProjectData) {
  return (
    <article className="flex flex-col gap-1">
      <h3 className="text-lg">
        <a
          className="text-secondary underline"
          target="_blank"
          rel="noopener noreferrer"
          href={url}
        >
          {name}
        </a>
      </h3>
      <div className="flex flex-row items-center">
        <FaCalendarAlt className="mr-2" size={"0.8em"} aria-hidden />
        <span className="italic">Last updated: {date}</span>
      </div>
      <p>{description}</p>
    </article>
  );
}
