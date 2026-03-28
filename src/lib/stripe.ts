// src/lib/stripe.ts
// Stripe client configuration for Ocean Orange.
// Exports a singleton Stripe instance for use in client components,
// and a helper to load the Stripe.js script via @stripe/stripe-js.

import { loadStripe, type Stripe } from "@stripe/stripe-js";

// Singleton promise — avoids loading Stripe multiple times
let stripePromise: Promise<Stripe | null>;

/**
 * Returns a (singleton) promise that resolves to the Stripe instance.
 * Use this in client components that render Stripe Elements.
 */
export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      console.warn("[Ocean Orange] NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set.");
    }
    stripePromise = loadStripe(key ?? "");
  }
  return stripePromise;
}

// TODO: Add server-side Stripe instance (stripe-js Node) for creating PaymentIntents
