import type { Metadata } from "next";
import { site } from "@/content/site";

/** Per-page metadata. Canonical URLs are added only once the domain is confirmed. */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: site.facts.domain ? { canonical: path } : undefined,
    openGraph: { title: `${title} | ${site.name}`, description, url: site.facts.domain ? path : undefined },
  };
}
