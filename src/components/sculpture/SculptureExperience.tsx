'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { SceneMotion } from './SculptureCanvas';
import './sculpture.css';

const SculptureCanvas = dynamic(() => import('./SculptureCanvas'), { ssr: false, loading: () => <div className="sculpture-loading" role="status">Preparando a galeria…</div> });

/** modelUrl accepts a public .glb/.gltf URL; omit to display the procedural study. */
export default function SculptureExperience({ modelUrl }: { modelUrl?: string }) {
  const container = useRef<HTMLElement>(null);
  const motion = useRef<SceneMotion>({ rotation: 0, scale: 1, x: 1.15 });
  const [near, setNear] = useState(false);
  const [active, setActive] = useState(false);
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update(); media.addEventListener('change', update);
    const node = container.current;
    if (!node) return;
    const preload = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setNear(true); preload.disconnect(); } }, { rootMargin: '400px' });
    const visibility = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting));
    preload.observe(node); visibility.observe(node);
    return () => { media.removeEventListener('change', update); preload.disconnect(); visibility.disconnect(); };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (reduced) { motion.current = { rotation: 0.35, scale: 1, x: 0 }; return; }
      gsap.set('[data-scene-copy="1"], [data-scene-copy="2"]', { autoAlpha: 0, y: 28 });
      const timeline = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: container.current, start: 'top top', end: 'bottom bottom', scrub: 0.7, invalidateOnRefresh: true } });
      timeline.to({}, { duration: 0.28 })
        .to('[data-scene-copy="0"]', { autoAlpha: 0, y: -24, duration: 0.08 }, 0.28)
        .to(motion.current, { rotation: Math.PI * 0.7, scale: 1.24, x: -1.15, duration: 0.3 }, 0.33)
        .to('[data-scene-copy="1"]', { autoAlpha: 1, y: 0, duration: 0.12 }, 0.39)
        .to('[data-scene-copy="1"]', { autoAlpha: 0, y: -24, duration: 0.08 }, 0.63)
        .to(motion.current, { rotation: Math.PI * 0.86, scale: 0.94, x: -1.55, duration: 0.25 }, 0.66)
        .to('[data-scene-copy="2"]', { autoAlpha: 1, y: 0, duration: 0.12 }, 0.74)
        .to({}, { duration: 0.14 }, 0.86);
      // An invisible phase must not retain keyboard-focusable controls.
      const cta = container.current?.querySelector<HTMLAnchorElement>('[data-scene-copy="2"] a');
      if (cta) {
        cta.tabIndex = -1;
        timeline.eventCallback('onUpdate', () => { cta.tabIndex = timeline.progress() >= 0.74 ? 0 : -1; });
      }
    }, container);
    return () => { ctx.revert(); container.current?.querySelector('a')?.removeAttribute('tabindex'); };
  }, [reduced]);

  return <section ref={container} id="galeria-3d" aria-labelledby="sculpture-title" className="sculpture-experience">
    <div className="sculpture-stage">
      <div className="sculpture-topline"><span>Estátua Viva Produções</span><span>Galeria digital / 01</span></div>
      <div className="sculpture-render" aria-hidden="true">{near && <SculptureCanvas motion={motion} active={active} reduced={reduced} modelUrl={modelUrl} />}</div>
      <article className="sculpture-copy sculpture-copy-intro" data-scene-copy="0">
        <p className="sculpture-eyebrow">Um estudo de forma e presença</p>
        <h2 id="sculpture-title">A matéria.<br /><em>O movimento.</em><br />A presença.</h2>
        <p>Um convite para desacelerar e observar. Explore uma forma que revela novos contornos a cada ponto de vista.</p>
        <span className="sculpture-scroll">Role para explorar <span aria-hidden="true">↓</span></span>
      </article>
      <article className="sculpture-copy sculpture-copy-detail" data-scene-copy="1">
        <p className="sculpture-eyebrow">02 / Olhar de perto</p>
        <h3>Entre luz<br /><em>e superfície.</em></h3>
        <p>Curvas contínuas, reflexos suaves e uma superfície que transforma a luz em textura. Mova o cursor e descubra outros ângulos.</p>
      </article>
      <article className="sculpture-copy sculpture-copy-specs" data-scene-copy="2">
        <p className="sculpture-eyebrow">03 / Ficha do estudo</p>
        <h3>Uma forma.<br /><em>Muitas leituras.</em></h3>
        <dl><div><dt>Natureza</dt><dd>{modelUrl ? 'Modelo digital 3D' : 'Estudo digital procedural'}</dd></div><div><dt>Acabamento visual</dt><dd>Cerâmica acetinada · metal suave</dd></div><div><dt>Exibição</dt><dd>Luz de galeria · tempo real</dd></div></dl>
        <p className="sculpture-disclaimer">Representação artística digital, sem correspondência com uma obra física do acervo.</p>
        <a href="#briefing">Criar uma experiência para meu evento <span aria-hidden="true">↗</span></a>
      </article>
      <div className="sculpture-bottomline"><span>Escultura viva / Estudo digital</span><span aria-hidden="true">Forma em transformação</span></div>
    </div>
  </section>;
}
