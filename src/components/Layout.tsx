import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            < Header />
            <main className="py-5 overflow-auto sm:py-12">
                <Outlet />
            </main>
            < Footer />
        </>
    )
}
