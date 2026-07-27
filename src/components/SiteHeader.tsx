"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, navCta, profile } from "@/content/site";
import Button from "./Button";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ease-ruul ${
        scrolled || open
          ? "border-b border-ink/[0.08] bg-canvas/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        {/* Wordmark — swap for an <img src="/images/logo.svg" /> when ready */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[11px] font-medium text-canvas">
            {profile.initials}
          </span>
          <span className="font-display text-lg leading-none tracking-[-0.01em]">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-[-0.01em] text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.resumeHref}
            className="text-sm tracking-[-0.01em] text-ink/70 transition-colors hover:text-ink"
          >
            Résumé
          </a>
          <Button href={navCta.href} variant="primary">
            {navCta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-[1.5px] w-4 bg-ink transition-transform duration-300 ease-ruul ${
                open ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-4 bg-ink transition-transform duration-300 ease-ruul ${
                open ? "top-[5px] -rotate-45" : "top-[11px]"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-ink/[0.08] bg-canvas transition-[max-height] duration-500 ease-ruul md:hidden ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="shell flex flex-col gap-1 py-5">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-card px-2 py-3 text-lg tracking-[-0.01em] text-ink/80 transition-colors hover:bg-canvas-muted hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.resumeHref}
            className="rounded-card px-2 py-3 text-lg tracking-[-0.01em] text-ink/80"
          >
            Résumé
          </a>
          <Button
            href={navCta.href}
            variant="primary"
            className="mt-3 w-full"
          >
            {navCta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
