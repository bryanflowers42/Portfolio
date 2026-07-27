import { Shell } from "@/components/Shell";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-forest py-24 text-canvas sm:py-32">
      <Shell>
        <div className="mx-auto max-w-[560px] text-center">
          <p className="text-eyebrow uppercase text-lime">404</p>
          <h1 className="mt-5 text-display-sm sm:text-display-md">
            That page doesn&rsquo;t exist.
          </h1>
          <p className="mt-5 text-canvas/70">
            The link may be out of date. The work is all one click away.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" variant="lime">
              Back home
            </Button>
            <Button href="/#work" variant="outlineLight">
              See selected work
            </Button>
          </div>
        </div>
      </Shell>
    </section>
  );
}
