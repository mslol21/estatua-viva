'use client';

import { useState, MouseEvent } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CHARACTERS, Character } from '@/data/portfolioData';
import { ArrowUpRight, Check, Eye, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

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
  const reducedMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('Todos');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const filteredCharacters = selectedCategory === 'Todos'
    ? CHARACTERS
    : CHARACTERS.filter((c) => c.category === selectedCategory);
  const orderedCharacters = [...filteredCharacters].sort((a, b) => Number(Boolean(b.imageUrl)) - Number(Boolean(a.imageUrl)));

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="acervo" className="section-space bg-charcoal/20 border-b border-alabaster/10 relative">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-technical text-champagne-gold mb-2">
              02 / Personagens & possibilidades
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-alabaster font-normal">
              Quem você gostaria de encontrar?
            </h2>
          </div>
          <p className="font-sans text-sm text-stone-warm max-w-md">
            Explore os estilos e consulte a produção para conhecer o repertório disponível para a sua data.
          </p>
        </div>

        {/* Filter Tabs with Framer Motion LayoutId */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-alabaster/10">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 text-xs font-mono uppercase tracking-[0.14em] transition-colors whitespace-nowrap ${
                  isSelected ? 'text-obsidian font-semibold' : 'text-stone-warm hover:text-alabaster'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-champagne-gold z-0"
                    transition={{ duration: reducedMotion ? 0 : 0.2 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Character Bento Grid with Asymmetric Ratio */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {orderedCharacters.map((character, idx) => {
              const whatsappLink = `https://wa.me/5511937765250?text=${encodeURIComponent(
                `Olá! Vi o personagem ${character.name} no site da Estátua Viva Produções e gostaria de consultar disponibilidade e orçamento para meu evento.`
              )}`;

              return (
                <motion.div
                  key={character.id}
                  layout
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: reducedMotion ? 0 : 0.3 }}
                  onMouseMove={handleMouseMove}
                  className="spotlight-card group bg-obsidian border border-alabaster/10 hover:border-champagne-gold/50 flex flex-col justify-between transition-colors duration-500 overflow-hidden"
                >
                  {/* Image Container with Rest vs Hover Contrast */}
                  <div className={`relative w-full overflow-hidden bg-charcoal ${character.imageUrl ? 'aspect-square' : 'aspect-[5/3] catalog-concept'}`}>
                    {character.imageUrl ? <Image
                      src={character.imageUrl}
                      alt={character.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    /> : <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 pb-8"><span aria-hidden="true" className="font-serif text-6xl italic text-champagne-gold/70">0{idx + 1}</span><span className="text-xs text-stone-warm mt-3">Consulte figurinos e disponibilidade</span></div>}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-80" />

                    {/* Category or Case Badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-alabaster bg-obsidian/90 px-2.5 py-1 border border-alabaster/10 backdrop-blur-md">
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
                      onClick={() => setSelectedCharacter(character)}
                      className="absolute top-3 right-3 w-11 h-11 rounded-full bg-obsidian/80 border border-alabaster/10 flex items-center justify-center text-stone-warm hover:text-champagne-gold opacity-100 transition-opacity duration-300 z-20"
                      aria-label={`Ver detalhes de ${character.name}`}
                      title="Ver detalhes"
                    >
                      <Eye strokeWidth={1.5} className="w-4 h-4" />
                    </button>

                    {/* Floating Bottom info inside image */}
                    <div className="absolute bottom-3 left-3 right-3 z-20">
                      <h3 className="font-serif text-xl sm:text-2xl text-alabaster font-normal leading-tight group-hover:text-champagne-gold transition-colors">
                        {character.name}
                      </h3>
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
                        <p className="font-sans text-xs text-alabaster/80 line-clamp-1">
                          {character.idealFor}
                        </p>
                      </div>
                    </div>

                    {/* 1-Click WhatsApp Budget Action */}
                    <div className="pt-4 mt-4 border-t border-alabaster/10">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-3.5 py-2.5 border border-alabaster/10 group-hover:border-champagne-gold group-hover:bg-champagne-gold text-stone-warm group-hover:text-obsidian text-xs font-mono uppercase tracking-[0.12em] font-semibold transition-all duration-300"
                      >
                        <span>Orçar este personagem</span>
                        <ArrowUpRight strokeWidth={1.5} className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Radix Dialog for Complete Character Dossier */}
      <Dialog.Root open={!!selectedCharacter} onOpenChange={(open) => !open && setSelectedCharacter(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-obsidian/85 backdrop-blur-md z-50 animate-in fade-in duration-300" />
          <Dialog.Content data-lenis-prevent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain bg-charcoal border border-alabaster/20 p-6 sm:p-10 shadow-2xl z-50 focus:outline-none animate-in fade-in zoom-in-95 duration-300">
            {selectedCharacter && (
              <div>
                <Dialog.Description className="sr-only">Descrição e consulta de disponibilidade do personagem selecionado.</Dialog.Description>
                <div className="flex items-start justify-between border-b border-alabaster/10 pb-4 mb-6">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-champagne-gold">
                      PERSONAGEM • {selectedCharacter.category}
                    </span>
                    <Dialog.Title className="font-serif text-3xl sm:text-4xl text-alabaster font-normal mt-1">
                      {selectedCharacter.name}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close aria-label="Fechar detalhes" className="p-2 text-stone-warm hover:text-alabaster border border-alabaster/10 hover:border-champagne-gold">
                    <X strokeWidth={1.5} className="w-5 h-5" />
                  </Dialog.Close>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
                  <div className="relative aspect-[3/4] w-full border border-alabaster/10 overflow-hidden bg-obsidian">
                    {selectedCharacter.imageUrl ? <Image
                      src={selectedCharacter.imageUrl}
                      alt={selectedCharacter.name}
                      fill
                      sizes="(max-width: 768px) 85vw, 350px"
                      className="object-cover object-top"
                    /> : <div className="catalog-concept h-full flex items-center justify-center px-6 text-center"><p className="font-serif text-3xl text-champagne-gold">Uma criação para o seu evento.</p></div>}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-stone-warm mb-1">
                        CONCEITO ARTÍSTICO
                      </h4>
                      <p className="font-sans text-sm text-alabaster leading-relaxed">
                        {selectedCharacter.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-stone-warm mb-1">
                        IDEAL PARA
                      </h4>
                      <p className="font-sans text-sm text-champagne-gold leading-relaxed">
                        {selectedCharacter.idealFor}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-stone-warm mb-2">
                        ESPECIFICAÇÕES CÊNICAS
                      </h4>
                      <ul className="space-y-2">
                        {selectedCharacter.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-sans text-stone-warm">
                            <Check strokeWidth={1.5} className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-alabaster/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase text-stone-warm">
                    Disponibilidade sujeita a agenda prévia de elenco
                  </span>
                  <a
                    href={`https://wa.me/5511937765250?text=${encodeURIComponent(
                      `Olá! Gostaria de consultar orçamento e datas para o personagem ${selectedCharacter.name} com a Estátua Viva Produções.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 bg-champagne-gold hover:bg-champagne-hover text-obsidian text-xs font-mono uppercase tracking-[0.14em] font-semibold text-center transition-colors"
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

