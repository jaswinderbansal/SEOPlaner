import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/local-seo-services", "/link-building-services", "/seo-company-india"].map(path => ({ url: `https://seoplaner.com${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.9 : 1 })); }
