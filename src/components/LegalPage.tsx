import type { LegalDocument } from "@/content/pages/legal";
import { EditorialNote } from "@/components/EditorialNote";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

/** Legal and utility pages. Sections without approved text are omitted on a live site. */
export function LegalPage({ document }: { document: LegalDocument }) {
  const sections = document.sections.filter((section) => section.body || site.isPreview);

  return (
    <>
      <PageHero eyebrow={site.name} title={document.title} lead={document.intro} />
      <Section>
        <EditorialNote className="mb-12 max-w-3xl">
          Outline only. Final text requires approval for the actual legal entity, services and jurisdictions before publication.
        </EditorialNote>
        <div className="measure space-y-12">
          {sections.map((section) => (
            <section key={section.heading} aria-labelledby={slug(section.heading)}>
              <h2 id={slug(section.heading)} className="text-card">
                {section.heading}
              </h2>
              {section.body && <p className="mt-3">{section.body}</p>}
              {section.note && <EditorialNote className="mt-4">{section.note}</EditorialNote>}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
