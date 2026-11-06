import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/donate",
    "/get-involved",
    "/gallery",
    "/contact",
  ];

  const priorities: Record<string, number> = {
    "/": 1,
    "/about": 0.8,
    "/get-involved": 0.8,
    "/donate": 0.8,
    "/contact": 0.75,
    "/gallery": 0.7,
  };

  return routes.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: priorities[route] ?? 0.5,
  }));
}
