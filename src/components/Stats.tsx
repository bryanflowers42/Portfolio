import { stats } from "@/content/site";
import { Shell } from "./Shell";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <div className="border-y border-ink/[0.07] bg-canvas-muted py-14 sm:py-16">
      <Shell>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="lg:border-l lg:border-ink/10 lg:pl-6">
                <p className="font-display text-4xl tracking-[-0.02em] sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </div>
  );
}
