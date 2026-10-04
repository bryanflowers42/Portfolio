/* ==========================================================================
   PROJECTS — EDIT THIS FILE TO ADD / CHANGE CASE STUDIES
   --------------------------------------------------------------------------
   Each project here automatically appears in the "Selected work" grid on the
   home page AND gets its own page at /work/<slug>. To add a project, copy an
   existing object, change the fields, and you're done — no routing to wire up.

   VISIBILITY
     featured: true   → shows in the home page work grid
     hidden:   true   → removed from the grid, the next-project links, and the
                        sitemap, and marked noindex. The page still exists at
                        /work/<slug> if you share the link directly.

   PROCESS
     The case study page is built around `process` — one entry per stage,
     kickoff to launch. Each step can take an optional image (a sitemap,
     wireframe, Figma frame…) and caption; steps without one show text only.

   Images live in /public/images/. Screenshots of the live sites are in
   /public/images/work/.
   ========================================================================== */

export type ProcessStep = {
  stage: string;             // "Discover", "Plan", "Design", "Build", "Launch"
  body: string;              // one or two plain sentences
  image?: string | null;     // optional artifact for this stage
  caption?: string;
};

export type Project = {
  slug: string;              // becomes the URL: /work/<slug>
  name: string;
  discipline: string;        // small label under the name
  year?: string;
  featured: boolean;         // show in the home page grid
  hidden?: boolean;          // unreachable from the site, but page still builds
  summary: string;           // one-liner used on the card
  role: string;
  team?: string;
  scope: string[];           // small "fact" chips on the detail page
  overview: string;          // "The brief" on the detail page
  process: ProcessStep[];
  cardImage?: string | null;
  heroImage?: string | null;
  gallery?: { image: string | null; caption: string }[];
  liveUrl?: string | null;
};

