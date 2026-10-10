export interface ProjectData {
  name: string
  url: string
  /** The address as shown on the card. */
  label: string
  description: string
  /** Mono build log lines, shown under the description. */
  log: string[]
  /** A few of the project's own brand colours, shown as a swatch. */
  palette: string[]
}

export const projects: ProjectData[] = [
  {
    name: 'Sonatina',
    url: 'https://www.sonatina.eu',
    label: 'sonatina.eu',
    description:
      'A friendly guide to classical music: works, composers and listening guides, with real recordings to play.',
    log: ['React · TypeScript · built with Claude Code', 'public-domain art, every image credited'],
    palette: ['#241b13', '#f6efe2', '#85561a'],
  },
  {
    name: 'biketoride',
    url: 'https://biketoride.vercel.app',
    label: 'biketoride.vercel.app',
    description: 'Pick your road bike and size, and get the Zwift Ride settings that match its fit.',
    log: ['React · TypeScript · built with Claude Code', 'first version in two days'],
    palette: ['#1d2a4d', '#ff5d3a', '#ffd23f'],
  },
]
