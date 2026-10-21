import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        arena: {
          950: "#07090e",
          900: "#0c1017",
          850: "#111722",
          800: "#171f2e",
          700: "#222d42",
          600: "#334155",
        },
        electric: {
          orange: "#FF5E1E",
          hover: "#FF7842",
          subtle: "rgba(255, 94, 30, 0.12)",
          border: "rgba(255, 94, 30, 0.3)",
          glow: "rgba(255, 94, 30, 0.45)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(255, 94, 30, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(255, 94, 30, 0.7)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s infinite ease-in-out",
        "slide-up": "slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
