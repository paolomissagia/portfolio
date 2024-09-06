import { FiGithub, FiLinkedin } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <section>
            <div className="mb-5 sm:mb-12">
                <span className="text-3xl font-bold sm:text-5xl">Hi, I'm Paolo</span>
            </div>
            <div className="flex flex-col gap-5 sm:gap-7 text-2xl">
                <h2>Full Stack Developer @ Mapal Group</h2>
                <h2>Explore my personal <NavLink to="/projects" className="text-secondary underline decoration-dashed decoration-2 underline-offset-4">projects</NavLink></h2>
                <h2>View my <a href="/PaoloMissagia_CV.pdf" target="_blank" className="text-secondary underline decoration-dashed decoration-2 underline-offset-4">CV</a> for detailed professional information</h2>
                <h2><NavLink to="/contact" className="text-secondary underline decoration-dashed decoration-2 underline-offset-4">Contact</NavLink> me to discuss opportunities</h2>
                <h2>Social links</h2>
                <div className="flex flex-row gap-5">
                    <a href="https://github.com/paolomissagia" target="_blank"><FiGithub size={"1.5em"} /></a>
                    <a href="https://linkedin.com/in/paolomissagia" target="_blank"><FiLinkedin size={"1.5em"} /></a>
                </div>
            </div>
        </section>
    )
}
