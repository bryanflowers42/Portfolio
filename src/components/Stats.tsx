import { stats } from "@/content/site";
import { Shell } from "./Shell";
import Reveal from "./Reveal";

/* A bright lime band: the loudest bit of color on the page. */
export default function Stats() {
  return (
    <div className="bg-lime py-14 text-forest sm:py-16">
      <Shell>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="lg:border-l lg:border-forest/20 lg:pl-6">
                <p className="font-display text-5xl tracking-[-0.02em] sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-forest/75">
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
