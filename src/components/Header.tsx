import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-center sm:justify-between py-8 text-lg">
            <NavLink to="/">pmissagia$</NavLink>
        </header >
    );
}
