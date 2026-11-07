'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';
const links = [{ label: 'Branca', href: '/#estilo-branca' }, { label: 'Prata', href: '/#estilo-prata' }, { label: 'Ouro', href: '/#estilo-ouro' }, { label: 'Diversas', href: '/#estilo-diversas' }, { label: 'Contato', href: '/#briefing' }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => { if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false); };
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', onKey); document.addEventListener('pointerdown', closeOutside);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', closeOutside); };
  }, [open]);
  return <header ref={header} className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="site-container flex items-center justify-between gap-6">
      <Link href="/" aria-label="Estátua Viva Produções — início" className="shrink-0"><BrandLogo /></Link>
      <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-4 xl:gap-6">{links.map(link => <a key={link.href} href={link.href} className="nav-link">{link.label}</a>)}</nav>
      <a href="#briefing" className="button-gold hidden sm:inline-flex !min-h-11 !px-5 !text-xs">Solicitar orçamento <ArrowUpRight size={15} /></a>
      <button ref={toggle} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} className="lg:hidden w-11 h-11 border border-champagne-gold/30 flex items-center justify-center text-champagne-gold">{open ? <X size={21} /> : <Menu size={21} />}</button>
    </div>
    <nav aria-label="Atalhos de personagens" className="header-shortcuts lg:hidden">{links.slice(0, 4).map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav>
    {open && <nav id="mobile-navigation" aria-label="Navegação mobile" className="mobile-navigation lg:hidden">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="nav-link py-3 border-b border-alabaster/10">{link.label}<ArrowUpRight size={15} /></a>)}<a href="#briefing" onClick={() => setOpen(false)} className="button-gold mt-4">Solicitar orçamento <ArrowUpRight size={16} /></a></nav>}
  </header>;
}


