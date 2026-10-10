export interface ProjectData {
  name: string
  url: string
  /** The address as shown on the card. */
  label: string
  description: string
  /** Two of the project's own brand colours (dark, then accent), shown as a swatch. */
  palette: string[]
}

export const projects: ProjectData[] = [
  {
    name: 'Sonatina',
    url: 'https://www.sonatina.eu',
    label: 'sonatina.eu',
    description:
      'A friendly guide to classical music: works, composers and listening guides, with real recordings to play.',
    palette: ['#241b13', '#85561a'],
  },
  {
    name: 'biketoride',
    url: 'https://biketoride.vercel.app',
    label: 'biketoride.vercel.app',
    description: 'Pick your road bike and size, and get the Zwift Ride settings that match its fit.',
    palette: ['#1d2a4d', '#ff5d3a'],
  },
]
