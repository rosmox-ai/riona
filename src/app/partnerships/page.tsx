import { site } from "@/content/site";
import { partnerships } from "@/content/pages/partnerships";
import { Invitation } from "@/components/Invitation";
import { OfferingGrid } from "@/components/OfferingGrid";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ ...partnerships.meta, path: "/partnerships" });

// PART-04 (FAQ) is added only when the company supplies real answers.
export default function PartnershipsPage() {
  const { hero, opportunities, steps, enquiry } = partnerships;
  const showOpportunities = site.partnershipTypes.length > 0 || site.isPreview;

  return (
    <>
      {/* PART-01 */}
      <PageHero {...hero}>
        <ButtonLink href={site.primaryAction.href}>{site.primaryAction.label}</ButtonLink>
      </PageHero>

      {/* PART-02 */}
      {showOpportunities && (
        <Section aria-labelledby="opportunities">
          <h2 id="opportunities" className="mb-12 text-section">
            {opportunities.title}
          </h2>
          <OfferingGrid
            items={site.partnershipTypes}
            actionLabel={opportunities.action}
            slotLabel="Confirmed collaboration type"
          />
        </Section>
      )}

      {/* PART-03 */}
      <Section tone="mist" aria-labelledby="how-we-begin">
        <h2 id="how-we-begin" className="text-section">
          {steps.title}
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.items.map((step, index) => (
            <li key={step.title} className="flex gap-5 md:flex-col">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cobalt/30 bg-white font-heading font-semibold text-cobalt"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-card">{step.title}</h3>
                <p className="mt-2 max-w-sm">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* PART-05 */}
      <Invitation heading={enquiry.heading} text={enquiry.text} actionLabel={enquiry.action} />
    </>
  );
}
