import { FaCalendarAlt } from "react-icons/fa";

interface ProjectProps {
  name: string;
  url: string;
  date: string;
  description: string;
}

export default function Project({
  name,
  url,
  date,
  description,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-1">
      <a
        className="text-lg text-secondary underline"
        target="_blank"
        href={url}
      >
        {name}
      </a>
      <div className="flex flex-row items-center">
        <FaCalendarAlt className="mr-2" size={"0.8em"} />
        <span className="text-md italic">Last updated: {date}</span>
      </div>
      <p className="text-md">{description}</p>
    </div>
  );
}
