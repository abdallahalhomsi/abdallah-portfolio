import React from "react";
import { motion } from "framer-motion";
import {
  PROFILE,
  PROJECTS,
  EXPERIENCE,
  SKILLS,
  CERT_TRACKS,
  MARQUEE_WORDS,
  CLIENT_WORK,
} from "../data";
import { fadeUp, stagger, viewport, EASE, scaleIn } from "../lib/motion";
import SectionHead from "./SectionHead";
import ProjectCard from "./ProjectCard";
import Magnetic from "./Magnetic";

/* --------------------------------- Marquee -------------------------------- */
export function Marquee() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-white/10 py-5">
      <div className="marquee flex whitespace-nowrap font-display text-2xl font-bold uppercase tracking-tight text-white/10">
        {Array(2)
          .fill(0)
          .map((_, k) => (
            <span key={k} className="flex" aria-hidden={k === 1}>
              {MARQUEE_WORDS.map((w) => (
                <span key={w} className="mx-8 flex items-center gap-8">
                  {w}
                  <span className="grad-text">✦</span>
                </span>
              ))}
            </span>
          ))}
      </div>
    </div>
  );
}

/* ---------------------------------- Work ---------------------------------- */
export function Work() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-28">
      <SectionHead kicker="01 / work" title="Selected Work" />
      <div className="mt-10 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        className="mt-10 font-mono text-sm text-neutral-500"
      >
        More on{" "}
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="grad-text border-b border-cyan-400/40"
          data-cursor
        >
          GitHub ↗
        </a>
      </motion.p>
    </section>
  );
}

