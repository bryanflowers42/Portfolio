import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { seo } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: seo.url, lastModified: now, priority: 1 },
    ...projects.map((p) => ({
      url: `${seo.url}/work/${p.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
