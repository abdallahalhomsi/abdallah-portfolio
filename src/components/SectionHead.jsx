import React from "react";
import { motion } from "framer-motion";
import { viewport, EASE } from "../lib/motion";

/** Section header: a kicker label, big title, and a sweeping hairline. */
export default function SectionHead({ kicker, title }) {
  return (
    <div className="flex items-baseline gap-4 md:gap-6">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        className="font-mono text-xs text-cyan-300/60"
      >
        {kicker}
      </motion.span>
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "110%" }}
          whileInView={{ y: "0%" }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-display text-[clamp(1.6rem,6vw,3.75rem)] font-bold uppercase tracking-tight"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 1, ease: EASE }}
        className="h-px flex-1 origin-left"
        style={{ background: "linear-gradient(90deg,rgba(34,211,238,.5),transparent)" }}
      />
    </div>
  );
}
