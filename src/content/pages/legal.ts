// docs/content/12-legal.md — outlines for preparation, not publishable policies.
// `body` is draft wording; `note` is an editorial instruction shown only in previews.

export type LegalSection = { heading: string; body?: string; note?: string };

export type LegalDocument = {
  title: string;
  description: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy policy",
  description: "How Riona Life Science handles personal information.",
  intro: "This page will explain what information Riona collects through this website, why, and how it is handled.",
  sections: [
    { heading: "Who we are", note: "Identify the legal entity and a verified privacy contact." },
    { heading: "Information we collect", note: "List the data actually collected, such as enquiry form fields. Preview forms collect nothing." },
    { heading: "How we use it", note: "State purposes and the applicable basis for each, separating business enquiries from any recruitment or safety processing." },
    { heading: "Service providers", note: "Name the categories of providers that process data on Riona's behalf, such as hosting and email delivery." },
    { heading: "Storage and retention", note: "Describe where data is stored, who can access it and how long it is kept. No blanket deletion promise where other obligations apply." },
    { heading: "Your rights", note: "Explain available rights and how to make a request, under the applicable law (for example India's DPDP Act and Rules)." },
    { heading: "Changes to this policy", note: "Add the effective date and how updates are communicated." },
  ],
};

export const termsOfUse: LegalDocument = {
  title: "Terms of use",
  description: "Terms that apply to the use of the Riona Life Science website.",
  intro: "These terms will describe how this website may be used.",
  sections: [
    { heading: "Scope", note: "Which website and services these terms cover." },
    { heading: "Ownership and permitted use", note: "Ownership of content and marks, and what visitors may do with them." },
    {
      heading: "Information on this website",
      body: "Information on this website is for general reference and is not a substitute for advice from a qualified healthcare professional.",
      note: "Draft general notice from the content plan; confirm with qualified reviewers.",
    },
    { heading: "Third-party resources", note: "Responsibility for linked external websites." },
    { heading: "Applicable law and contact", note: "Governing law, jurisdiction and a verified contact." },
  ],
};

export const accessibilityStatement: LegalDocument = {
  title: "Accessibility",
  description: "Riona Life Science's approach to website accessibility.",
  intro:
    "We want everyone to be able to use this website. If you experience difficulty, please contact us through the published contact channel.",
  sections: [
    {
      heading: "How this website is built",
      body: "The website uses semantic headings and landmarks, a skip link, visible keyboard focus, labelled form fields with written error messages, and respects reduced-motion settings. It is designed to work at narrow widths and when zoomed.",
    },
    {
      heading: "Known limitations",
      body: "This website has not yet been independently evaluated against WCAG 2.2.",
      note: "Replace with the results and date of an actual evaluation.",
    },
    { heading: "Contact", note: "Add a verified accessibility support contact." },
  ],
};
