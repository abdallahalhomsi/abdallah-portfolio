import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "../lib/hooks";

/**
 * Project card with pointer-driven 3D tilt. Inner layers translate on the
 * Z axis for parallax depth. Falls back to a static card under reduced motion.
 */
export default function ProjectCard({ project, index }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), {
    stiffness: 220,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-9, 9]), {
    stiffness: 220,
    damping: 20,
  });
  const glowX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(my, [0, 1], ["0%", "100%"]);

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.08 }}
      style={{ rotateX: reduced ? 0 : rx, rotateY: reduced ? 0 : ry, transformPerspective: 1000 }}
      className="group relative h-full overflow-hidden rounded-3xl glass edge p-7 md:p-8"
      data-cursor
    >
      {/* cursor-follow glow */}
      <motion.div
        className="pointer-events-none absolute h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-60"
        style={{
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
          background: `radial-gradient(circle, ${project.accent}, transparent 70%)`,
        }}
        aria-hidden
      />
      {/* corner glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-40 blur-3xl transition-opacity group-hover:opacity-70"
        style={{ background: `radial-gradient(circle, ${project.accent}, transparent 70%)` }}
        aria-hidden
      />

      <div style={{ transform: "translateZ(40px)" }} className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
              {project.type}
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-[1.7rem]">
              {project.name}
            </h3>
          </div>
          <span className="shrink-0 whitespace-nowrap font-mono text-[11px] text-neutral-500">
            {project.period}
          </span>
        </div>

        <p className="mt-4 font-body text-sm leading-relaxed text-neutral-300">
          {project.blurb}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border px-3 py-1 font-mono text-[11px]"
              style={{
                borderColor: `${project.accent}40`,
                color: project.accent,
                background: `${project.accent}12`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider"
          style={{ color: project.accent }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: project.accent, boxShadow: `0 0 10px ${project.accent}` }}
          />
          {project.role}
        </div>
      </div>
    </motion.article>
  );
}
