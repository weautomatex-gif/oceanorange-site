import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const INSTAGRAM_IMAGES = [
  { id: "ig1", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", alt: "Tropical beach sunrise" },
  { id: "ig2", src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", alt: "Sea turtle" },
  { id: "ig3", src: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=600&q=80", alt: "Ocean sunset golden" },
  { id: "ig4", src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80", alt: "Underwater blue light" },
  { id: "ig5", src: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=600&q=80", alt: "Crashing wave" },
  { id: "ig6", src: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600&q=80", alt: "Dramatic sunset sky" },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display font-semibold text-4xl text-[#0A2540]">
            Follow the Journey
          </h2>
          <a
            href="https://instagram.com/newvangough"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 font-accent text-xl text-[#1B6FA8] hover:text-[#F28C38] transition-colors"
          >
            @newvangough
          </a>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <ScrollReveal key={img.id} delay={i * 0.07} direction="up">
              <a
                href="https://instagram.com/newvangough"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 33vw, 16vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0A2540]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <Instagram
                    size={24}
                    className="text-white"
                  />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <a
            href="https://instagram.com/newvangough"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#0A2540] text-[#0A2540] font-sans font-medium px-8 py-3 rounded-full hover:bg-[#0A2540] hover:text-white transition-all duration-300 text-sm tracking-wider uppercase"
          >
            <Instagram size={18} />
            Follow on Instagram
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
