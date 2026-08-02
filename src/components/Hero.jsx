import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { PROFILE, STATS, HONORS } from "../data";
import { scrollToId } from "../lib/useLenis";
import { useReducedMotion, useMediaQuery } from "../lib/hooks";
import { fadeUp, stagger, EASE } from "../lib/motion";
import Counter from "./Counter";
import Magnetic from "./Magnetic";

// Lazy-load WebGL so the three.js bundle never blocks first paint.
const HeroScene = lazy(() => import("./HeroScene"));

export default function Hero() {
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const show3D = !reduced && !isMobile;

  const title = ["ABDALLAH", "AL HOMSI"];

  return (
    <header
      id="top"
      className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-6 md:pt-32"
    >
      {/* WebGL blob — sits behind the headline on the right */}
      <div className="pointer-events-none absolute right-[-6%] top-1/2 z-0 hidden h-[560px] w-[560px] -translate-y-1/2 md:block lg:right-[2%]">
        {show3D ? (
          <Suspense fallback={<StaticGlow />}>
            <div className="pointer-events-auto h-full w-full">
              <HeroScene />
            </div>
          </Suspense>
        ) : (
          <StaticGlow />
        )}
      </div>

      <motion.div
        variants={stagger(0.12, 0.1)}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        {/* status line */}
        <motion.div
          variants={fadeUp}
          className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          {PROFILE.location} · Open to 2027 roles
        </motion.div>

        {/* headline — per-line clip reveal */}
        <h1 className="font-display text-[15vw] font-bold leading-[0.86] tracking-[-0.03em] md:text-[7.5rem] lg:text-[9rem]">
          {title.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.25 + i * 0.12, duration: 0.9, ease: EASE }}
              >
                <span className={i === 0 ? "grad-text" : "text-white/30"}>
                  {line}
                </span>
              </motion.span>
            </span>
          ))}
        </h1>

        {/* hook + photo + ctas */}
        <div className="mt-9 grid gap-8 md:mt-12 md:max-w-3xl">
          <motion.p
            variants={fadeUp}
            className="font-body text-lg leading-relaxed text-neutral-300 md:text-xl"
          >
            {PROFILE.hook}{" "}
            <span className="text-neutral-500">
              CS &amp; Engineering at {PROFILE.university}, minor in Business
              Analytics.
            </span>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full edge">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <Magnetic
                onClick={() => scrollToId("work")}
                className="group flex items-center gap-2 rounded-full px-5 py-3 font-mono text-xs font-bold text-[#05060a]"
                style={{ background: "linear-gradient(110deg,#22d3ee,#818cf8)" }}
                data-cursor-label="view"
                data-cursor
              >
                View selected work
                <span className="transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </Magnetic>
              <a
                href={PROFILE.cv}
                target="_blank"
                rel="noreferrer"
                download
                className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-xs font-bold text-neutral-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/5 hover:text-cyan-200"
                data-cursor
              >
                Download CV
                <span className="transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </div>

            <div className="flex gap-5 font-mono text-xs">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="border-b border-cyan-400/40 pb-1 text-neutral-300 transition hover:border-cyan-400 hover:text-cyan-300"
                data-cursor
              >
                GitHub ↗
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border-b border-cyan-400/40 pb-1 text-neutral-300 transition hover:border-cyan-400 hover:text-cyan-300"
                data-cursor
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          {/* honor chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {HONORS.map((h) => (
              <span
                key={h}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-neutral-400"
              >
                {h}
              </span>
            ))}
          </motion.div>
        </div>

        {/* stats */}
        <motion.div
          variants={fadeUp}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass edge md:mt-16 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-5 py-6 md:px-6 md:py-7">
              <div className="font-display text-2xl font-bold grad-text md:text-3xl">
                <Counter value={s.value} suffix={s.suffix} isYear={s.isYear} />
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}

/** Static fallback for mobile / reduced-motion / suspense. */
function StaticGlow() {
  return (
    <div className="h-full w-full rounded-full opacity-80 blur-2xl"
      style={{
        background:
          "radial-gradient(circle at 40% 40%, rgba(34,211,238,.5), rgba(129,140,248,.35) 45%, transparent 70%)",
      }}
    />
  );
}
