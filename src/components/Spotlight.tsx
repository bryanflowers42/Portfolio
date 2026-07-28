import { spotlight } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Reveal from "./Reveal";

/* The two things Bryan most wants front and centre: the senior client-facing
   role, and the master's degree behind how he works. */
export default function Spotlight() {
  return (
    <Section id="spotlight" tone="dark">
      <Shell>
        <SectionHeading index="02" eyebrow={spotlight.eyebrow} invert>
          {spotlight.heading}
        </SectionHeading>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {spotlight.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-panel border border-canvas/12 bg-forest-card/70 p-7 sm:p-9">
                <span
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime/10 blur-3xl"
                  aria-hidden
                />
                <p className="relative text-eyebrow uppercase text-lime">
                  {card.label}
                </p>
                <h3 className="relative mt-4 font-display text-2xl leading-snug tracking-[-0.01em] text-canvas sm:text-3xl">
                  {card.title}
                </h3>
                <p className="relative mt-5 text-sm leading-relaxed text-canvas/70">
                  {card.body}
                </p>
                <ul className="relative mt-7 flex flex-wrap gap-2 border-t border-canvas/10 pt-6">
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
