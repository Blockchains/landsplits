import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/check", "/admin", "/portal"]
    },
    sitemap: "https://landsplits.com/sitemap.xml"
  };
}
