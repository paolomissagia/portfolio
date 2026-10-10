import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { notFoundPath, pageFor } from './pages'

/*
 * The pages scripts/prerender.mjs writes at build time, so crawlers and link previews get
 * the content without running JavaScript (see the template in dotfiles/templates/vite-react).
 */

export { site } from './site'
export { notFoundPath }

export function routes() {
  return [{ path: '/' }]
}

export const unlisted: string[] = []

export function render(path: string) {
  return renderToString(<StrictMode>{pageFor(path)}</StrictMode>)
}
