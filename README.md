# Abdallah Al Homsi — Portfolio

A fast, animated single-page portfolio with a refined futuristic / AI aesthetic —
cyan→indigo on near-black, a live WebGL hero, smooth momentum scrolling, and
micro-interactions throughout.

🔗 **Live:** [abdallah-portfolio-ten.vercel.app](https://abdallah-portfolio-ten.vercel.app/)

---

## Tech Stack

- **React + Vite** — UI and build
- **Tailwind CSS** — styling (custom design tokens in `src/index.css`)
- **Lenis** — momentum smooth scrolling
- **Framer Motion** — orchestrated reveals, stagger, magnetic UI, count-up stats
- **React Three Fiber + three** — the single WebGL hero shader (lazy-loaded, desktop only)
- **Vercel** — hosting with automatic deploys

## Features

- Live WebGL shader blob in the hero (distorted icosahedron, cyan→indigo→amber rim, leans toward the cursor)
- Custom morphing cursor, magnetic buttons, 3D-tilt project cards with parallax glow
- Page-load intro sequence, per-line headline reveals, scroll-triggered animations
- Count-up hero stats, animated marquee, per-track certificate progress
- Fully responsive (phone / tablet / desktop) with a static fallback for the WebGL on mobile
- Respects `prefers-reduced-motion` and keeps the main bundle light (Three.js is code-split)

## Run Locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project Structure

```
src/
  data.js              all editable content (PROFILE, PROJECTS, EXPERIENCE, …)
  index.css            design tokens + keyframes + utility classes
  Portfolio.jsx        composition root
  lib/
    useLenis.js        smooth scroll + scrollToId
    hooks.js           reduced-motion, media query, active-section
    motion.js          shared Framer Motion variants
  components/
    Intro, Cursor, Background, Nav, Hero, HeroScene (WebGL),
    Sections, ProjectCard, SectionHead, Counter, Magnetic
```

## Editing Content

Everything lives in **`src/data.js`**:

- `PROFILE` — name, role, tagline, hook, email, socials, photo paths
- `STATS` / `HONORS` — hero numbers and credibility chips
- `PROJECTS` — push a new object to add a card (`accent` / `accent2` set its color)
- `EXPERIENCE` — work history
- `CERT_TRACKS` — certificates (set `done: true` on an item for a ✓ badge)
- `SKILLS` — grouped skill tags

### Profile photo

Drop your image at `public/profile.jpg` (square works best). It's already wired
into the hero — no code change needed.

## Deployment

Hosted on **Vercel**, connected to this repo — every push to `main` triggers an
automatic redeploy.

---

© Abdallah Al Homsi · Istanbul, TR · Amman, JO
