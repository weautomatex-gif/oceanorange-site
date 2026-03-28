"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handler = () => {
      if (pathname !== "/") {
        setScrolled(true);
        return;
      }
      setScrolled(window.scrollY > 80);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [pathname]);

  const navBg = scrolled
    ? "bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm py-2"
    : "bg-transparent py-3";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${navBg}`}
        style={{ top: scrolled ? "0px" : "32px" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={scrolled ? "/logo2.svg" : "/logo.svg"}
              alt="Ocean Orange"
              width={500}
              height={500}
              className={`w-auto h-12 md:h-14 object-contain transition-all duration-500 ${
                !scrolled ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center justify-center gap-8 flex-1" aria-label="Primary navigation">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              const linkColor = active
                ? "text-[#F28C38]"
                : scrolled
                  ? "text-[#0A2540]/70 hover:text-[#0A2540]"
                  : "text-white/90 hover:text-white";

              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-[13px] font-sans font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${linkColor}`}
                >
                  {label}
                  {active && (
                    <span className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F28C38]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right icons */}
          <div className="flex items-center justify-end gap-4 shrink-0">
            <button
              aria-label="Search"
              className={`p-2 rounded-full transition-colors ${scrolled ? "text-[#0A2540] hover:bg-black/5" : "text-white hover:bg-white/10"
                }`}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              aria-label={`Cart — ${totalItems} items`}
              className={`relative p-2 rounded-full transition-colors ${scrolled ? "text-[#0A2540] hover:bg-black/5" : "text-white hover:bg-white/10"
                }`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F28C38] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? "text-[#0A2540] hover:bg-black/5" : "text-white hover:bg-white/10"
                }`}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
