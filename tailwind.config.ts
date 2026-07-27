import type { Config } from "tailwindcss";

/**
 * DESIGN TOKENS
 * Palette + type scale pulled from ruul.io so the portfolio matches its look.
 * Change a value here and it updates everywhere on the site.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1A2018",
        canvas: "#FCFCF7",
        "canvas-muted": "#EFEFE9",
        surface: "#F1F4F0",
        forest: "#003E39",
        "forest-card": "#25352F",
        "forest-dark": "#002B28",
        lime: "#D3F969",
        grid: "#D8D9D3",
        danger: "#EA384C",
        info: "#3898EC",
        success: "#389154",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-serif)"],
      },
      maxWidth: { shell: "1110px" },
      borderRadius: { card: "12px", panel: "16px", xl2: "24px" },
      fontSize: {
        eyebrow: ["12px", { lineHeight: "16px", letterSpacing: "0.08em" }],
        "display-sm": ["36px", { lineHeight: "1.14", letterSpacing: "-0.01em" }],
        "display-md": ["48px", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-lg": ["64px", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
      },
      transitionTimingFunction: { ruul: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};

export default config;
