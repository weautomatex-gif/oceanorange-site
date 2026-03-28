import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BrandStory() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(10,37,64,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80"
                alt="Photographer with camera exploring the coast"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" delay={0.15}>
            <p className="font-accent text-xl text-[#F28C38] mb-2">Our Story</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#0A2540] leading-tight mb-6">
              From Behind the Lens to the Shoreline
            </h2>
            <div className="font-sans text-base md:text-lg text-[#0A2540]/60 leading-relaxed space-y-4 mb-8">
              <p>
                What started as a camera and a love for the coastline became something bigger. Stuart spent years photographing the British shoreline — capturing the light at golden hour, the movement of the tides, and the quiet beauty of marine life.
              </p>
              <p>
                Ocean Orange is his way of sharing that world. Every design starts with a real photograph, translated into wearable art that carries the spirit of the coast wherever you go.
              </p>
            </div>
            
            <Link
              href="/about"
              className="inline-block font-sans font-semibold text-sm tracking-wide uppercase text-[#F28C38] animated-underline mt-8"
            >
              Read Our Full Story &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
