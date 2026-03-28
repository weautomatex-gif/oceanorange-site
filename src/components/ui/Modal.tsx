// src/components/ui/Modal.tsx
// Reusable modal / dialog component.
// Used by QuickView, size guides, and lightboxes.
// Renders via a Portal to document.body, with a backdrop overlay.
// Animated with Framer Motion (scale + fade in/out).

"use client";

import { type ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // TODO: Add portal rendering to document.body
  // TODO: Implement Framer Motion AnimatePresence for mount/unmount animation
  // TODO: Close on backdrop click and Escape key
  if (!isOpen) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={title}>
      {/* Backdrop */}
      <div onClick={onClose} />
      {/* Modal panel */}
      <div>
        {title && <h2>{title}</h2>}
        <button onClick={onClose} aria-label="Close modal">✕</button>
        {children}
      </div>
    </div>
  );
}
