'use client';

import { useState } from 'react';

/** Official artwork is preferred; legacy art remains a safe fallback during asset migration. */
const LOGO_CANDIDATES = [
  '/brand/EV - logo completa.png',
  '/brand/EV%20-%20logo%20completa.png',
  '/EV%20-%20logo%20completa.png',
  '/brand/logo-completa.webp',
  '/brand/logo-completa.png',
  '/brand/ev-logo-completa.webp',
  '/brand/identidade.webp',
];

export default function BrandLogo({ className = '' }: { className?: string }) {
  const [candidate, setCandidate] = useState(0);
  const legacy = candidate === LOGO_CANDIDATES.length - 1;
  return (
    <span className={`brand-logo brand-logo-official ${className}`} role="img" aria-label="Estátua Viva Produções">
      {legacy ? <span className="brand-logo-art" aria-hidden="true" /> : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={LOGO_CANDIDATES[candidate]}
          alt=""
          aria-hidden="true"
          decoding="async"
          className="h-full w-full object-contain"
          onError={() => setCandidate((i) => Math.min(i + 1, LOGO_CANDIDATES.length - 1))}
        />
      )}
    </span>
  );
}
