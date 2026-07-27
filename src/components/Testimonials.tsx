import { testimonials } from "@/content/site";
import { Shell, Eyebrow } from "./Shell";
import Reveal from "./Reveal";

export default function Testimonials() {
  if (!testimonials.length) return null; // empty the array in site.ts to hide

  return (
    <div className="bg-canvas py-16 sm:py-20 lg:py-24">
      <Shell>
        <Eyebrow index="06">What people say</Eyebrow>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 80}>
              <figure className="flex h-full flex-col justify-between rounded-panel border border-ink/[0.08] bg-surface p-6 sm:p-7">
                <blockquote className="font-display text-lg leading-snug tracking-[-0.01em] text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/[0.08] pt-5">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="mt-0.5 text-xs text-ink/45">{t.org}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Shell>
    </div>
  );
}
