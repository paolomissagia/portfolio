export default function Header() {
    return (
        <header className="container border-b border-b-accent py-8">
            <nav className="flex flex-row justify-between">
                <div>
                    pmissagia$
                </div>
                <ul className="flex flex-row gap-5">
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
