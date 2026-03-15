'use client';
import { useEffect, useRef } from 'react';

/**
 * Adds 'in-view' class when element enters the viewport.
 * Uses native IntersectionObserver — zero JS per frame, runs off main thread.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.08,
        rootMargin: options.rootMargin ?? '-40px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
