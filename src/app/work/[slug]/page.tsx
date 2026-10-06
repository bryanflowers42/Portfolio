import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject, getNextProject } from "@/content/projects";
import { profile, work } from "@/content/site";
import { Shell, Eyebrow } from "@/components/Shell";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Squiggle, FlowLines } from "@/components/Decor";

/* Every project in src/content/projects.ts gets a page automatically. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} case study`,
    description: project.summary,
    ...(project.heroImage ? { openGraph: { images: [project.heroImage] } } : {}),
    // hidden projects stay reachable by direct link but out of search results
    ...(project.hidden ? { robots: { index: false, follow: false } } : {}),
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);
  const gallery = (project.gallery ?? []).filter((g) => g.image);

  const facts = [
    { label: "Role", value: project.role },
    project.team && { label: "Team", value: project.team },
    project.year && { label: "Year", value: project.year },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      {/* header */}
      <section className="relative overflow-hidden bg-navy pb-0 pt-14 text-canvas sm:pt-20">
        <FlowLines
          className="absolute inset-x-0 top-6 h-[260px] w-full text-accent"
          opacity={0.22}
        />
        <Shell className="relative">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-canvas/55 transition-colors hover:text-accent"
          >
            <span aria-hidden>←</span> All work
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Eyebrow invert>{project.discipline}</Eyebrow>
              <h1 className="mt-5 text-display-sm text-canvas sm:text-[44px] lg:text-display-md">
                {project.name}
              </h1>
              <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-canvas/70">
                {project.summary}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 self-end lg:col-span-5">
              {facts.map((f) => (
                <div key={f.label} className={f.label === "Role" ? "col-span-2" : ""}>
                  <dt className="text-eyebrow uppercase text-canvas/40">{f.label}</dt>
                  <dd className="mt-1.5 text-sm text-canvas/85">{f.value}</dd>
                </div>
              ))}
              {project.liveUrl && (
                <div>
                  <dt className="text-eyebrow uppercase text-canvas/40">Live</dt>
                  <dd className="mt-1.5 text-sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      Visit site ↗
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="mt-12 sm:mt-14">
            <Media
              src={project.heroImage}
              alt={`${project.name} website`}
              label={project.name}
              ratio="16 / 10"
              tone="dark"
              rounded="rounded-t-xl2"
              className="translate-y-px border-0 shadow-[0_32px_80px_-32px_rgba(0,0,0,0.5)]"
              eager
            />
          </div>
        </Shell>
      </section>

      {/* scope chips */}
      <div className="border-b border-ink/[0.07] bg-canvas-muted py-6">
        <Shell>
          <ul className="flex flex-wrap gap-2">
            {project.scope.map((s) => (
              <li
                key={s}
                className="rounded-full border border-ink/[0.12] bg-canvas px-3.5 py-1.5 text-xs text-ink/60"
              >
                {s}
              </li>
            ))}
          </ul>
        </Shell>
      </div>

      {/* the brief */}
      <section className="bg-canvas py-16 sm:py-20 lg:py-24">
        <Shell>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>The brief</Eyebrow>
              <Squiggle variant="loop" className="mt-8 hidden h-16 w-44 text-azure lg:block" strokeWidth={4} />
            </div>
            <p className="font-display text-xl leading-snug tracking-[-0.01em] sm:text-2xl lg:col-span-8 lg:text-[28px]">
              {project.overview}
            </p>
          </div>
        </Shell>
      </section>

      {/* process, kickoff to launch */}
      <section className="bg-mist pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24">
        <Shell>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Process</Eyebrow>
              <h2 className="mt-5 font-display text-3xl tracking-[-0.01em] sm:text-4xl">
                Kickoff to launch
              </h2>
              <Squiggle variant="arrow" className="mt-6 hidden h-24 w-32 text-azure lg:block" strokeWidth={4} />
            </div>

            <ol className="relative lg:col-span-8">
              {/* the timeline rail */}
              <span
                className="absolute bottom-3 left-[15px] top-3 w-px bg-ink/10"
                aria-hidden
              />
              {project.process.map((step, i) => (
                <li key={step.stage} className="relative pb-10 pl-14 last:pb-0">
                  {/* the marker stays outside Reveal: Reveal's transform would
                      otherwise make it the containing block and shift the
                      marker off the rail */}
                  <span
                    className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs text-canvas ring-4 ring-mist"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <Reveal delay={i * 70}>
                    <h3 className="pt-1 font-display text-xl tracking-[-0.01em]">
                      {step.stage}
                    </h3>
                    <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-ink/65">
                      {step.body}
                    </p>
                    {step.image && (
                      <figure className="mt-6">
                        <Media
                          src={step.image}
                          alt={step.caption ?? step.stage}
                          ratio="16 / 10"
                        />
                        {step.caption && (
                          <figcaption className="mt-3 text-xs text-ink/45">
                            {step.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Shell>
      </section>

      {/* the result */}
      {gallery.length > 0 && (
        <section className="bg-surface py-16 sm:py-20 lg:py-24">
          <Shell>
            <Eyebrow>The result</Eyebrow>
            {/* two-column masonry: each screenshot keeps its own height */}
            <div className="mt-10 gap-6 sm:columns-2">
              {gallery.map((g, i) => (
                <Reveal key={g.caption} delay={(i % 2) * 80} className="mb-6 break-inside-avoid">
                  <figure>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={g.image as string}
                      alt={g.caption}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full rounded-card"
                    />
                    <figcaption className="mt-2.5 text-xs text-ink/45">
                      {g.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Shell>
        </section>
      )}

      {/* client-site disclaimer */}
      <div className="bg-canvas pt-14">
        <Shell>
          <p className="max-w-[70ch] border-l-2 border-ink/15 pl-4 text-xs leading-relaxed text-ink/45">
            {work.disclaimer}
          </p>
        </Shell>
      </div>

      {/* next project */}
      {next && (
        <section className="bg-canvas pb-4 pt-16 sm:pt-20">
          <Shell>
            <Link
              href={`/work/${next.slug}`}
              className="group grid items-center gap-6 overflow-hidden rounded-panel border border-ink/[0.08] bg-surface p-5 transition-all duration-300 ease-ruul hover:border-ink/20 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:p-6"
            >
              <div className="px-2 sm:px-4">
                <p className="text-eyebrow uppercase text-ink/40">Next project</p>
                <p className="mt-3 font-display text-2xl tracking-[-0.01em] sm:text-3xl">
                  {next.name}
                </p>
                <p className="mt-2 text-sm text-ink/55">{next.summary}</p>
                <span className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-canvas transition-transform duration-300 ease-ruul group-hover:translate-x-1">
                  <span aria-hidden>→</span>
                </span>
              </div>
              <Media
                src={next.cardImage}
                alt={`${next.name} project preview`}
                label={next.name}
                ratio="16 / 10"
                rounded="rounded-card"
                className="border-0"
              />
            </Link>

            <p className="mt-8 text-sm text-ink/50">
              Questions about this project?{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-navy underline underline-offset-4"
              >
                Email me
              </a>
              .
            </p>
          </Shell>
        </section>
      )}

      <CtaBand />
    </>
  );
}
