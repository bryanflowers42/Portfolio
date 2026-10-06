import { hero } from "@/content/site";
import { Shell } from "./Shell";
import Button from "./Button";
import Reveal from "./Reveal";
import Marked from "./Marked";

/* The hero sits on the same project mosaic as the stats band, so the work
   itself is the backdrop of the whole site. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-canvas">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/work/mosaic.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      {/* navy wash: darkest in the middle where the headline sits */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,42,74,0.94)_0%,rgba(11,42,74,0.86)_45%,rgba(11,42,74,0.72)_100%)]"
        aria-hidden
      />

      <Shell className="relative py-24 sm:py-32 lg:py-40">
        <Reveal>
          <div className="mx-auto max-w-[860px] text-center">
            <span className="inline-flex items-center rounded-full border border-canvas/25 bg-navy/60 px-4 py-1.5 text-xs tracking-[-0.01em] text-canvas/85 backdrop-blur">
              {hero.chip}
            </span>

            <h1 className="mt-7 text-display-sm text-canvas sm:text-[52px] lg:text-display-lg">
              <Marked text={hero.heading} invert />
            </h1>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href} variant="blue" className="w-full sm:w-auto">
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="light"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
