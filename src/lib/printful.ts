// src/lib/printful.ts
// Printful API integration helpers for Ocean Orange.
// Provides functions to fetch products, variants, and sync orders with Printful.
// All requests are server-side (API key must never be exposed to the client).

const PRINTFUL_API_BASE = "https://api.printful.com";

/**
 * Helper: make an authenticated request to the Printful API.
 */
async function printfulFetch<T>(endpoint: string): Promise<T> {
  const apiKey = process.env.PRINTFUL_API_KEY;
  if (!apiKey) {
    throw new Error("[Ocean Orange] PRINTFUL_API_KEY environment variable is not set.");
  }
  const res = await fetch(`${PRINTFUL_API_BASE}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    // Revalidate every 60 seconds (ISR-compatible)
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`Printful API error: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data.result as T;
}

/**
 * Fetch all synced products from the Printful store.
 * TODO: Map Printful response to the local Product type.
 */
export async function getPrintfulProducts() {
  // TODO: Implement and map to Product[] type
  return printfulFetch("/store/products");
}

/**
 * Fetch a single synced product by its Printful ID.
 * TODO: Map Printful response to the local Product type.
 */
export async function getPrintfulProductById(id: string | number) {
  // TODO: Implement and map to Product type
  return printfulFetch(`/store/products/${id}`);
}
