import { Section } from '../components/Section'
import { WorkCard } from '../components/WorkCard'
import { experience } from '../data/experience'
import { EMAIL, links } from '../data/links'
import { projects } from '../data/projects'

const steps = [
  { name: 'Brief', text: 'A brand and a spec before any code: who it is for, how it sounds, what it must get right.' },
  { name: 'Build', text: 'AI agents write much of the code while I steer the design and the trade-offs.' },
  { name: 'Check', text: 'I review every change. Tests, sourced facts and a clean build keep the work honest.' },
]

export function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="name">
        <div className="row">
          <p className="note">
            building software
            <br />
            for a better world
          </p>
          <div className="hero-body">
            <h1 id="name">
              Paolo <em>Missagia</em>
            </h1>
            <p className="hero-line">
              Full stack developer, crafting software with AI
              <span className="cursor" aria-hidden="true" />
            </p>
            <p className="hero-sub">Currently at MAPAL Group.</p>
          </div>
        </div>
      </section>

      <Section id="experience" numeral="I" eyebrow="Percorso" title="Experience">
        <ol className="timeline">
          {experience.map((role) => (
            <li key={role.org}>
              <span className="when">
                {role.start}–{role.end ?? 'now'}
              </span>
              <div>
                <h3>{role.org}</h3>
                <p className="role">{role.title}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="projects"
        numeral="II"
        eyebrow="Progetti"
        title="Projects"
      >
        <div className="cards">
          {projects.map((project) => (
            <WorkCard key={project.name} {...project} />
          ))}
        </div>
      </Section>

      <Section id="method" numeral="III" eyebrow="Metodo" title="How I build">
        <p>
          At work I build LLM-powered features into products used by hundreds of thousands of people. On my own
          projects, AI agents are part of the workshop, and every project goes through the same three steps.
        </p>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.name}>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="contact" numeral="IV" eyebrow="Contatti" title="Get in touch">
        <p>The best way to reach me is by email.</p>
        <ul className="contact-links">
          <li>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </li>
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="signoff" lang="it">
          <span aria-hidden="true">«</span>A presto<span aria-hidden="true">»</span>
        </p>
      </Section>
    </>
  )
}
