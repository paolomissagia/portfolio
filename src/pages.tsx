import type { ReactNode } from 'react'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export const notFoundPath = '/404'

/** Each page by its path, shared by the browser and the build-time render. */
export const pages: Record<string, ReactNode> = {
  '/': (
    <Layout>
      <Home />
    </Layout>
  ),
  [notFoundPath]: (
    <Layout>
      <NotFound />
    </Layout>
  ),
}

/** The page at `path`; any address the site doesn't have shows the 404 page. */
export const pageFor = (path: string) => pages[path] ?? pages[notFoundPath]
