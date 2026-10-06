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
  audience?: string;         // "Who it was for"
  priorities?: string[];     // "What mattered most" for those users
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
    discipline: "UX/UI & web design",
    year: "2025",
    featured: true,
    summary:
      "200+ pages for a window and door company. One of the biggest builds our agency has done.",
    role: "Lead designer",
    team: "3 designers",
    scope: ["200+ pages", "Landing pages", "Scalable templates", "WordPress"],
    overview:
      "Next Door & Window replaces windows and doors across Chicago, St. Louis, and Madison. They needed a site that could hold hundreds of pages and still feel like one brand. I designed it from scratch and helped lead the small team that built it out.",
    audience: "Homeowners in Chicago, St. Louis, and Madison shopping around for new windows and doors.",
    priorities: [
      "Make it easy to compare window and door styles at a glance.",
      "Give every page one clear next step: book a free estimate.",
      "Build landing pages that match the ad someone just clicked.",
    ],
    process: [
      {
        stage: "Plan",
        body: "I mapped out a template system that could grow past 200 pages without getting slow or messy.",
      },
      {
        stage: "Design",
        body: "I designed the whole thing from scratch, and set up every landing page to turn ad clicks into leads.",
      },
      {
        stage: "Build",
        body: "I helped lead a team of three designers through the build and took care of the technical side.",
      },
      {
        stage: "Launch",
        body: "We launched a fast site that's easy to keep growing, and it met the client's bar and ours.",
      },
    ],
    cardImage: "/images/work/next-door-and-window-cover.jpg",
    heroImage: "/images/work/next-door-and-window-cover.jpg",
    gallery: [
      { image: "/images/work/next-door-and-window-01.jpg", caption: "Feature section with annotated product benefits" },
      { image: "/images/work/next-door-and-window-02.jpg", caption: "Three step process section" },
      { image: "/images/work/next-door-and-window-03.jpg", caption: "About section" },
      { image: "/images/work/next-door-and-window-04.jpg", caption: "Window styles carousel" },
    ],
    liveUrl: "https://nextdoorandwindow.com/",
  },
  {
    slug: "dryforce",
    name: "DryForce",
    discipline: "UX/UI & web design",
    year: "2025",
    featured: true,
    summary:
      "100+ pages for a water damage restoration company in Texas, built with a team of five.",
    role: "Lead designer",
    team: "5 designers",
    scope: ["100+ pages", "Team of 5", "Content architecture", "WordPress"],
    overview:
      "DryForce does water damage restoration all over Texas. The tricky part was the sheer size: dozens of services and cities, and every one needed its own page. I designed the site, figured out how all that content fit together, and led the build.",
    audience: "People dealing with water damage, usually in a hurry and usually on their phone.",
    priorities: [
      "Put the phone number in front of people right away.",
      "Organize 100+ pages so people find their service and their city fast.",
      "Build trust quickly with certifications and real results.",
    ],
    process: [
      {
        stage: "Plan",
        body: "I sorted 100+ pages of services and locations into a handful of templates, so the team could move fast and stay consistent.",
      },
      {
        stage: "Design",
        body: "I designed the full site and made the calls that set its direction.",
      },
      {
        stage: "Build",
        body: "I led five designers through the build and reviewed their pages along the way.",
      },
      {
        stage: "Launch",
        body: "We kept it on schedule from the first template to launch day.",
      },
    ],
    cardImage: "/images/work/dryforce-cover.jpg",
    heroImage: "/images/work/dryforce-cover.jpg",
    gallery: [
      { image: "/images/work/dryforce-01.jpg", caption: "Restoration process section" },
      { image: "/images/work/dryforce-02.jpg", caption: "Experience and trust section" },
      { image: "/images/work/dryforce-03.jpg", caption: "Results section" },
      { image: "/images/work/dryforce-04.jpg", caption: "Response time section" },
    ],
    liveUrl: "https://dryforcecorp.com/",
  },
  {
    slug: "sun-solar-solutions",
    name: "Sun Solar Solutions",
    discipline: "UX/UI & web design",
    year: "2025",
    featured: true,
    summary:
      "A brand new site for a solar company working in four states.",
    role: "Designer & developer",
    scope: ["Designed from scratch", "Figma", "Brand analysis", "WordPress"],
    overview:
      "Sun Solar installs solar for homes and businesses in Arizona, Nevada, Florida, and Texas. They already had a strong brand, they just needed a site that lived up to it. I took this one from research all the way through launch.",
    audience: "Homeowners and businesses in four states trying to decide if solar is worth it.",
    priorities: [
      "Explain the options simply: solar, batteries, EV charging, and commercial.",
      "Show proof early, like awards, the warranty, and real installs.",
      "Carry their existing brand through every page.",
    ],
    process: [
      {
        stage: "Discover",
        body: "I started by looking at their competitors and their existing brand instead of reaching for a template.",
      },
      {
        stage: "Design",
        body: "From there I built out full mockups in Figma around the look they already had.",
      },
      {
        stage: "Review",
        body: "I met with the client a few times to walk through the designs and work through revisions.",
      },
      {
        stage: "Build",
        body: "Then I built it in WordPress so their team can keep it updated on their own.",
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
    discipline: "UX/UI & web design",
    year: "2024",
    featured: true,
    summary:
      "A new site for a national sports construction company, built to a high bar for accessibility and speed.",
    role: "Designer & developer",
    scope: ["$25M+ revenue client", "ADA compliant", "Core Web Vitals", "WordPress"],
    overview:
      "America Sports Construction builds courts, tracks, and turf fields all over the country. Their old site didn't show how big they really are. I designed and built the new one.",
    audience: "Schools, cities, country clubs, and facility managers planning courts, tracks, and fields.",
    priorities: [
      "Lead with the work: real courts and fields up front.",
      "Make it fully accessible, meeting ADA standards.",
      "Keep every page fast, with strong Core Web Vitals.",
    ],
    process: [
      {
        stage: "Kickoff",
        body: "Early on I worked with a key stakeholder on their side to set expectations and keep decisions moving.",
      },
      {
        stage: "Design",
        body: "I designed a site that feels as big as a $25M+ business should, with their actual work up front.",
      },
      {
        stage: "Build",
        body: "I built it to be fully ADA compliant with strong Core Web Vitals from day one.",
      },
      {
        stage: "Launch",
        body: "The accessibility and speed standard we hit here became the bar for our later builds.",
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
    discipline: "UX/UI & web design",
    year: "2024",
    featured: true,
    summary:
      "An HVAC and plumbing site, rebuilt as part of a bigger program for several home service brands.",
    role: "Web designer & developer",
    scope: ["Multi brand program", "ACF templates", "Tight deadlines", "Updates after launch"],
    overview:
      "Ambient Edge was one of a few home service brands we rebuilt for The Friendly Group. I was on it from kickoff through launch, and stuck around for marketing updates after. Honestly, this is the project where I really learned how to build sites that scale.",
    audience: "Homeowners and businesses around Kingman and Las Vegas who need heating, cooling, or plumbing help.",
    priorities: [
      "Make the right service easy to find from the home page.",
      "Show specials without burying the main services.",
      "Give the team templates they can keep updating after launch.",
    ],
    process: [
      {
        stage: "Kickoff",
        body: "I joined at kickoff, alongside the other brands in the program.",
      },
      {
        stage: "Build",
        body: "I built dynamic templates with ACF, so new content drops into existing layouts instead of needing brand new pages.",
      },
      {
        stage: "Launch",
        body: "We got a big build out the door on a tight deadline.",
      },
      {
        stage: "After launch",
        body: "I stayed on for marketing updates once the site was live.",
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
    discipline: "UX/UI & web design",
    year: "2024",
    featured: true,
    summary:
      "A warm, fun site for a local breakfast spot. I designed and built it on my own.",
    role: "Designer & developer",
    scope: ["Solo project", "Brand led design", "Responsive", "WordPress"],
    overview:
      "Sunrise Kitchen is a local breakfast brand with a ton of personality and no website to show it off. I did everything on this one myself, from the first idea to launch.",
    audience: "Locals looking for a breakfast spot with some personality.",
    priorities: [
      "Let the brand's personality lead the design.",
      "Make it look and work great on every screen size.",
    ],
    process: [
      {
        stage: "Discover",
        body: "I started from the brand's personality instead of a stock restaurant template.",
      },
      {
        stage: "Design & build",
        body: "I designed and built every page myself in WordPress.",
      },
      {
        stage: "Launch",
        body: "We launched a responsive site that gives a small local business a real presence online.",
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
      "Website and user research for an early stage startup.",
    role: "UX researcher & designer",
    scope: ["Startup", "User interviews", "Surveys", "UX strategy"],
    overview:
      "A part time role covering both ends of the work: building the startup's website, and running the research that shaped what the team built next.",
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
