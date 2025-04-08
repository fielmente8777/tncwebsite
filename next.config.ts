import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-client-webp-image.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: 'https',
        hostname: 'tncimmigration.com',
        pathname: '/wp-content/uploads/**',
      }
    ],
    dangerouslyAllowSVG: true,
  },
  // trailingSlash: true,
};

export default nextConfig;
