import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: false,
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: false,
  },
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
