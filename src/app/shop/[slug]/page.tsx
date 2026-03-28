"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Truck, ChevronDown } from "lucide-react";
import ProductImages from "@/components/shop/ProductImages";
import SizeSelector from "@/components/shop/SizeSelector";
import ColorSelector from "@/components/shop/ColorSelector";
import AddToCartButton from "@/components/shop/AddToCartButton";
import ProductCard from "@/components/shop/ProductCard";
import { getProductBySlug, getRelatedProducts, type ProductColor } from "@/data/products";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-100 py-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="font-sans font-medium text-[#0A2540]">{title}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="mt-3 font-sans text-sm text-gray-600 leading-relaxed">{children}</div>
      )}
    </div>
  );
}

interface PageProps {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 font-sans mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#F28C38] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#F28C38] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#0A2540]">{product.name}</span>
        </nav>

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <ScrollReveal direction="left">
            <ProductImages images={product.images} productName={product.name} />
          </ScrollReveal>

          {/* Details */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="lg:sticky lg:top-28 space-y-6">
              <div>
                <p className="font-sans text-sm text-gray-400 uppercase tracking-wider capitalize mb-2">
                  {product.category}
                </p>
                <h1 className="font-display font-semibold text-3xl md:text-4xl text-[#0A2540]">
                  {product.name}
                </h1>
                <p className="font-sans font-bold text-2xl text-[#F28C38] mt-2">
                  £{product.price.toFixed(2)}
                </p>
              </div>

              <p className="font-sans text-gray-600 leading-relaxed border-t border-gray-100 pt-5">
                {product.description}
              </p>

              {/* Colour */}
              <ColorSelector
                colors={product.colors}
                selectedColor={selectedColor?.name ?? null}
                onSelect={setSelectedColor}
              />

              {/* Size */}
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelect={setSelectedSize}
              />

              {/* Quantity */}
              <div>
                <label className="font-sans font-medium text-sm text-[#0A2540] block mb-3">
                  Quantity
                </label>
                <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="px-4 py-2.5 font-sans text-lg hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-5 py-2.5 font-sans font-medium border-x border-gray-200 min-w-[52px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="px-4 py-2.5 font-sans text-lg hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <AddToCartButton
                product={product}
                selectedSize={selectedSize}
                selectedColor={selectedColor}
                quantity={quantity}
              />

              {/* Free shipping note */}
              <div className="flex items-center gap-2 font-sans text-sm text-gray-500">
                <Truck size={16} className="text-[#7DD3C0]" />
                Free UK shipping on orders over £50
              </div>

              {/* Accordions */}
              <div>
                <Accordion title="Description">
                  <p>{product.description}</p>
                </Accordion>
                <Accordion title="Sizing & Fit">
                  <p>
                    Our tees run true to size. If you prefer an oversized fit, go up one size.
                    For jumpers, we recommend your usual size for a relaxed fit. All measurements
                    are taken lying flat.
                  </p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p>
                    Standard UK delivery: 3–5 business days. Express: 1–2 business days.
                    We offer free returns within 30 days — items must be unworn with original tags.
                    All items are printed on demand and shipped directly from our fulfilment partner.
                  </p>
                </Accordion>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <ScrollReveal>
              <h2 className="font-display font-semibold text-3xl text-[#0A2540] mb-8">
                You May Also Like
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 overflow-x-auto">
              {related.map((rel, i) => (
                <ScrollReveal key={rel.id} delay={i * 0.08}>
                  <ProductCard product={rel} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
