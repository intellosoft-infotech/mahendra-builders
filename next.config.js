/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Avoid Next's image optimizer fetching remote images during local development
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mahendrabuilders.com',
      },
      {
        protocol: 'https',
        hostname: 'mahendrabuilder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
