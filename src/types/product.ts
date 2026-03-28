// src/types/product.ts
// TypeScript type definitions for Ocean Orange product data.
// Maps to the structure returned by the Printful API and used throughout the app.

// =============================================
// Variant — a specific size/colour combination
// =============================================
export type ProductVariant = {
  /** Unique variant ID (from Printful) */
  id: string;
  /** Printful sync variant ID */
  syncVariantId?: string;
  /** Size label e.g. "S", "M", "L", "XL" */
  size: string;
  /** Colour name e.g. "Ocean Blue" */
  color: string;
  /** Colour hex value e.g. "#1B6FA8" */
  colorHex: string;
  /** Price in GBP (pence or decimal — use formatPrice from utils) */
  price: number;
  /** Whether this variant is in stock */
  inStock: boolean;
  /** Printful variant images for this specific colour/size */
  images?: string[];
};

// =============================================
// Product — a full product with all variants
// =============================================
export type Product = {
  /** Unique product ID (local or Printful) */
  id: string;
  /** Printful sync product ID */
  syncProductId?: string;
  /** Display name */
  name: string;
  /** URL-safe slug e.g. "mens-wave-tee" */
  slug: string;
  /** Short description shown on product cards */
  shortDescription: string;
  /** Full description shown on product detail page */
  description: string;
  /** Array of product image URLs */
  images: string[];
  /** All available variants */
  variants: ProductVariant[];
  /** Collection tags e.g. ["mens", "t-shirts"] */
  collections: string[];
  /** Base price (the lowest variant price) */
  basePrice: number;
  /** Whether t product is featured on the homepage */
  featured?: boolean;
  /** Whether the product is new */
  isNew?: boolean;
  /** Whether the product is on sale */
  onSale?: boolean;
  /** Sale price if applicable */
  salePrice?: number;
  /** Date the product was created */
  createdAt?: string;
};

// =============================================
// Collection summary (for listing pages)
// =============================================
export type Collection = {
  slug: string;
  label: string;
  description?: string;
  image: string;
  productCount?: number;
};
