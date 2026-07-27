import { hero, profile } from "@/content/site";
import { Shell } from "./Shell";
import Button from "./Button";
import Media from "./Media";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-canvas">
      {/* soft radial glow, as on ruul's hero */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-lime/10 blur-[120px]"
        aria-hidden
      />
      <Shell className="relative pb-0 pt-14 sm:pt-20 lg:pt-24">
        <Reveal>
          <div className="mx-auto max-w-[860px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-canvas/20 bg-canvas/[0.06] px-4 py-1.5 text-xs tracking-[-0.01em] text-canvas/80">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden />
              {hero.chip}
            </span>

            <h1 className="mt-7 text-display-sm text-canvas sm:text-[44px] lg:text-display-lg">
              {hero.heading}
            </h1>

            <p className="mx-auto mt-6 max-w-[620px] text-base leading-relaxed text-canvas/70 sm:text-lg">
              {hero.body}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href} variant="lime" className="w-full sm:w-auto">
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="outlineLight"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-6 text-xs text-canvas/45">{hero.ticker}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-[940px] sm:mt-16">
            <Media
              src={hero.image}
              alt={hero.imageAlt}
              label="Hero visual — 1600×1000 recommended"
              ratio="16 / 10"
              tone="dark"
              className="shadow-[0_32px_80px_-32px_rgba(0,0,0,0.55)]"
              rounded="rounded-t-xl2"
            />
          </div>
        </Reveal>
      </Shell>

      {/* quick contact strip */}
      <div className="border-t border-canvas/10 bg-forest-dark">
        <Shell className="flex flex-col items-center justify-between gap-2 py-4 text-xs text-canvas/50 sm:flex-row">
          <p>{profile.title} — {profile.location}</p>
          <p className="flex items-center gap-4">
            <a className="transition-colors hover:text-lime" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="transition-colors hover:text-lime" href={`tel:${profile.phoneHref}`}>
              {profile.phone}
            </a>
          </p>
        </Shell>
      </div>
    </section>
  );
}
