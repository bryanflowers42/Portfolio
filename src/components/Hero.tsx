import { hero } from "@/content/site";
import { Shell } from "./Shell";
import Button from "./Button";
import Media from "./Media";
import Reveal from "./Reveal";
import Marked from "./Marked";
import { FlowLines } from "./Decor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-canvas">
      {/* soft radial glow, as on ruul's hero */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-lime/10 blur-[120px]"
        aria-hidden
      />
      <FlowLines
        className="absolute inset-x-0 bottom-0 h-[220px] w-full text-lime sm:h-[280px]"
        opacity={0.3}
      />
      <Shell
        className={`relative pt-14 sm:pt-20 lg:pt-24 ${
          hero.image ? "pb-0" : "pb-20 sm:pb-24 lg:pb-28"
        }`}
      >
        <Reveal>
          <div className="mx-auto max-w-[860px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-canvas/20 bg-canvas/[0.06] px-4 py-1.5 text-xs tracking-[-0.01em] text-canvas/80">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden />
              {hero.chip}
            </span>

            <h1 className="mt-7 text-display-sm text-canvas sm:text-[48px] lg:text-display-lg">
              <Marked text={hero.heading} invert />
            </h1>

            <p className="mx-auto mt-6 max-w-[600px] text-base leading-relaxed text-canvas/70 sm:text-lg">
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
          </div>
        </Reveal>

        {hero.image && (
          <Reveal delay={120}>
            <div className="mx-auto mt-12 max-w-[940px] sm:mt-16">
              <Media
                src={hero.image}
                alt={hero.imageAlt}
                ratio="16 / 10"
                tone="dark"
                className="shadow-[0_32px_80px_-32px_rgba(0,0,0,0.55)]"
                rounded="rounded-t-xl2"
              />
            </div>
          </Reveal>
        )}
      </Shell>
    </section>
  );
}
