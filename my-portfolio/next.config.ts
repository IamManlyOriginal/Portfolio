import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Portfolio",      // ← замени на имя твоего будущего репозитория
  assetPrefix: "/Portfolio",  // ← то же самое
};

export default nextConfig;