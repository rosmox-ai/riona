import { site } from "@/content/site";

/**
 * Instruction for editors, shown only in previews. Never publishable text
 * (docs/content/00-content-guidelines.md, "Demo handling").
 */
export function EditorialNote({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  if (!site.isPreview) return null;

  return (
    <aside
      aria-label="Editorial note"
      className={`rounded-control border border-dashed border-cobalt/50 bg-white px-4 py-3 text-label text-secondary ${className}`}
    >
      <strong className="font-semibold text-cobalt">Editorial note: </strong>
      {children}
    </aside>
  );
}
