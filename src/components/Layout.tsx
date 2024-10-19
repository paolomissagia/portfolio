import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HorizontalBar from "./HorizontalBar";

export default function Layout() {
  return (
    <>
      <Header />
      <HorizontalBar color="accent" />
      <main className="py-9">
        <Outlet />
      </main>
      <HorizontalBar color="accent" />
      <Footer />
    </>
  );
}
