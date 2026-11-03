import { privacyPolicy } from "@/content/pages/legal";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: privacyPolicy.title, description: privacyPolicy.description, path: "/legal/privacy-policy" });

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicy} />;
}
