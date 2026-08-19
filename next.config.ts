import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/youtube-rules-2027",
  assetPrefix: "/youtube-rules-2027",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
