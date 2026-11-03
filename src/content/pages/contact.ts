// docs/content/11-contact-and-safety.md and the shared form copy in 01-global.md.
export const contact = {
  meta: {
    title: "Contact",
    description: "Tell Riona Life Science what you are looking for and start a conversation.",
  },
  hero: {
    eyebrow: "Contact",
    title: "How can we help?",
    lead: "Tell us what you are looking for and start a conversation with Riona.",
  },
  form: {
    title: "Send an enquiry",
    topics: ["Business enquiry", "General enquiry"],
    labels: {
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      topic: "Topic",
      message: "Message",
    },
    submit: "Send enquiry",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      message: "Please add a message.",
      summary: "Please check the following:",
    },
    status: {
      sending: "Sending…",
      success: "Thank you. Your enquiry has been received.",
      failure: "Your enquiry could not be sent. Please try again.",
      demo: "This is a design preview. Your information has not been submitted.",
    },
    noticeNote: "Approved purpose, retention and privacy notice for this form goes here.",
  },
  details: {
    title: "Contact details",
    editorialNote:
      "Verified email, business phone and office address appear here once approved. Unavailable fields are omitted.",
  },
} as const;
