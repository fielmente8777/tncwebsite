import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-client-webp-images.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "eazotel-client-webp-image.s3.ap-south-1.amazonaws.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  trailingSlash: true,
};

export default nextConfig;
