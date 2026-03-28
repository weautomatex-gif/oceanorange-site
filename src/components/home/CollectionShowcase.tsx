import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const COLLECTIONS = [
  {
    slug: "mens",
    label: "Men's Collection",
    image: "/man.jpg",
    alt: "Man in casual ocean style",
  },
  {
    slug: "womens",
    label: "Women's Collection",
    image: "/women.jpg",
    alt: "Woman coastal fashion",
  },
  {
    slug: "kids",
    label: "Kids' Collection",
    image: "/children.jpg",
    alt: "Child at the seaside",
  },
];

export default function CollectionShowcase() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#0A2540] text-center tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Explore Our World
            </h2>
            <div className="w-12 h-[3px] bg-[#F28C38] mx-auto mt-4 mb-14" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {COLLECTIONS.map((col, i) => (
            <ScrollReveal key={col.slug} delay={i * 0.15} direction="up">
              <Link
                href={`/collections/${col.slug}`}
                className="group relative overflow-hidden rounded-3xl cursor-pointer block"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Background image */}
                <Image
                  src={col.image}
                  alt={col.alt}
                  fill
                  className="object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Gradient overlay — stronger at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/30 to-transparent transition-all duration-500 group-hover:from-[#0A2540]/70" />
                
                {/* Subtle warm tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F28C38]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Border glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/0 group-hover:ring-white/20 transition-all duration-500" />
                
                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <h3 
                    className="text-2xl md:text-3xl font-semibold text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {col.label}
                  </h3>
                  <div className="flex items-center gap-2 text-[#F28C38] text-[13px] tracking-[0.12em] uppercase font-medium">
                    <span>Explore Collection</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
