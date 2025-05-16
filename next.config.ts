import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // ✅ C'est ce qui remplace "next export"
  reactStrictMode: true,
};

export default nextConfig;
