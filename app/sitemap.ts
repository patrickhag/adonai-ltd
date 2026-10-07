import type { MetadataRoute } from "next";
import { PARTNERS_CLIENTS, SERVICES_DATA } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/process"), changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/teamdepartment"), changeFrequency: "yearly", priority: 0.6 },
  ];
  const services: MetadataRoute.Sitemap = Object.keys(SERVICES_DATA).map((serviceId) => ({
    url: absoluteUrl(`/services/${serviceId}`), changeFrequency: "yearly", priority: 0.8,
  }));
  const clients: MetadataRoute.Sitemap = PARTNERS_CLIENTS.map(({ id }) => ({
    url: absoluteUrl(`/network/${id}`), changeFrequency: "yearly", priority: 0.5,
  }));
  return [...staticPages, ...services, ...clients];
}
