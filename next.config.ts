import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable React strict mode for better dev experience
  reactStrictMode: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Generate static params at build time for Vercel
  experimental: {
    // Needed for the `use server` pattern in Next.js 15
  },
}

export default nextConfig
