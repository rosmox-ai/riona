import { site } from "@/content/site";

export function PreviewBanner() {
  if (!site.isPreview) return null;

  return (
    <div className="border-b border-cobalt/15 bg-cobalt-tint px-5 py-2 text-center text-label text-ink">
      {site.previewLabel}
    </div>
  );
}
