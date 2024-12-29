import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'yourdomain.com', 'shimisyou.github.io'], // 必要なドメインを追加
    unoptimized: true,
  },
  output: 'export',
  basePath: isProduction ? '/next-app/next' : '',
  assetPrefix: isProduction ? '/next-app/next' : '',
};

export default nextConfig;
