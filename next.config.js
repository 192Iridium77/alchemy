/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
    formats: ["image/webp", "image/png", "image/jpeg"],
  },
  // Enable static exports if needed for Netlify
  // output: 'export',
};

module.exports = nextConfig;
