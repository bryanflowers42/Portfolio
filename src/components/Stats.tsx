import { stats } from "@/content/site";
import { Shell } from "./Shell";
import Reveal from "./Reveal";

/* Numbers over a mosaic of real project screenshots, under a navy wash. */
export default function Stats() {
  return (
    <div className="relative overflow-hidden bg-navy py-16 text-canvas sm:py-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/work/mosaic.jpg"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy/85" aria-hidden />

      <Shell className="relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="border-l border-canvas/20 pl-5 lg:pl-6">
                <p className="font-display text-5xl tracking-[-0.02em] text-accent sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-canvas/80">
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
