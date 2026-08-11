# Sai Krishna — Portfolio

Personal portfolio site for international Senior Frontend Engineer job applications. Built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

## Content

All resume content lives in one place: `src/data/profile.ts`. Update your CV facts there — projects, experience, skills, summary — rather than editing individual components. Every section component just renders this data.

The downloadable CV is `public/Sai-Krishna-Resume.pdf`. Replace this file (keeping the same filename) whenever you update your resume, and it updates everywhere the "Download CV" button is used.

## Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow prompts (link or create a project)
vercel --prod # promote to production
```

**Option B — Git integration (recommended)**

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Vite framework preset (also pinned explicitly in `vercel.json`). Leave build settings as-is and deploy.
4. Every push to the main branch redeploys automatically.

## Custom domain

Once you've bought a domain, add it in the Vercel project's **Settings → Domains**, then update the DNS records at your registrar as Vercel instructs (usually a single `A`/`CNAME` record). Also update these placeholders once the domain is live:

- `index.html` — `canonical`, `og:url`, `og:image`, `twitter:image` currently point to `https://saikrishna.dev/`.
