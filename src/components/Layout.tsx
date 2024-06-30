import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            < Header />
            <main className="pt-12 pb-12">
                <Outlet />
            </main>
            < Footer />
        </>
    )
}
