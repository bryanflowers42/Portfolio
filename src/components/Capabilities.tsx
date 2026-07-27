import { capabilities } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Reveal from "./Reveal";

export default function Capabilities() {
  return (
    <Section id="capabilities" tone="forest">
      <Shell>
        <SectionHeading index="03" eyebrow={capabilities.eyebrow} invert>
          {capabilities.heading}
        </SectionHeading>

        <div className="mt-12 grid gap-4 lg:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.groups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-panel border border-canvas/10 bg-forest-card/70 p-6">
                <h3 className="text-sm font-medium uppercase tracking-[0.06em] text-lime">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-canvas/15 px-3 py-1.5 text-xs text-canvas/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </Section>
  );
}
