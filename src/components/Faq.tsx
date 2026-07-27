import { faq, profile } from "@/content/site";
import { Shell } from "./Shell";
import Button from "./Button";

export default function Faq() {
  return (
    <div className="bg-forest-dark py-16 text-canvas sm:py-20 lg:py-24">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-display-sm lg:text-[42px]">{faq.heading}</h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`} variant="lime">
                Ask me directly
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Native <details> — no JS, keyboard accessible by default */}
            {faq.items.map((item) => (
              <details
                key={item.q}
                className="group border-b border-canvas/[0.12] py-5 first:border-t"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base tracking-[-0.01em] text-canvas marker:hidden">
                  <span>{item.q}</span>
                  <span
                    className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-canvas/25 transition-colors group-open:border-lime group-open:bg-lime group-open:text-ink"
                    aria-hidden
                  >
                    <span className="absolute h-[1.5px] w-3 bg-current" />
                    <span className="absolute h-3 w-[1.5px] bg-current transition-transform duration-300 ease-ruul group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-canvas/65">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Shell>
    </div>
  );
}
