import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Process from "@/components/Process";
import Spotlight from "@/components/Spotlight";
import WorkGrid from "@/components/WorkGrid";
import Capabilities from "@/components/Capabilities";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

/* Page order lives here. Reorder, comment out, or delete a line to change
   the shape of the home page — each section is self-contained. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <WorkGrid />
      <Spotlight />
      <Process />
      <Capabilities />
      <Stats />
      <Experience />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
