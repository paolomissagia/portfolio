// Runs after `vite build` and the SSR build of src/entry-server.tsx (see the build script in package.json).
// Renders each page into its built HTML file and writes the sitemap with today's date.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'

const SSR_DIR = 'dist/.ssr'
const SITE = 'https://www.paolomissagia.com/'
const ROOT = '<div id="root"></div>'

const { render } = await import(`../${SSR_DIR}/entry-server.js`)

for (const [file, page] of [
  ['dist/index.html', 'home'],
  ['dist/404.html', 'notFound'],
]) {
  const html = readFileSync(file, 'utf8')
  if (!html.includes(ROOT)) throw new Error(`${file}: no empty ${ROOT} to render into`)
  writeFileSync(file, html.replace(ROOT, `<div id="root">${render(page)}</div>`))
}

const today = new Date().toISOString().slice(0, 10)
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`,
)

rmSync(SSR_DIR, { recursive: true, force: true })
