import { describe, expect, it } from 'vitest'
import { render } from './entry-server'

describe('build-time render', () => {
  it('puts the name, sections and contact links in the home page HTML', () => {
    const html = render('home')
    expect(html).toMatch(/<h1[^>]*>Paolo <em>Missagia<\/em>/)
    for (const id of ['experience', 'projects', 'method', 'contact']) expect(html).toContain(`id="${id}"`)
    expect(html).toContain('href="mailto:hello@paolomissagia.com"')
  })

  it('renders the 404 page', () => {
    expect(render('notFound')).toContain('Page <em>not found</em>')
  })
})
