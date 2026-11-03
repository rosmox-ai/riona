import { accessibilityStatement } from "@/content/pages/legal";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: accessibilityStatement.title, description: accessibilityStatement.description, path: "/accessibility" });

export default function AccessibilityPage() {
  return <LegalPage document={accessibilityStatement} />;
}
