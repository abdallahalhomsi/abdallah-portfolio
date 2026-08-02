import React from "react";
import { useLenis } from "./lib/useLenis";
import Background from "./components/Background";
import Cursor from "./components/Cursor";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import {
  Marquee,
  Work,
  Experience,
  Freelance,
  Skills,
  Certificates,
  Contact,
  Footer,
} from "./components/Sections";

// ============================================================================
// Abdallah Al Homsi — Portfolio (v4 · refined futuristic / AI)
//
// Architecture:
//   src/data.js              -> all editable content (PROFILE, PROJECTS, ...)
//   src/lib/                 -> hooks (Lenis, reduced-motion, active section)
//   src/components/          -> sections + effects
//
// Stack added on top of React + Vite + Tailwind:
//   - lenis          smooth momentum scroll
//   - framer-motion  orchestrated reveals, magnetic UI, stagger
//   - r3f + three    single WebGL hero shader (lazy-loaded, desktop only)
// ============================================================================

export default function Portfolio() {
  useLenis();

  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-[#05060a] font-body text-neutral-100 selection:bg-cyan-400 selection:text-neutral-950">
      <Intro />
      <Cursor />
      <Background />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Work />
        <Experience />
        <Freelance />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
