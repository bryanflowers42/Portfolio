import { cta } from "@/content/site";
import { Shell } from "./Shell";
import Button from "./Button";

export default function CtaBand() {
  return (
    <div id="contact" className="scroll-mt-24 bg-canvas py-16 sm:py-20 lg:py-24">
      <Shell>
        <div className="relative overflow-hidden rounded-xl2 bg-forest px-6 py-14 text-center text-canvas sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-lime/10 blur-[110px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-[620px]">
            <h2 className="text-display-sm lg:text-[44px]">{cta.heading}</h2>
            <p className="mt-5 text-base text-canvas/70">{cta.body}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={cta.primary.href} variant="lime" className="w-full sm:w-auto">
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
