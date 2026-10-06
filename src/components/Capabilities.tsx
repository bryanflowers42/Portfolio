import { capabilities } from "@/content/site";
import { Section, Shell, SectionHeading } from "./Shell";
import Reveal from "./Reveal";
import SkillIcon, { isLogo } from "./SkillIcon";

export default function Capabilities() {
  return (
    <Section id="skills" tone="navy" className="relative overflow-hidden">
      <Shell className="relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={capabilities.eyebrow} invert>
            {capabilities.heading}
          </SectionHeading>
          <p className="max-w-xs text-sm leading-relaxed text-canvas/65">
            {capabilities.intro}
          </p>
        </div>

        {/* logo wall: the platforms and tools I use most */}
        <ul className="mt-12 grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:mt-14 lg:grid-cols-7">
          {capabilities.tools.map((tool, i) => (
            <li key={tool.label}>
              <Reveal delay={(i % 7) * 50} className="h-full">
                <div className="flex h-full flex-col items-center justify-center gap-2.5 rounded-panel bg-canvas px-2 py-4 text-center sm:gap-3 sm:px-3 sm:py-5">
                  <SkillIcon icon={tool.icon} className="h-8 w-8 sm:h-9 sm:w-9" />
                  <span className="text-[11px] font-medium leading-tight tracking-[-0.01em] text-ink/75 sm:text-xs">
                    {tool.label}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* everything else: one panel, the same width as the logo wall, with
            a row per group (title on the left, pills on the right) so there's
            no dead space and it reads top to bottom like a spec sheet */}
        <Reveal>
          <div className="mt-3 overflow-hidden rounded-panel border border-canvas/10 bg-navy-card/70">
            <ul className="divide-y divide-canvas/10">
              {capabilities.groups.map((group) => (
                <li
                  key={group.title}
                  className="grid gap-3 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-6 sm:px-6"
                >
                  <h3 className="text-xs font-medium uppercase tracking-[0.08em] text-sun">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-canvas py-1 pl-1.5 pr-3 text-xs font-medium text-ink/85"
                      >
                        <span className="flex h-5 w-5 items-center justify-center text-azure">
                          <SkillIcon icon={item.icon} className={isLogo(item.icon) ? "h-4 w-4" : "h-3.5 w-3.5"} />
                        </span>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Shell>
    </Section>
  );
}
