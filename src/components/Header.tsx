import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaHamburger, FaRegWindowClose } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="border-b border-b-accent text-xl flex flex-col sm:flex-row justify-between items-center">
            <div className="flex justify-between items-center w-full sm:w-auto py-4 sm:py-8">
                <NavLink to="/">user@paolomissagia<span className="text-secondary">$</span></NavLink>
                <button className="sm:hidden" onClick={toggleMenuOpen}>
                    {isMenuOpen ? <FaRegWindowClose size={"1.2em"} /> : <FaHamburger size={"1.2em"} />}
                </button>
            </div>
            <nav className={`w-full sm:w-auto ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
                <ul className="flex flex-col sm:flex-row sm:gap-5 items-center sm:items-stretch">
                    <li>
                        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>home<span>/</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>projects<span>/</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>contact<span>/</span></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
