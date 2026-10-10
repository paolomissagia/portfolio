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
            born in Italy
            <br />
            building since 2022
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

      <Section id="experience" numeral="I" eyebrow="Percorso" title="Experience" note="most recent first">
        <ol className="timeline">
          {experience.map((role) => (
            <li key={role.org}>
              <span className="when">
                {role.start}–{role.end ?? 'now'}
              </span>
              <div>
                <h3>{role.org}</h3>
                <p className="role">{role.title}</p>
                {role.summary && <p>{role.summary}</p>}
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
        note={
          <>
            two pieces
            <br />
            from the bench
          </>
        }
      >
        <div className="cards">
          {projects.map((project) => (
            <WorkCard key={project.name} {...project} />
          ))}
        </div>
      </Section>

      <Section id="method" numeral="III" eyebrow="Metodo" title="How I build" note="craft + AI">
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

      <Section
        id="interests"
        numeral="IV"
        eyebrow="Fuori orario"
        title="Off the clock"
        note={
          <>
            where the
            <br />
            projects come from
          </>
        }
      >
        <div className="pair">
          <div>
            <h3>Opera and classical music</h3>
            <p>
              From Monteverdi to Puccini. The reason <a href="https://www.sonatina.eu" target="_blank" rel="noopener noreferrer">
                Sonatina
              </a> exists.
            </p>
          </div>
          <div>
            <h3>Cycling</h3>
            <p>
              Road bikes and the numbers behind a good fit. The reason{' '}
              <a href="https://biketoride.vercel.app" target="_blank" rel="noopener noreferrer">
                biketoride
              </a> exists.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact" numeral="V" eyebrow="Contatti" title="Get in touch" note="email first">
        <p>The best way to reach me is by email.</p>
        <ul className="contact-links">
          <li>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
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
