import { logos } from "@/content/site";
import { Shell } from "./Shell";

export default function LogoMarquee() {
  const items = [...logos.items, ...logos.items]; // duplicated for the loop

  return (
    <div className="border-b border-ink/[0.07] bg-canvas py-10 sm:py-12">
      <Shell>
        <p className="text-center text-xs tracking-[-0.01em] text-ink/40">
          {logos.heading}
        </p>
      </Shell>

      <div className="marquee-mask mt-7 overflow-hidden">
        <ul className="animate-marquee flex w-max items-center gap-10 sm:gap-14">
          {items.map((logo, i) => (
            <li key={`${logo.name}-${i}`} aria-hidden={i >= logos.items.length}>
              {logo.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-7 w-auto object-contain opacity-60 grayscale sm:h-8"
                />
              ) : (
                <span className="whitespace-nowrap font-display text-lg text-ink/35 sm:text-xl">
                  {logo.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
