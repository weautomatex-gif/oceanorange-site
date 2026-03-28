import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WaveDecoration from "@/components/ui/WaveDecoration";

export const metadata: Metadata = {
  title: "Collections | Ocean Orange",
  description: "Browse Ocean Orange collections — Men's, Women's, Kids' and Jumpers.",
};

const COLLECTIONS = [
  {
    slug: "mens",
    label: "Men's Collection",
    description: "Built for the ocean, made to last.",
    productCount: 4,
    image: "/man.jpg",
    alt: "Man at the beach",
  },
  {
    slug: "womens",
    label: "Women's Collection",
    description: "Effortless coastal style for every shore.",
    productCount: 4,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    alt: "Woman walking on beach at golden hour",
  },
  {
    slug: "kids",
    label: "Kids' Collection",
    description: "Born for beach days and big adventures.",
    productCount: 4,
    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800&q=80",
    alt: "Children playing on the beach",
  },
  {
    slug: "jumpers",
    label: "Jumpers",
    description: "Heavyweight warmth for crisp coastal mornings.",
    productCount: 4,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    alt: "Cosy sweatshirt on a beach cliff",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[280px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80"
          alt="Aerial beach view"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,37,64,0.4) 0%, rgba(10,37,64,0.65) 100%)" }} />
        <div className="relative text-center text-white px-6">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-4 font-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Collections</span>
          </nav>
          <h1 className="font-display font-semibold text-5xl md:text-6xl">Our Collections</h1>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLECTIONS.map((col, i) => (
            <ScrollReveal key={col.slug} delay={i * 0.1} direction="up">
              <Link
                href={`/collections/${col.slug}`}
                className="group block relative aspect-[16/9] rounded-2xl overflow-hidden"
              >
                <Image
                  src={col.image}
                  alt={col.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,37,64,0.85) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 p-7">
                  <h2 className="font-display text-2xl font-semibold text-white mb-1 group-hover:-translate-y-1 transition-transform duration-300">
                    {col.label}
                  </h2>
                  <p className="font-sans text-sm text-white/60 mb-2">{col.description}</p>
                  <span className="font-sans text-xs text-[#F28C38] uppercase tracking-widest font-medium">
                    {col.productCount} Products →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <WaveDecoration color="#F5E6D0" variant="gentle" />
    </div>
  );
}
