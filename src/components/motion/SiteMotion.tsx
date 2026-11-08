'use client';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function SiteMotion() {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const cleanups: (() => void)[] = [];
      const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-motion-reveal]'));
      reveals.forEach(node => { node.style.opacity = '0'; node.style.transform = 'translateY(28px)'; });
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const node = entry.target as HTMLElement;
        gsap.to(node, { opacity: 1, y: 0, duration: 0.7, delay: Number(node.dataset.motionDelay || 0), ease: 'power3.out', clearProps: 'transform,opacity' });
        observer.unobserve(node);
      }), { threshold: 0.18 });
      reveals.forEach(node => observer.observe(node));
      document.querySelectorAll<HTMLElement>('[data-motion-tilt], [data-motion-spotlight]').forEach(node => {
        const tilt = node.hasAttribute('data-motion-tilt');
        const rotateX = tilt ? gsap.quickTo(node, 'rotationX', { duration: 0.65, ease: 'power3.out' }) : null;
        const rotateY = tilt ? gsap.quickTo(node, 'rotationY', { duration: 0.65, ease: 'power3.out' }) : null;
        if (tilt) gsap.set(node, { transformPerspective: 900 });
        const move = (event: PointerEvent) => {
          if (event.pointerType !== 'mouse' || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
          const bounds = node.getBoundingClientRect(), x = event.clientX - bounds.left, y = event.clientY - bounds.top;
          node.style.setProperty('--card-mouse-x', `${x}px`); node.style.setProperty('--card-mouse-y', `${y}px`);
          rotateX?.(-(y / bounds.height - 0.5) * 14); rotateY?.((x / bounds.width - 0.5) * 14);
        };
        const leave = () => { rotateX?.(0); rotateY?.(0); };
        node.addEventListener('pointermove', move); node.addEventListener('pointerleave', leave);
        cleanups.push(() => { node.removeEventListener('pointermove', move); node.removeEventListener('pointerleave', leave); rotateX?.tween.kill(); rotateY?.tween.kill(); node.style.removeProperty('transform'); node.style.removeProperty('--card-mouse-x'); node.style.removeProperty('--card-mouse-y'); });
      });
      return () => {
        observer.disconnect(); cleanups.forEach(fn => fn());
        reveals.forEach(node => { gsap.killTweensOf(node); node.style.removeProperty('opacity'); node.style.removeProperty('transform'); });
      };
    });
    return () => media.revert();
  }, []);
  return null;
}
