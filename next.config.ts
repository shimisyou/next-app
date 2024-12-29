import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ...existing code...
  images: {
    domains: ['localhost', 'yourdomain.com'], // 必要なドメインを追加
  },
  distDir: '.next',
  // ...existing code...
};

export default nextConfig;
