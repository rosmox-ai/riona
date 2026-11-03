import { site } from "@/content/site";
export function PreviewBanner() {
  if (!site.isPreview) return null;
  return <div className="preview-notice"><span>DESIGN PREVIEW</span><span>Demo copy & illustrative imagery · Company details pending confirmation</span></div>;
}
