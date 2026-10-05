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
import { GraduationCap } from "lucide-react";

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
          <SectionHeading index="04" eyebrow={experience.eyebrow}>
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

        {/* Education: Michigan campus photos with each degree */}
        <div className="mt-16 rounded-xl2 bg-mist p-6 sm:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <Eyebrow>{education.eyebrow}</Eyebrow>
              <h3 className="mt-4 font-display text-3xl leading-tight tracking-[-0.01em] sm:text-4xl">
                <Marked text={education.heading} />
              </h3>
            </div>
            <GraduationCap className="hidden h-12 w-12 text-azure md:block" strokeWidth={1.5} aria-hidden />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {education.schools.map((s, i) => (
              <Reveal key={s.degree} delay={i * 90}>
                <figure className="group h-full overflow-hidden rounded-panel bg-canvas shadow-[0_18px_40px_-30px_rgba(11,42,74,0.45)]">
                  {s.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.image}
                        alt={s.imageAlt ?? s.school}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-ruul group-hover:scale-[1.03]"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-xs text-canvas backdrop-blur">
                        {s.dates}
                      </span>
                      {s.credit && (
                        <span className="absolute bottom-2 right-3 text-[10px] text-canvas/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
                          {s.credit}
                        </span>
                      )}
                    </div>
                  )}
                  <figcaption className="p-6">
                    <p className="text-eyebrow uppercase text-navy/70">
                      {s.school}
                    </p>
                    <p className="mt-2 font-display text-xl leading-snug tracking-[-0.01em]">
                      {s.degree}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {s.note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Shell>
    </Section>
  );
}
