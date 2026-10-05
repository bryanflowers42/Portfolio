"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, profile } from "@/content/site";
import { Mail, Phone } from "lucide-react";

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
        {/* Wordmark: just the name, set in the display serif */}
        <Link href="/" onClick={() => setOpen(false)}>
          <span className="font-display text-xl leading-none tracking-[-0.01em]">
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

        {/* email + phone as the header's two buttons; on mid-size screens
            they shrink to icons so the nav still fits */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.resumeHref}
            className="mr-2 text-sm font-medium tracking-[-0.01em] text-azure transition-colors hover:text-navy"
          >
            Résumé
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.email}`}
            title={profile.email}
            className={`${contactBtn} ${blueBtn}`}
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden xl:inline">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phoneHref}`}
            aria-label={`Call ${profile.phone}`}
            title={profile.phone}
            className={`${contactBtn} ${blueBtn}`}
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden xl:inline">{profile.phone}</span>
          </a>
        </div>

        {/* phones: email and phone stay one tap away beside the menu */}
        <div className="-mr-3 ml-auto flex items-center gap-2 md:hidden">
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.email}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full ${blueBtn}`}
          >
            <Mail className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={`tel:${profile.phoneHref}`}
            aria-label={`Call ${profile.phone}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full ${blueBtn}`}
          >
            <Phone className="h-4 w-4" aria-hidden />
          </a>
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
            className="rounded-card px-2 py-3 text-lg font-medium tracking-[-0.01em] text-azure"
          >
            Résumé
          </a>
          <a
            href={`mailto:${profile.email}`}
            className={`${contactBtn} ${blueBtn} mt-3 w-full justify-center`}
          >
            <Mail className="h-4 w-4" aria-hidden />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phoneHref}`}
            className={`${contactBtn} ${blueBtn} mt-2 w-full justify-center`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            {profile.phone}
          </a>
        </div>
      </div>
    </header>
  );
}

/* shared shape and color for the email / phone buttons (always the same blue) */
const blueBtn = "bg-azure text-white hover:bg-[#2F77E0]";
const contactBtn =
  "inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full px-3.5 text-sm font-medium tracking-[-0.01em] transition-all duration-300 ease-ruul xl:px-5";
