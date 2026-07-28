import { process } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Media from "./Media";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <Section id="process" tone="canvas">
      <Shell>
        <SectionHeading index="03" eyebrow={process.eyebrow}>
          {process.heading}
        </SectionHeading>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {process.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <article className="flex h-full flex-col rounded-panel border border-ink/[0.08] bg-surface p-6 transition-colors duration-300 ease-ruul hover:border-ink/20 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs text-canvas">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl tracking-[-0.01em]">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {step.body}
                </p>

                <ul className="mt-5 space-y-3 border-t border-ink/[0.08] pt-5">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink/70">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-forest"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Media
                    src={step.image}
                    label={`Step ${step.number} visual`}
                    ratio="4 / 3"
                    rounded="rounded-card"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </Shell>
    </Section>
  );
}
