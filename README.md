# portfolio

Source for [paolomissagia.com](https://www.paolomissagia.com): a single-page
portfolio, and the entry point for anyone looking for me online. Brand and
voice: [BRAND.md](BRAND.md).

## Stack

Kept in step with [Sonatina](https://github.com/paolomissagia/sonatina) and
[biketoride](https://github.com/paolomissagia/biketoride):

- React 19 + TypeScript, built with Vite 8
- Plain CSS: `src/reset.css` (base reset), `src/index.css` (tokens and components)
- Bodoni Moda, Geist and Geist Mono, self-hosted via Fontsource
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

- `src/pages/Home.tsx`: the main page, one `Section` per part (work, method,
  experience, interests, contact)
- `src/data/`: projects, experience and contact links; content changes go here
- `src/pages/NotFound.tsx`: rendered into `404.html`, which Vercel serves for
  unknown paths
- `scripts/og-image.html`: source for `public/og.png`, the link-preview image
- `test/brand.test.ts`: checks the source against BRAND.md's writing rules

## Deployment

Deployed on Vercel from `main`. The build outputs `dist/index.html` and
`dist/404.html`.
