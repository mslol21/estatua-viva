'use client';

import { useState, useEffect, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CHARACTERS, Character } from '@/data/portfolioData';
import { ArrowUpRight, Check, Eye, X, Clock, Sparkles, UserCheck, Shield, ChevronLeft, ChevronRight, Copy, CheckCheck, LayoutGrid, Orbit } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import ThreeDCarousel from './ThreeDCarousel';
import OriginalPhotoGallery from './OriginalPhotoGallery';

const CATEGORIES = [
  'Todos',
  'Ouro Imperial',
  'Mármore Branco',
  'Prata Industrial',
  'Temáticos & Cosplay',
  'Projetos Sob Medida (B2B)',
] as const;

type CategoryType = typeof CATEGORIES[number];

export default function CharacterCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('Todos');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [copyError, setCopyError] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'orbit'>('grid');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || viewMode !== 'grid') return;
    carousel.scrollLeft = 0;
    const update = () => {
      setCanScrollLeft(carousel.scrollLeft > 1);
      setCanScrollRight(carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 1);
    };
    const observer = new ResizeObserver(update);
    observer.observe(carousel);
    carousel.addEventListener('scroll', update, { passive: true });
    const frame = requestAnimationFrame(update);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); carousel.removeEventListener('scroll', update); };
  }, [selectedCategory, viewMode]);

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector<HTMLElement>('[data-character-card]');
    const distance = card ? card.offsetWidth + 24 : carousel.clientWidth * 0.8;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    carousel.scrollBy({ left: direction * distance, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    const categoryByHash: Record<string, CategoryType> = {
      '#estilo-branca': 'Mármore Branco',
      '#estilo-prata': 'Prata Industrial',
      '#estilo-ouro': 'Ouro Imperial',
      '#estilo-diversas': 'Temáticos & Cosplay',
    };
    const selectFromHash = () => {
      const category = categoryByHash[window.location.hash];
      if (!category) return;
      setSelectedCategory(category);
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById('acervo')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    };
    const onCategoryClick = (event: globalThis.MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!(link instanceof HTMLAnchorElement) || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== '/' || window.location.pathname !== '/' || !categoryByHash[url.hash]) return;
      event.preventDefault();
      // Handle repeated clicks too, before the smooth-scroll listener sees the anchor.
      event.stopPropagation();
      if (window.location.hash !== url.hash) window.history.pushState(null, '', url.hash);
      selectFromHash();
    };
    selectFromHash();
    document.addEventListener('click', onCategoryClick);
    window.addEventListener('hashchange', selectFromHash);
    window.addEventListener('popstate', selectFromHash);
    return () => {
      document.removeEventListener('click', onCategoryClick);
      window.removeEventListener('hashchange', selectFromHash);
      window.removeEventListener('popstate', selectFromHash);
    };
  }, []);

  const filteredCharacters = selectedCategory === 'Todos'
    ? CHARACTERS
    : CHARACTERS.filter((c) => c.category === selectedCategory);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const openCharacterModal = (char: Character) => {
    setSelectedCharacter(char);
    setActivePhotoIdx(0);
    setCopied(false);
    setCopyError(false);
  };

  const copyProposalText = async (char: Character) => {
    const text = `Olá! Gostaria de consultar orçamento e disponibilidade para o personagem "${char.name}" (${char.category}) com a Estátua Viva Produções.`;
    try {
      await navigator.clipboard.writeText(text);
      setCopyError(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  };

  return (
    <section id="acervo" className="py-24 bg-charcoal/50 border-b border-alabaster/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-technical text-champagne-gold mb-2">
              ACERVO CÊNICO & FIGURINOS EXCLUSIVOS
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-normal">
              Obras vivas esculpidas em detalhe e rigor artístico.
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-warm max-w-md">
            Selecione um personagem para conhecer os detalhes e consultar a disponibilidade.
          </p>
        </div>

        {/* Filter Tabs with Framer Motion LayoutId & View Mode Toggle */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-4 mb-10 border-b border-alabaster/10">
          <div data-lenis-prevent className="catalog-filters flex min-w-0 items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`catalog-filter relative shrink-0 px-[14px] py-2.5 text-xs font-mono uppercase tracking-[0.06em] transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-gold ${
                    isSelected ? 'text-obsidian font-semibold' : 'text-stone-warm hover:text-alabaster'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-champagne-gold z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Grid vs 3D Orbit View Toggle */}
          <div className="flex items-center gap-1 border border-alabaster/15 p-1 rounded-full self-start md:self-auto bg-charcoal/50 backdrop-blur-sm shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
                viewMode === 'grid' ? 'bg-champagne-gold text-obsidian font-semibold' : 'text-stone-warm hover:text-alabaster'
              }`}
              aria-pressed={viewMode === 'grid'}
              aria-label="Visualização em carrossel"
            >
              <LayoutGrid size={13} />
              <span>Carrossel</span>
            </button>
            <button
              onClick={() => setViewMode('orbit')}
              className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
                viewMode === 'orbit' ? 'bg-champagne-gold text-obsidian font-semibold' : 'text-stone-warm hover:text-alabaster'
              }`}
              aria-pressed={viewMode === 'orbit'}
              aria-label="Visualização 3D em Órbita"
            >
              <Orbit size={13} />
              <span>Órbita 3D</span>
            </button>
          </div>
        </div>

        {viewMode === 'orbit' ? (
          <div className="py-4">
            <ThreeDCarousel
              items={filteredCharacters.map((char) => ({
                id: char.id,
                title: char.name,
                image: char.imageUrl,
                color: char.colorAccent || '223, 189, 124',
              }))}
              onSelectItem={(id) => {
                const found = filteredCharacters.find((c) => c.id === id);
                if (found) openCharacterModal(found);
              }}
            />
          </div>
        ) : (
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-xs text-stone-warm">Deslize para conhecer mais personagens</p>
              <div className="flex shrink-0 gap-2">
                <button type="button" aria-label="Personagens anteriores" aria-controls="carrossel-personagens" disabled={!canScrollLeft} onClick={() => scrollCarousel(-1)} className="flex h-11 w-11 items-center justify-center border border-champagne-gold/40 text-champagne-gold transition-colors hover:bg-champagne-gold/10 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-gold"><ChevronLeft size={20} /></button>
                <button type="button" aria-label="Próximos personagens" aria-controls="carrossel-personagens" disabled={!canScrollRight} onClick={() => scrollCarousel(1)} className="flex h-11 w-11 items-center justify-center border border-champagne-gold/40 text-champagne-gold transition-colors hover:bg-champagne-gold/10 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-gold"><ChevronRight size={20} /></button>
              </div>
            </div>
          <div id="carrossel-personagens" ref={carouselRef} aria-label="Personagens do acervo" tabIndex={0} data-lenis-prevent className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-gold">
            {filteredCharacters.map((character, idx) => {
              const whatsappLink = `https://wa.me/5511937765250?text=${encodeURIComponent(
                `Olá! Vi o personagem ${character.name} no site da Estátua Viva Produções e gostaria de consultar disponibilidade e orçamento para meu evento.`
              )}`;

              return (
                <motion.div
                  key={character.id}
                  data-character-card
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  onMouseMove={handleMouseMove}
                  className="spotlight-card group w-[min(82vw,320px)] shrink-0 snap-start sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)] bg-obsidian border border-alabaster/10 hover:border-champagne-gold/60 flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-champagne-gold/5"
                >
                  {/* Image Container with Rest vs Hover Contrast */}
                  <div
                    onClick={() => openCharacterModal(character)}
                    className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal cursor-pointer"
                  >
                    <Image
                      src={character.imageUrl}
                      alt={character.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center grayscale-[0.3] contrast-[1.08] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                    {/* Category or Case Badge with Color Accent */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest text-alabaster bg-obsidian/90 px-2.5 py-1 border backdrop-blur-md"
                        style={{ borderColor: `${character.colorAccent}50` }}
                      >
                        {character.category}
                      </span>
                      {character.caseBadge && (
                        <span className="font-mono text-[9px] uppercase tracking-widest text-champagne-gold bg-obsidian/90 px-2.5 py-1 border border-champagne-gold/40 backdrop-blur-md">
                          {character.caseBadge}
                        </span>
                      )}
                    </div>

                    {/* Quick View Button on Image */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openCharacterModal(character);
                      }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-obsidian/90 border border-alabaster/20 flex items-center justify-center text-stone-warm hover:text-champagne-gold hover:border-champagne-gold opacity-100 transition-all duration-300 z-20 shadow-xl"
                      aria-label={`Ver detalhes de ${character.name}`}
                      title="Abrir ficha técnica completa"
                    >
                      <Eye strokeWidth={1.5} className="w-4 h-4" />
                    </button>

                    {/* Floating Bottom info inside image */}
                    <div className="absolute bottom-3 left-3 right-3 z-20">
                      <h3 className="font-serif text-xl sm:text-2xl text-alabaster font-normal leading-tight group-hover:text-champagne-gold transition-colors">
                        {character.name}
                      </h3>
                      {character.highlightText && (
                        <span className="font-mono text-[9px] uppercase tracking-widest text-champagne-gold/90 mt-1 block">
                          {character.highlightText}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <p className="text-xs font-sans text-stone-warm leading-relaxed mb-4 line-clamp-2">
                        {character.tagline}
                      </p>

                      <div className="pt-3 border-t border-alabaster/10">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-stone-warm/80 block mb-1">
                          INDICAÇÃO CÊNICA:
                        </span>
                        <p className="font-sans text-xs text-alabaster/90 line-clamp-1">
                          {character.idealFor}
                        </p>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 mt-4 border-t border-alabaster/10 flex items-center gap-2">
                      <button
                        onClick={() => openCharacterModal(character)}
                        className="p-2.5 border border-alabaster/10 hover:border-champagne-gold text-stone-warm hover:text-champagne-gold text-xs transition-colors"
                        aria-label={`Ver detalhes de ${character.name}`}
                        title="Ver ficha técnica"
                      >
                        <Eye strokeWidth={1.5} className="w-4 h-4" />
                      </button>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow inline-flex items-center justify-between px-3.5 py-2.5 border border-alabaster/10 group-hover:border-champagne-gold group-hover:bg-champagne-gold text-stone-warm group-hover:text-obsidian text-xs font-mono uppercase tracking-[0.12em] font-semibold transition-all duration-300"
                      >
                        <span>Orçar personagem</span>
                        <ArrowUpRight strokeWidth={1.5} className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          </div>
        )}
        <OriginalPhotoGallery key={selectedCategory} category={selectedCategory} />
      </div>

      {/* Radix Dialog for Immersive Character Dossier */}
      <Dialog.Root open={!!selectedCharacter} onOpenChange={(open) => !open && setSelectedCharacter(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-obsidian/90 backdrop-blur-md z-50 animate-in fade-in duration-300" />
          <Dialog.Content data-lenis-prevent className="character-dialog fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[94vw] max-w-4xl max-h-[92vh] overflow-y-auto bg-charcoal border border-alabaster/20 p-6 sm:p-10 shadow-2xl z-50 focus:outline-none animate-in fade-in zoom-in-95 duration-300">
            {selectedCharacter && (
              <div>
                <Dialog.Description className="sr-only">Detalhes e consulta de disponibilidade do personagem selecionado.</Dialog.Description>
                {/* Header */}
                <div className="flex items-start justify-between border-b border-alabaster/10 pb-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedCharacter.colorAccent }} />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-champagne-gold">
                        DOSSIÊ TÉCNICO • {selectedCharacter.category}
                      </span>
                    </div>
                    <Dialog.Title className="font-serif text-3xl sm:text-4xl text-alabaster font-normal mt-1.5">
                      {selectedCharacter.name}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close aria-label="Fechar detalhes" className="p-2 text-stone-warm hover:text-alabaster border border-alabaster/10 hover:border-champagne-gold transition-colors">
                    <X strokeWidth={1.5} className="w-5 h-5" />
                  </Dialog.Close>
                </div>

                {/* Main Split: Photo Gallery & Technical Dossier */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                  {/* Photo Gallery with Thumbnail switcher */}
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <div className="relative aspect-[3/4] w-full border border-alabaster/10 overflow-hidden bg-obsidian">
                      <Image
                        src={selectedCharacter.gallery[activePhotoIdx] || selectedCharacter.imageUrl}
                        alt={selectedCharacter.name}
                        fill
                        className="object-cover object-center transition-all duration-500"
                      />
                    </div>

                    {/* Thumbnail strip */}
                    {selectedCharacter.gallery.length > 1 && (
                      <div className="flex items-center gap-2">
                        {selectedCharacter.gallery.map((photo, pIdx) => (
                          <button
                            key={pIdx}
                            onClick={() => setActivePhotoIdx(pIdx)}
                            className={`relative w-16 h-16 border overflow-hidden transition-all ${
                              activePhotoIdx === pIdx
                                ? 'border-champagne-gold scale-105'
                                : 'border-alabaster/10 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <Image
                              src={photo}
                              alt={`${selectedCharacter.name} foto ${pIdx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technical Dossier Content */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-champagne-gold mb-1.5">
                        CONCEITO ARTÍSTICO & DRAMATURGIA
                      </h4>
                      <p className="font-sans text-sm text-alabaster leading-relaxed">
                        {selectedCharacter.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-champagne-gold mb-1.5">
                        INDICAÇÃO PARA O EVENTO
                      </h4>
                      <p className="font-sans text-sm text-stone-warm leading-relaxed">
                        {selectedCharacter.idealFor}
                      </p>
                    </div>

                    {/* Technical Specs Cards */}
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-champagne-gold mb-3">
                        FICHA TÉCNICA DE PRODUÇÃO
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
                        <div className="p-3 bg-obsidian border border-alabaster/10">
                          <span className="font-mono text-[10px] text-stone-warm uppercase tracking-widest block mb-1">
                            Duração da Performance
                          </span>
                          <span className="text-alabaster font-medium">{selectedCharacter.specs.duration}</span>
                        </div>
                        <div className="p-3 bg-obsidian border border-alabaster/10">
                          <span className="font-mono text-[10px] text-stone-warm uppercase tracking-widest block mb-1">
                            Tempo de Caracterização
                          </span>
                          <span className="text-alabaster font-medium">{selectedCharacter.specs.prepTime}</span>
                        </div>
                        <div className="p-3 bg-obsidian border border-alabaster/10">
                          <span className="font-mono text-[10px] text-stone-warm uppercase tracking-widest block mb-1">
                            Maquiagem & Pigmento
                          </span>
                          <span className="text-alabaster font-medium">{selectedCharacter.specs.makeup}</span>
                        </div>
                        <div className="p-3 bg-obsidian border border-alabaster/10">
                          <span className="font-mono text-[10px] text-stone-warm uppercase tracking-widest block mb-1">
                            Dinâmica de Interação
                          </span>
                          <span className="text-alabaster font-medium">{selectedCharacter.specs.interaction}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights List */}
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-stone-warm mb-2">
                        DIFERENCIAIS ARTÍSTICOS
                      </h4>
                      <ul className="space-y-2">
                        {selectedCharacter.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-stone-warm">
                            <Check strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Modal Actions */}
                <div className="border-t border-alabaster/10 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    onClick={() => copyProposalText(selectedCharacter)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-alabaster/15 hover:border-champagne-gold text-stone-warm hover:text-alabaster text-xs font-mono uppercase tracking-[0.12em] transition-colors"
                  >
                    {copied ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Texto copiado!' : 'Copiar texto para proposta'}</span>
                  </button>
                  {copyError && <p role="alert" className="text-xs text-alabaster">Não foi possível copiar. Use o botão de orçamento pelo WhatsApp.</p>}

                  <a
                    href={`https://wa.me/5511937765250?text=${encodeURIComponent(
                      `Olá! Gostaria de consultar orçamento e datas para o personagem ${selectedCharacter.name} (${selectedCharacter.category}) com a Estátua Viva Produções.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-champagne-gold hover:bg-champagne-hover text-obsidian text-xs font-mono uppercase tracking-[0.14em] font-semibold text-center transition-colors shadow-lg shadow-champagne-gold/15"
                  >
                    Consultar Data via WhatsApp
                  </a>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

