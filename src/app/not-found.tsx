import Link from "next/link";
import WaveDecoration from "@/components/ui/WaveDecoration";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0A2540] flex flex-col items-center justify-center text-center overflow-hidden px-6">
      {/* Decorative waves */}
      <WaveDecoration color="#1B6FA8" variant="dramatic" className="absolute top-0 opacity-40" />
      <WaveDecoration color="#1B6FA8" variant="medium" flip className="absolute bottom-0 opacity-40" />

      <div className="relative z-10">
        <p className="font-accent text-8xl text-[#F28C38] mb-2 opacity-60">404</p>
        <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-white mb-5 max-w-xl">
          Looks like you&apos;ve drifted off course
        </h1>
        <p className="font-sans text-white/50 text-lg mb-10">
          The page you&apos;re looking for has washed out to sea.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#F28C38] text-white font-sans font-semibold px-9 py-4 rounded-full hover:bg-[#FF6B5A] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(242,140,56,0.4)] transition-all duration-300"
        >
          Back to Shore
        </Link>
      </div>
    </div>
  );
}
