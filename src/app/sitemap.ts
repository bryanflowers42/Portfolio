import type { MetadataRoute } from "next";
import { visibleProjects } from "@/content/projects";
import { seo } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: seo.url, lastModified: now, priority: 1 },
    ...visibleProjects().map((p) => ({
      url: `${seo.url}/work/${p.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
