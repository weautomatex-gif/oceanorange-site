"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { products } from "@/data/products";

const featured = products.filter((p) => p.isFeatured || p.isNew).slice(0, 6);

export default function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    setCanScrollLeft(scrollRef.current.scrollLeft > 10);
    setCanScrollRight(
      scrollRef.current.scrollLeft <
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
    );
  };

  useEffect(() => {
    onScroll();
  }, []);

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-[#0A2540]">
            New Arrivals
          </h2>
          <p className="font-sans text-base text-[#0A2540]/40 mt-3">
            Fresh designs, straight from the coast
          </p>
        </ScrollReveal>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#0A2540] hover:bg-[#F28C38] hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-6 pt-2 snap-x snap-mandatory"
          >
            {featured.map((product) => (
              <div
                key={product.id}
                className="snap-start shrink-0 min-w-[300px] w-[300px] group"
              >
                <Link
                  href={`/shop/${product.slug}`}
                  className="block bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_rgba(10,37,64,0.1)] hover:translate-y-[-6px]"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F5F5]">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      sizes="320px"
                    />
                    {product.isNew && (
                      <span className="absolute top-4 right-4 bg-[#FF6B5A] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full z-10">
                        New
                      </span>
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#0A2540]/30 font-medium mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-sans font-medium text-lg text-[#0A2540] truncate">
                      {product.name}
                    </h3>
                    <p className="font-sans font-semibold text-lg text-[#F28C38] mt-1">
                      £{product.price.toFixed(2)}
                    </p>
                    {/* Color dots */}
                    <div className="flex gap-2 mt-3">
                      {product.colors.slice(0, 4).map((c) => (
                        <span
                          key={c.name}
                          title={c.name}
                          className="w-3 h-3 rounded-full border border-black/10"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#0A2540] hover:bg-[#F28C38] hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link
            href="/shop"
            className="font-sans text-[13px] tracking-[0.12em] uppercase text-[#F28C38] font-semibold animated-underline"
          >
            View All Products &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
