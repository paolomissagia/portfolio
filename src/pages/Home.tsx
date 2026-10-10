import type { ReactNode } from 'react'
import { GitHubIcon, LeetCodeIcon, LinkedInIcon, MailIcon } from '../components/icons'
import { Project } from '../components/Project'
import { projects } from '../data/projects'

const links: { label: string; href: string; icon: ReactNode }[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/paolomissagia', icon: <LinkedInIcon /> },
  { label: 'GitHub', href: 'https://github.com/paolomissagia', icon: <GitHubIcon /> },
  { label: 'LeetCode', href: 'https://leetcode.com/u/paolomissagia', icon: <LeetCodeIcon /> },
  { label: 'Email', href: 'mailto:hello@paolomissagia.com', icon: <MailIcon /> },
]

export function Home() {
  return (
    <div className="home">
      <section className="intro">
        <h1>Hi, I'm Paolo</h1>
        <div className="intro-body">
          <p>Full Stack Developer @ Mapal Group</p>
          <p>
            Explore my personal <a href="#projects">projects</a> below
          </p>
          <p>Reach out for a chat</p>
          <div className="links">
            {links.map(({ label, href, icon }) => {
              const external = href.startsWith('https:')
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <div className="dashes" />

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
      </section>
    </div>
  )
}
