"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_rgba(10,37,64,0.1)] hover:-translate-y-1"
    >
      {/* Image */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-[#F5F5F5]"
        onMouseEnter={() => product.images[1] && setImgIndex(1)}
        onMouseLeave={() => setImgIndex(0)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={product.images[imgIndex] ?? product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>
        </AnimatePresence>

        {product.isNew && (
          <span className="absolute top-4 right-4 bg-[#FF6B5A] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full z-10">
            New
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#0A2540]/30 font-medium mb-1">
          {product.category}
        </p>
        <h3 className="font-sans font-medium text-base text-[#0A2540] truncate">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans font-semibold text-[#F28C38] text-base">
            £{product.price.toFixed(2)}
          </span>
          <div className="flex gap-1.5">
            {product.colors.slice(0, 4).map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="w-3 h-3 rounded-full border border-black/5"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
