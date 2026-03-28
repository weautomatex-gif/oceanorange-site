"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product, ProductColor } from "@/data/products";

interface AddToCartButtonProps {
  product: Product;
  selectedSize: string | null;
  selectedColor: ProductColor | null;
  quantity: number;
}

export default function AddToCartButton({
  product,
  selectedSize,
  selectedColor,
  quantity,
}: AddToCartButtonProps) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!selectedSize) { setError("Please select a size."); return; }
    if (!selectedColor) { setError("Please select a colour."); return; }
    setError("");

    addItem({
      id: `${product.id}-${selectedColor.name}-${selectedSize}`,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor.name,
      colorHex: selectedColor.hex,
      size: selectedSize,
      quantity,
    });

    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      openCart();
    }, 1500);
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleAdd}
        className={`w-full flex items-center justify-center gap-3 font-sans font-semibold text-lg py-4 rounded-full transition-all duration-300 ${
          added
            ? "bg-[#7DD3C0] text-white scale-[0.98]"
            : "bg-[#F28C38] text-white hover:bg-[#FF6B5A] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(242,140,56,0.35)]"
        }`}
      >
        {added ? (
          <>
            <Check size={22} />
            Added!
          </>
        ) : (
          <>
            <ShoppingBag size={22} />
            Add to Cart
          </>
        )}
      </button>
      {error && (
        <p className="font-sans text-sm text-[#FF6B5A] text-center">{error}</p>
      )}
    </div>
  );
}
