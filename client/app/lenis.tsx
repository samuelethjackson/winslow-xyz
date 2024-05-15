"use client"

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Tempus from '@studio-freight/tempus';
import Lenis from 'lenis';
import { usePathname, useSearchParams } from 'next/navigation';

export default function SmoothScroller() {
const lenis = useRef<Lenis | null>(null);
const pathname = usePathname();
const searchParams = useSearchParams();

useEffect(() => {
  if (lenis.current) {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset;
        const easingFunction = (t: number): number => {
          return 0.25 * t * (1 - t) * (1 - t) + 0.00 * t * t * (1 - t) + 0.35 * t * t * t;
        };
        lenis.current.scrollTo(top, { duration: 300, easing: easingFunction });
      }
    } else {
      lenis.current.scrollTo(0, { immediate: true });
    }
  }
}, [pathname, searchParams, lenis]);

useLayoutEffect(() => {
  lenis.current = new Lenis({
  smoothWheel: true,
  // Customize other instance settings here
  });

  const resize = setInterval(() => {
    lenis.current!.resize();
  }, 150);

  function onFrame(time: number) {
    lenis.current!.raf(time);
  }

  const unsubscribe = Tempus.add(onFrame);

  return () => {
    unsubscribe();
    clearInterval(resize);
    lenis.current!.destroy();
    lenis.current = null;
  };

}, []);

return null;

}