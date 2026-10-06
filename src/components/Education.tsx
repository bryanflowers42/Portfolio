import { education } from "@/content/site";
import { Section, Shell } from "./Shell";
import Reveal from "./Reveal";
import Marked from "./Marked";

/* Education gets its own section, ahead of the job history: the UX
   background (cognitive science, then user centered development) is the
   foundation of how I work. */
export default function Education() {
  return (
    <Section id="education" tone="canvas" className="pb-0 sm:pb-0 lg:pb-0">
      <Shell>
        {/* Education: one campus photo behind the block, Block M up top */}
        <div className="relative overflow-hidden rounded-xl2 bg-[#00274C] text-canvas">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={education.background}
            alt={education.backgroundAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Michigan blue wash keeps the text readable over the photo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00274C]/95 via-[#00274C]/85 to-[#00274C]/60" aria-hidden />

          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-14">
            {/* left: the school */}
            <div className="flex items-center gap-5 lg:col-span-5 lg:flex-col lg:items-start lg:gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={education.logo}
                alt="University of Michigan Block M"
                className="h-14 w-auto sm:h-16 lg:h-28"
              />
              <div>
                <p className="font-display text-2xl leading-tight sm:text-3xl lg:text-4xl">
                  {education.school}
                </p>
                <p className="mt-1 text-sm text-canvas/70 lg:text-base">{education.campus}</p>
              </div>
            </div>

            {/* right: what I studied */}
            <div className="lg:col-span-7">
            <h3 className="font-display text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
              <Marked text={education.heading} invert />
            </h3>

            <div className="mt-6 grid gap-4">
              {education.schools.map((s, i) => (
                <Reveal key={s.degree} delay={i * 90} className="h-full">
                  <div className="h-full rounded-panel border border-canvas/15 bg-canvas/10 p-5 backdrop-blur-sm sm:p-6">
                    <p className="inline-flex rounded-full bg-sun px-3 py-1 text-xs font-medium text-[#00274C]">
                      {s.dates}
                    </p>
                    <p className="mt-4 font-display text-xl leading-snug tracking-[-0.01em]">
                      {s.degree}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-canvas/75">
                      {s.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            </div>
          </div>

          <span className="absolute bottom-2 right-3 text-[10px] text-canvas/60">
            {education.credit}
          </span>
        </div>
      </Shell>
    </Section>
  );
}
