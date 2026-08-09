import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unipodcast-final.onrender.com",
      },
    ],
  },
};

export default nextConfig;
