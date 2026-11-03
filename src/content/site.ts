/**
 * Single source of brand, navigation and company facts.
 *
 * Everything here is demo wording from docs/content/01-global.md. Facts the
 * client has not confirmed are `null`; components must omit anything that is
 * `null` rather than render a placeholder or an invented value.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type Offering = {
  name: string;
  summary: string;
  detail?: string;
};

export const site = {
  name: "Riona Life Science",
  shortName: "Riona",
  tagline: "Precision in science. Care in every step.",
  description:
    "Meet Riona Life Science, a new pharmaceutical company built around a commitment to quality, scientific care and lasting partnerships.",

  /** While true: preview label shown, pages marked noindex, forms never submit. */
  isPreview: true,
  previewLabel:
    "Design preview — demo wording; company details pending confirmation.",

  primaryAction: { label: "Start a conversation", href: "/contact" },

  nav: [
    { label: "About", href: "/about" },
    { label: "Our offerings", href: "/portfolio" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  footer: {
    positioning:
      "Riona Life Science — a new pharmaceutical company with a commitment to quality and care.",
    legal: [
      { label: "Privacy", href: "/legal/privacy-policy" },
      { label: "Terms", href: "/legal/terms-of-use" },
      { label: "Accessibility", href: "/accessibility" },
    ] satisfies NavItem[],
  },

  invitation: {
    heading: "Let's build what's next in healthcare, together.",
    text: "Tell us what you are looking for. We would welcome a conversation about how we could work together.",
  },

  /**
   * Confirmed offerings and collaboration types. Empty until the client supplies them;
   * previews show labelled editorial slots, live pages omit the section.
   */
  offerings: [] as Offering[],
  partnershipTypes: [] as Offering[],

  forms: {
    /** Server endpoint for enquiries. Stays null until recipient, retention and failure handling are agreed. */
    enquiryEndpoint: null as string | null,
  },

  /**
   * Fact register (docs/content/00-content-guidelines.md).
   * Fill only with client-approved values.
   */
  facts: {
    legalName: null as string | null,
    domain: null as string | null,
    contactEmail: null as string | null,
    phone: null as string | null,
    address: null as string | null,
    safetyContact: null as string | null,
  },
} as const;
