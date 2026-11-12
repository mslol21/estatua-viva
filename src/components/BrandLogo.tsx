import Image from 'next/image';
/** Official Estátua Viva Produções brand artwork. */
export default function BrandLogo({ className = '', variant = 'full' }: { className?: string; variant?: 'full' | 'monogram' }) {
  return <span className={`brand-logo brand-logo-official ${className}`} role="img" aria-label="Estátua Viva Produções">
    <Image src={variant === 'monogram' ? '/brand/monograma-oficial.webp' : '/brand/logo-oficial.webp'} alt="" fill sizes={variant === 'monogram' ? '(max-width: 640px) 160px, 210px' : '(max-width: 640px) 180px, 240px'} className="object-contain" priority />
  </span>;
}
