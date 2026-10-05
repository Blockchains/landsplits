import type { NextConfig } from "next";

const pages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  ...(pages
    ? {
        output: "export" as const,
        basePath: "/landsplits",
        assetPrefix: "/landsplits/",
        trailingSlash: true
      }
    : {
        async redirects() {
          return [
            { source: "/ca/:city", destination: "/california/:city", permanent: true },
            { source: "/tx/:city", destination: "/texas/:city", permanent: true },
            { source: "/fl/:city", destination: "/florida/:city", permanent: true },
            { source: "/on/:city", destination: "/ontario/:city", permanent: true },
            { source: "/bc/:city", destination: "/british-columbia/:city", permanent: true },
            { source: "/ab/:city", destination: "/alberta/:city", permanent: true }
          ];
        }
      })
};

export default nextConfig;

