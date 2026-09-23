import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/my-portfolio",      // ← замени на имя твоего будущего репозитория
  assetPrefix: "/my-portfolio/",  // ← то же самое
};

export default nextConfig;