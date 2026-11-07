/** Frames the supplied logo artwork without redrawing it. */
export default function BrandLogo({ className = '' }: { className?: string }) {
  return <span className={`brand-logo ${className}`} role="img" aria-label="Estátua Viva Produções"><span className="brand-logo-art" aria-hidden="true" /></span>;
}
