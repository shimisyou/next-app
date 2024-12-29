import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ...existing code...
  images: {
    domains: ['localhost', 'yourdomain.com'], // 必要なドメインを追加
  },
  output: 'export', // 静的エクスポートを有効にする
  basePath: '/next-app/next', // 公開URLに合わせる
  assetPrefix: '/next-app/next', // 静的ファイルの基準パスも一致させる
  // ...existing code...
};

export default nextConfig;
