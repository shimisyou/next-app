import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    domains: ['placehold.jp'], // 使用するホスト名を追加
  },
};

export default nextConfig;
