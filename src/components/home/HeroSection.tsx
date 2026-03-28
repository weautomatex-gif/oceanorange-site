"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden" aria-label="Hero">
      {/* Background image with Ken Burns */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=80"
          alt="Golden hour beach with warm tones"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
      </motion.div>
      
      {/* Gradients */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(10,37,64,0.25) 0%, rgba(10,37,64,0.05) 30%, rgba(10,37,64,0.5) 70%, rgba(10,37,64,0.8) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(242,140,56,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6"
          >
            <Image
              src="/logo.svg"
              alt="Ocean Orange"
              width={230}
              height={200}
              className="h-28 md:h-40 lg:h-48 w-auto mx-auto"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-accent text-xl md:text-2xl mb-4 tracking-wide bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.5) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Handcrafted Beach Lifestyle Apparel
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display font-bold italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl mx-auto bg-clip-text text-transparent"
            style={{ 
              backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 40%, #F28C38 100%)',
              textShadow: 'none',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Where Sun Meets Sea
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-sans text-base md:text-lg text-white/50 mt-6 max-w-xl mx-auto leading-relaxed"
          >
            Apparel designed through the lens of a photographer, inspired by the beauty of the British coastline
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10"
          >
            <Link
              href="/shop"
              className="inline-block bg-[#F28C38] hover:bg-[#FF6B5A] text-white font-semibold text-sm tracking-[0.1em] uppercase px-10 py-4 rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(242,140,56,0.35)]"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="text-white/40 animate-bounce-gentle">
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
}
