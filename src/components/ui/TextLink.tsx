import Link from "next/link";
import type { ComponentProps } from "react";

type TextLinkProps = ComponentProps<typeof Link> & { onInk?: boolean };

/** Inline call-to-action link with a trailing arrow. */
export function TextLink({ onInk = false, className = "", children, ...props }: TextLinkProps) {
  return (
    <Link
      className={`group inline-flex min-h-11 items-center gap-2 font-semibold underline-offset-4 hover:underline ${
        onInk ? "text-cobalt-light" : "text-cobalt"
      } ${className}`}
      {...props}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
