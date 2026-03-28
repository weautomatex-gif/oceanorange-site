import type { Metadata } from "next";
import { Truck, Clock, RefreshCw, Globe } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Shipping & Returns | Ocean Orange",
};

const SHIPPING_OPTIONS = [
  { icon: Truck, title: "Standard UK Delivery", time: "3–5 business days", price: "Free on orders over £50, otherwise £4.99" },
  { icon: Clock, title: "Express UK Delivery", time: "1–2 business days", price: "£7.99" },
  { icon: Globe, title: "International Shipping", time: "7–14 business days", price: "From £12.99 — calculated at checkout" },
];

export default function ShippingPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-[#0A2540] mb-3">
            Shipping & Returns
          </h1>
          <p className="font-sans text-gray-500 mb-12">
            All Ocean Orange items are printed on demand and shipped directly to you from our fulfilment
            partner. Please allow up to 3 business days for production before shipping.
          </p>
        </ScrollReveal>

        {/* Shipping options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SHIPPING_OPTIONS.map((opt, i) => (
            <ScrollReveal key={opt.title} delay={i * 0.1}>
              <div className="bg-[#F5E6D0] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#F28C38]/15 rounded-full flex items-center justify-center mb-4">
                  <opt.icon size={20} className="text-[#F28C38]" />
                </div>
                <h3 className="font-display font-semibold text-lg text-[#0A2540] mb-2">{opt.title}</h3>
                <p className="font-sans text-sm text-gray-600 font-medium mb-1">{opt.time}</p>
                <p className="font-sans text-sm text-gray-500">{opt.price}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Returns */}
        <ScrollReveal>
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <RefreshCw size={22} className="text-[#7DD3C0]" />
              <h2 className="font-display font-semibold text-2xl text-[#0A2540]">Returns Policy</h2>
            </div>
            <div className="font-sans text-gray-600 space-y-4 leading-relaxed text-sm">
              <p>We offer a <strong className="text-[#0A2540]">30-day return policy</strong> on all items. If you&apos;re not completely satisfied, we&apos;ll make it right.</p>
              <p>Items must be <strong className="text-[#0A2540]">unworn, unwashed, and in original condition</strong> with all tags attached. Items marked as &quot;final sale&quot; are not eligible for return.</p>
              <p>To start a return, email us at <a href="mailto:hello@oceanorange.co.uk" className="text-[#F28C38] underline">hello@oceanorange.co.uk</a> with your order number and reason for return.</p>
              <p>Because all items are <strong className="text-[#0A2540]">printed on demand</strong> specifically for you, we&apos;re unable to offer traditional exchanges. Instead, we&apos;ll issue a store credit or refund on receipt of the returned item.</p>
              <p>Return shipping costs are the responsibility of the customer unless the item was received incorrectly or damaged.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
