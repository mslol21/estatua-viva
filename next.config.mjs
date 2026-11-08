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
      {
        protocol: 'https',
        hostname: 'estatuaviva.com.br',
      },
    ],
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
};

export default nextConfig;
