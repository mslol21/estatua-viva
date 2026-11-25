import Image from 'next/image';

type ArtworkFrameProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  label?: string;
  aspect?: 'portrait' | 'square';
};

/** Museum-like framing for original photos: no crop or modifications to the source. */
export default function ArtworkFrame({
  src, alt, sizes = '(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 25vw',
  priority = false, className = '', label, aspect = 'portrait',
}: ArtworkFrameProps) {
  return (
    <figure className={`min-w-0 rounded-[22px] border border-[#d6b36a]/35 bg-[#09171c] p-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.28)] ${className}`}>
      <div className="rounded-[16px] border border-[#e5c68a]/45 bg-gradient-to-br from-[#987b47] via-[#2b251c] to-[#957543] p-[5px] shadow-[inset_0_1px_0_rgba(255,233,188,0.3)]">
        <div className="rounded-[11px] bg-[#d6ccb9] p-2 sm:p-3">
          <div className={`relative w-full overflow-hidden rounded-[4px] bg-[#111b20] ${aspect === 'square' ? 'aspect-square' : 'aspect-[3/4]'}`}>
            <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-contain object-center" />
          </div>
        </div>
      </div>
      {label && <figcaption className="px-2 pb-1 pt-3 text-center font-serif text-base text-[#ebd5aa]">{label}</figcaption>}
    </figure>
  );
}
