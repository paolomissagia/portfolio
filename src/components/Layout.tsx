import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            < Header />
            <main className="py-8 sm:py-12">
                <Outlet />
            </main>
            < Footer />
        </>
    )
}
