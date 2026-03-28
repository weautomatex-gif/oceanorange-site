// src/hooks/useProducts.ts
// Custom hook for fetching and caching product data.
// In development, returns data from src/data/products.ts.
// In production, fetches from the Printful API and maps to local Product types.

"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/types/product";
import { products as mockProducts } from "@/data/products";

type UseProductsReturn = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
};

/**
 * Fetch all products. In development, uses mock data.
 */
export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Replace with Printful API call in production
    try {
      setProducts(mockProducts as unknown as Product[]);
    } catch (err) {
      setError("Failed to load products.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { products, isLoading, error };
}

/**
 * Fetch a single product by slug.
 */
export function useProduct(slug: string): { product: Product | null; isLoading: boolean } {
  const { products, isLoading } = useProducts();
  const product = products.find((p) => p.slug === slug) ?? null;
  return { product, isLoading };
}
