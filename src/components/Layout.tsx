import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            < Header />
            <main className="pt-8 pb-8">
                <Outlet />
            </main>
            < Footer />
        </>
    )
}
