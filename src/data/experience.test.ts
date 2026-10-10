import { describe, expect, it } from 'vitest'
import { experience } from './experience'

describe('experience', () => {
  it('runs newest first', () => {
    const starts = experience.map((r) => r.start)
    expect(starts).toEqual([...starts].sort((a, b) => b - a))
  })

  it('ends no earlier than it starts', () => {
    for (const r of experience) if (r.end !== undefined) expect(r.end).toBeGreaterThanOrEqual(r.start)
  })

  it('has at most one current role', () => {
    expect(experience.filter((r) => r.end === undefined).length).toBeLessThanOrEqual(1)
  })
})
