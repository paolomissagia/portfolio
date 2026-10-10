import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { pages, type PageName } from './pages'

/** Renders a page to HTML at build time, so crawlers and link previews get the content without running JavaScript. */
export function render(page: PageName): string {
  return renderToString(<StrictMode>{pages[page]}</StrictMode>)
}
