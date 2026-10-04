import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Spotlight from "@/components/Spotlight";
import Experience from "@/components/Experience";
import Capabilities from "@/components/Capabilities";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";

/* Page order lives here. Reorder, comment out, or delete a line to change
   the shape of the home page — each section is self-contained.
   Also available: LogoMarquee, Faq. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <Process />
      <Stats />
      <Spotlight />
      <Experience />
      <Capabilities />
      <Testimonials />
      <CtaBand />
    </>
  );
}
