import {
  experience,
  previousExperience,
  education,
  type Job,
} from "@/content/site";
import { Section, Shell, SectionHeading, Eyebrow } from "./Shell";
import Reveal from "./Reveal";
import { Squiggle } from "./Decor";
import Marked from "./Marked";

function JobRow({ job, delay = 0 }: { job: Job; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="grid gap-5 border-t border-ink/10 py-8 md:grid-cols-12 md:gap-8 md:py-10">
        <div className="md:col-span-4">
          <h3 className="font-display text-xl tracking-[-0.01em] sm:text-2xl">
            {job.role}
          </h3>
          <p className="mt-1.5 text-sm text-ink/60">{job.company}</p>
          <p className="mt-3 inline-flex rounded-full border border-ink/[0.12] px-3 py-1 text-xs text-ink/50">
            {job.start} to {job.end}
          </p>
        </div>

        <ul className="space-y-3.5 md:col-span-8">
          {job.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-sm leading-relaxed text-ink/70"
            >
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-navy"
                aria-hidden
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <Section id="experience" tone="canvas">
      <Shell>
        <div className="relative">
          <SectionHeading eyebrow={experience.eyebrow}>
            {experience.heading}
          </SectionHeading>
          <Squiggle
            variant="loop"
            className="absolute bottom-0 right-0 hidden h-20 w-52 text-azure md:block"
            strokeWidth={4}
          />
        </div>

        <ol className="mt-12 lg:mt-16">
          {experience.jobs.map((job, i) => (
            <li key={`${job.company}-${job.start}`}>
              <JobRow job={job} delay={i * 70} />
            </li>
          ))}
        </ol>

        {/* Previous employment */}
        {previousExperience.jobs.length > 0 && (
          <div id="previous" className="mt-16 scroll-mt-24">
            <Reveal>
              <div className="max-w-[672px]">
                <Eyebrow>{previousExperience.eyebrow}</Eyebrow>
                <h3 className="mt-4 font-display text-2xl tracking-[-0.01em] sm:text-3xl">
                  {previousExperience.heading}
                </h3>
              </div>
            </Reveal>

            <ol className="mt-8">
              {previousExperience.jobs.map((job, i) => (
                <li key={`${job.company}-${job.start}`}>
                  <JobRow job={job} delay={i * 70} />
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Education: one campus photo behind the block, Block M up top */}
        <div className="relative mt-16 overflow-hidden rounded-xl2 bg-[#00274C] text-canvas">
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
