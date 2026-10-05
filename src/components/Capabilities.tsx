import { capabilities } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Reveal from "./Reveal";
import SkillIcon, { isLogo } from "./SkillIcon";
import { FlowLines } from "./Decor";

export default function Capabilities() {
  return (
    <Section id="skills" tone="navy" className="relative overflow-hidden">
      <FlowLines
        className="absolute inset-x-0 top-10 h-[300px] w-full text-accent"
        opacity={0.14}
      />
      <Shell className="relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="05" eyebrow={capabilities.eyebrow} invert>
            {capabilities.heading}
          </SectionHeading>
          <p className="max-w-xs text-sm leading-relaxed text-canvas/65">
            {capabilities.intro}
          </p>
        </div>

        {/* logo wall: the platforms and tools I use most */}
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:mt-14">
          {capabilities.tools.map((tool, i) => (
            <li key={tool.label}>
              <Reveal delay={(i % 5) * 50} className="h-full">
                <div className="flex h-full flex-col items-center justify-center gap-3 rounded-panel bg-canvas px-3 py-5 text-center transition-transform duration-300 ease-ruul hover:-translate-y-1">
                  <SkillIcon icon={tool.icon} className="h-9 w-9" />
                  <span className="text-xs font-medium tracking-[-0.01em] text-ink/75">
                    {tool.label}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* everything else, grouped, each skill with its own icon */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.groups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-panel border border-canvas/10 bg-navy-card/70 p-6">
                <h3 className="text-sm font-medium uppercase tracking-[0.06em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3 text-sm text-canvas/85">
                      {/* real logos sit on a light tile so their brand colors read */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          isLogo(item.icon) ? "bg-canvas" : "bg-canvas/[0.08] text-accent"
                        }`}
                      >
                        <SkillIcon icon={item.icon} className={isLogo(item.icon) ? "h-5 w-5" : "h-4 w-4"} />
                      </span>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </Section>
  );
}
