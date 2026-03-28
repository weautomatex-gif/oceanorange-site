"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => { onClose(); }, [pathname, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[55]"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[60] w-full max-w-sm bg-[#0A2540] flex flex-col"
            style={{
              background:
                "linear-gradient(160deg, #0A2540 0%, #0d3060 60%, #0A2540 100%)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <Image
                src="/logo.svg"
                alt="Ocean Orange"
                width={130}
                height={36}
                className="h-9 w-auto"
              />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-white hover:text-[#F28C38] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-8 pt-4" aria-label="Mobile navigation">
              <ul className="space-y-2">
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      className={`block py-3 font-display text-3xl font-semibold transition-colors duration-200 ${
                        pathname === href || pathname.startsWith(href + "/")
                          ? "text-[#F28C38]"
                          : "text-white hover:text-[#F28C38]"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Social + bottom */}
            <div className="p-8 border-t border-white/10">
              <a
                href="https://instagram.com/newvangough"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="font-sans text-sm">@newvangough</span>
              </a>
              <p className="mt-4 font-sans text-xs text-white/30">
                © 2025 Ocean Orange
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
