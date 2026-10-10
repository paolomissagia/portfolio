export interface Role {
  org: string
  title: string
  start: number
  /** Omitted while current. */
  end?: number
  summary?: string
}

export const experience: Role[] = [
  {
    org: 'MAPAL Group',
    title: 'Full Stack Developer',
    start: 2024,
    summary: 'A learning platform with 500,000+ monthly users: Angular, Django, and LLM-powered features.',
  },
  {
    org: 'Computershare',
    title: 'Software Engineer',
    start: 2022,
    end: 2024,
    summary: 'A client platform for 45,000+ companies: React, Spring Boot, and the move to Azure.',
  },
  {
    org: 'The Open University',
    title: 'BSc (Hons) Computing & IT',
    start: 2019,
    end: 2022,
  },
]
