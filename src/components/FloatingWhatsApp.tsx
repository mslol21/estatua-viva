import { MessageCircle } from 'lucide-react';
export default function FloatingWhatsApp() {
  return <a href="https://wa.me/5511937765250?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20para%20meu%20evento." target="_blank" rel="noopener noreferrer" aria-label="Falar com a produção pelo WhatsApp" className="fixed z-40 bottom-5 right-5 inline-flex items-center justify-center gap-3 min-h-12 px-4 py-3 rounded-full bg-obsidian border border-champagne-gold/60 text-champagne-gold shadow-xl hover:bg-charcoal transition-colors"><MessageCircle size={20} strokeWidth={1.5} /><span className="hidden sm:inline text-xs">Falar com a produção</span></a>;
}
