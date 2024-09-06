import Project from "../components/Project"

export default function Projects() {
    return (
        <section>
            <h1 className="text-4xl mb-6 sm:mb-12">Projects</h1>
            <div className="flex flex-col gap-7">
                <Project
                    name="Primadonna"
                    url="https://primadonna.vercel.app"
                    date="17 April 2024"
                    description="Find in-deep information about the opera world."
                />
                <Project
                    name="Big Three"
                    url="https://bigthree.vercel.app"
                    date="6 April 2024"
                    description="Numbers about the the tennis GOATs"
                />
                <Project
                    name="Cultural Roadmap"
                    url="https://culturalroadmap.vercel.app"
                    date="20 November 2023"
                    description="Interactive guides for classical music, books and films."
                />
            </div>
        </section>
    )
}
