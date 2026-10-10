import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

const root = join(import.meta.dirname, '..')
const sources = [
  ...readdirSync(join(root, 'src'), { recursive: true, encoding: 'utf8' })
    .filter((f) => /\.(tsx?|css)$/.test(f))
    .map((f) => join('src', f)),
  'index.html',
  '404.html',
  'scripts/og-image.html',
  'BRAND.md',
  'test/brand.test.ts',
]

describe('brand rules', () => {
  // BRAND.md: no em dashes anywhere. Build the character so this file passes its own test.
  const emDash = String.fromCharCode(0x2014)

  it.each(sources)('%s has no em dashes', (file) => {
    expect(readFileSync(join(root, file), 'utf8')).not.toContain(emDash)
  })

  // Craft and AI go together: saying it was made without AI reads as anti-AI. BRAND.md quotes the phrase in the rule.
  const byHand = ['by', 'hand'].join(' ')

  it.each(sources.filter((f) => f !== 'BRAND.md'))('%s keeps craft and AI together', (file) => {
    expect(readFileSync(join(root, file), 'utf8').toLowerCase()).not.toContain(byHand)
  })
})
