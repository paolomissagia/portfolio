import type { ProjectData } from "../data/projects";

export default function Project({ name, url, description }: ProjectData) {
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
      <p>{description}</p>
    </article>
  );
}
