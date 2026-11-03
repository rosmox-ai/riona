// docs/content/02-home.md — demo wording. HOME-05 (company story) is omitted until real team material exists.
export const home = {
  hero: {
    eyebrow: "Riona Life Science",
    title: "Precision in science. Care in every step.",
    lead: "We are a new pharmaceutical company with a commitment to quality, thoughtful collaboration and the people healthcare serves.",
    secondaryAction: { label: "Explore our offerings", href: "/portfolio" },
  },
  whoWeAre: {
    title: "Science with a purpose.",
    text: "We are building Riona around a simple belief: quality and care belong at the heart of healthcare. Our aim is to bring that belief into the way we work, communicate and build relationships.",
    link: { label: "About Riona", href: "/about" },
  },
  focus: {
    title: "Built around healthcare needs.",
    lead: "Explore our focus and the opportunities to work together.",
    link: { label: "Our offerings", href: "/portfolio" },
  },
  approach: {
    title: "Quality isn't a department. It's how we aim to work.",
    items: [
      { title: "Quality", text: "A commitment to careful decisions and responsible ways of working." },
      { title: "Communication", text: "Clear conversations about needs, expectations and next steps." },
      { title: "Partnership", text: "An approach built on listening, collaboration and mutual respect." },
    ],
  },
} as const;
