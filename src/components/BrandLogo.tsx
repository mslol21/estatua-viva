'use client';

import Image from 'next/image';
import { useState } from 'react';

type BrandLogoProps = {
  className?: string;
  variant?: 'full' | 'monogram';
};

/** Official logo with a visible legacy fallback when the asset is unavailable. */
export default function BrandLogo({ className = '', variant = 'full' }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);
  const src = variant === 'monogram' ? '/brand/monograma-oficial.webp' : '/brand/logo-oficial.webp';

  return (
    <span className={`brand-logo brand-logo-official ${className}`} role="img" aria-label="Estátua Viva Produções">
      {failed ? (
        <span aria-hidden="true" className="brand-logo-art" style={{ display: 'block' }} />
      ) : (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={false}
          sizes={className.includes("bio") || className.includes("footer") ? "(max-width: 767px) 270px, 292px" : "(max-width: 767px) 144px, 176px"}
          quality={65}
          className="object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
