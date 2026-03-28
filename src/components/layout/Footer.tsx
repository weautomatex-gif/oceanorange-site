import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const SHOP_LINKS = [
  { href: "/shop", label: "All Products" },
  { href: "/collections/mens", label: "Men's" },
  { href: "/collections/womens", label: "Women's" },
  { href: "/collections/kids", label: "Kids'" },
  { href: "/collections/jumpers", label: "Accessories" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const SUPPORT_LINKS = [
  { href: "/shipping", label: "Shipping & Returns" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const linkClass =
  "font-sans text-sm text-white/30 hover:text-white transition-colors duration-200";

export default function Footer() {
  return (
    <footer className="bg-[#06192F] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div>
            <Image
              src="/logo.svg"
              alt="Ocean Orange"
              width={500}
              height={500}
              className="h-16 w-auto brightness-0 invert mb-4"
            />
            <p className="font-sans text-sm text-white/30 mt-4 max-w-xs leading-relaxed">
              Handcrafted apparel inspired by the ocean
            </p>
            <a
              href="https://instagram.com/newvangough"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-white/40 hover:text-[#F28C38] transition-colors"
              aria-label="Instagram @newvangough"
            >
              <Instagram size={18} />
              <span className="font-sans text-sm">@newvangough</span>
            </a>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans font-semibold text-[11px] text-white/50 uppercase tracking-[0.2em] mb-6">
              Shop
            </h3>
            <ul className="space-y-3">
              {SHOP_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans font-semibold text-[11px] text-white/50 uppercase tracking-[0.2em] mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-sans font-semibold text-[11px] text-white/50 uppercase tracking-[0.2em] mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-16 pt-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[12px] text-white/20">
            © 2025 Ocean Orange. All rights reserved.
          </p>
          <p className="font-accent text-sm text-white/15">
            Designed with love by the sea
          </p>
          <div className="font-sans text-[11px] text-white/15">
            Visa · Mastercard · PayPal
          </div>
        </div>
      </div>
    </footer>
  );
}
