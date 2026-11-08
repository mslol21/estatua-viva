import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const dynamic = 'force-static';
export async function GET() {
  const artwork = await readFile(join(process.cwd(), 'public/brand/artista-share.jpg'));
  const artworkUrl = `data:image/jpeg;base64,${artwork.toString('base64')}`;
  const image = new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#07181e', color: '#f7f0e3', fontFamily: 'serif', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', position: 'absolute', inset: 20, border: '1px solid #c9a56a', borderRadius: 20 }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '57%', padding: '70px', zIndex: 1 }}>
        <span style={{ fontSize: 22, letterSpacing: 4, color: '#e4c184', marginBottom: 32 }}>ESTÁTUA VIVA PRODUÇÕES</span>
        <span style={{ fontSize: 66, lineHeight: 1.05 }}>Você imagina.</span>
        <span style={{ fontSize: 66, lineHeight: 1.05, fontStyle: 'italic', color: '#e4c184' }}>A gente dá vida.</span>
        <span style={{ fontFamily: 'sans-serif', fontSize: 23, lineHeight: 1.5, marginTop: 32, color: '#e5ded0' }}>Estátuas vivas e personagens para festas e eventos em São Paulo.</span>
      </div>
      {/* The original brand artwork is embedded for a self-contained static image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={artworkUrl} alt="" width="500" height="500" style={{ position: 'absolute', right: 45, top: 65, borderRadius: 250, border: '2px solid #a9804a', objectFit: 'cover' }} />
    </div>,
    { width: 1200, height: 630 },
  );
  return image;
}
