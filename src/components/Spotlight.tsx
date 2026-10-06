import { Blocks, Sprout, UsersRound, type LucideIcon } from "lucide-react";
import { profile, spotlight } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Reveal from "./Reveal";
import { Squiggle } from "./Decor";

/* icon keys used by the About cards in content/site.ts */
const CARD_ICONS: Record<string, LucideIcon> = {
  team: UsersRound,
  mentor: Sprout,
  builder: Blocks,
};

/* About comes right after the hero: a real photo, who I am and why I do
   this, then three honest snapshots of the day job. */
export default function Spotlight() {
  return (
    <Section id="about" tone="canvas" className="relative overflow-hidden">
      <Shell className="relative">
        <div className="grid items-center gap-8 md:grid-cols-12 lg:gap-14">
          <Reveal className="md:col-span-5 lg:col-span-4">
            <div className="relative mx-auto max-w-[340px] md:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bryan.jpg"
                alt={`${profile.name}, smiling, in a suit and tie`}
                className="aspect-square w-full rounded-xl2 object-cover shadow-[0_30px_60px_-34px_rgba(11,42,74,0.6)]"
              />
              <Squiggle
                variant="loop"
                className="absolute -bottom-8 -right-6 h-16 w-40 text-sun"
                strokeWidth={5}
              />
            </div>
          </Reveal>

          <div className="md:col-span-7 lg:col-span-8">
            <SectionHeading eyebrow={spotlight.eyebrow} size="sm">
              {spotlight.heading}
            </SectionHeading>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-ink/70">
              {spotlight.body}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {spotlight.cards.map((card, i) => {
            const Icon = CARD_ICONS[card.icon] ?? UsersRound;
            return (
              <Reveal key={card.title} delay={i * 100}>
                <article className="flex h-full flex-col rounded-panel bg-mist p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-royal text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <p className="text-eyebrow uppercase text-royal">{card.label}</p>
                  </div>
                  <h3 className="mt-6 font-display text-2xl leading-snug tracking-[-0.01em]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
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
