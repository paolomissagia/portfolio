import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

    //TODO: Think in a clearner way to do it
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isMenuOpen]);

    return (
        <header className="border-b border-b-accent text-xl flex flex-col sm:flex-row justify-between items-center">
            <div className="flex justify-between items-center w-full sm:w-auto py-4 sm:py-8">
                <NavLink to="/">pmissagia$</NavLink>
                <button className="sm:hidden" onClick={toggleMenuOpen}>
                    {isMenuOpen ? <FiX size={"1.2em"} /> : <FiMenu size={"1.2em"} />}
                </button>
            </div>
            <nav className={`w-full sm:w-auto ${isMenuOpen ? 'block menu-open' : 'hidden'} sm:block`}>
                <ul className="flex flex-col sm:flex-row gap-5 items-center sm:items-stretch py-4">
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
