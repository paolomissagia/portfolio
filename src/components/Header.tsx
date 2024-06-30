import { NavLink } from "react-router-dom";
import HamburgerIcon from "../assets/icons/HamburgerIcon";

export default function Header() {
    return (
        <header className="border-b border-b-accent py-8 text-xl flex flex-row justify-between">
            <NavLink to="/">user@paolomissagia<span className="text-secondary">$</span></NavLink>
            <nav className="max-h-[24px]">
                <ul className="hidden sm:flex flex-row gap-5">
                    <NavLink to="/">home<span>/</span></NavLink>
                    <NavLink to="/projects">projects<span>/</span></NavLink>
                    <NavLink to="/contact">contact<span>/</span></NavLink>
                </ul>
                <button className="sm:hidden">
                    <HamburgerIcon />
                </button>
            </nav>
        </header>
    )
}
