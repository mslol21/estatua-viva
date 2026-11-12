import Image from 'next/image';
/** Official Estátua Viva Produções brand artwork. */
export default function BrandLogo({ className = '' }: { className?: string }) {
  return <span className={`brand-logo brand-logo-official ${className}`} role="img" aria-label="Estátua Viva Produções">
    <Image src="/brand/logo-oficial.webp" alt="" fill sizes="(max-width: 640px) 180px, 240px" className="object-contain" priority />
  </span>;
}
