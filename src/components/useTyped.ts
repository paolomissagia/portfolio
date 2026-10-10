import { useEffect, useState } from 'react'

const TYPE_MS = 120
const HOLD_MS = 1200

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Types each word out and backspaces it, in a loop. With reduced motion it just shows the first word. */
export function useTyped(words: string[]): string {
  const [text, setText] = useState(() => (prefersReducedMotion() ? words[0] : ''))

  useEffect(() => {
    if (prefersReducedMotion()) return

    let index = 0
    let length = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const word = words[index]
      length += deleting ? -1 : 1
      setText(word.slice(0, length))

      if (!deleting && length === word.length) {
        deleting = true
        timer = setTimeout(tick, HOLD_MS)
        return
      }
      if (deleting && length === 0) {
        deleting = false
        index = (index + 1) % words.length
      }
      timer = setTimeout(tick, TYPE_MS)
    }

    timer = setTimeout(tick, TYPE_MS)
    return () => clearTimeout(timer)
  }, [words])

  return text
}
