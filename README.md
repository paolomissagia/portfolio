# portfolio

Source for [paolomissagia.com](https://www.paolomissagia.com): a single-page
portfolio, and the entry point for anyone looking for me online.

## Stack

Kept in step with [Sonatina](https://github.com/paolomissagia/sonatina) and
[biketoride](https://github.com/paolomissagia/biketoride):

- React 19 + TypeScript, built with Vite 8
- Plain CSS: `src/reset.css` (base reset), `src/index.css` (tokens and components)
- JetBrains Mono, self-hosted via Fontsource
- Vitest for unit tests, oxlint for linting
- npm, Node 24+

## Run

```sh
npm install
npm run dev       # http://localhost:5173
npm test          # unit tests
npm run lint      # oxlint
npm run build     # type-check and build to dist/
npm run preview   # serve the production build locally
```

## Layout

- `src/pages/Home.tsx`: the main page
- `src/data/projects.ts`: the project list; add new entries here
- `src/pages/NotFound.tsx`: rendered into `404.html`, which Vercel serves for
  unknown paths
- `scripts/og-image.html`: source for `public/og.png`, the link-preview image

## Deployment

Deployed on Vercel from `main`. The build outputs `dist/index.html` and
`dist/404.html`.
