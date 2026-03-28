// tailwind.config.ts
// Tailwind CSS configuration extended with the Ocean Orange brand design system.
// Includes brand color palette, custom font families, and animation keyframes.

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // -------------------------------------------------------------------
      // Brand Color Palette
      // -------------------------------------------------------------------
      colors: {
        ocean: {
          blue: "#1B6FA8",      // Primary ocean blue
          DEFAULT: "#1B6FA8",
        },
        sunset: {
          orange: "#F28C38",    // Accent sunset orange
          DEFAULT: "#F28C38",
        },
        navy: {
          deep: "#0A2540",      // Deep navy background
          DEFAULT: "#0A2540",
        },
        sand: {
          beige: "#F5E6D0",     // Sand beige neutral
          DEFAULT: "#F5E6D0",
        },
        coral: {
          accent: "#FF6B5A",    // Coral accent highlight
          DEFAULT: "#FF6B5A",
        },
        seafoam: {
          DEFAULT: "#7DD3C0",   // Seafoam green
        },
      },

      // -------------------------------------------------------------------
      // Custom Font Families
      // -------------------------------------------------------------------
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },

      // -------------------------------------------------------------------
      // Animation Keyframes
      // -------------------------------------------------------------------
      keyframes: {
        // Gentle wave oscillation for SVG wave decorations
        wave: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25px)" },
        },
        // Sunburst rotation for the SunburstEffect component
        sunburst: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        // Fade & slide up for scroll reveal animations
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Shimmer for skeleton loaders
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // Pulse glow for CTA buttons
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0px 0px rgba(242,140,56,0)" },
          "50%": { boxShadow: "0 0 24px 8px rgba(242,140,56,0.45)" },
        },
      },
      animation: {
        wave: "wave 6s ease-in-out infinite",
        sunburst: "sunburst 20s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        shimmer: "shimmer 1.6s linear infinite",
        "glow-pulse": "glowPulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
