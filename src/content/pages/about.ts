// docs/content/03-about.md — demo wording. ABOUT-04 (team) is omitted until approved material exists.
export const about = {
  meta: {
    title: "About",
    description:
      "Riona Life Science is a new pharmaceutical company with a commitment to quality, care and lasting relationships.",
  },
  hero: {
    eyebrow: "About Riona",
    title: "Science with a purpose.",
    lead: "Riona Life Science is a new pharmaceutical company with a commitment to quality, care and lasting relationships.",
  },
  purpose: {
    title: "Who we are",
    paragraphs: [
      "We are at the beginning of our journey, building Riona around the principles we want to carry forward: integrity in our decisions, care in our work and clear communication with the people we work with.",
      "Our purpose is to contribute thoughtfully to healthcare through responsible business practices and meaningful collaboration.",
    ],
    editorialNote:
      "Add a specific, approved description of the business and its customers. No origin story, location, founding year or manufacturing footprint until confirmed.",
  },
  values: {
    title: "What we value",
    items: [
      { title: "Integrity", text: "We believe in honest communication and responsible decisions." },
      { title: "Quality", text: "We aim to build quality into how we work, not treat it as an afterthought." },
      { title: "Care", text: "We keep the people healthcare serves in mind." },
      { title: "Curiosity", text: "We value learning, questions and continuous improvement." },
      { title: "Partnership", text: "We believe good relationships begin with listening." },
    ],
  },
  invitation: {
    heading: "Get to know Riona.",
    text: "We'd welcome a conversation about our work and your needs.",
  },
} as const;