/* ------------------------------- Experience ------------------------------- */
export function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-28"
    >
      <SectionHead kicker="02 / experience" title="Timeline" />
      <div className="relative mt-10 md:mt-16">
        {/* connecting spine */}
        <div
          className="absolute left-[9px] top-2 bottom-2 w-px md:left-[11px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(34,211,238,.6), rgba(129,140,248,.35) 60%, transparent)",
          }}
          aria-hidden
        />
        <div className="space-y-5">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.75, ease: EASE, delay: i * 0.08 }}
              className="relative pl-9 md:pl-11"
            >
              {/* node */}
              <span
                className="absolute left-0 top-2 h-[19px] w-[19px] rounded-full border-2 md:h-[23px] md:w-[23px]"
                style={{
                  borderColor: i === 0 ? "#22d3ee" : "rgba(255,255,255,0.15)",
                  background: i === 0 ? "#05060a" : "#0a0c14",
                  boxShadow: i === 0 ? "0 0 16px rgba(34,211,238,.6)" : "none",
                }}
                aria-hidden
              />
              {i === 0 && (
                <span
                  className="absolute left-[6px] top-[10px] h-[7px] w-[7px] rounded-full bg-cyan-400 md:left-[8px] md:top-[12px]"
                  aria-hidden
                />
              )}

              <div
                className="group relative overflow-hidden rounded-3xl glass edge p-7 md:p-10"
                data-cursor
              >
                <div
                  className="pointer-events-none absolute -left-20 -top-20 h-44 w-44 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-50"
                  style={{ background: "radial-gradient(circle,#22d3ee,transparent 70%)" }}
                  aria-hidden
                />
                <div className="relative flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {job.title}
                  </h3>
                  <span className="font-mono text-xs text-neutral-500">{job.period}</span>
                </div>
                <div className="relative mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-cyan-300/80">
                  <span>
                    {job.company} · {job.location}
                  </span>
                  {job.tag && (
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-neutral-400">
                      {job.tag}
                    </span>
                  )}
                </div>
                <ul className="relative mt-7 space-y-4">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-4 font-body text-neutral-300">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                        style={{ boxShadow: "0 0 10px #22d3ee" }}
                      />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
                {job.doc && (
                  <a
                    href={job.doc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 py-2 font-mono text-xs text-cyan-200 transition hover:border-cyan-400 hover:bg-cyan-400/10"
                    data-cursor
                  >
                    📄 {job.doc.label} ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Freelance -------------------------------- */
export function Freelance() {
  const { client, clientBlurb, video, postcards, offerings } = CLIENT_WORK;
  return (
    <section
      id="freelance"
      className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-28"
    >
      <SectionHead kicker="03 / freelance" title="Content & Builds" />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        className="mt-6 max-w-2xl font-body text-neutral-400"
      >
        Outside of AML work, I run AI-driven content and dev for business
        clients — currently shipping for{" "}
        <span className="grad-text font-semibold">{client}</span>,{" "}
        {clientBlurb.replace(client, "").replace(/^,?\s*/, "")}
      </motion.p>

      <motion.div
        variants={stagger(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-8 flex flex-wrap gap-2"
      >
        {offerings.map((o) => (
          <motion.span
            key={o}
            variants={fadeUp}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300"
          >
            {o}
          </motion.span>
        ))}
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-5">
        {/* Video card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.75, ease: EASE }}
          className="group relative overflow-hidden rounded-3xl glass edge md:col-span-2"
          data-cursor
        >
          <video
            className="aspect-[9/16] w-full object-cover"
            src={video.src}
            poster={video.poster}
            controls
            playsInline
            preload="metadata"
          />
          <div className="p-5">
            <div className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/80">
              {video.label}
            </div>
            <div className="mt-1 text-sm text-neutral-400">
              {client} — product video, fully AI-generated
            </div>
          </div>
        </motion.div>

        {/* Postcard grid */}
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 gap-4 md:col-span-3 md:grid-cols-3"
        >
          {postcards.map((p) => (
            <motion.div
              key={p.src}
              variants={scaleIn}
              className="group relative overflow-hidden rounded-2xl glass edge"
              data-cursor
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(5,6,10,.55))",
                }}
                aria-hidden
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        className="mt-8 font-mono text-sm text-neutral-500"
      >
        Available for content + build work —{" "}
        <a
          href={`mailto:${PROFILE.email}`}
          className="grad-text border-b border-cyan-400/40"
          data-cursor
        >
          get in touch ↗
        </a>
      </motion.p>
    </section>
  );
}

/* --------------------------------- Skills --------------------------------- */
export function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-28">
      <SectionHead kicker="04 / toolkit" title="Toolkit" />
      <motion.div
        variants={stagger(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl glass edge md:mt-16 md:grid-cols-2"
      >
        {Object.entries(SKILLS).map(([group, items]) => (
          <motion.div key={group} variants={fadeUp} className="h-full p-7 md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/80">
              {group}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-neutral-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------ Certificates ------------------------------ */
export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-28"
    >
      <SectionHead kicker="05 / credentials" title="Certificates" />
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        className="mt-6 max-w-2xl font-body text-neutral-400"
      >
        {PROFILE.university} — {PROFILE.degree}. Dean's List High Honors, 50%
        merit scholarship. Plus a focused stack of Anthropic AI engineering
        certificates.
      </motion.p>
      <div className="mt-10 space-y-5 md:mt-16">
        {CERT_TRACKS.map((tr, i) => {
          const total = tr.items.length;
          const done = tr.items.filter((c) => c.done).length;
          return (
            <motion.div
              key={tr.track}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.06 }}
              className="rounded-3xl glass edge p-7 md:p-10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {tr.track}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  {tr.source}
                  {tr.hours && ` · ${tr.hours}`} · {done}/{total}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {tr.items.map((c) => {
                  const chip = (
                    <>
                      {c.done && <span className="grad-amber font-bold">✓</span>}
                      {c.name}
                      {c.file && <span className="text-cyan-300/70">↗</span>}
                    </>
                  );
                  return c.file ? (
                    <a
                      key={c.name}
                      href={c.file}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-200"
                      data-cursor
                    >
                      {chip}
                    </a>
                  ) : (
                    <span
                      key={c.name}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300"
                    >
                      {chip}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* --------------------------------- Contact -------------------------------- */
export function Contact() {
  const links = [
    { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: "GitHub", value: "@abdallahalhomsi ↗", href: PROFILE.github },
    { label: "LinkedIn", value: "Abdallah Al Homsi ↗", href: PROFILE.linkedin },
  ];
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-40">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80"
      >
        Let's build something
      </motion.p>
      <h2 className="mt-6 font-display text-[13vw] font-bold uppercase leading-[0.88] tracking-tight md:text-[7.5rem]">
        <span className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={viewport}
            transition={{ duration: 0.9, ease: EASE }}
          >
            Get in <span className="grad-text">touch</span>
          </motion.span>
        </span>
      </h2>

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl glass edge md:grid-cols-3"
      >
        {links.map((l) => (
          <motion.a
            key={l.label}
            variants={fadeUp}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group p-7 transition hover:bg-white/[0.04] md:p-8"
            data-cursor
          >
            <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
              {l.label}
            </div>
            <div className="mt-2 break-all text-sm text-neutral-300 transition group-hover:text-cyan-300">
              {l.value}
            </div>
          </motion.a>
        ))}
      </motion.div>

      <div className="mt-10">
        <Magnetic
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-mono text-sm font-bold text-[#05060a]"
          style={{ background: "linear-gradient(110deg,#22d3ee,#818cf8)" }}
          data-cursor-label="mail"
          data-cursor
        >
          Email me directly →
        </Magnetic>
      </div>
    </section>
  );
}

/* --------------------------------- Footer --------------------------------- */
export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 font-mono text-xs text-neutral-600 md:flex-row md:items-center md:justify-between md:px-6">
        <span>© {new Date().getFullYear()} Abdallah Al Homsi</span>
        <span>Designed &amp; built from scratch · {PROFILE.location}</span>
      </div>
    </footer>
  );
}
