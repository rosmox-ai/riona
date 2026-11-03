import { site } from "@/content/site";
import { offerings } from "@/content/pages/offerings";
import { Invitation } from "@/components/Invitation";
import { OfferingGrid } from "@/components/OfferingGrid";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ ...offerings.meta, path: "/portfolio" });

// PORT-04 (information notice) is added only if medicine information is published.
export default function OfferingsPage() {
  const { hero, list, enquiry } = offerings;
  const showList = site.offerings.length > 0 || site.isPreview;

  return (
    <>
      {/* PORT-01 */}
      <PageHero {...hero} />

      {/* PORT-02 */}
      {showList && (
        <Section aria-labelledby="offerings-list">
          <h2 id="offerings-list" className="mb-12 text-section">
            {list.title}
          </h2>
          <OfferingGrid
            items={site.offerings}
            actionLabel={list.action}
            slotLabel="Confirmed product category or service"
          />
        </Section>
      )}

      {/* PORT-03 */}
      <Invitation heading={enquiry.heading} text={enquiry.text} actionLabel={enquiry.action} />
    </>
  );
}
