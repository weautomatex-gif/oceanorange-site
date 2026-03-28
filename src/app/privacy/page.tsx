import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Ocean Orange",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="font-display font-semibold text-4xl text-[#0A2540] mb-2">Privacy Policy</h1>
          <p className="font-sans text-sm text-gray-400 mb-10">Last updated: March 2025</p>
        </ScrollReveal>

        <div className="font-sans text-gray-600 text-sm leading-relaxed space-y-8">
          {[
            {
              title: "Information We Collect",
              body: "We collect information you provide directly to us when you place an order, create an account, or contact us. This includes your name, email address, shipping address, and payment information. We also automatically collect certain technical data including your IP address, browser type, and how you interact with our site via cookies and analytics tools.",
            },
            {
              title: "How We Use Your Information",
              body: "We use your information to process and fulfil orders, communicate with you about your order, send marketing emails if you have opted in, improve our website, and comply with legal obligations. We do not sell your personal data to third parties.",
            },
            {
              title: "Cookies",
              body: "We use essential cookies to keep your shopping cart working, and optional analytics cookies (via Google Analytics) to understand how visitors use our site. You can opt out of non-essential cookies using our cookie settings. Our cart uses localStorage to persist your session.",
            },
            {
              title: "Third-Party Services",
              body: "We use Printful as our print-on-demand and fulfilment partner. Your name, address, and order details are shared with Printful solely for the purpose of fulfilling your order. Future payment processing will be handled by Stripe. Both services maintain their own privacy policies and security standards.",
            },
            {
              title: "Email Marketing",
              body: "If you subscribe to our newsletter, we will send you emails about new products, promotions, and brand updates. You can unsubscribe at any time using the link in any email. We do not add you to our marketing list without your consent.",
            },
            {
              title: "Data Retention",
              body: "We retain your personal information for as long as necessary to provide you with our services and comply with legal obligations. Order records are typically kept for 7 years for accounting purposes.",
            },
            {
              title: "Your Rights",
              body: "Under UK GDPR, you have the right to access, correct, delete, or port your personal data. You also have the right to object to or restrict processing. To exercise any of these rights, please contact us at hello@oceanorange.co.uk.",
            },
            {
              title: "Contact",
              body: "For any privacy-related queries, please contact us at hello@oceanorange.co.uk. We aim to respond within 5 business days.",
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
