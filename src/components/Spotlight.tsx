import { Blocks, Sprout, UsersRound, type LucideIcon } from "lucide-react";
import { spotlight } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Reveal from "./Reveal";
import { Squiggle } from "./Decor";

/* icon keys used by the About cards in content/site.ts */
const CARD_ICONS: Record<string, LucideIcon> = {
  team: UsersRound,
  mentor: Sprout,
  builder: Blocks,
};

/* About comes right after the hero: who I am, why I do this, and three
   honest snapshots of the day job. Light, so it doesn't stack two dark
   sections on top of each other. */
export default function Spotlight() {
  return (
    <Section id="about" tone="canvas" className="relative overflow-hidden">
      <Shell className="relative">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={spotlight.eyebrow} size="sm">
              {spotlight.heading}
            </SectionHeading>
            <Squiggle variant="wave" className="mt-3 h-6 w-40 text-azure" strokeWidth={4} />
          </div>
          <p className="text-base leading-relaxed text-ink/70 lg:col-span-6">
            {spotlight.body}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-5">
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
