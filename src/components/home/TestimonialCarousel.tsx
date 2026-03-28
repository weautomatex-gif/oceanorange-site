"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  location: string;
  product: string;
}

const testimonials: Testimonial[] = [
  {
    text: "The quality is incredible — soft, well-cut, and the design is genuinely stunning. It's the kind of tee you reach for every single day. Ordered two more colours immediately.",
    name: "Jamie R.",
    location: "Cornwall",
    product: "Sunset Wave Tee",
  },
  {
    text: "Finally found a brand that gets it. The Voyager sweatshirt is everything — thick, warm, beautifully made. Wore it on a sunrise surf and it was perfect. Ocean Orange for life.",
    name: "Mia T.",
    location: "Devon",
    product: "Voyager Sweatshirt",
  },
  {
    text: "Bought the Turtle Bay tee as a gift and immediately bought one for myself. The design is so thoughtful — you can tell it comes from someone who actually loves the ocean.",
    name: "Ben H.",
    location: "Dorset",
    product: "Turtle Bay Tee",
  },
  {
    text: "The attention to detail is what sets Ocean Orange apart. The prints don't fade, the fabric holds up, and every design tells a story. My go-to brand now.",
    name: "Sophie L.",
    location: "Brighton",
    product: "Coral Reef Tee",
  },
  {
    text: "Got the Driftwood Hoodie for beach bonfires and it's become my everyday favourite. The fit is perfect and the quality is outstanding for the price.",
    name: "Tom W.",
    location: "Pembrokeshire",
    product: "Driftwood Hoodie",
  },
  {
    text: "My daughter loves her Little Explorer Tee — she won't take it off! The colours are vibrant and it's survived dozens of washes without fading.",
    name: "Rachel K.",
    location: "Norfolk",
    product: "Little Explorer Tee",
  },
  {
    text: "Stuart's photography background really shows in every design. These aren't just t-shirts — they're wearable art. The Golden Hour tee gets compliments everywhere.",
    name: "Dan M.",
    location: "Newquay",
    product: "Golden Hour Tee",
  },
  {
    text: "Fast shipping, beautiful packaging, and the Sea Breeze Tee is even better in person. The ocean blue colour is absolutely gorgeous.",
    name: "Emma P.",
    location: "Whitby",
    product: "Sea Breeze Tee",
  },
  {
    text: "Bought matching Harbour Crew Necks for me and my partner. Incredibly comfortable and the coastal design is subtle but eye-catching. Will definitely be back.",
    name: "Chris D.",
    location: "Bournemouth",
    product: "Harbour Crew Neck",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialColumn({
  items,
  duration = 15,
  className = "",
}: {
  items: Testimonial[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((copyIndex) => (
          <React.Fragment key={copyIndex}>
            {items.map((t, i) => (
              <motion.div
                key={`${copyIndex}-${i}`}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="p-8 rounded-2xl border border-gray-100 shadow-sm bg-white max-w-xs w-full cursor-default select-none hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className="fill-[#F28C38] text-[#F28C38]"
                    />
                  ))}
                </div>
                <p className="text-[#0A2540]/70 leading-relaxed text-[15px]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-[#0A2540] text-sm">
                    {t.name}
                  </p>
                  <p className="text-[#0A2540]/40 text-sm">{t.location}</p>
                  <p className="text-[#F28C38] text-xs font-medium mt-1">
                    Purchased: {t.product}
                  </p>
                </div>
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialCarousel() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#0A2540]/30 font-semibold mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}>
            What the Crew Says
          </h2>
          <p className="mt-4 text-[#0A2540]/40 text-lg max-w-md mx-auto">
            Real reviews from real people who love the coast as much as we do.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 max-h-[700px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <TestimonialColumn items={firstColumn} duration={18} />
          <TestimonialColumn
            items={secondColumn}
            duration={22}
            className="hidden md:block"
          />
          <TestimonialColumn
            items={thirdColumn}
            duration={16}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
