import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject, getNextProject } from "@/content/projects";
import { profile, work } from "@/content/site";
import { Shell, Eyebrow } from "@/components/Shell";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

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
    title: `${project.name} — ${project.discipline}`,
    description: project.summary,
    // hidden projects stay reachable by direct link but out of search results
    ...(project.hidden ? { robots: { index: false, follow: false } } : {}),
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);

  return (
    <>
      {/* header */}
      <section className="bg-forest pb-0 pt-14 text-canvas sm:pt-20">
        <Shell>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-canvas/55 transition-colors hover:text-lime"
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
              <div className="col-span-2">
                <dt className="text-eyebrow uppercase text-canvas/40">Role</dt>
                <dd className="mt-1.5 text-sm text-canvas/85">{project.role}</dd>
              </div>
              {project.year && (
                <div>
                  <dt className="text-eyebrow uppercase text-canvas/40">Year</dt>
                  <dd className="mt-1.5 text-sm text-canvas/85">{project.year}</dd>
                </div>
              )}
              {project.liveUrl && (
                <div>
                  <dt className="text-eyebrow uppercase text-canvas/40">Live</dt>
                  <dd className="mt-1.5 text-sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-lime underline-offset-4 hover:underline"
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
              alt={project.name}
              label={`${project.name} — hero image (1600×1000)`}
              ratio="16 / 10"
              tone="dark"
              rounded="rounded-t-xl2"
              className="translate-y-px shadow-[0_32px_80px_-32px_rgba(0,0,0,0.5)]"
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

      {/* overview + highlights */}
      <section className="bg-canvas py-16 sm:py-20 lg:py-24">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow index="01">Overview</Eyebrow>
              <p className="mt-6 font-display text-2xl leading-snug tracking-[-0.01em] sm:text-[28px]">
                {project.overview}
              </p>
            </div>

            <div className="lg:col-span-7">
              <Eyebrow index="02">What I did</Eyebrow>
              <ul className="mt-6">
                {project.highlights.map((h, i) => (
                  <Reveal key={h} delay={i * 70}>
                    <li className="flex gap-5 border-t border-ink/10 py-6 last:border-b">
                      <span className="mt-0.5 shrink-0 font-display text-sm text-ink/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base leading-relaxed text-ink/75">
                        {h}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Shell>
      </section>

      {/* gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-surface py-16 sm:py-20 lg:py-24">
          <Shell>
            <Eyebrow index="03">Gallery</Eyebrow>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {project.gallery.map((g, i) => (
                <Reveal
                  key={g.caption}
                  delay={(i % 2) * 80}
                  className={i === 0 ? "sm:col-span-2" : ""}
                >
                  <figure>
                    <Media
                      src={g.image}
                      alt={g.caption}
                      label={g.caption}
                      ratio={i === 0 ? "16 / 9" : "4 / 3"}
                    />
                    <figcaption className="mt-3 text-xs text-ink/45">
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
              className="group flex flex-col gap-6 rounded-panel border border-ink/[0.08] bg-surface p-7 transition-all duration-300 ease-ruul hover:border-ink/20 sm:flex-row sm:items-center sm:justify-between sm:p-10"
            >
              <div>
                <p className="text-eyebrow uppercase text-ink/40">
                  Next project
                </p>
                <p className="mt-3 font-display text-2xl tracking-[-0.01em] sm:text-3xl">
                  {next.name}
                </p>
                <p className="mt-1.5 text-sm text-ink/50">{next.discipline}</p>
              </div>
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-canvas transition-transform duration-300 ease-ruul group-hover:translate-x-1">
                <span aria-hidden>→</span>
              </span>
            </Link>

            <p className="mt-8 text-sm text-ink/50">
              Questions about this build?{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-forest underline underline-offset-4"
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
