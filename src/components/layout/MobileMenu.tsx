"use client";

import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { NavLinks } from "./NavLinks";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-control text-ink hover:bg-mist"
      >
        <span className="sr-only">{open ? "Close menu" : "Menu"}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 border-b border-border bg-white shadow-lg"
      >
        <nav aria-label="Main" className="px-5 pt-2 pb-6 md:px-8">
          <NavLinks
            items={site.nav}
            onNavigate={close}
            className="divide-y divide-border"
            linkClassName="flex min-h-12 items-center font-medium text-ink aria-[current=page]:text-cobalt"
          />
          <ButtonLink href={site.primaryAction.href} onClick={close} className="mt-6 w-full">
            {site.primaryAction.label}
          </ButtonLink>
        </nav>
      </div>
    </div>
  );
}
