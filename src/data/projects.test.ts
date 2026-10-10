import { describe, expect, it } from 'vitest'
import { projects } from './projects'

describe('projects', () => {
  it('have unique names', () => {
    expect(new Set(projects.map((p) => p.name)).size).toBe(projects.length)
  })

  it('link to live HTTPS sites', () => {
    for (const p of projects) expect(new URL(p.url).protocol).toBe('https:')
  })

  it('have a description', () => {
    for (const p of projects) expect(p.description.trim()).not.toBe('')
  })
})
