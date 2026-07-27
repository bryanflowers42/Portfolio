/* ==========================================================================
   PROJECTS — EDIT THIS FILE TO ADD / CHANGE CASE STUDIES
   --------------------------------------------------------------------------
   Each project here automatically appears in the "Selected work" grid on the
   home page AND gets its own page at /work/<slug>. To add a project, copy an
   existing object, change the fields, and you're done — no routing to wire up.

   Images: leave null for a placeholder. Real images go in /public/images/.
   ========================================================================== */

export type Project = {
  slug: string;              // becomes the URL: /work/<slug>
  name: string;
  discipline: string;        // small label under the name
  year?: string;
  featured: boolean;         // false = hidden from the home grid, page still exists
  summary: string;           // one-liner used on the card
  role: string;
  scope: string[];           // small "fact" chips on the detail page
  overview: string;          // opening paragraph on the detail page
  highlights: string[];      // bullet points (straight from the résumé)
  cardImage?: string | null;
  heroImage?: string | null;
  gallery?: { image: string | null; caption: string }[];
  liveUrl?: string | null;
};

export const projects: Project[] = [
  {
    slug: "dryforce",
    name: "DryForce",
    discipline: "WordPress Web Design & Development",
    year: "2025",
    featured: true,
    summary:
      "A 100+ page WordPress build with content architecture coordinated across a five-designer team.",
    role: "Lead Designer & Build Architect",
    scope: ["100+ pages", "Team of 5", "WordPress", "Content architecture"],
    overview:
      "DryForce was a large-scale WordPress project where the hard part was structure, not styling. I led the build, defined how 100+ pages of content would be organized and templated, and kept a team of five designers executing consistently against that system.",
    highlights: [
      "Led the build of a 100+ page WordPress site, coordinating content architecture and structure across a complex, large-scale project.",
      "Designed the full site experience and delivered targeted recommendations that shaped the quality and direction of the final product.",
      "Supervised a team of 5 web designers, maintaining consistent execution and keeping the build on schedule.",
    ],
    cardImage: null,
    heroImage: null,
    gallery: [
      { image: null, caption: "Home page — desktop" },
      { image: null, caption: "Service template — desktop" },
      { image: null, caption: "Mobile views" },
    ],
    liveUrl: null,
  },
  {
    slug: "next-door-and-window",
    name: "Next Door and Window",
    discipline: "WordPress Web Design & Development",
    year: "2025",
    featured: true,
    summary:
      "200+ pages and landing pages — one of the agency's largest builds — designed from scratch and co-led with a team of three.",
    role: "Lead Designer & Technical Direction",
    scope: ["200+ pages", "Team of 3+", "Conversion-first", "Scalable templates"],
    overview:
      "One of the largest builds the agency has taken on. I designed the site from scratch, co-led the design team, and provided the technical direction that kept a 200+ page build scalable and fast instead of unwieldy.",
    highlights: [
      "Designed the site from scratch and co-led a team of 3+ designers to build 200+ pages and landing pages, one of the agency's largest builds.",
      "Built landing pages with a conversion-first approach, positioning each page to support campaign performance and marketing goals.",
      "Provided key technical direction throughout, delivering a scalable, high-performance build that met client and agency standards.",
    ],
    cardImage: null,
    heroImage: null,
    gallery: [
      { image: null, caption: "Landing page system" },
      { image: null, caption: "Product detail template" },
      { image: null, caption: "Mobile navigation" },
    ],
    liveUrl: null,
  },
  {
    slug: "american-sports-construction",
    name: "American Sports Construction",
    discipline: "WordPress Web Design & Development",
    year: "2024",
    featured: true,
    summary:
      "A new site for a $25M+ revenue company, built to a full ADA-compliance and web-vitals benchmark the agency carried forward.",
    role: "Designer, Developer & Client Lead",
    scope: ["$25M+ revenue client", "ADA compliant", "Strong web vitals", "Stakeholder lead"],
    overview:
      "A ground-up rebuild for a company whose old site didn't reflect its scale. Alongside design and development I owned client communication with a prominent stakeholder, and the accessibility and performance standard set here became the benchmark for later agency builds.",
    highlights: [
      "Designed and built a new website for a $25M+ revenue company, delivering a polished presence that matched the scale of their business.",
      "Managed client communication and design expectations, keeping a prominent stakeholder aligned and confident at every stage.",
      "Ensured full ADA compliance and strong web vitals, setting a quality benchmark carried into future agency builds.",
    ],
    cardImage: null,
    heroImage: null,
    gallery: [
      { image: null, caption: "Home page — desktop" },
      { image: null, caption: "Project portfolio template" },
      { image: null, caption: "Accessibility audit results" },
    ],
    liveUrl: null,
  },
  {
    slug: "sunrise-kitchen",
    name: "Sunrise Kitchen",
    discipline: "WordPress Web Design & Development",
    year: "2024",
    featured: true,
    summary:
      "A warm, visually distinct site for a local breakfast brand — designed and built solo, concept through launch.",
    role: "Sole Designer & Developer",
    scope: ["Solo build", "Brand-led design", "Responsive", "WordPress"],
    overview:
      "A small local brand with a lot of personality and no web presence to match. I built the whole thing myself in WordPress, leaning into their identity rather than dropping them into a generic restaurant template.",
    highlights: [
      "Partnered with a local breakfast brand to build a warm, visually distinct online presence rooted in their personality and identity.",
      "Designed and built the site personally from scratch in WordPress, owning every aspect from concept through launch.",
      "Delivered a responsive, visually driven build that gave a small local business a standout web presence.",
    ],
    cardImage: null,
    heroImage: null,
    gallery: [
      { image: null, caption: "Home page — desktop" },
      { image: null, caption: "Menu page" },
      { image: null, caption: "Mobile views" },
    ],
    liveUrl: null,
  },
  {
    slug: "ux-mesh",
    name: "UX Mesh",
    discipline: "UX Research, Strategy & Web Design",
    year: "2023",
    featured: true,
    summary:
      "Website design and build for an early-stage startup, plus the research program that shaped its product direction.",
    role: "UX Researcher & Designer",
    scope: ["Startup 0→1", "User interviews", "Surveys", "UX strategy"],
    overview:
      "A part-time role that covered both ends of the work: building the startup's website to give it credibility, and running the research that told the team what to build next.",
    highlights: [
      "Designed and built the startup's WordPress website, establishing a credible online presence for the early-stage company.",
      "Ran surveys and user interviews, translating findings into actionable design and product recommendations.",
      "Contributed ongoing UX strategy, aligning research insights with business goals to shape the product's direction.",
    ],
    cardImage: null,
    heroImage: null,
    gallery: [
      { image: null, caption: "Marketing site — desktop" },
      { image: null, caption: "Research synthesis" },
    ],
    liveUrl: null,
  },
];

/* helpers used by the pages — no need to edit below this line */

export const featuredProjects = () => projects.filter((p) => p.featured);

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const list = projects;
  const i = list.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return list[(i + 1) % list.length];
};
