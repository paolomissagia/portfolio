import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="container border-b border-b-accent py-8 text-xl">
            <nav className="flex flex-row justify-between">
                <NavLink to="/">user@paolomissagia<span className="text-secondary">$</span></NavLink>
                <ul className="flex flex-row gap-5">
                    <NavLink to="/">home<span>/</span></NavLink>
                    <NavLink to="/projects">projects<span>/</span></NavLink>
                    <NavLink to="/contact">contact<span>/</span></NavLink>
                </ul>
            </nav>
        </header>
    )
}
