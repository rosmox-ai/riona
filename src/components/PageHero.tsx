import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
};

/** Introduction block for interior pages. */
export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <Section className="border-b border-border">
      <SectionHeading as="h1" size="title" eyebrow={eyebrow} title={title} lead={lead} />
      {children && <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div>}
    </Section>
  );
}
