import { spotlight } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Reveal from "./Reveal";
import { FlowLines } from "./Decor";

/* About: why I do this, then three honest snapshots of the day job. */
export default function Spotlight() {
  return (
    <Section id="about" tone="dark" className="relative overflow-hidden">
      <FlowLines
        className="absolute -right-40 top-0 hidden h-[340px] w-[900px] text-lime lg:block"
        opacity={0.18}
      />
      <Shell className="relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <SectionHeading index="03" eyebrow={spotlight.eyebrow} invert className="lg:col-span-7">
            {spotlight.heading}
          </SectionHeading>
          <p className="self-end text-base leading-relaxed text-canvas/70 lg:col-span-5">
            {spotlight.body}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {spotlight.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-panel border border-canvas/12 bg-forest-card/70 p-7">
                <span
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime/10 blur-3xl"
                  aria-hidden
                />
                <p className="relative text-eyebrow uppercase text-lime">
                  {card.label}
                </p>
                <h3 className="relative mt-4 font-display text-2xl leading-snug tracking-[-0.01em] text-canvas">
                  {card.title}
                </h3>
                <p className="relative mt-4 flex-1 text-sm leading-relaxed text-canvas/70">
                  {card.body}
                </p>
                <ul className="relative mt-6 flex flex-wrap gap-2 border-t border-canvas/10 pt-5">
                  {card.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-canvas/20 px-3 py-1.5 text-xs text-canvas/75"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Shell>
    </Section>
  );
}
