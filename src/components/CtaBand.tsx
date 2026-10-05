import { cta } from "@/content/site";
import { Shell } from "./Shell";
import Button from "./Button";
import { FlowLines } from "./Decor";

export default function CtaBand() {
  return (
    <div id="contact" className="scroll-mt-24 bg-canvas py-16 sm:py-20 lg:py-24">
      <Shell>
        <div className="relative overflow-hidden rounded-xl2 bg-navy px-6 py-14 text-center text-canvas sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]"
            aria-hidden
          />
          <FlowLines
            className="absolute inset-x-0 bottom-0 h-[200px] w-full text-accent"
            opacity={0.22}
          />
          <div className="relative mx-auto max-w-[620px]">
            <h2 className="text-balance pb-1 text-display-sm leading-[1.15] lg:text-[44px]">{cta.heading}</h2>
            <p className="mt-5 text-base text-canvas/70">{cta.body}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={cta.primary.href} variant="accent" className="w-full sm:w-auto">
                {cta.primary.label}
              </Button>
              <Button
                href={cta.secondary.href}
                variant="outlineLight"
                className="w-full sm:w-auto"
              >
                {cta.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Shell>
    </div>
  );
}
