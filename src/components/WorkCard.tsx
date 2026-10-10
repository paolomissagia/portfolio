import type { ProjectData } from '../data/projects'

export function WorkCard({ name, url, label, description, palette }: ProjectData) {
  return (
    <article className="card">
      <div className="card-top">
        <h3>{name}</h3>
        <span className="swatch" aria-hidden="true">
          {palette.map((colour) => (
            // The project's own brand colours: data, not this site's tokens.
            <i key={colour} style={{ background: colour }} />
          ))}
        </span>
      </div>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </article>
  )
}
