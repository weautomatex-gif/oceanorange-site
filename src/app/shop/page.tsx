"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import ProductFilters from "@/components/shop/ProductFilters";
import { products } from "@/data/products";

type Category = "all" | "mens" | "womens" | "kids" | "jumpers";
type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

export default function ShopPage() {
  const [category, setCategory] = useState<Category>("all");
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    let list = category === "all" ? products : products.filter((p) => p.category === category);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "newest") list = [...list].filter((p) => p.isNew).concat(list.filter((p) => !p.isNew));
    return list;
  }, [category, sort]);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero banner */}
      <div className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=1920&q=80"
          alt="Ocean waves at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div 
          className="absolute inset-0" 
          style={{ background: "linear-gradient(to bottom, rgba(10,37,64,0.3) 0%, rgba(10,37,64,0.2) 50%, rgba(10,37,64,0.7) 100%)" }} 
        />
        <div className="relative z-10 text-center text-white px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[12px] text-white/50 uppercase tracking-wider mb-4 font-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home size={13} strokeWidth={2} /> Home
            </Link>
            <span>/</span>
            <span className="text-white">Shop</span>
          </nav>
          <h1 className="font-display font-semibold text-5xl md:text-6xl">The Collection</h1>
        </div>
      </div>

      {/* Filters */}
      <ProductFilters
        category={category}
        sort={sort}
        onCategoryChange={setCategory}
        onSortChange={setSort}
        total={products.length}
        filtered={filtered.length}
      />

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
