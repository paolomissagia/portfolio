export interface ProjectData {
  name: string
  url: string
  description: string
}

export const projects: ProjectData[] = [
  {
    name: 'Sonatina',
    url: 'https://sonatina.vercel.app',
    description:
      'A friendly guide to classical music: works, composers and listening guides, with real recordings to play',
  },
  {
    name: 'biketoride',
    url: 'https://biketoride.vercel.app',
    description: 'Pick your road bike and size, and get the Zwift Ride settings that match its fit',
  },
]
