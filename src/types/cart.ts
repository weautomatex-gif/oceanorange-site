// src/types/cart.ts
// TypeScript type definitions for the Ocean Orange shopping cart.

// =============================================
// CartItem — a single item in the cart
// =============================================
export type CartItem = {
  /** Unique identifier for this cart line (usually variantId) */
  id: string;
  /** Parent product ID */
  productId: string;
  /** Printful variant ID */
  variantId: string;
  /** Product display name */
  name: string;
  /** Selected size */
  size: string;
  /** Selected colour name */
  color: string;
  /** Selected colour hex */
  colorHex: string;
  /** Product / variant image URL */
  image: string;
  /** Unit price in GBP */
  price: number;
  /** Quantity ordered */
  quantity: number;
  /** URL slug for linking back to the product detail page */
  slug: string;
};

// =============================================
// Cart — the full cart state
// =============================================
export type Cart = {
  items: CartItem[];
  /** Subtotal before shipping/tax */
  subtotal: number;
  /** Total item count */
  itemCount: number;
};
