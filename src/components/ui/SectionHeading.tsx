import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  title: ReactNode;
  eyebrow?: string;
  lead?: ReactNode;
  /** Heading level is independent of the visual size. */
  as?: "h1" | "h2" | "h3";
  size?: "display" | "title" | "section";
  align?: "start" | "center";
  id?: string;
  className?: string;
};

const sizes = {
  display: "text-display font-bold",
  title: "text-title font-bold",
  section: "text-section",
};

export function SectionHeading({
  title,
  eyebrow,
  lead,
  as: Heading = "h2",
  size = "section",
  align = "start",
  id,
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Heading id={id} className={sizes[size]}>
        {title}
      </Heading>
      {lead && (
        <p className={`measure mt-5 text-lead ${align === "center" ? "mx-auto" : ""}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
