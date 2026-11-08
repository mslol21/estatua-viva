'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ReactLenis, useLenis, type LenisRef } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

function ScrollSync() {
  useLenis(() => ScrollTrigger.update());
  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const ref = useRef<LenisRef>(null);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update(); media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const tick = (seconds: number) => ref.current?.lenis?.raf(seconds * 1000);
    gsap.ticker.add(tick);
    return () => { gsap.ticker.remove(tick); };
  }, [reduced]);
  return <>
    {!reduced && <ReactLenis ref={ref} root options={{ autoRaf: false, duration: 0.9, anchors: { offset: -110 }, smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.5 }}><ScrollSync /></ReactLenis>}
    {children}
  </>;
}
