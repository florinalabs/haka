/** @type {import('next').NextConfig} */

const nextConfig = {
  // SEO optimization: Generate build IDs for caching
  generateBuildId: async () => process.env.npm_lifecycle_event === 'build' ? 'seo-optimized' : undefined,

  // Environment variables for Vercel deployment (will be overwritten by vercel env vars)
  env: {
    NEXT_PUBLIC_GITHUB_URL: "https://github.com/haka-repo",
    NEXT_PUBLIC_YOUTUBE_CHANNEL: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL || "UCxD-xfWenPMwlbgFrrFmJkA",
    NEXT_PUBLIC_FACEBOOK_ID: process.env.NEXT_PUBLIC_FACEBOOK_ID || "61596243012781",
    NEXT_PUBLIC_TIKTOK_USERNAME: "@hakaphai",
  },

  // Configure output for static export (Vercel deployment)
  // NOTE: If using output: 'export', you'll need to add layout files manually
  output: 'standalone',
};

module.exports = nextConfig;