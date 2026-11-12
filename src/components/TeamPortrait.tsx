'use client';
import { useState } from 'react';
import Image from 'next/image';
export default function TeamPortrait({name,src}:{name:string;src:string}) {
  const [failed,setFailed]=useState(false);
  return <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_35%,rgba(203,161,89,0.16),transparent_65%)]">
    {failed ? <span aria-hidden="true" className="font-serif text-5xl sm:text-6xl text-champagne-gold/50">{name.split(' ').map(part=>part[0]).slice(0,2).join('')}</span> : <Image src={src} alt={`Retrato de ${name}`} fill sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 22vw" quality={80} className="object-cover" onError={()=>setFailed(true)} />}
  </div>;
}
