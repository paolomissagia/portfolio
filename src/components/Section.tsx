import type { ReactNode } from 'react'

interface Props {
  id: string
  /** Roman numeral: the sections are a sequence. */
  numeral: string
  /** Italian eyebrow; the English title carries the meaning. */
  eyebrow: string
  title: string
  /** Mono margin note beside the body. */
  note?: ReactNode
  children: ReactNode
}

export function Section({ id, numeral, eyebrow, title, note, children }: Props) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="row">
        <p className="eyebrow">
          <span>
            {numeral}. <span lang="it">{eyebrow}</span>
          </span>
        </p>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div className="row">
        <p className="note">{note}</p>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
