import type { ProjectData } from '../data/projects'

export function WorkCard({ name, url, label, description, log, palette }: ProjectData) {
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
      <p className="log">
        {log.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </article>
  )
}
