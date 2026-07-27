import Link from "next/link";
import { profile, footer } from "@/content/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const socials = profile.socials.filter((s) => s.href);

  return (
    <footer className="bg-forest-dark text-canvas">
      <div className="shell py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-[11px] font-medium text-ink">
                {profile.initials}
              </span>
              <span className="font-display text-lg leading-none">
                {profile.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-canvas/60">
              {footer.blurb}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <p className="text-eyebrow uppercase text-canvas/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-canvas/70 transition-colors hover:text-lime"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-4">
            <p className="text-eyebrow uppercase text-canvas/40">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-canvas/70 transition-colors hover:text-lime"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="text-canvas/70 transition-colors hover:text-lime"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.websiteHref}
                  className="text-canvas/70 transition-colors hover:text-lime"
                >
                  {profile.website}
                </a>
              </li>
            </ul>

            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href as string}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-9 items-center rounded-full border border-canvas/20 px-4 text-xs text-canvas/70 transition-colors hover:border-lime hover:text-lime"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-canvas/10 pt-6 text-xs text-canvas/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
