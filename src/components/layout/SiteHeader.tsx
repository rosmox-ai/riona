import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    <header className="relative border-b border-border bg-white">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks
            items={site.nav}
            className="flex items-center gap-1"
            linkClassName="inline-flex min-h-11 items-center rounded-control px-4 font-medium text-ink transition-colors duration-200 hover:text-cobalt aria-[current=page]:text-cobalt"
          />
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={site.primaryAction.href}>{site.primaryAction.label}</ButtonLink>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
