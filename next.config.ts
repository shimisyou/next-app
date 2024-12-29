import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ...existing code...
  images: {
    domains: ['localhost', 'yourdomain.com'], // 必要なドメインを追加
  },
  output: 'export', // 静的エクスポートを有効にする
  basePath: '/next-app/docs/next', // 正しいベースパス
  assetPrefix: '/next-app/docs/next', // 静的ファイルが正しく読み込まれるように的ファイルのパスを正しく解決するために追加
  // ...existing code...
};

export default nextConfig;
