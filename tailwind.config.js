/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Sora"', "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#f2f4f8",
        cyan: { brand: "#22d3ee" },
        indigo: { brand: "#818cf8" },
        amber: { brand: "#f59e0b" },
      },
    },
  },
  plugins: [],
};
