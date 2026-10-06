import {
  experience,
  previousExperience,
  type Job,
} from "@/content/site";
import { Section, Shell, SectionHeading, Eyebrow } from "./Shell";
import Reveal from "./Reveal";

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
        <SectionHeading eyebrow={experience.eyebrow}>
          {experience.heading}
        </SectionHeading>

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

      </Shell>
    </Section>
  );
}
