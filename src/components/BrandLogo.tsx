/** Frames the supplied logo artwork without redrawing it. */
export default function BrandLogo({ className = '' }: { className?: string }) {
  const footer = className.split(/\s+/).includes('brand-logo-footer');
  const fade = 'radial-gradient(ellipse 65% 62% at 50% 50%, #000 56%, transparent 100%)';
  return <span className={`brand-logo ${className}`} role="img" aria-label="Estátua Viva Produções"><span className="brand-logo-art" aria-hidden="true" style={footer ? { mixBlendMode: 'screen', WebkitMaskImage: fade, maskImage: fade } : undefined} /></span>;
}
