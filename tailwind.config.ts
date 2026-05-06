import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "faded-navy": "#1e2c42",
        "washed-navy": "#2a3d56",
        "steel-blue": "#4a6274",
        "off-white": "#f5f2ec",
        ivory: "#f0ebe0",
        sand: "#d4c4a0",
        "aged-beige": "#c8b99a",
        "muted-brown": "#8b7355",
        "steel-grey": "#7a8a9a",
        "vintage-cream": "#ede5d4",
        "warm-grey": "#9a9188",
        "light-stone": "#e8e2d8",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.3em",
        "extra-wide": "0.2em",
        luxury: "0.15em",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "fade-up": "fadeUp 1s ease-out forwards",
        "slide-in": "slideIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
