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
        // Blue palette. `navy` is the brand dark, `accent` the bright pop.
        ink: "#121A26",
        canvas: "#FAFBFD",
        "canvas-muted": "#EDF1F6",
        surface: "#F0F4F9",
        navy: "#0B2A4A",
        "navy-card": "#173A60",
        "navy-dark": "#071D35",
        accent: "#8FD0FF", // bright sky blue: highlights and numbers on dark
        royal: "#2563EB", // deep, saturated blue for every call to action
        "royal-dark": "#1D4ED8",
        azure: "#3D8BFD", // deeper blue for line work on light backgrounds
        mist: "#E6EFFA", // pale blue wash for light sections
        grid: "#D5DCE6",
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
