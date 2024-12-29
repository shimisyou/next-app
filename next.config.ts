import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'yourdomain.com', 'shimisyou.github.io'], // 必要なドメインを追加
    unoptimized: true,
  },
  output: 'export', // 静的エクスポートを有効にする
  // basePath: '/next-app/next', // 公開URLに合わせる
  assetPrefix: '/next-app/next', // 静的ファイルの基準パスも一致させる
};

export default nextConfig;
