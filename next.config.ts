import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from public folder to be served
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
