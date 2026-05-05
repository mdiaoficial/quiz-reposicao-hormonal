import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Dr. Daniel Dorta
        dourado: {
          DEFAULT: "#c7a573",
          dark: "#a98856",
          light: "#d8bd91",
        },
        verde: {
          DEFAULT: "#245d3f",
          dark: "#173f2a",
          light: "#3a7a57",
        },
        creme: "#F2E9DB",
        bege: "#e2d1b7",
        carvao: "#1a2a22",
      },
      fontFamily: {
        serif: ["var(--font-ivy)", "Georgia", "serif"],
        sans: ["var(--font-haboro)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(2.125rem, 5vw, 2.75rem)", { lineHeight: "1.1" }],
        "section": ["clamp(1.75rem, 4vw, 2.25rem)", { lineHeight: "1.15" }],
      },
    },
  },
  plugins: [],
};

export default config;
