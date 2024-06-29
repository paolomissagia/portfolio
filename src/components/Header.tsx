import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="container border-b border-b-accent py-8 text-lg">
            <nav className="flex flex-row justify-between">
                <span>user@pmissagia$ cd</span>
                <ul className="flex flex-row gap-5">
                    <NavLink to="/">home<span>/</span></NavLink>
                    <NavLink to="/projects">projects<span>/</span></NavLink>
                    <NavLink to="/contact">contact<span>/</span></NavLink>
                </ul>
            </nav>
        </header>
    )
}
