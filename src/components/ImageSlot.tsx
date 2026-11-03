import { site } from "@/content/site";

type ImageSlotProps = {
  /** What the approved image should show; used only as the preview label. */
  brief: string;
  className?: string;
};

/**
 * Reserved space for approved photography. Renders a labelled frame in previews
 * and nothing on a live site, so no stock image is ever passed off as Riona's.
 */
export function ImageSlot({ brief, className = "" }: ImageSlotProps) {
  if (!site.isPreview) return null;

  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-media bg-mist ${className}`}
      role="img"
      aria-label={`Image placeholder: ${brief}`}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-cobalt-tint),var(--color-mist)_55%,#e3f5f2)]" />
      <div aria-hidden="true" className="absolute top-6 right-6 size-3 rounded-full bg-teal" />
      <p aria-hidden="true" className="relative m-5 rounded-control bg-white/85 px-3 py-2 text-label text-secondary">
        <span className="font-semibold text-ink">Image slot</span> — {brief}
      </p>
    </div>
  );
}
