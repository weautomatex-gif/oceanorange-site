"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "Free UK Shipping on Orders Over £50  ·  New Season Collection Available",
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("oo-announcement-dismissed");
    if (dismissed) setVisible(false);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("oo-announcement-dismissed", "1");
  };

  if (!visible) return null;

  return (
    <div className="relative z-40 bg-[#0A2540] h-8 flex items-center justify-center px-10">
      <AnimatePresence mode="wait">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="font-sans text-[11px] tracking-[0.15em] uppercase text-white/80 font-medium text-center"
        >
          {MESSAGES[0]}
        </motion.span>
      </AnimatePresence>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-4 text-white/40 hover:text-white transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
