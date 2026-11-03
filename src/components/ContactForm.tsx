"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { contact } from "@/content/pages/contact";
import { Button } from "@/components/ui/Button";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "success" | "failure" | "demo";

const copy = contact.form;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!String(data.get("name") ?? "").trim()) errors.name = copy.errors.name;
  if (!EMAIL_PATTERN.test(String(data.get("email") ?? "").trim())) errors.email = copy.errors.email;
  if (!String(data.get("message") ?? "").trim()) errors.message = copy.errors.message;
  return errors;
}

const controlClass =
  "mt-2 block w-full rounded-control border border-control bg-white px-4 py-3 text-ink transition-colors duration-150 hover:border-ink aria-invalid:border-error";

/**
 * Enquiry form. In previews it validates but never sends; live sending needs
 * `site.forms.enquiryEndpoint`, and success is shown only after the server accepts.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [attempt, setAttempt] = useState(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const endpoint = site.forms.enquiryEndpoint;

  // Move focus to the error summary after each failed submission, once it has rendered.
  useEffect(() => {
    if (attempt > 0) summaryRef.current?.focus();
  }, [attempt]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      setAttempt((count) => count + 1);
      return;
    }

    if (site.isPreview || !endpoint) {
      setStatus("demo");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("failure");
    }
  }

  const errorEntries = Object.entries(errors) as [Field, string][];
  const describedBy = (field: Field) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6" aria-labelledby="enquiry-form-title">
      <h2 id="enquiry-form-title" className="text-card">
        {copy.title}
      </h2>

      {errorEntries.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          className="rounded-control border border-error/40 bg-error/5 px-5 py-4 text-error"
        >
          <p className="font-semibold">{copy.errors.summary}</p>
          <ul className="mt-2 list-disc pl-5">
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                <a href={`#${field}`} className="underline underline-offset-2">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-medium text-ink">
            {copy.labels.name}
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required
            aria-invalid={errors.name ? true : undefined} aria-describedby={describedBy("name")} className={controlClass} />
          {errors.name && <p id="name-error" className="mt-2 text-label text-error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="font-medium text-ink">
            {copy.labels.email}
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required
            aria-invalid={errors.email ? true : undefined} aria-describedby={describedBy("email")} className={controlClass} />
          {errors.email && <p id="email-error" className="mt-2 text-label text-error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="company" className="font-medium text-ink">
            {copy.labels.company}
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={controlClass} />
        </div>

        <div>
          <label htmlFor="topic" className="font-medium text-ink">
            {copy.labels.topic}
          </label>
          <select id="topic" name="topic" className={`${controlClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%230a1a2f%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:1.25rem] bg-[position:right_1rem_center] bg-no-repeat pr-12`}>
            {copy.topics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-medium text-ink">
          {copy.labels.message}
        </label>
        <textarea id="message" name="message" rows={6} required
          aria-invalid={errors.message ? true : undefined} aria-describedby={describedBy("message")} className={controlClass} />
        {errors.message && <p id="message-error" className="mt-2 text-label text-error">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "sending"} className="disabled:opacity-60">
          {status === "sending" ? copy.status.sending : copy.submit}
        </Button>
        <p role="status" className="text-label font-medium">
          {status === "demo" && <span className="text-ink">{copy.status.demo}</span>}
          {status === "success" && <span className="text-teal-deep">{copy.status.success}</span>}
          {status === "failure" && <span className="text-error">{copy.status.failure}</span>}
        </p>
      </div>
    </form>
  );
}
