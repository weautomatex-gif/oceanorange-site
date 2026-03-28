import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service | Ocean Orange",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="font-display font-semibold text-4xl text-[#0A2540] mb-2">Terms of Service</h1>
          <p className="font-sans text-sm text-gray-400 mb-10">Last updated: March 2025</p>
        </ScrollReveal>

        <div className="font-sans text-gray-600 text-sm leading-relaxed space-y-8">
          {[
            {
              title: "Acceptance of Terms",
              body: "By accessing or using the Ocean Orange website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.",
            },
            {
              title: "Products and Orders",
              body: "All products are subject to availability. We reserve the right to discontinue any product at any time. Once an order is placed, you will receive an email confirmation. We reserve the right to cancel orders due to errors in pricing, stock availability, or fraudulent activity.",
            },
            {
              title: "Pricing",
              body: "All prices are shown in GBP (£) and include VAT where applicable. We reserve the right to change prices at any time without notice. The price you see at checkout is the price you pay — we won't change it after your order is confirmed.",
            },
            {
              title: "Returns and Refunds",
              body: "Please see our Shipping & Returns page for full details on our return policy. We comply with UK Consumer Contracts Regulations and your statutory rights are not affected.",
            },
            {
              title: "Intellectual Property",
              body: "All designs, photographs, graphics, and content on this website are the intellectual property of Ocean Orange and its creator, Stuart. You may not reproduce, distribute, or use any content without express written permission. The brand name, logo, and all associated imagery are protected.",
            },
            {
              title: "Print-on-Demand",
              body: "All items are printed to order by our fulfilment partner, Printful. This means items are personalised to your order and may be excluded from certain consumer return rights. Standard return rights still apply for incorrectly printed or damaged items.",
            },
            {
              title: "Limitation of Liability",
              body: "Ocean Orange shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or website. Our total liability shall not exceed the value of the order in question.",
            },
            {
              title: "Governing Law",
              body: "These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
            },
          ].map(({ title, body }) => (
            <ScrollReveal key={title}>
              <section>
                <h2 className="font-display font-semibold text-xl text-[#0A2540] mb-3">{title}</h2>
                <p>{body}</p>
              </section>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
