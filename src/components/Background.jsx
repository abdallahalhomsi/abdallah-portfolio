import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Fixed ambient background: drifting orbs + perspective grid + grain. */
export default function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <>
      <div className="grain" aria-hidden />
      <div className="gridbg" aria-hidden />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div
          style={{ y: y1 }}
          className="orb-1 absolute -top-40 right-[-12%] h-[62vh] w-[62vh] rounded-full blur-[140px]"
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,.34), transparent 70%)",
            }}
          />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="orb-2 absolute top-1/3 left-[-16%] h-[58vh] w-[58vh] rounded-full blur-[140px]"
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(129,140,248,.32), transparent 70%)",
            }}
          />
        </motion.div>
        <div
          className="absolute bottom-[-12%] left-1/3 h-[46vh] w-[46vh] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,.12), transparent 70%)",
          }}
        />
      </div>
    </>
  );
}
