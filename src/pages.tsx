import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

/** Each HTML entry and the page it renders, shared by the browser and the build-time render. */
export const pages = {
  home: (
    <Layout>
      <Home />
    </Layout>
  ),
  notFound: (
    <Layout>
      <NotFound />
    </Layout>
  ),
}

export type PageName = keyof typeof pages
