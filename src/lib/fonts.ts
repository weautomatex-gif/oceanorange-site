// src/lib/fonts.ts
// Font loading configuration for Ocean Orange.
// Uses next/font to load and register fonts for use in layout.tsx.
// TODO: Replace Google Font families with the custom .woff2 files in public/fonts/
//       once final brand fonts have been approved.

import { Inter, Playfair_Display } from "next/font/google";

/**
 * Body / UI sans-serif font — Inter from Google Fonts.
 * Used for navigation, product names, body copy, and UI elements.
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Display / heading serif font — Playfair Display.
 * Used for hero headlines, section titles, and brand statement text.
 */
export const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700"],
});

/**
 * Combined font class names to apply to the <html> element in layout.tsx.
 * @example <html className={fontClassNames}>
 */
export const fontClassNames = [inter.variable, displayFont.variable].join(" ");
