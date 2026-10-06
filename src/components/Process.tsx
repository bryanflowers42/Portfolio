import { process } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Reveal from "./Reveal";

/* An editorial list rather than a row of identical cards: heading on the
   left, the steps reading down the right like notes. */
export default function Process() {
  return (
    <Section id="process" tone="mist">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow={process.eyebrow} size="sm">{process.heading}</SectionHeading>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/65">
                {process.intro}
              </p>
            </div>
          </div>

          <ol className="lg:col-span-8">
            {process.steps.map((step, i) => (
              <li key={step.number} className="border-t border-ink/10 last:border-b">
                <Reveal delay={i * 60}>
                  <div className="grid gap-2 py-7 sm:grid-cols-[4rem_10rem_1fr] sm:items-baseline sm:gap-6">
                    <span className="font-display text-lg text-royal">{step.number}</span>
                    <h3 className="font-display text-2xl tracking-[-0.01em]">{step.title}</h3>
                    <p className="text-base leading-relaxed text-ink/70">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Shell>
    </Section>
  );
}
