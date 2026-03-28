"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "general", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real Formspree endpoint
    setStatus("success");
  };

  const inputClass =
    "w-full font-sans text-[#0A2540] border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#1B6FA8] focus:border-transparent transition-all placeholder:text-gray-300";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[240px] flex items-end justify-center pb-16">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Coastal harbour town"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,37,64,0.25) 0%, rgba(10,37,64,0.65) 100%)" }} />
        <div className="relative text-center text-white px-6">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-4 font-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="font-display font-semibold text-5xl md:text-6xl">Get in Touch</h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Form (60%) */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <CheckCircle size={56} className="text-[#7DD3C0] mb-5" />
                    <h2 className="font-display font-semibold text-3xl text-[#0A2540] mb-3">
                      Thanks for reaching out!
                    </h2>
                    <p className="font-sans text-gray-500 max-w-sm">
                      We&apos;ll get back to you within 24 hours. In the meantime,{" "}
                      <a href="https://instagram.com/newvangough" target="_blank" rel="noopener noreferrer" className="text-[#F28C38] underline">
                        follow our journey on Instagram
                      </a>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="font-sans font-medium text-sm text-[#0A2540] block mb-2">Name</label>
                        <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className="font-sans font-medium text-sm text-[#0A2540] block mb-2">Email</label>
                        <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="font-sans font-medium text-sm text-[#0A2540] block mb-2">Subject</label>
                      <select id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={inputClass}>
                        <option value="general">General Inquiry</option>
                        <option value="wholesale">Wholesale</option>
                        <option value="collab">Collaboration</option>
                        <option value="press">Press</option>
                        <option value="support">Order Support</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="font-sans font-medium text-sm text-[#0A2540] block mb-2">Message</label>
                      <textarea id="message" rows={6} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us what's on your mind..." className={inputClass} />
                    </div>
                    <button type="submit" className="w-full bg-[#F28C38] text-white font-sans font-semibold rounded-full py-4 hover:bg-[#FF6B5A] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                      Send Message
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Info (40%) */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right" delay={0.15}>
                <h2 className="font-display font-semibold text-3xl text-[#0A2540] mb-8">Let&apos;s Talk</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F28C38]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={18} className="text-[#F28C38]" />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-[#0A2540] mb-1">Email</p>
                      <a href="mailto:hello@oceanorange.co.uk" className="font-sans text-sm text-gray-500 hover:text-[#F28C38] transition-colors">hello@oceanorange.co.uk</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F28C38]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Instagram size={18} className="text-[#F28C38]" />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-[#0A2540] mb-1">Instagram</p>
                      <a href="https://instagram.com/newvangough" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-gray-500 hover:text-[#F28C38] transition-colors">@newvangough</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F28C38]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={18} className="text-[#F28C38]" />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-[#0A2540] mb-1">Response Time</p>
                      <p className="font-sans text-sm text-gray-500">We typically respond within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F28C38]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={18} className="text-[#F28C38]" />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-[#0A2540] mb-1">Location</p>
                      <p className="font-sans text-sm text-gray-500">Based in the UK, inspired by the coast.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
