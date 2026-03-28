import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WaveDecoration from "@/components/ui/WaveDecoration";
import { Camera, Heart, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Ocean Orange",
  description: "The story of Ocean Orange — a photographer's love letter to the ocean.",
};

const VALUES = [
  {
    icon: Waves,
    title: "Ocean Inspired",
    body: "Every design starts at the shoreline. Our prints are born from real photographs of the coast, the sea, and the creatures within.",
  },
  {
    icon: Heart,
    title: "Quality Crafted",
    body: "We partner with trusted print specialists to ensure every piece is made to last. No fast fashion, just lasting quality.",
  },
  {
    icon: Camera,
    title: "Camera to Canvas",
    body: "From photograph to fabric, each design carries the story of a real moment captured at the water's edge.",
  },
];

const TIMELINE = [
  { year: "2019", title: "The Spark", body: "Stuart photographs his first underwater series off the Cornish coast. He realises these images belong somewhere beyond a hard drive." },
  { year: "2021", title: "First Designs", body: "Turning favourite photographs into fabric. The first hand-drawn wave design is printed on a single tee and given to a friend." },
  { year: "2022", title: "Ocean Orange is Born", body: "The brand launches with a small collection of four designs. Every piece sells out within a week." },
  { year: "2023", title: "Growing the Crew", body: "A loyal community forms around the Instagram page. Designs inspired by reef, storm, and golden hour roll out season by season." },
  { year: "2025", title: "What's Next", body: "A full online collection, a studio on the coast, and eventually — a beachside shop. The wave is just beginning." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[360px] flex items-end justify-center pb-20">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Golden hour beach landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,37,64,0.15) 0%, rgba(10,37,64,0.7) 100%)" }} />
        <div className="relative text-center text-white px-6">
          <h1 className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl mb-4">Our Story</h1>
          <p className="font-accent text-2xl text-white/80">Where every design begins with a photograph</p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1200&q=80"
                  alt="Photographer with camera on a coastal cliff"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <p className="font-accent text-xl text-[#F28C38] mb-3">Meet Stuart</p>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#0A2540] leading-tight mb-6">
                The Photographer Behind the Brand
              </h2>
              <p className="font-sans text-gray-600 leading-relaxed mb-5">
                Stuart has spent years chasing light — on clifftops before sunrise, in the water at
                dusk, and 10 metres below the surface where the world turns quiet and blue. Photography
                taught him to see the ocean not just as background, but as a living subject with its
                own personality and mood.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed mb-5">
                One afternoon, flicking through a folder of reef photographs that might never be seen,
                he realised these images deserved a second life. Not on a wall — on a person. Moving
                through the world, carrying that moment with them.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed">
                Ocean Orange was built on that simple idea. Every design is a photograph first. A real
                wave, a real sunset, a real creature from the deep. The brand is his way of sharing
                the ocean with people who feel it too — even when they&apos;re far from the shore.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F5E6D0]">
        <WaveDecoration color="#F5E6D0" variant="gentle" flip className="-mt-12" />
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-semibold text-4xl text-[#0A2540]">What We Stand For</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                  <div className="w-14 h-14 bg-[#F28C38]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <v.icon size={24} className="text-[#F28C38]" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[#0A2540] mb-3">{v.title}</h3>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <WaveDecoration color="#FFFFFF" variant="medium" className="mt-16" />
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-display font-semibold text-4xl text-[#0A2540]">The Journey</h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#F28C38]/20" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""} pl-14 md:pl-0`}>
                      <span className="font-accent text-2xl text-[#F28C38]">{item.year}</span>
                      <h3 className="font-display font-semibold text-xl text-[#0A2540] mt-1 mb-2">{item.title}</h3>
                      <p className="font-sans text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                    <div className="absolute left-4 md:relative md:left-auto md:flex-shrink-0 md:w-4 flex items-start justify-center mt-1">
                      <div className="w-4 h-4 rounded-full bg-[#F28C38] ring-4 ring-[#F28C38]/20" />
                    </div>
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center text-white" style={{ background: "linear-gradient(135deg, #1B6FA8 0%, #0A2540 100%)" }}>
        <div className="max-w-xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-4xl mb-5">Ready to Explore?</h2>
            <Link
              href="/shop"
              className="inline-block bg-[#F28C38] text-white font-sans font-semibold px-9 py-4 rounded-full hover:bg-[#FF6B5A] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
