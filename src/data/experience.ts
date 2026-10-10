export interface Role {
  org: string
  title: string
  start: number
  /** Omitted while current. */
  end?: number
}

export const experience: Role[] = [
  {
    org: 'MAPAL Group',
    title: 'Full Stack Developer',
    start: 2024,
  },
  {
    org: 'Computershare',
    title: 'Software Engineer',
    start: 2022,
    end: 2024,
  },
  {
    org: 'The Open University',
    title: 'BSc (Hons) Computing & IT',
    start: 2019,
    end: 2022,
  },
]
