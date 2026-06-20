import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { NAV, PROFILE } from "../data";
import { scrollToId } from "../lib/useLenis";
import { useActiveSection } from "../lib/hooks";
import Magnetic from "./Magnetic";

const IDS = NAV.map((s) => s.toLowerCase());

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const active = useActiveSection(IDS);

  return (
    <>
      {/* scroll progress line */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg,var(--cyan),var(--indigo))",
        }}
        aria-hidden
      />

      <nav className="fixed top-0 z-50 w-full glass border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-6">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("top");
            }}
            className="font-mono text-sm font-bold tracking-tight"
            data-cursor
          >
            <span className="grad-text">AH</span>
            <span className="text-white/40">.dev</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV.map((s) => {
              const id = s.toLowerCase();
              const on = active === id;
              return (
                <a
                  key={s}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(id);
                  }}
                  className="relative px-3 py-1.5 text-sm transition-colors"
                  style={{ color: on ? "var(--ink)" : "var(--muted)" }}
                  data-cursor
                >
                  {on && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{s}</span>
                </a>
              );
            })}
          </div>

          <Magnetic
            href={`mailto:${PROFILE.email}`}
            className="rounded-full px-4 py-2 font-mono text-xs font-bold text-[#05060a]"
            style={{ background: "linear-gradient(110deg,#22d3ee,#818cf8)" }}
            data-cursor
          >
            Get in touch
          </Magnetic>
        </div>
      </nav>
    </>
  );
}
