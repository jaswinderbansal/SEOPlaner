import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { posts } from "@/lib/blog";

const siteUrl = "https://www.seoplaner.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/services/web-development",
    "/services/software-development",
    "/services/cloud-devops",
    "/services/cybersecurity",
    "/services/it-consulting",
    "/services/seo",
    "/services/aeo",
    "/services/geo",
    "/services/content-strategy",
    "/case-studies",
    "/blog",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${siteUrl}/case-studies/${c.slug}`,
    lastModified: new Date(c.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
