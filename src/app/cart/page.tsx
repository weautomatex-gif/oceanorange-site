"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WaveDecoration from "@/components/ui/WaveDecoration";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
        <WaveDecoration color="#F5E6D0" variant="dramatic" className="absolute top-24 left-0 w-full" />
        <ShoppingBag size={64} className="text-gray-200 mb-6" />
        <h1 className="font-display font-semibold text-3xl text-[#0A2540] mb-3">
          Your cart is empty
        </h1>
        <p className="font-sans text-gray-400 mb-8">
          Looks like you haven&apos;t found your wave yet.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-[#F28C38] text-white font-sans font-semibold px-8 py-4 rounded-full hover:bg-[#FF6B5A] transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="font-display font-semibold text-4xl text-[#0A2540] mb-10">Your Cart</h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Items */}
          <div className="lg:col-span-3 space-y-5">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 pb-5 border-b border-gray-100 last:border-0">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-medium text-[#0A2540] text-sm md:text-base truncate">{item.name}</h3>
                  <p className="font-sans text-xs text-gray-400 mt-0.5">{item.color} · {item.size}</p>
                  <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                    <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease" className="text-gray-500 hover:text-[#0A2540]"><Minus size={13} /></button>
                      <span className="font-sans text-sm w-5 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase" className="text-gray-500 hover:text-[#0A2540]"><Plus size={13} /></button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-sans font-semibold text-[#F28C38]">£{(item.price * item.quantity).toFixed(2)}</span>
                      <button onClick={() => removeItem(item.id)} aria-label="Remove" className="text-gray-300 hover:text-[#FF6B5A] transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-sans text-gray-400 hover:text-[#0A2540] transition-colors mt-4">
              <ArrowLeft size={15} /> Continue Shopping
            </Link>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm sticky top-28">
                <h2 className="font-display font-semibold text-xl text-[#0A2540] mb-6">Order Summary</h2>
                <div className="space-y-3 border-b border-gray-100 pb-5 mb-5">
                  <div className="flex justify-between font-sans text-sm text-gray-500">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-sans text-sm text-gray-500">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="font-sans text-xs text-[#7DD3C0]">
                      Add £{(50 - subtotal).toFixed(2)} more for free UK shipping.
                    </p>
                  )}
                </div>
                <div className="flex justify-between font-sans font-bold text-lg text-[#0A2540] mb-6">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
                <Link href="/checkout" className="block w-full text-center bg-[#F28C38] text-white font-sans font-semibold rounded-full py-4 hover:bg-[#FF6B5A] transition-colors">
                  Proceed to Checkout
                </Link>
                <div className="flex items-center justify-center gap-4 mt-5 text-gray-400 text-xs font-sans">
                  <span>Visa</span><span>Mastercard</span><span>PayPal</span><span>Apple Pay</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
