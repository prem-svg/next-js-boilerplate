import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl= createNextIntlPlugin();

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

export default withNextIntl(nextConfig);
