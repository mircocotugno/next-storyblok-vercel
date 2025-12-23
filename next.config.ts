import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Image source
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
    ],
    deviceSizes: [320, 480, 640, 1024, 1280, 1920, 2048],
    imageSizes: [280, 320, 480, 640, 1024, 1280, 1920],
    qualities: [100, 100, 90, 90, 80, 80, 75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
