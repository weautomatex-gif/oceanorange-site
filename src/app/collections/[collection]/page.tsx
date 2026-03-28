"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/shop/ProductCard";
import ProductFilters from "@/components/shop/ProductFilters";
import { products } from "@/data/products";
import { useState, useMemo } from "react";
import type { Product } from "@/data/products";

type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

const COLLECTION_META: Record<string, { title: string; description: string; image: string; alt: string }> = {
  mens: {
    title: "Men's Collection",
    description: "Built for the ocean, made to last.",
    image: "https://images.unsplash.com/photo-1502680390548-bdbac40a5e46?w=1920&q=80",
    alt: "Man surfing at sunset",
  },
  womens: {
    title: "Women's Collection",
    description: "Effortless coastal style for every shore.",
    image: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=1920&q=80",
    alt: "Woman on beach at golden hour",
  },
  kids: {
    title: "Kids' Collection",
    description: "Born for beach days and big adventures.",
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=1920&q=80",
    alt: "Children on a beach",
  },
  jumpers: {
    title: "Jumpers",
    description: "Heavyweight warmth for crisp coastal mornings.",
    image: "https://images.unsplash.com/photo-1520443240718-fce21901db79?w=1920&q=80",
    alt: "Cosy sweatshirt on coastal cliff",
  },
};

interface PageProps {
  params: { collection: string };
}

export default function CollectionPage({ params }: PageProps) {
  const meta = COLLECTION_META[params.collection];
  if (!meta) notFound();

  const collectionProducts = products.filter((p) => p.category === params.collection);
  const [sort, setSort] = useState<SortOption>("featured");

  const sorted = useMemo((): Product[] => {
    if (sort === "price-asc") return [...collectionProducts].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...collectionProducts].sort((a, b) => b.price - a.price);
    if (sort === "newest") return [...collectionProducts].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    return collectionProducts;
  }, [sort, collectionProducts]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[280px] flex items-center justify-center">
        <Image
          src={meta.image}
          alt={meta.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,37,64,0.3) 0%, rgba(10,37,64,0.65) 100%)" }} />
        <div className="relative text-center text-white px-6">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-4 font-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-white transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-white">{meta.title}</span>
          </nav>
          <h1 className="font-display font-semibold text-5xl md:text-6xl">{meta.title}</h1>
          <p className="font-sans text-white/70 mt-3 text-lg">{meta.description}</p>
        </div>
      </div>

      {/* Filter bar */}
      <ProductFilters
        category={params.collection as "mens" | "womens" | "kids" | "jumpers"}
        sort={sort}
        onCategoryChange={() => {}}
        onSortChange={setSort}
        total={collectionProducts.length}
        filtered={sorted.length}
      />

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
