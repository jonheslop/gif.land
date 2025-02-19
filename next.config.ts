import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gif.land",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
        search: "?v=4",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/data/:match*",
        destination: "https://home.gif.land/_vercel/insights/:match*",
      },
      {
        source: "/api/perf/:match*",
        destination: "https://home.gif.land/_vercel/speed-insights/:match*",
      },
    ];
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
