import { about } from "@/content/pages/about";
import { EditorialNote } from "@/components/EditorialNote";
import { Invitation } from "@/components/Invitation";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ ...about.meta, path: "/about" });

export default function AboutPage() {
  const { hero, purpose, values, invitation } = about;

  return (
    <>
      {/* ABOUT-01 */}
      <PageHero {...hero} />

      {/* ABOUT-02 · Purpose */}
      <Section aria-labelledby="who-we-are" containerClassName="grid gap-6 lg:grid-cols-12 lg:gap-16">
        <h2 id="who-we-are" className="text-section lg:col-span-5">
          {purpose.title}
        </h2>
        <div className="measure space-y-5 text-lead lg:col-span-7">
          {purpose.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <EditorialNote>{purpose.editorialNote}</EditorialNote>
        </div>
      </Section>

      {/* ABOUT-03 · Values */}
      <Section tone="mist" aria-labelledby="values">
        <h2 id="values" className="text-section">
          {values.title}
        </h2>
        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.items.map((value) => (
            <li key={value.title}>
              <span aria-hidden="true" className="mb-5 block h-0.5 w-10 bg-teal" />
              <h3 className="text-card">{value.title}</h3>
              <p className="mt-3 max-w-sm">{value.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ABOUT-05 */}
      <Invitation heading={invitation.heading} text={invitation.text} />
    </>
  );
}
