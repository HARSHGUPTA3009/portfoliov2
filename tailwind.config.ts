import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },

      colors: {
        // Backgrounds
      canvas: "#FAFAFA",
      surface: "#FFFFFF",
      "surface-raised": "#FFFFFF",
      "surface-border": "#E5E7EB",

      ink: "#111827",
      "ink-secondary": "#4B5563",
      "ink-tertiary": "#9CA3AF",

      accent: "#2563EB",
      "accent-light": "#DBEAFE",
      "accent-hover": "#1D4ED8",

        // Extra neutrals
        muted: "#F3F4F6",
        divider: "#E5E7EB",
      },

      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        snug: "-0.01em",
      },

      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },

      keyframes: {
        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(16px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;