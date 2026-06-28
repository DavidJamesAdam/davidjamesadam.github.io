import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org", // Matches any subdomain of example.com
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
