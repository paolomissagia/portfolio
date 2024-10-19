import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-center py-4 text-lg sm:py-9">
      <NavLink to="/">pmissagia$</NavLink>
    </header>
  );
}
