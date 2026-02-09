/** @type {import('next').NextConfig} */
const nextConfig = {
  // Usar renderizado estático para asegurar comportamiento predecible
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
