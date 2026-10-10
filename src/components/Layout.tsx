import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <hr className="rule" />
      <main>{children}</main>
      <hr className="rule" />
      <Footer />
    </>
  )
}
