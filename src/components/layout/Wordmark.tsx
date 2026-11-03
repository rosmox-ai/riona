import Link from "next/link";
import { site } from "@/content/site";

/** Text wordmark until a logo is supplied. The teal mark is decorative. */
export function Wordmark({ onInk = false }: { onInk?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap font-heading text-lg font-bold tracking-tight ${
        onInk ? "text-white" : "text-ink"
      }`}
    >
      <span aria-hidden="true" className="size-2.5 rounded-full bg-teal" />
      {site.name}
      <span className="sr-only">— home</span>
    </Link>
  );
}
