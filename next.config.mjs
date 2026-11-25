/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async rewrites() {
    const storage = 'https://br-super-moon-be663clt.storage.c-9.us-east-2.aws.neon.tech/estatua-viva-public';
    // URLs públicas descritivas; arquivos originais continuam armazenados sem alterações.
    return [
      { source: '/midia/videos/novos-personagens-de-natal.mp4', destination: `${storage}/EV%20%281%29.mp4` },
      { source: '/midia/videos/convite-artistico-de-natal.mp4', destination: `${storage}/EV.mp4` },
      { source: '/midia/videos/natal-pela-perspectiva-do-personagem.mp4', destination: `${storage}/EV%20%282%29.mp4` },
    ];
  },
  async redirects() {
    return [
      {
        source: '/links',
        destination: '/bio',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
