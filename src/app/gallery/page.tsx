"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Export metadata is not valid from client components — we omit it here
// and handle via generateMetadata at route level if needed.

type GalleryCategory = "all" | "ocean" | "sunsets" | "marine" | "coastal";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  aspect: "square" | "landscape" | "portrait";
}

const IMAGES: GalleryImage[] = [
  { id: "g1",  src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80", alt: "Waves at sunset", title: "Golden Tide", category: "sunsets", aspect: "landscape" },
  { id: "g2",  src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",  alt: "Sea turtle underwater", title: "Pacific Glide", category: "marine", aspect: "portrait" },
  { id: "g3",  src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",  alt: "Vibrant coral reef", title: "Reef at Depth", category: "marine", aspect: "square" },
  { id: "g4",  src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80", alt: "Aerial beach view", title: "Above the Shore", category: "coastal", aspect: "landscape" },
  { id: "g5",  src: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=900&q=80",  alt: "Golden ocean at dusk", title: "Copper Light", category: "sunsets", aspect: "square" },
  { id: "g6",  src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80", alt: "Sandy beach shoreline", title: "Shoreline Morning", category: "coastal", aspect: "landscape" },
  { id: "g7",  src: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&q=80",  alt: "Coastal cliffs at dusk", title: "Cliff's Edge", category: "ocean", aspect: "portrait" },
  { id: "g8",  src: "https://images.unsplash.com/photo-1502680390548-bdbac40a5e46?w=900&q=80",  alt: "Ocean horizon at sunrise", title: "Horizon Break", category: "ocean", aspect: "square" },
  { id: "g9",  src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900&q=80",  alt: "Wave crashing on rocks", title: "Storm Surge", category: "ocean", aspect: "square" },
  { id: "g10", src: "https://images.unsplash.com/photo-1476673160081-cf065bc4cecb?w=1200&q=80", alt: "Tropical sunset beach", title: "Last Light", category: "sunsets", aspect: "landscape" },
  { id: "g11", src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80",  alt: "Jellyfish floating underwater", title: "Drifting", category: "marine", aspect: "portrait" },
  { id: "g12", src: "https://images.unsplash.com/photo-1515238152791-8216bfcf7e2e?w=900&q=80",  alt: "Coastal town harbour", title: "Harbour Dusk", category: "coastal", aspect: "square" },
  { id: "g13", src: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=900&q=80",  alt: "Whale swimming in deep ocean", title: "Gentle Giant", category: "marine", aspect: "landscape" },
  { id: "g14", src: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=800&q=80",  alt: "Rocky beach at low tide", title: "Low Tide Pools", category: "coastal", aspect: "portrait" },
  { id: "g15", src: "https://images.unsplash.com/photo-1434145244510-48b0a9c8b51d?w=900&q=80",  alt: "Palm tree on tropical beach", title: "Tropic Shore", category: "coastal", aspect: "square" },
];

const CATEGORIES: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ocean", label: "Ocean" },
  { value: "sunsets", label: "Sunsets" },
  { value: "marine", label: "Marine Life" },
  { value: "coastal", label: "Coastal" },
];

const aspectClass = { square: "aspect-square", landscape: "aspect-[4/3]", portrait: "aspect-[3/4]" };

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? IMAGES
    : IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <ScrollReveal>
          <h1 className="font-display font-semibold text-5xl md:text-6xl text-[#0A2540] mb-3">
            The Gallery
          </h1>
          <p className="font-accent text-xl text-[#F28C38]">Photography by Stuart</p>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={0.1} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={`font-sans text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === value
                    ? "bg-[#0A2540] border-[#0A2540] text-white"
                    : "border-gray-200 text-[#0A2540] hover:border-[#0A2540]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {filtered.map((img, i) => (
            <ScrollReveal key={img.id} delay={i * 0.04} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => openLightbox(i)}
                className={`group relative w-full overflow-hidden rounded-xl block ${aspectClass[img.aspect]}`}
                aria-label={`Open ${img.title}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#0A2540]/0 group-hover:bg-[#0A2540]/40 transition-colors duration-300 flex items-center justify-center">
                  <Eye size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-display text-white text-base font-medium">{img.title}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] rounded-xl overflow-hidden">
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="text-center text-white/70 font-sans text-sm mt-3">
                {filtered[lightboxIndex].title}
              </p>
            </motion.div>

            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
