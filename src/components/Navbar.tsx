'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Acervo de Personagens', href: '#acervo' },
  { label: 'Em Movimento', href: '#videos' },
  { label: 'Clientes & TV', href: '#clientes' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-3.5 focus:outline-none"
        >
          <div className="w-9 h-9 border border-champagne-gold/40 flex items-center justify-center font-serif text-lg font-normal text-champagne-gold group-hover:border-champagne-gold transition-colors duration-300">
            EV
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base tracking-widest text-alabaster font-medium leading-none uppercase">
              Estátua Viva
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-champagne-gold/80 mt-1">
              Produções • Est. 2005
            </span>
          </div>
        </Link>

        {/* Central Floating Pill (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full backdrop-blur-md bg-charcoal/80 border border-alabaster/10 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-stone-warm hover:text-champagne-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://www.instagram.com/estatuavivaproducoes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Oficial Estátua Viva Produções"
            className="w-9 h-9 rounded-full border border-alabaster/10 flex items-center justify-center text-stone-warm hover:text-champagne-gold hover:border-champagne-gold/40 transition-all duration-300"
          >
            <Instagram strokeWidth={1.5} className="w-4 h-4" />
          </a>

          <a
            href="#briefing"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-champagne-gold hover:bg-champagne-hover text-obsidian text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all duration-300 group shadow-lg shadow-champagne-gold/10"
          >
            <span>Solicitar Orçamento</span>
            <ArrowUpRight strokeWidth={1.5} className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="lg:hidden p-2 text-alabaster border border-alabaster/10 rounded-sm hover:border-champagne-gold transition-colors"
        >
          {mobileMenuOpen ? <X strokeWidth={1.5} className="w-5 h-5" /> : <Menu strokeWidth={1.5} className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto rounded-lg backdrop-blur-xl bg-charcoal/95 border border-alabaster/10 p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="font-mono text-[10px] uppercase tracking-widest text-stone-warm pb-2 border-b border-alabaster/10">
            Navegação Editorial
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-sans tracking-wide text-alabaster hover:text-champagne-gold transition-colors py-1 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="font-mono text-[10px] text-stone-warm">→</span>
            </Link>
          ))}
          <div className="pt-4 border-t border-alabaster/10 flex flex-col gap-3">
            <a
              href="https://wa.me/5511937765250?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Est%C3%A1tua%20Viva%20Produ%C3%A7%C3%B5es%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-champagne-gold text-obsidian text-xs font-mono uppercase tracking-[0.14em] font-semibold"
            >
              Consultar via WhatsApp
            </a>
            <a
              href="https://www.instagram.com/estatuavivaproducoes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-warm py-2"
            >
              <Instagram strokeWidth={1.5} className="w-4 h-4" />
              <span>@estatuavivaproducoes</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
