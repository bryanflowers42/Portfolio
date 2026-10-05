import { process } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Reveal from "./Reveal";
import { Squiggle } from "./Decor";

/* Five steps, read left to right on desktop and top to bottom on mobile. */
export default function Process() {
  return (
    <Section id="process" tone="mint" className="relative overflow-hidden">
      <Shell className="relative">
        <Squiggle
          variant="arrow"
          className="absolute -top-6 left-[46%] hidden h-28 w-36 text-leaf lg:block"
          strokeWidth={4}
        />
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="02" eyebrow={process.eyebrow}>
            {process.heading}
          </SectionHeading>
          <p className="max-w-xs text-sm leading-relaxed text-ink/60">
            {process.intro}
          </p>
        </div>

        <ol className="mt-12 grid gap-3 lg:mt-16 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step, i) => (
            <li key={step.number}>
              <Reveal delay={i * 80} className="h-full">
                <article className="flex h-full flex-col rounded-panel bg-canvas p-6 shadow-[0_18px_40px_-30px_rgba(0,62,57,0.45)] sm:p-7">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime font-display text-sm text-forest">
                    {step.number}
                  </span>
                  <h3 className="mt-8 font-display text-2xl tracking-[-0.01em] lg:mt-10">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Shell>
    </Section>
  );
}
