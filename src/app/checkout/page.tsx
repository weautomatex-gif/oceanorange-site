import Link from "next/link";
import type { Metadata } from "next";
import { Lock } from "lucide-react";
import WaveDecoration from "@/components/ui/WaveDecoration";
import SunburstEffect from "@/components/ui/SunburstEffect";

export const metadata: Metadata = {
  title: "Checkout | Ocean Orange",
};

export default function CheckoutPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1B6FA8 0%, #0A2540 100%)" }}
    >
      <SunburstEffect color="#F28C38" opacity={0.06} />
      <WaveDecoration color="rgba(255,255,255,0.05)" variant="dramatic" className="absolute top-0" />

      <div className="relative z-10 text-center max-w-xl mx-auto px-6">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
          <Lock size={36} className="text-white" />
        </div>
        <h1 className="font-display font-semibold text-4xl md:text-5xl mb-5">
          Secure Checkout Coming Soon
        </h1>
        <p className="font-sans text-white/70 text-lg leading-relaxed mb-10">
          We&apos;re setting up secure payments with Stripe. In the meantime, browse our collection
          and get inspired — everything will be ready for you soon.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-white text-[#0A2540] font-sans font-semibold px-9 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] transition-all duration-300"
        >
          Back to Shop
        </Link>
      </div>

      <WaveDecoration color="rgba(255,255,255,0.05)" variant="medium" flip className="absolute bottom-0" />
    </div>
  );
}
