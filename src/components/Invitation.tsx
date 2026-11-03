import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

type InvitationProps = {
  heading?: string;
  text?: string;
  actionLabel?: string;
};

/** Reusable conversation block that closes most pages (HOME-06, ABOUT-05, PORT-03, PART-05). */
export function Invitation({
  heading = site.invitation.heading,
  text = site.invitation.text,
  actionLabel = site.primaryAction.label,
}: InvitationProps) {
  return (
    <Section tone="tint" aria-labelledby="invitation-heading">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="invitation-heading" className="text-section">
            {heading}
          </h2>
          <p className="measure mt-4 text-lead">{text}</p>
        </div>
        <ButtonLink href={site.primaryAction.href} className="shrink-0 self-start lg:self-auto">
          {actionLabel}
        </ButtonLink>
      </div>
    </Section>
  );
}
