import type { MetadataRoute } from "next";
import { jurisdictions, regions, topics } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://landsplits.com";
  const staticRoutes = ["", "/states", "/canada", "/how-it-works", "/professionals", "/about", "/disclaimer", "/editorial-policy", "/data-sources"].map(
    (path) => ({ url: `${base}${path}`, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.6 })
  );
  const regionRoutes = regions.map((region) => ({
    url: `${base}/${region.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));
  const cityRoutes = jurisdictions.filter((city) => city.dataQualityScore >= 40).flatMap((city) => {
    const main = {
      url: `${base}/${city.regionSlug}/${city.citySlug}`,
      lastModified: city.lastReviewedAt,
      changeFrequency: "weekly" as const,
      priority: 0.7
    };
    const topicRoutes = topics.map((topic) => ({
      url: `${base}/${city.regionSlug}/${city.citySlug}/${topic.slug}`,
      lastModified: city.lastReviewedAt,
      changeFrequency: "monthly" as const,
      priority: 0.4
    }));
    return [main, ...topicRoutes];
  });
  return [...staticRoutes, ...regionRoutes, ...cityRoutes];
}
