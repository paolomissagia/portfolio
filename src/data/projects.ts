export interface ProjectData {
  name: string;
  url: string;
  date: string;
  description: string;
}

export const projects: ProjectData[] = [
  {
    name: "Primadonna",
    url: "https://primadonna.vercel.app",
    date: "October 2024",
    description: "In-depth information about the fascinating world of opera",
  },
  {
    name: "Big Three",
    url: "https://bigthree.vercel.app",
    date: "February 2024",
    description: "Statistics about the best tennis players ever",
  },
  {
    name: "Cultural Roadmap",
    url: "https://culturalroadmap.vercel.app",
    date: "September 2023",
    description:
      "Interactive guides for classical music, books and films - curated by me",
  },
];
