import { termsOfUse } from "@/content/pages/legal";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: termsOfUse.title, description: termsOfUse.description, path: "/legal/terms-of-use" });

export default function TermsOfUsePage() {
  return <LegalPage document={termsOfUse} />;
}
