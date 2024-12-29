import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ...existing code...
  images: {
    domains: ['localhost', 'yourdomain.com'], // 必要なドメインを追加
  },
  output: 'export', // 静的エクスポートを有効にする
  basePath: '/next-app', // GitHub Pages のリポジトリ名をベースパスとして追加
  assetPrefix: '/next-app', // 静的ファイルのパスを正しく解決するために追加
  // ...existing code...
};

export default nextConfig;
