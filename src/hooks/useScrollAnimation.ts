// src/hooks/useScrollAnimation.ts
// Custom hook for scroll-triggered animations.
// Tracks whether an element is within the viewport and returns
// an intersection observer entry for use with Framer Motion or CSS animations.

"use client";

import { useEffect, useRef, useState } from "react";

type UseScrollAnimationOptions = {
  /** Fraction of the element that must be visible to trigger. Default: 0.2 */
  threshold?: number;
  /** Root margin offset. Default: '-100px' */
  rootMargin?: string;
  /** Only trigger the animation once. Default: true */
  once?: boolean;
};

/**
 * Returns a [ref, isVisible] tuple.
 * Attach `ref` to any DOM element. `isVisible` becomes true when the
 * element enters the viewport (based on IntersectionObserver).
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.2,
  rootMargin = "-100px",
  once = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible] as const;
}
