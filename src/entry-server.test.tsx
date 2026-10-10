import { describe, expect, it } from 'vitest'
import { render } from './entry-server'

// Head tags for every page are checked in src/seo.test.ts.
describe('build-time render', () => {
  it('puts the name, sections and contact links in the home page HTML', () => {
    const html = render('/')
    expect(html).toMatch(/<h1[^>]*>Paolo <em>Missagia<\/em>/)
    for (const id of ['experience', 'projects', 'method', 'contact']) expect(html).toContain(`id="${id}"`)
    expect(html).toContain('href="mailto:hello@paolomissagia.com"')
  })

  it('renders the 404 page', () => {
    expect(render('/404')).toContain('Page <em>not found</em>')
  })

  it('shows the 404 page for any address the site does not have', () => {
    expect(render('/nope')).toContain('Page <em>not found</em>')
  })
})
