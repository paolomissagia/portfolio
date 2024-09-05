import { FaCalendarAlt } from "react-icons/fa";

interface ProjectProps {
    name: string,
    url: string,
    date: string,
    description: string
}

export default function Project({ name, url, date, description }: ProjectProps) {

    return (
        <div className="flex flex-col gap-1">
            <a className="text-2xl text-secondary underline decoration-wavy decoration-2 underline-offset-8" target="_blank" href={url}>{name}</a>
            <div className="flex flex-row mt-2">
                <FaCalendarAlt className="mr-4" />
                <span className="text-sm italic">Last updated: {date}</span>
            </div>
            <p className="text-lg">{description}</p>
        </div>
    )
}
