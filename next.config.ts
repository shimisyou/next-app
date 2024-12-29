import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ...existing code...
  images: {
    domains: ['localhost', 'yourdomain.com'], // 必要なドメインを追加
  },
  distDir: '.next',
  output: 'export', // 静的エクスポートを有効にする
  // ...existing code...
};

export default nextConfig;
