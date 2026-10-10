import type { ReactNode } from 'react'

const YEAR = new Date().getFullYear()

const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Method', href: '/#method' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <header className="masthead">
        <a className="monogram" href="/" aria-label="Paolo Missagia, home">
          PM<span className="dot">.</span>
        </a>
        <nav aria-label="Sections">
          <ul className="nav">
            {nav.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="colophon">
        <span>
          © {YEAR} Paolo Missagia · Edinburgh
        </span>
        <span>Crafted with Claude Code</span>
      </footer>
    </div>
  )
}
