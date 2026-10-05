import { stats } from "@/content/site";
import { Shell } from "./Shell";
import Reveal from "./Reveal";

/* A bright accent band: the loudest bit of color on the page. */
export default function Stats() {
  return (
    <div className="bg-accent py-14 text-navy sm:py-16">
      <Shell>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="lg:border-l lg:border-navy/20 lg:pl-6">
                <p className="font-display text-5xl tracking-[-0.02em] sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy/75">
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
