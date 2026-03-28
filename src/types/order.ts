// src/types/order.ts
// TypeScript type definitions for Ocean Orange orders and checkout.

// =============================================
// ShippingAddress
// =============================================
export type ShippingAddress = {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
  country: string;
  countryCode: string;
};

// =============================================
// OrderItem — a line item in a confirmed order
// =============================================
export type OrderItem = {
  productId: string;
  variantId: string;
  name: string;
  size: string;
  color: string;
  image: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

// =============================================
// Order — a completed purchase
// =============================================
export type Order = {
  /** Ocean Orange internal order ID */
  id: string;
  /** Stripe Payment Intent ID */
  stripePaymentIntentId: string;
  /** Printful order ID (assigned after fulfilment) */
  printfulOrderId?: string;
  /** Customer email address */
  email: string;
  /** Shipping address */
  shippingAddress: ShippingAddress;
  /** Line items */
  items: OrderItem[];
  /** Order subtotal (GBP) */
  subtotal: number;
  /** Shipping cost (GBP) */
  shipping: number;
  /** Grand total (GBP) */
  total: number;
  /** Order status */
  status: "pending" | "paid" | "fulfilled" | "shipped" | "cancelled";
  /** ISO 8601 timestamp */
  createdAt: string;
};

// =============================================
// CheckoutSession — data used during checkout
// =============================================
export type CheckoutSession = {
  cartItems: import("./cart").CartItem[];
  shippingAddress?: ShippingAddress;
  stripeClientSecret?: string;
};
