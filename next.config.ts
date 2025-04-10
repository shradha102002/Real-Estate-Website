// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ✅ this is needed if app folder is inside src
  },
};

module.exports = nextConfig;
