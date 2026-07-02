import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#080810",
          muted: "#0c0c18",
          elevated: "rgba(255,255,255,0.04)",
          card: "rgba(255,255,255,0.06)",
        },
        ink: {
          DEFAULT: "#e8e8f0",
          muted: "#9494a8",
          faint: "#6b6b80",
        },
        accent: {
          DEFAULT: "#818cf8",
          hover: "#6366f1",
          glow: "#a78bfa",
        },
        cosmic: {
          purple: "#581c87",
          blue: "#1e3a8a",
          indigo: "#312e81",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        twinkle: "twinkle 4s ease-in-out infinite",
        "drift-slow": "drift 120s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(129, 140, 248, 0.15)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
