import type { ComponentProps } from "react";

/** Small uppercase label above a heading. Inter, not a numbered scientific label. */
export function Eyebrow({ className = "", ...props }: ComponentProps<"p">) {
  return (
    <p
      className={`text-label font-semibold tracking-[0.12em] text-teal-deep uppercase ${className}`}
      {...props}
    />
  );
}
