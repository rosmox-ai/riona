import { site } from "@/content/site";
import { home } from "@/content/pages/home";
import { ImageSlot } from "@/components/ImageSlot";
import { Invitation } from "@/components/Invitation";
import { OfferingGrid } from "@/components/OfferingGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";

export default function Home() {
  const { hero, whoWeAre, focus, approach } = home;
  const showFocus = site.offerings.length > 0 || site.isPreview;

  return (
    <>
      {/* HOME-01 · Hero */}
      <section className="overflow-hidden bg-white">
        <Container className="grid items-center gap-12 py-section lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading as="h1" size="display" eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} />
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.primaryAction.href}>{site.primaryAction.label}</ButtonLink>
              <ButtonLink href={hero.secondaryAction.href} variant="secondary">
                {hero.secondaryAction.label}
              </ButtonLink>
            </div>
          </div>
          <ImageSlot
            brief="approved brand photograph of Riona's people or work"
            className="aspect-[4/3] lg:col-span-5 lg:aspect-[4/5]"
          />
        </Container>
      </section>

      {/* HOME-02 · Who we are */}
      <Section tone="mist" aria-labelledby="who-we-are" containerClassName="grid gap-6 lg:grid-cols-12 lg:gap-16">
        <h2 id="who-we-are" className="text-section lg:col-span-5">
          {whoWeAre.title}
        </h2>
        <div className="lg:col-span-7">
          <p className="measure text-lead">{whoWeAre.text}</p>
          <TextLink href={whoWeAre.link.href} className="mt-6">
            {whoWeAre.link.label}
          </TextLink>
        </div>
      </Section>

      {/* HOME-03 · Our focus */}
      {showFocus && (
        <Section aria-labelledby="our-focus">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading id="our-focus" title={focus.title} lead={focus.lead} />
            <TextLink href={focus.link.href} className="shrink-0">
              {focus.link.label}
            </TextLink>
          </div>
          <OfferingGrid
            items={site.offerings.slice(0, 3)}
            actionLabel="Learn more"
            actionHref="/portfolio"
            slotLabel="Confirmed offering name"
          />
        </Section>
      )}

      {/* HOME-04 · Our approach */}
      <Section tone="ink" aria-labelledby="our-approach">
        <h2 id="our-approach" className="max-w-3xl text-section">
          {approach.title}
        </h2>
        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {approach.items.map((item) => (
            <li key={item.title}>
              <span aria-hidden="true" className="mb-5 block h-0.5 w-10 bg-teal" />
              <h3 className="text-card">{item.title}</h3>
              <p className="mt-3">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* HOME-06 · Conversation */}
      <Invitation />
    </>
  );
}