export const projects: Project[] = [
  {
    slug: "next-door-and-window",
    name: "Next Door & Window",
    discipline: "Web design & WordPress build",
    year: "2025",
    featured: true,
    summary:
      "200+ pages for a window and door company. One of the agency's largest builds.",
    role: "Lead designer, technical direction",
    team: "3 designers",
    scope: ["200+ pages", "Landing pages", "Scalable templates", "WordPress"],
    overview:
      "Next Door & Window replaces windows and doors across Chicago, St. Louis, and Madison. They needed a site that could hold hundreds of service and landing pages and still feel like one brand. I designed it from scratch and co-led the team that built it.",
    process: [
      {
        stage: "Plan",
        body: "Mapped out a template system that could scale past 200 pages and landing pages without slowing the site down.",
      },
      {
        stage: "Design",
        body: "Designed the site from scratch. Every landing page was laid out conversion-first, to support the client's ad campaigns.",
      },
      {
        stage: "Build",
        body: "Co-led a team of three designers through the build and handled the technical direction.",
      },
      {
        stage: "Launch",
        body: "Shipped a fast, scalable site that met both the client's and the agency's standards.",
      },
    ],
    cardImage: "/images/work/next-door-and-window-cover.jpg",
    heroImage: "/images/work/next-door-and-window-cover.jpg",
    gallery: [
      { image: "/images/work/next-door-and-window-01.jpg", caption: "Feature section with annotated product benefits" },
      { image: "/images/work/next-door-and-window-02.jpg", caption: "Three-step process section" },
      { image: "/images/work/next-door-and-window-03.jpg", caption: "About section" },
      { image: "/images/work/next-door-and-window-04.jpg", caption: "Window styles carousel" },
    ],
    liveUrl: "https://nextdoorandwindow.com/",
  },
  {
    slug: "dryforce",
    name: "DryForce",
    discipline: "Web design & WordPress build",
    year: "2025",
    featured: true,
    summary:
      "A 100+ page site for a Texas water damage restoration company, built with a team of five.",
    role: "Lead designer, build lead",
    team: "5 designers",
    scope: ["100+ pages", "Team of 5", "Content architecture", "WordPress"],
    overview:
      "DryForce handles water damage restoration across Dallas, Houston, Austin, and San Antonio. The challenge was size: dozens of services and cities, all needing their own pages. I designed the site, planned how the content fit together, and led the build.",
    process: [
      {
        stage: "Plan",
        body: "Organized 100+ pages of services and locations into a small set of templates, so the team could build fast and stay consistent.",
      },
      {
        stage: "Design",
        body: "Designed the full site experience and made the calls that set the direction for the final product.",
      },
      {
        stage: "Build",
        body: "Led five designers through the build, reviewing their work to keep every page consistent.",
      },
      {
        stage: "Launch",
        body: "Kept the project on schedule from first template to launch.",
      },
    ],
    cardImage: "/images/work/dryforce-cover.jpg",
    heroImage: "/images/work/dryforce-cover.jpg",
    gallery: [
      { image: "/images/work/dryforce-01.jpg", caption: "Restoration process section" },
      { image: "/images/work/dryforce-02.jpg", caption: "Experience and trust section" },
      { image: "/images/work/dryforce-03.jpg", caption: "Results section" },
      { image: "/images/work/dryforce-04.jpg", caption: "Response-time section" },
    ],
    liveUrl: "https://dryforcecorp.com/",
  },
  {
    slug: "sun-solar-solutions",
    name: "Sun Solar Solutions",
    discipline: "Web design & WordPress build",
    year: "2025",
    featured: true,
    summary:
      "A ground-up site for a solar installer working across four states.",
    role: "Designer, developer, client contact",
    scope: ["Designed from scratch", "Figma", "Brand analysis", "Client calls"],
    overview:
      "Sun Solar installs residential and commercial solar in Arizona, Nevada, Florida, and Texas. They had an established brand and needed a site built around it. I took the project from research through launch and was the client's main contact the whole way.",
    process: [
      {
        stage: "Discover",
        body: "Started with a competitive review and a look at their existing brand, not a template.",
      },
      {
        stage: "Design",
        body: "Turned that direction into full-scale mockups in Figma, built around the brand they already had.",
      },
      {
        stage: "Review",
        body: "Met with the client several times to walk through designs, handle revisions, and keep scope in check.",
      },
      {
        stage: "Build",
        body: "Built it in WordPress as a dynamic, content-driven site the team can keep updating.",
      },
    ],
    cardImage: "/images/work/sun-solar-solutions-cover.jpg",
    heroImage: "/images/work/sun-solar-solutions-cover.jpg",
    gallery: [
      { image: "/images/work/sun-solar-solutions-01.jpg", caption: "Services cards" },
      { image: "/images/work/sun-solar-solutions-02.jpg", caption: "Installation experience section" },
      { image: "/images/work/sun-solar-solutions-03.jpg", caption: "Warranty section" },
      { image: "/images/work/sun-solar-solutions-04.jpg", caption: "Service area map" },
    ],
    liveUrl: "https://sunsolarsolutions.com/",
  },
  {
    slug: "american-sports-construction",
    name: "America Sports Construction",
    discipline: "Web design & WordPress build",
    year: "2024",
    featured: true,
    summary:
      "A new site for a national sports construction company, held to a strict accessibility and speed standard.",
    role: "Designer, developer, client lead",
    scope: ["$25M+ revenue client", "ADA compliant", "Core Web Vitals", "WordPress"],
    overview:
      "America Sports Construction builds courts, tracks, and turf fields nationwide. Their old site didn't reflect the size of the business. I designed and built the new one and handled communication with a senior stakeholder on their side.",
    process: [
      {
        stage: "Kickoff",
        body: "Worked directly with a senior stakeholder to set expectations and keep design decisions moving.",
      },
      {
        stage: "Design",
        body: "Designed a site that matches the scale of a $25M+ business, with the work itself front and center.",
      },
      {
        stage: "Build",
        body: "Built for full ADA compliance and strong Core Web Vitals from the start.",
      },
      {
        stage: "Launch",
        body: "The accessibility and performance bar set here became the benchmark for later agency builds.",
      },
    ],
    cardImage: "/images/work/american-sports-construction-cover.jpg",
    heroImage: "/images/work/american-sports-construction-cover.jpg",
    gallery: [
      { image: "/images/work/american-sports-construction-01.jpg", caption: "Sports surfaces section" },
      { image: "/images/work/american-sports-construction-02.jpg", caption: "Project gallery section" },
      { image: "/images/work/american-sports-construction-03.jpg", caption: "Why us section" },
      { image: "/images/work/american-sports-construction-04.jpg", caption: "Who we serve section" },
    ],
    liveUrl: "https://americasportsconstruction.com/",
  },
  {
    slug: "ambient-edge",
    name: "Ambient Edge",
    discipline: "Web design & WordPress build",
    year: "2024",
    featured: true,
    summary:
      "An HVAC and plumbing site, rebuilt as part of a multi-brand home services program.",
    role: "Web designer & developer",
    scope: ["Multi-brand program", "ACF templates", "Tight deadlines", "Post-launch updates"],
    overview:
      "Ambient Edge was one of several home service brands Youtech rebuilt for The Friendly Group. I was on it from kickoff through launch and stayed on for marketing updates afterward. It's the project where I learned to build sites that scale.",
    process: [
      {
        stage: "Kickoff",
        body: "Joined at kickoff, alongside the other brands in the program.",
      },
      {
        stage: "Build",
        body: "Built dynamic templates with ACF, so new content fills existing layouts instead of needing new pages.",
      },
      {
        stage: "Launch",
        body: "Delivered a large build on a tight deadline.",
      },
      {
        stage: "After launch",
        body: "Stayed on for ongoing marketing updates once the site was live.",
      },
    ],
    cardImage: "/images/work/ambient-edge-cover.jpg",
    heroImage: "/images/work/ambient-edge-cover.jpg",
    gallery: [
      { image: "/images/work/ambient-edge-01.jpg", caption: "About section" },
      { image: "/images/work/ambient-edge-02.jpg", caption: "Service area banner" },
      { image: "/images/work/ambient-edge-03.jpg", caption: "Specials section" },
    ],
    liveUrl: "https://www.ambientedge.com/",
  },
  {
    slug: "sunrise-kitchen",
    name: "Sunrise Kitchen",
    discipline: "Web design & WordPress build",
    year: "2024",
    featured: true,
    summary:
      "A warm, personality-first site for a local breakfast spot. Designed and built solo.",
    role: "Sole designer & developer",
    scope: ["Solo project", "Brand-led design", "Responsive", "WordPress"],
    overview:
      "Sunrise Kitchen is a local breakfast brand with a lot of personality and no website to show it. I handled everything myself, from the first concept to launch.",
    process: [
      {
        stage: "Discover",
        body: "Started from the brand's personality, not a stock restaurant template.",
      },
      {
        stage: "Design & build",
        body: "Designed and built every page myself in WordPress.",
      },
      {
        stage: "Launch",
        body: "Shipped a responsive site that gives a small local business a real presence online.",
      },
    ],
    cardImage: "/images/sunrise-kitchen-hero.png",
    heroImage: "/images/sunrise-kitchen-hero.png",
    gallery: [],
    liveUrl: null,
  },

  /* ---- hidden: not linked anywhere on the site, page still reachable by
     direct URL only (/work/ux-mesh). Set hidden: false to bring it back. ---- */
  {
    slug: "ux-mesh",
    name: "UX Mesh",
    discipline: "UX research & web design",
    year: "2023",
    featured: false,
    hidden: true,
    summary:
      "Website and user research for an early-stage startup.",
    role: "UX researcher & designer",
    scope: ["Startup", "User interviews", "Surveys", "UX strategy"],
    overview:
      "A part-time role covering both ends of the work: building the startup's website, and running the research that shaped what the team built next.",
    process: [
      {
        stage: "Research",
        body: "Ran surveys and user interviews, and turned the findings into design and product recommendations.",
      },
      {
        stage: "Design & build",
        body: "Designed and built the company's WordPress site.",
      },
      {
        stage: "Strategy",
        body: "Kept UX strategy tied to business goals as the product took shape.",
      },
    ],
    cardImage: null,
    heroImage: null,
    gallery: [],
    liveUrl: null,
  },
];

/* helpers used by the pages — no need to edit below this line */

/** Everything reachable from the site. */
export const visibleProjects = () => projects.filter((p) => !p.hidden);

/** What appears in the home page grid. */
export const featuredProjects = () =>
  projects.filter((p) => p.featured && !p.hidden);

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

/** Next-project link. Hidden projects are dead ends — they link nowhere. */
export const getNextProject = (slug: string) => {
  const current = getProject(slug);
  if (!current || current.hidden) return null;

  const list = visibleProjects();
  const i = list.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return list[(i + 1) % list.length];
};
