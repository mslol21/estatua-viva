'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CHARACTERS } from '@/data/portfolioData';
import './sculpture.css';

const portraits = [
  { image: '/portfolio/ouro.webp', name: 'Estátua Clássica em Ouro', category: 'Ouro Imperial', href: '#estilo-ouro' },
  { image: '/portfolio/prata.webp', name: 'Chef Prateado', category: 'Prata Industrial', href: '#estilo-prata' },
  { image: '/portfolio/branca.webp', name: 'Anjo em Branco', category: 'Mármore Branco', href: '#estilo-branca' },
  { image: '/portfolio/diversas.webp', name: 'Personagens e histórias', category: 'Temáticos e personagens', href: '#estilo-diversas' },
].map(portrait => ({ ...portrait, name: CHARACTERS.find(character => character.imageUrl === portrait.image)?.name ?? portrait.name }));

export default function SculptureExperience() {
  const container = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const pointerControl = useRef<{ x: (value: number) => void; y: (value: number) => void }>();
  const lenis = useLenis();
  const [selected, setSelected] = useState(0);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update(); media.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (container.current) observer.observe(container.current);
    return () => { media.removeEventListener('change', update); observer.disconnect(); };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.living-portrait');
      if (reduced) return;
      const movement = { position: 0 };
      const draw = () => {
        const narrow = window.innerWidth < 768;
        cards.forEach((card, index) => {
          const distance = index - movement.position;
          const depth = Math.abs(distance);
          gsap.set(card, { x: distance * (narrow ? 190 : 310), y: depth * 28, z: -depth * 190, rotationY: distance * -22, rotationZ: distance * 3, scale: 1 - Math.min(depth, 3) * 0.055, opacity: Math.max(0, 1 - depth * 0.38), zIndex: 10 - Math.round(depth * 2) });
          // Only the highlighted portrait is a keyboard stop.
          const current = Math.round(movement.position) === index;
          card.tabIndex = current ? 0 : -1;
          card.style.pointerEvents = current ? 'auto' : 'none';
        });
        setSelected(Math.round(movement.position));
      };
      draw();
      gsap.to(movement, { position: portraits.length - 1, ease: 'none', onUpdate: draw, scrollTrigger: { trigger: container.current, start: 'top top', end: 'bottom bottom', scrub: 0.6, onRefresh: draw, invalidateOnRefresh: true } });
      pointerControl.current = {
        x: gsap.quickTo(stage.current, 'rotationY', { duration: 0.9, ease: 'power3.out' }),
        y: gsap.quickTo(stage.current, 'rotationX', { duration: 0.9, ease: 'power3.out' }),
      };
    }, container);
    return () => {
      pointerControl.current = undefined;
      ctx.revert();
      container.current?.querySelectorAll<HTMLElement>('.living-portrait').forEach(card => {
        card.removeAttribute('tabindex');
        card.style.removeProperty('pointer-events');
      });
    };
  }, [reduced]);

  const tilt = (event: PointerEvent<HTMLElement>) => {
    if (reduced || event.pointerType !== 'mouse') return;
    const box = event.currentTarget.getBoundingClientRect();
    pointerControl.current?.x(((event.clientX - box.left) / box.width - 0.5) * 9);
    pointerControl.current?.y(-((event.clientY - box.top) / box.height - 0.5) * 6);
  };
  const choose = (index: number) => {
    if (!container.current) return;
    if (reduced) {
      container.current.querySelectorAll<HTMLAnchorElement>('.living-portrait')[index]?.focus();
      return;
    }
    const node = container.current;
    const target = node.getBoundingClientRect().top + window.scrollY + index / (portraits.length - 1) * (node.offsetHeight - window.innerHeight);
    if (lenis) lenis.scrollTo(target, { duration: 0.85 });
    else window.scrollTo({ top: target, behavior: 'smooth' });
  };

  return <section ref={container} id="galeria-3d" aria-labelledby="living-title" className={`living-gallery ${visible ? 'is-visible' : ''}`}>
    <div className="living-stage" onPointerMove={tilt} onPointerLeave={() => { pointerControl.current?.x(0); pointerControl.current?.y(0); }}>
      <div className="living-light" aria-hidden="true" />
      <div className="living-heading">
        <p className="living-eyebrow">O acervo ganha o palco</p>
        <h2 id="living-title">Parece estátua.<br /><em>Até ganhar vida.</em></h2>
        <p>Expressão, figurino e presença. Conheça os personagens que transformam o encontro com o público em uma experiência.</p>
        <a className="living-cta" href="#acervo">Explorar os personagens <span aria-hidden="true">↗</span></a>
      </div>
      <div ref={stage} className="living-perspective" aria-label="Retratos dos personagens em movimento">
        {portraits.map((portrait, index) => <a className="living-portrait" href={portrait.href} key={portrait.image} aria-label={`Conhecer ${portrait.name}`}>
          <figure className="living-photo" style={{ animationDelay: `${index * -1.8}s` }}>
            <div className="living-photo-image"><Image src={portrait.image} alt={`${portrait.name} — caracterização e performance da Estátua Viva Produções`} fill sizes="(max-width: 767px) 66vw, 340px" loading="lazy" /></div>
            <div className="living-photo-shine" aria-hidden="true" />
            <figcaption><span>{portrait.category}</span><strong>{portrait.name}</strong><span className="living-photo-discover">Conhecer personagem ↗</span></figcaption>
          </figure>
        </a>)}
      </div>
      <div className="living-controls" aria-label="Escolher personagem em destaque">
        {portraits.map((portrait, index) => <button key={portrait.image} type="button" onClick={() => choose(index)} aria-label={`Destacar ${portrait.name}`} aria-pressed={selected === index} className={selected === index ? 'is-selected' : ''}><span className="living-control-number">0{index + 1}</span><span>{portrait.category}</span></button>)}
      </div>
      <p className="living-scroll">Role e veja o acervo ganhar movimento <span aria-hidden="true">↓</span></p>
    </div>
  </section>;
}
