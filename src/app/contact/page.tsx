import { site } from "@/content/site";
import { contact } from "@/content/pages/contact";
import { ContactForm } from "@/components/ContactForm";
import { EditorialNote } from "@/components/EditorialNote";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ ...contact.meta, path: "/contact" });

export default function ContactPage() {
  const { hero, form, details } = contact;
  const { contactEmail, phone, address } = site.facts;
  const hasDetails = Boolean(contactEmail || phone || address);
  // Without a preview or a configured endpoint there is nowhere to send the form.
  const showForm = site.isPreview || Boolean(site.forms.enquiryEndpoint);

  return (
    <>
      {/* CONTACT-01 */}
      <PageHero {...hero} />

      <Section containerClassName="grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* CONTACT-02 */}
        {showForm && (
          <div className="lg:col-span-7">
            <ContactForm />
            <EditorialNote className="mt-8">{form.noticeNote}</EditorialNote>
          </div>
        )}

        {/* CONTACT-03 */}
        <aside aria-labelledby="contact-details" className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-card bg-mist p-7">
            <h2 id="contact-details" className="text-card">
              {details.title}
            </h2>
            {hasDetails ? (
              <dl className="mt-5 space-y-4">
                {contactEmail && (
                  <div>
                    <dt className="text-label text-secondary">Email</dt>
                    <dd><a href={`mailto:${contactEmail}`} className="font-medium text-cobalt underline-offset-4 hover:underline">{contactEmail}</a></dd>
                  </div>
                )}
                {phone && (
                  <div>
                    <dt className="text-label text-secondary">Phone</dt>
                    <dd><a href={`tel:${phone.replace(/\s/g, "")}`} className="font-medium text-cobalt underline-offset-4 hover:underline">{phone}</a></dd>
                  </div>
                )}
                {address && (
                  <div>
                    <dt className="text-label text-secondary">Address</dt>
                    <dd className="whitespace-pre-line text-ink">{address}</dd>
                  </div>
                )}
              </dl>
            ) : (
              <EditorialNote className="mt-5">{details.editorialNote}</EditorialNote>
            )}
          </div>
        </aside>
      </Section>
    </>
  );
}
