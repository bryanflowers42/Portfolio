import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { Section, Shell, SectionHeading } from "./Shell";
import Media from "./Media";
import Reveal from "./Reveal";

export default function WorkGrid() {
  const items = featuredProjects();

  return (
    <Section id="work" tone="surface">
      <Shell>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="02" eyebrow="Selected work">
            Large-scale builds, from content architecture through launch.
          </SectionHeading>
          <p className="max-w-xs text-sm leading-relaxed text-ink/50">
            {items.length} projects. Click any card for the full breakdown.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 sm:grid-cols-2">
          {items.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 2) * 90}
              className={i === 0 ? "sm:col-span-2" : ""}
            >
              <Link
                href={`/work/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-panel border border-ink/[0.08] bg-canvas transition-all duration-300 ease-ruul hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_24px_48px_-28px_rgba(26,32,24,0.28)]"
              >
                <Media
                  src={p.cardImage}
                  alt={p.name}
                  label={`${p.name} — card image`}
                  ratio={i === 0 ? "21 / 9" : "16 / 10"}
                  rounded="rounded-none"
                  className="border-0 border-b border-ink/[0.08]"
                />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl tracking-[-0.01em] sm:text-2xl">
                      {p.name}
                    </h3>
                    {p.year && (
                      <span className="text-xs text-ink/35">{p.year}</span>
                    )}
                  </div>

                  <p className="mt-1 text-xs uppercase tracking-[0.06em] text-ink/40">
                    {p.discipline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-ink/65">
                    {p.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.scope.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-ink/[0.12] px-3 py-1 text-xs text-ink/55"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest">
                    View project
                    <span
                      className="transition-transform duration-300 ease-ruul group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Shell>
    </Section>
  );
}
