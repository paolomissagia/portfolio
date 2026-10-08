# portfolio

Source for [paolomissagia.com](https://www.paolomissagia.com): a single-page
portfolio built with React, TypeScript, Vite and Tailwind CSS.

## Development

Requires Node 22.12 or newer.

```sh
npm install
npm run dev       # start the dev server
npm run lint      # ESLint
npm run format    # Prettier
npm run build     # type-check and build to dist/
npm run preview   # serve the production build locally
```

## Structure

- `src/pages/Home.tsx`: the main page
- `src/data/projects.ts`: the project list; add new entries here
- `src/pages/NotFound.tsx`: rendered into `404.html`, which Vercel serves for
  unknown paths

## Deployment

Deployed on Vercel from `main`. The build outputs `dist/index.html` and
`dist/404.html`.
