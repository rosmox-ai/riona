import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        size="title"
        title="We couldn't find that page."
        lead="The page may have moved. Explore Riona or get in touch."
      />
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/portfolio" variant="secondary">Our offerings</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Contact</ButtonLink>
      </div>
    </Section>
  );
}
