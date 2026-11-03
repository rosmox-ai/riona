import type { MetadataRoute } from "next";
import { stories } from "@/content/editorial";
import { site } from "@/content/site";

const routes = [
  "/",
  "/about",
  "/portfolio",
  "/partnerships",
  "/contact",
  "/science",
  "/quality",
  "/careers",
  "/insights",
  ...stories.map(story => `/insights/${story.slug}`),
  "/legal/privacy-policy",
  "/legal/terms-of-use",
  "/accessibility",
];

// Absolute URLs need the confirmed domain; until then the sitemap is empty.
export default function sitemap(): MetadataRoute.Sitemap {
  const domain = site.facts.domain;
  if (!domain) return [];
  return routes.map((route) => ({ url: `https://${domain}${route === "/" ? "" : route}` }));
}
