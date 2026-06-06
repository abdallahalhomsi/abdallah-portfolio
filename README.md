# Abdallah Al Homsi — Portfolio

My personal portfolio site — a fast, animated single-page site showcasing my projects, experience, skills, and certificates.

🔗 **Live:** [abdallah-portfolio-ten.vercel.app](https://abdallah-portfolio-ten.vercel.app/)

---

## Tech Stack

- **[React](https://react.dev)** — UI, built as a single self-contained component
- **[Vite](https://vitejs.dev)** — dev server and production build
- **[Tailwind CSS](https://tailwindcss.com)** — styling
- **[Vercel](https://vercel.com)** — hosting with automatic deploys

## Features

- Neon-gradient design with animated drifting orbs and a cursor glow
- Scroll-reveal animations and a looping marquee
- Fully responsive — tuned for phones, tablets, and desktop
- Sections: Hero · Selected Work · Experience · Toolkit · Certificates · Contact

## Run Locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Editing Content

All content lives in plain data objects at the top of [`src/Portfolio.jsx`](src/Portfolio.jsx):

- `PROFILE` — name, tagline, email, social links
- `STATS` — the four highlight numbers in the hero
- `PROJECTS` — add a project by pushing a new object onto this array
- `EXPERIENCE` — work experience
- `CERT_TRACKS` — certificates (set `done: true` on an item to add a ✓ badge)
- `SKILLS` — grouped skill tags

## Deployment

Hosted on **Vercel** and connected to this repo — every push to `main` triggers an automatic redeploy. No manual steps needed.

---

© Abdallah Al Homsi · Istanbul, TR · Amman, JO
