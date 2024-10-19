import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-center py-9 text-lg sm:justify-between">
      <NavLink to="/">pmissagia$</NavLink>
    </header>
  );
}
