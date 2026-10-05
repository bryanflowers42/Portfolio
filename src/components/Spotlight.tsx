import { Blocks, Sprout, UsersRound, type LucideIcon } from "lucide-react";
import { spotlight } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Reveal from "./Reveal";
import { FlowLines } from "./Decor";

/* icon keys used by the About cards in content/site.ts */
const CARD_ICONS: Record<string, LucideIcon> = {
  team: UsersRound,
  mentor: Sprout,
  builder: Blocks,
};

/* About: why I do this, then three honest snapshots of the day job. */
export default function Spotlight() {
  return (
    <Section id="about" tone="dark" className="relative overflow-hidden">
      <FlowLines
        className="absolute inset-x-0 top-0 hidden h-[360px] w-full text-accent lg:block"
        opacity={0.18}
      />
      <Shell className="relative">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <SectionHeading
            index="03"
            eyebrow={spotlight.eyebrow}
            invert
            size="sm"
            className="lg:col-span-6"
          >
            {spotlight.heading}
          </SectionHeading>
          <p className="text-base leading-relaxed text-canvas/70 lg:col-span-6">
            {spotlight.body}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {spotlight.cards.map((card, i) => {
            const Icon = CARD_ICONS[card.icon] ?? UsersRound;
            return (
              <Reveal key={card.title} delay={i * 100}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-panel border border-canvas/12 bg-navy-card/70 p-7">
                  <span
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
                    aria-hidden
                  />
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-navy">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <p className="text-eyebrow uppercase text-accent">{card.label}</p>
                  </div>
                  <h3 className="relative mt-6 font-display text-2xl leading-snug tracking-[-0.01em] text-canvas">
                    {card.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-canvas/70">
                    {card.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Shell>
    </Section>
  );
}
