// src/lib/constants.ts
// Brand-level constants for Ocean Orange.
// Includes brand colors, site metadata, social links, navigation, and collections.

// ============================================================
// Brand Colour Palette
// ============================================================
export const BRAND_COLORS = {
  oceanBlue:    "#1B6FA8",
  sunsetOrange: "#F28C38",
  deepNavy:     "#0A2540",
  sandBeige:    "#F5E6D0",
  coralAccent:  "#FF6B5A",
  seafoam:      "#7DD3C0",
} as const;

// ============================================================
// Site Metadata
// ============================================================
export const SITE_CONFIG = {
  name:        "Ocean Orange",
  tagline:     "Ride the Wave",
  description: "Premium beach lifestyle apparel, inspired by the ocean.",
  url:         process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.oceanorange.co.uk",
  email:       "hello@oceanorange.co.uk",
  currency:    "GBP",
  locale:      "en-GB",
} as const;

// ============================================================
// Social Media Links
// ============================================================
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/oceanorange",
  tiktok:    "https://tiktok.com/@oceanorange",
  facebook:  "https://facebook.com/oceanorange",
} as const;

// ============================================================
// Primary Navigation
// ============================================================
export const NAV_LINKS = [
  { label: "Shop",        href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Gallery",     href: "/gallery" },
  { label: "About",       href: "/about" },
  { label: "Contact",     href: "/contact" },
] as const;

// ============================================================
// Collections
// ============================================================
export const COLLECTIONS = [
  { slug: "mens",            label: "Men's",          image: "/images/collections/mens.jpg" },
  { slug: "womens",          label: "Women's",         image: "/images/collections/womens.jpg" },
  { slug: "kids",            label: "Kids",            image: "/images/collections/kids.jpg" },
  { slug: "beach-essentials",label: "Beach Essentials",image: "/images/collections/beach-essentials.jpg" },
] as const;

// ============================================================
// Announcement Bar Messages (rotate through these)
// ============================================================
export const ANNOUNCEMENTS = [
  "🌊 Free UK shipping on orders over £50",
  "🐢 New Summer 2025 collection — shop now",
  "☀️ Made sustainably, designed for the shore",
] as const;
