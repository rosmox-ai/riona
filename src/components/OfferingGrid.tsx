import { site, type Offering } from "@/content/site";
import { TextLink } from "@/components/ui/TextLink";

type OfferingGridProps = {
  items: readonly Offering[];
  actionLabel: string;
  actionHref?: string;
  /** Number of labelled slots to show in previews when no confirmed items exist. */
  slots?: number;
  slotLabel: string;
};

/**
 * Up to three confirmed offerings. With none confirmed, previews show labelled
 * editorial slots; live pages render nothing.
 */
export function OfferingGrid({ items, actionLabel, actionHref = "/contact", slots = 3, slotLabel }: OfferingGridProps) {
  if (items.length === 0 && !site.isPreview) return null;

  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {items.length > 0
        ? items.map((item) => (
            <li key={item.name} className="flex flex-col rounded-card border border-border bg-white p-7">
              <h3 className="text-card">{item.name}</h3>
              <p className="mt-3">{item.summary}</p>
              {item.detail && <p className="mt-3 text-secondary">{item.detail}</p>}
              <TextLink href={actionHref} className="mt-auto pt-6">
                {actionLabel}
              </TextLink>
            </li>
          ))
        : Array.from({ length: slots }, (_, index) => (
            <li
              key={index}
              className="flex flex-col rounded-card border border-dashed border-cobalt/40 bg-white p-7"
            >
              <p className="text-label font-semibold text-cobalt">Editorial slot {index + 1}</p>
              <h3 className="mt-3 text-card text-secondary">{slotLabel}</h3>
              <p className="mt-3 text-secondary">
                What it is and who it serves — a short factual description supplied and approved by Riona.
              </p>
              <span className="mt-auto pt-6 text-label text-secondary">Link: {actionLabel}</span>
            </li>
          ))}
    </ul>
  );
}
