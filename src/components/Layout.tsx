import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HorizontalBar from "./HorizontalBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <HorizontalBar />
      <main className="py-9">{children}</main>
      <HorizontalBar />
      <Footer />
    </>
  );
}
