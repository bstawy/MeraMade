"use client";

import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  threshold?: number;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
};

export function useReveal({
  threshold = 0.35,
  delay = 0,
  duration = 700,
  triggerOnce = true,
}: UseRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(el);
        } else {
          if (!triggerOnce) setIsVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return {
    ref,
    isVisible,
    style: {
      transitionDelay: `${delay}ms`,
      transitionDuration: `${duration}ms`,
    },
  };
}
