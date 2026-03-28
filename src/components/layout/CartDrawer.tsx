"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, totalItems, subtotal, removeItem, updateQuantity } =
    useCart();

  // Lock scroll when open
  useEffect(() => {
    if (isCartOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-[65]"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[420px] bg-white flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h2 className="font-display text-xl font-semibold text-[#0A2540]">
                Your Cart{" "}
                <span className="text-[#F28C38] font-sans text-base font-normal">
                  ({totalItems})
                </span>
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <ShoppingBag size={48} className="text-gray-200 mb-4" />
                  <p className="font-display text-xl text-[#0A2540] mb-2">
                    Your cart is empty
                  </p>
                  <p className="font-sans text-sm text-gray-400 mb-6">
                    Add something beautiful from the collection.
                  </p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="bg-[#F28C38] text-white rounded-full px-6 py-3 font-sans font-medium text-sm hover:bg-[#FF6B5A] transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 pb-5 border-b border-gray-100 last:border-0"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans font-medium text-[#0A2540] text-sm truncate">
                          {item.name}
                        </p>
                        <p className="font-sans text-xs text-gray-400 mt-0.5">
                          {item.color} · {item.size}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                              className="text-gray-500 hover:text-[#0A2540] transition-colors"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="font-sans text-sm w-5 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                              className="text-gray-500 hover:text-[#0A2540] transition-colors"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-sans font-semibold text-[#F28C38] text-sm">
                              £{(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              aria-label="Remove item"
                              className="text-gray-300 hover:text-[#FF6B5A] transition-colors"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 px-6 py-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-gray-500">Subtotal</span>
                  <span className="font-sans font-semibold text-[#0A2540] text-lg">
                    £{subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="font-sans text-xs text-gray-400">
                  Shipping calculated at checkout
                </p>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block w-full text-center border-2 border-[#0A2540] text-[#0A2540] rounded-full py-3 font-sans font-medium text-sm hover:bg-[#0A2540] hover:text-white transition-all duration-300"
                >
                  View Cart
                </Link>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="block w-full text-center bg-[#F28C38] text-white rounded-full py-3.5 font-sans font-semibold text-sm hover:bg-[#FF6B5A] transition-colors"
                >
                  Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
