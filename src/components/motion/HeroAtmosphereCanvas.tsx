'use client';

import { useEffect, useRef, type RefObject } from 'react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Particle = { x: number; y: number; radius: number; phase: number; speed: number };

export default function HeroAtmosphereCanvas({ hero }: { hero: RefObject<HTMLElement> }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const velocity = useRef(0);
  useLenis(instance => { velocity.current = Math.max(-10, Math.min(10, instance.velocity)); });
  useEffect(() => {
    const root = hero.current, element = canvas.current;
    if (!root || !element) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = element.getContext('2d');
      if (!context) return;
      let width = 1, height = 1, onScreen = false, running = false;
      let pointer = { x: 0.62, y: 0.4 }, light = { ...pointer };
      let nx = 0, ny = 0, smoothX = 0, smoothY = 0, tickerX = 0, tickerSpeed = 22, tickerHalfWidth = 0;
      const particles: Particle[] = Array.from({ length: window.matchMedia('(max-width: 767px)').matches ? 14 : 35 }, () => ({ x: Math.random(), y: Math.random(), radius: 0.8 + Math.random() * 1.6, phase: Math.random() * Math.PI * 2, speed: 0.006 + Math.random() * 0.012 }));
      const frame = root.querySelector<HTMLElement>('.hero-stage-frame');
      const halo = root.querySelector<HTMLElement>('.hero-orbit-layer');
      const photo = root.querySelector<HTMLElement>('.hero-photo-depth');
      const track = root.querySelector<HTMLElement>('.hero-ticker-track');
      const copy = root.querySelector<HTMLElement>('.hero-copy-motion');
      const originalAnimation = track?.style.animation ?? '';
      if (track) track.style.animation = 'none';
      const resize = () => {
        width = root.clientWidth; height = root.clientHeight;
        tickerHalfWidth = track ? track.scrollWidth / 2 : 0;
        const dpr = Math.min(window.devicePixelRatio || 1, window.matchMedia('(max-width: 767px)').matches ? 1 : 2);
        element.width = Math.round(width * dpr); element.height = Math.round(height * dpr);
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      const observer = new ResizeObserver(resize); observer.observe(root); resize();
      const tick = (time: number, elapsed: number) => {
        const dt = Math.min(elapsed / 1000, 0.05), amount = 1 - Math.pow(0.92, dt * 60);
        light.x += (pointer.x - light.x) * amount; light.y += (pointer.y - light.y) * amount;
        smoothX += (nx - smoothX) * amount; smoothY += (ny - smoothY) * amount;
        context.clearRect(0, 0, width, height);
        const glow = context.createRadialGradient(light.x * width, light.y * height, 0, light.x * width, light.y * height, Math.min(width, 900) * 0.6);
        glow.addColorStop(0, 'rgba(230,198,135,0.09)'); glow.addColorStop(1, 'rgba(230,198,135,0)');
        context.fillStyle = glow; context.fillRect(0, 0, width, height);
        particles.forEach(particle => {
          particle.y -= dt * particle.speed;
          if (particle.y < -0.01) particle.y = 1.01;
          const alpha = 0.12 + (Math.sin(time * 0.7 + particle.phase) + 1) * 0.215;
          context.beginPath(); context.fillStyle = `rgba(230,198,135,${alpha})`;
          context.arc(particle.x * width + Math.sin(time * 0.24 + particle.phase) * 16, particle.y * height, particle.radius, 0, Math.PI * 2); context.fill();
        });
        if (frame) frame.style.transform = `rotateX(${-smoothY * 6}deg) rotateY(${smoothX * 6}deg)`;
        if (halo) halo.style.transform = `translate3d(${-smoothX * 10}px,${-smoothY * 10}px,-20px)`;
        if (photo) photo.style.transform = `translate3d(${smoothX * 14}px,${smoothY * 10}px,32px)`;
        const scroll = Math.min(window.scrollY / 300, 1);
        root.style.setProperty('--hero-scroll-scale', String(1 + scroll * 0.07));
        if (copy) copy.style.transform = `translateY(${-scroll * 20}px)`;
        velocity.current *= Math.pow(0.92, dt * 60);
        const target = Math.abs(velocity.current) > 0.3 ? Math.sign(velocity.current) * (22 + Math.abs(velocity.current) * 9) : 22;
        tickerSpeed += (target - tickerSpeed) * amount;
        if (track && tickerHalfWidth > 0) {
          const span = tickerHalfWidth;
          tickerX = ((tickerX - tickerSpeed * dt) % span + span) % span;
          track.style.transform = `translateX(${tickerX - span}px)`;
        }
      };
      const sync = () => {
        const shouldRun = onScreen && !document.hidden;
        root.dataset.heroActive = String(shouldRun);
        if (shouldRun && !running) { gsap.ticker.add(tick); running = true; }
        if (!shouldRun && running) { gsap.ticker.remove(tick); running = false; }
      };
      const visibility = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; sync(); }); visibility.observe(root);
      document.addEventListener('visibilitychange', sync);
      const move = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return;
        const box = root.getBoundingClientRect();
        pointer = { x: (event.clientX - box.left) / box.width, y: (event.clientY - box.top) / box.height };
        const photoBox = frame?.getBoundingClientRect();
        if (photoBox && photoBox.width > 0 && photoBox.height > 0) { nx = Math.max(-1, Math.min(1, (event.clientX - photoBox.left) / photoBox.width * 2 - 1)); ny = Math.max(-1, Math.min(1, (event.clientY - photoBox.top) / photoBox.height * 2 - 1)); }
      };
      const leave = () => { nx = ny = 0; pointer = { x: 0.62, y: 0.4 }; };
      root.addEventListener('pointermove', move); root.addEventListener('pointerleave', leave);
      const button = root.querySelector<HTMLElement>('.hero-gold-button');
      const buttonX = gsap.quickTo(button, 'x', { duration: 0.5, ease: 'elastic.out(1,0.5)' });
      const buttonY = gsap.quickTo(button, 'y', { duration: 0.5, ease: 'elastic.out(1,0.5)' });
      const magnet = (event: PointerEvent) => { if (event.pointerType !== 'mouse' || !button) return; const box = button.getBoundingClientRect(); buttonX(Math.max(-6, Math.min(6, (event.clientX - box.left - box.width / 2) * 0.12))); buttonY(Math.max(-6, Math.min(6, (event.clientY - box.top - box.height / 2) * 0.12))); };
      const release = () => { buttonX(0); buttonY(0); };
      button?.addEventListener('pointermove', magnet); button?.addEventListener('pointerleave', release);
      return () => {
        gsap.ticker.remove(tick); observer.disconnect(); visibility.disconnect();
        document.removeEventListener('visibilitychange', sync); root.removeEventListener('pointermove', move); root.removeEventListener('pointerleave', leave);
        button?.removeEventListener('pointermove', magnet); button?.removeEventListener('pointerleave', release); buttonX.tween.kill(); buttonY.tween.kill();
        [frame, halo, photo, copy, button].forEach(node => node?.style.removeProperty('transform'));
        if (track) { track.style.animation = originalAnimation; track.style.removeProperty('transform'); }
        root.removeAttribute('data-hero-active'); root.style.removeProperty('--hero-scroll-scale'); context.clearRect(0, 0, width, height);
      };
    });
    return () => media.revert();
  }, [hero]);
  return <canvas ref={canvas} aria-hidden="true" className="hero-atmosphere pointer-events-none absolute inset-0 h-full w-full" />;
}
