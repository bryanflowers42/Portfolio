import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { work } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Media from "./Media";
import Reveal from "./Reveal";
import { Squiggle } from "./Decor";

/* Projects lead the page: big screenshots, very little text. */
export default function WorkGrid() {
  const items = featuredProjects();

  return (
    <Section id="work" tone="surface" className="bg-[linear-gradient(180deg,#EAF3DF_0%,#F1F4F0_520px)]">
      <Shell>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeading index="01" eyebrow={work.eyebrow}>
              {work.heading}
            </SectionHeading>
            <Squiggle variant="wave" className="mt-3 h-6 w-40 text-leaf" strokeWidth={4} />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink/50">
            {work.note}
          </p>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-10 lg:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90}>
              <Link href={`/work/${p.slug}`} className="group block">
                <div className="overflow-hidden rounded-panel shadow-[0_24px_48px_-32px_rgba(26,32,24,0.45)]">
                  <div className="transition-transform duration-700 ease-ruul group-hover:scale-[1.025]">
                    <Media
                      src={p.cardImage}
                      alt={`${p.name} project preview`}
                      label={p.name}
                      ratio="16 / 10"
                      rounded="rounded-none"
                      className="border-0"
                      eager={i < 3}
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl tracking-[-0.01em]">
                    {p.name}
                  </h3>
                  {p.year && <span className="text-xs text-ink/40">{p.year}</span>}
                </div>
                <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-ink/60">
                  {p.summary}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-forest">
                  See the process
                  <span
                    className="transition-transform duration-300 ease-ruul group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-14 max-w-[70ch] border-l-2 border-ink/15 pl-4 text-xs leading-relaxed text-ink/45">
          {work.disclaimer}
        </p>
      </Shell>
    </Section>
  );
}
