/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Explicitly disable the App Router
  experimental: {
    appDir: false,
  },
};

export default nextConfig;
