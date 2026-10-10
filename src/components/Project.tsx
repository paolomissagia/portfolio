import type { ProjectData } from '../data/projects'

export function Project({ name, url, description }: ProjectData) {
  return (
    <article className="project">
      <h3>
        <a target="_blank" rel="noopener noreferrer" href={url}>
          {name}
        </a>
      </h3>
      <p>{description}</p>
    </article>
  )
}
