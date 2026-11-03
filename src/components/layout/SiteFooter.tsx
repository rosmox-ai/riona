import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "./Wordmark";

const linkClass =
  "inline-flex min-h-11 items-center text-white/80 transition-colors duration-200 hover:text-white";

// Cached so the year is fixed at prerender time (required under cacheComponents).
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function SiteFooter() {
  const { contactEmail, legalName } = site.facts;

  return (
    <footer className="surface-ink bg-ink text-white/70">
      <Container className="grid gap-10 py-16 md:grid-cols-12 lg:py-20">
        <div className="md:col-span-5">
          <Wordmark onInk />
          <p className="mt-4 max-w-sm">{site.footer.positioning}</p>
          {contactEmail && (
            <p className="mt-6">
              <a href={`mailto:${contactEmail}`} className="text-cobalt-light underline-offset-4 hover:underline">
                {contactEmail}
              </a>
            </p>
          )}
        </div>

        <nav aria-label="Footer" className="md:col-span-7 md:justify-self-end">
          <ul className="grid grid-cols-2 gap-x-12 sm:grid-cols-4 sm:gap-x-8">
            <li>
              <Link href="/" className={linkClass}>Home</Link>
            </li>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container>
        <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-label sm:flex-row sm:items-center sm:justify-between">
          <p>© <CopyrightYear /> {legalName ?? site.name}</p>
          <ul className="flex flex-wrap gap-x-6">
            {site.footer.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
