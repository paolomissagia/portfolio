import { describe, expect, it } from 'vitest'
import { projects } from './projects'

describe('projects', () => {
  it('have unique names', () => {
    expect(new Set(projects.map((p) => p.name)).size).toBe(projects.length)
  })

  it('link to live HTTPS sites, labelled with their address', () => {
    for (const p of projects) {
      const url = new URL(p.url)
      expect(url.protocol).toBe('https:')
      expect(url.hostname.replace(/^www\./, '')).toBe(p.label)
    }
  })

  it('have a description and a two-colour palette of hex colours', () => {
    for (const p of projects) {
      expect(p.description.trim()).not.toBe('')
      expect(p.palette).toHaveLength(2)
      for (const colour of p.palette) expect(colour).toMatch(/^#[0-9a-f]{6}$/)
    }
  })
})
