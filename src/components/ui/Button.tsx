import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "on-ink";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-control px-6 text-[0.9375rem] font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-cobalt text-white hover:bg-cobalt-hover",
  secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-mist",
  "on-ink": "bg-white text-ink hover:bg-cobalt-tint",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, className)} {...props} />;
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({ variant, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />;
}
