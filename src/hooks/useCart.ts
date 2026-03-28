// src/hooks/useCart.ts
// Custom hook for consuming the CartContext.
// Provides convenient access to cart state (items, total, itemCount)
// and cart actions (addItem, removeItem, updateQuantity, clearCart).

"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import type { CartItem } from "@/types/cart";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

// Re-export the CartItem type for convenience
export type { CartItem };
