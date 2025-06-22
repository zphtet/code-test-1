import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@uidotdev/usehooks"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
