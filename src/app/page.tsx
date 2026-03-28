import HeroSection from "@/components/home/HeroSection";
import CollectionShowcase from "@/components/home/CollectionShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStory from "@/components/home/BrandStory";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import InstagramFeed from "@/components/home/InstagramFeed";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WaveDecoration from "@/components/ui/WaveDecoration";
import ImageSlider from "@/components/home/ImageSlider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      {/* Wave down from Hero to Sand Beige */}
      <WaveDecoration color="#F5E6D0" variant="medium" />

      {/* Brand Intro Strip */}
      <section className="bg-[#F5E6D0] py-12 md:py-16 relative z-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <p className="font-display italic text-lg md:text-xl lg:text-2xl text-[#0A2540] max-w-2xl mx-auto text-center leading-relaxed">
              "Born from a love of the ocean, designed through the lens of a photographer"
            </p>
            <div className="w-16 h-[2px] bg-[#F28C38] mx-auto mt-8" />
          </ScrollReveal>
        </div>
        <ImageSlider />
      </section>

      {/* Wave from Sand Beige to White */}
      <WaveDecoration color="#FFFFFF" variant="gentle" flip />

      <CollectionShowcase />
      
      {/* Wave from White to FAFAFA provided inside components or directly. Actually, the prompt says "off-white wave from white to #FAFAFA" */}
      <WaveDecoration color="#FAFAFA" variant="gentle" />

      <FeaturedProducts />

      {/* Wave from FAFAFA to White */}
      <WaveDecoration color="#FFFFFF" variant="medium" flip />

      <BrandStory />

      <TestimonialCarousel />
      
      <InstagramFeed />

      {/* Wave from White to Navy */}
      <WaveDecoration color="#0A2540" variant="medium" />
      
      <NewsletterSignup />
    </>
  );
}
