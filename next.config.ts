import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/wells_fargo',
  assetPrefix: '/wells_fargo',
};

export default nextConfig;
