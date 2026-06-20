// Reusable Framer Motion variants. Centralized so motion feels consistent.

const EASE = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

// Container that staggers its children's reveal.
export const stagger = (amount = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: amount, delayChildren },
  },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

// Default viewport config for whileInView reveals.
export const viewport = { once: true, amount: 0.15 };

export { EASE };
