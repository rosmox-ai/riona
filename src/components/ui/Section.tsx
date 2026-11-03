import type { ComponentProps } from "react";
import { Container } from "./Container";

type Tone = "white" | "mist" | "tint" | "ink";

const tones: Record<Tone, string> = {
  white: "bg-white",
  mist: "bg-mist",
  tint: "bg-cobalt-tint",
  ink: "surface-ink bg-ink text-white/80 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white",
};

type SectionProps = ComponentProps<"section"> & {
  tone?: Tone;
  containerClassName?: string;
};

export function Section({
  tone = "white",
  className = "",
  containerClassName = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section className={`py-section ${tones[tone]} ${className}`} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
