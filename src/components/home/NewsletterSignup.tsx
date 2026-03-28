"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden py-28 bg-[#0A2540]">
      {/* Subtle radial gradient glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(242,140,56,0.06) 0%, transparent 60%)"
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {submitted ? (
          <ScrollReveal>
            <div className="text-4xl mb-4">🌊</div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl mb-4 text-white">
              You&apos;re in the crew!
            </h2>
            <p className="font-sans text-white/70 text-lg">
              Welcome aboard. Watch your inbox for early drops and exclusive offers.
            </p>
          </ScrollReveal>
        ) : (
          <>
            <ScrollReveal>
              <h2 className="font-accent text-5xl md:text-6xl text-white mb-4">
                Join the Crew
              </h2>
              <p className="font-sans text-base md:text-lg text-white/50 mb-10 max-w-lg mx-auto leading-relaxed">
                Get early access to new drops, exclusive discounts, and beach vibes delivered
                to your inbox.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address"
                  className="flex-1 font-sans text-white bg-white/10 border border-white/20 rounded-full px-6 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:bg-white/15 focus:border-[#F28C38] transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#F28C38] hover:bg-[#FF6B5A] text-white rounded-full px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(242,140,56,0.3)] shrink-0"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-6 font-sans text-[12px] text-white/25">
                No spam, just good vibes. Unsubscribe anytime.
              </p>
            </ScrollReveal>
          </>
        )}
      </div>
    </section>
  );
}
