const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <span>copyright © {YEAR}</span>
      <span className="site-footer-note">all rights reserved</span>
    </footer>
  )
}
