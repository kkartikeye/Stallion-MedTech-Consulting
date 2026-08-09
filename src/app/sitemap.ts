import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { capabilities } from "@/content/capabilities";
import { sectorsWithPages } from "@/content/sectors";
import { publishedInsights } from "@/content/insights";

/**
 * Sitemap generated from the same data the pages are, so a new capability,
 * sector, or published article appears automatically.
 *
 * Unpublished insight drafts are deliberately excluded — they also carry
 * `noIndex`, and listing them here would contradict that.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/capabilities", priority: 0.9 },
    { path: "/medtech", priority: 0.9 },
    { path: "/how-we-work", priority: 0.8 },
    { path: "/who-we-serve", priority: 0.7 },
    { path: "/work", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.2 },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));

  for (const capability of capabilities) {
    entries.push({
      url: `${siteUrl}/capabilities/${capability.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const sector of sectorsWithPages) {
    entries.push({
      url: `${siteUrl}/medtech/${sector.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  if (publishedInsights.length > 0) {
    entries.push({
      url: `${siteUrl}/insights`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });

    for (const insight of publishedInsights) {
      entries.push({
        url: `${siteUrl}/insights/${insight.slug}`,
        lastModified: insight.publishedAt ? new Date(insight.publishedAt) : lastModified,
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
