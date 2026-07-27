/* ==========================================================================
   SITE CONTENT — EDIT THIS FILE TO UPDATE THE SITE
   --------------------------------------------------------------------------
   Everything you see on the site lives here. You should almost never need to
   open a component file to change wording, add a job, or add a project.

   Images: leave `image` as null to show a styled placeholder. When you have
   the real file, drop it in /public/images/ and set the path, e.g.
       image: "/images/dryforce-hero.jpg"
   ========================================================================== */

/* ---------- types (keeps you honest while editing) ---------- */

export type NavLink = { label: string; href: string };
export type Stat = { value: string; label: string };
export type SkillGroup = { title: string; items: string[] };
export type Step = {
  number: string;
  title: string;
  body: string;
  bullets: string[];
  image?: string | null;
};
export type Job = {
  role: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
};
export type School = { school: string; dates: string; degree: string };
export type Faq = { q: string; a: string };
export type Testimonial = { quote: string; name: string; org: string };
export type ClientLogo = { name: string; image?: string | null };

/* ---------- identity ---------- */

export const profile = {
  name: "Bryan Flowers",
  initials: "BF",
  title: "Senior Web Designer",
  location: "Michigan, USA",
  email: "bryanflowers42@gmail.com",
  phone: "(810) 986-5599",
  phoneHref: "+18109865599",
  website: "bryanrflowers.com",
  websiteHref: "https://bryanrflowers.com",
  resumeHref: "/Bryan_Flowers_Resume.pdf", // drop the PDF into /public
  // Set to null to hide a social link entirely.
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "Dribbble", href: null as string | null },
  ],
};

export const seo = {
  title: "Bryan Flowers — Senior Web Designer",
  description:
    "Senior Web Designer specializing in large-scale WordPress builds, ADA-compliant design, and conversion-focused landing pages. 30+ projects launched.",
  url: "https://bryanrflowers.com",
  ogImage: "/images/og-default.png", // 1200x630
};

/* ---------- navigation ---------- */

export const nav: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "How I work", href: "/#process" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Experience", href: "/#experience" },
];

export const navCta = { label: "Get in touch", href: "/#contact" };

/* ---------- hero ---------- */

export const hero = {
  chip: "Senior Web Designer at Youtech",
  heading:
    "I design and build large-scale websites that stay fast, accessible, and built to convert.",
  body: "Thirty-plus launched projects across a fast-paced agency — from 200-page WordPress architectures to landing pages tuned for campaign performance. Research through launch, design through code.",
  primaryCta: { label: "See selected work", href: "/#work" },
  secondaryCta: { label: "Download résumé", href: "/Bryan_Flowers_Resume.pdf" },
  ticker: "Currently leading priority client builds at Youtech",
  image: null as string | null, // hero product-style visual
  imageAlt: "Preview of a recent website build",
};

/* ---------- client logo marquee ---------- */

export const logos = {
  heading: "Brands and teams I've designed and built for",
  items: [
    { name: "Youtech", image: null },
    { name: "DryForce", image: null },
    { name: "Next Door and Window", image: null },
    { name: "American Sports Construction", image: null },
    { name: "Sunrise Kitchen", image: null },
    { name: "UX Mesh", image: null },
    { name: "University of Michigan", image: null },
  ] as ClientLogo[],
};

/* ---------- [01] how I work ---------- */

export const process = {
  eyebrow: "How I work",
  heading:
    "Architect the build before it starts, design the experience, then ship something that performs.",
  steps: [
    {
      number: "01",
      title: "Architect the build",
      body: "Define scope, sitemap, and technical approach before a single page is touched — so a 200-page site doesn't turn into 200 problems.",
      bullets: [
        "Content architecture and information hierarchy mapped up front.",
        "Technical approach and template system decided before design starts.",
      ],
      image: null,
    },
    {
      number: "02",
      title: "Design the experience",
      body: "Wireframes to high-fidelity Figma, grounded in user journeys and research rather than taste alone.",
      bullets: [
        "Wireframes, prototypes, and user journeys in Figma.",
        "Usability testing, A/B tests, and interviews where the stakes justify it.",
      ],
      image: null,
    },
    {
      number: "03",
      title: "Build and optimize",
      body: "ADA-compliant WordPress builds with strong Core Web Vitals, then ongoing optimization against real campaign performance.",
      bullets: [
        "ADA compliance and Core Web Vitals treated as requirements, not extras.",
        "Conversion-focused landing pages measured against marketing goals.",
      ],
      image: null,
    },
  ] as Step[],
  footnote: {
    heading: "Senior technical point of contact",
    body: "For priority clients I turn complex technical decisions into clear direction and keep stakeholders confident from kickoff through launch.",
  },
};

/* ---------- [03] capabilities ---------- */

export const capabilities = {
  eyebrow: "Capabilities",
  heading: "A design skill set that goes all the way through to the build.",
  groups: [
    {
      title: "UX Design",
      items: [
        "Figma",
        "Visual Design",
        "Wireframing",
        "Prototyping",
        "Information Architecture",
        "User Journeys",
      ],
    },
    {
      title: "UX Research",
      items: ["Usability Testing", "A/B Testing", "Personas", "Interviews"],
    },
    {
      title: "Web Design",
      items: [
        "WordPress",
        "Webflow",
        "Responsive Design",
        "ADA Compliance",
        "Landing Pages",
        "Web Vitals",
      ],
    },
    {
      title: "Web Development",
      items: ["HTML", "CSS", "JavaScript", "Agile Methodologies"],
    },
    {
      title: "Marketing",
      items: ["Landing Page Optimization", "Conversion Focused Design"],
    },
    {
      title: "Graphic Design",
      items: [
        "Photoshop",
        "Illustrator",
        "Premiere Pro",
        "Branding",
        "Typography",
      ],
    },
    {
      title: "Leadership",
      items: [
        "Team Management",
        "Task Delegation",
        "Code Review",
        "Client Communication",
        "Project Planning",
      ],
    },
  ] as SkillGroup[],
};

/* ---------- stats band ---------- */

export const stats: Stat[] = [
  { value: "30+", label: "Web projects owned from design through launch." },
  { value: "200+", label: "Pages and landing pages built on the largest builds." },
  { value: "100+", label: "Marketing updates executed across live client sites." },
  { value: "5", label: "Designers supervised on a single large-scale build." },
];

/* ---------- experience ---------- */

export const experience = {
  eyebrow: "Experience",
  heading: "Three years of agency and startup work, moving from designer to senior.",
  jobs: [
    {
      role: "Senior Web Designer",
      company: "Youtech",
      start: "08/2025",
      end: "Present",
      bullets: [
        "Manage a fellow designer's workload daily while carrying a full project load of my own, offering direct support and delegation across both tracks.",
        "Architect large-scale WordPress builds from the ground up, defining scope, structure, and technical approach before a single page is touched.",
        "Act as the senior technical point of contact for priority clients, turning complex decisions into clear direction and keeping stakeholders confident throughout.",
      ],
    },
    {
      role: "Web Designer",
      company: "Youtech",
      start: "03/2024",
      end: "08/2025",
      bullets: [
        "Owned 30+ web projects from initial design through launch, managing the full lifecycle across a fast-paced agency environment.",
        "Built ADA-compliant, high-performance WordPress sites with strong web vitals and executed 100+ marketing updates across live client sites.",
        "Designed and optimized conversion-focused landing pages built for campaign performance and measurable marketing success.",
      ],
    },
    {
      role: "Part-time UX Researcher and Designer",
      company: "UX Mesh",
      start: "05/2023",
      end: "03/2024",
      bullets: [
        "Designed and built the startup's WordPress website, establishing a credible online presence for the early-stage company.",
        "Ran surveys and user interviews, translating findings into actionable design and product recommendations.",
        "Contributed ongoing UX strategy, aligning research insights with business goals to shape the product's direction.",
      ],
    },
  ] as Job[],
};

/* ---------- education ---------- */

export const education = {
  eyebrow: "Education",
  heading: "Cognitive science and information, applied to design.",
  schools: [
    {
      school: "University of Michigan, Ann Arbor",
      dates: "09/2021 – 05/2023",
      degree: "M.S. in Information — Focus in UX Research and Design",
    },
    {
      school: "University of Michigan, Ann Arbor",
      dates: "09/2017 – 05/2021",
      degree: "B.S. in Cognitive Science — Minor in Computer Science",
    },
  ] as School[],
};

/* ---------- testimonials ----------
   PLACEHOLDER COPY. Replace with real quotes or delete the array to hide
   the whole section automatically.                                        */

export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder quote — swap this for a real client or teammate quote about working with you.",
    name: "Client Name",
    org: "Company",
  },
  {
    quote:
      "Placeholder quote — two or three sentences works best. Keep it specific about outcomes.",
    name: "Client Name",
    org: "Company",
  },
  {
    quote:
      "Placeholder quote — a manager or stakeholder quote is a strong closer here.",
    name: "Stakeholder Name",
    org: "Company",
  },
];

/* ---------- FAQ ---------- */

export const faq = {
  heading: "Frequently asked questions",
  items: [
    {
      q: "What kind of projects do you take on?",
      a: "Large-scale WordPress builds, full site redesigns, and conversion-focused landing pages. I'm most useful on projects where the information architecture is complicated enough that someone needs to own it end to end.",
    },
    {
      q: "Do you design, or do you build?",
      a: "Both. I design in Figma and build in WordPress, which means the thing that ships is the thing that was designed — no handoff loss, no compromises invented halfway through development.",
    },
    {
      q: "How do you handle accessibility?",
      a: "ADA compliance is part of the build spec from the start, not a retrofit. Color contrast, semantic structure, keyboard navigation, and focus states get decided during design, which is much cheaper than fixing them after launch.",
    },
    {
      q: "Can you lead a team on a larger build?",
      a: "Yes. I've supervised a team of five designers on a 100+ page build and co-led a team of three on a 200+ page site, keeping execution consistent and the schedule intact.",
    },
  ] as Faq[],
};

/* ---------- closing CTA ---------- */

export const cta = {
  heading: "Have a build that needs an owner? Let's talk.",
  body: "Open to senior web design and UX roles, plus select freelance projects.",
  primary: { label: "Email me", href: "mailto:bryanflowers42@gmail.com" },
  secondary: { label: "Call (810) 986-5599", href: "tel:+18109865599" },
};

export const footer = {
  blurb:
    "Senior Web Designer working across UX research, design, and front-end build.",
  columns: [
    {
      title: "Site",
      links: [
        { label: "Work", href: "/#work" },
        { label: "How I work", href: "/#process" },
        { label: "Capabilities", href: "/#capabilities" },
        { label: "Experience", href: "/#experience" },
        { label: "Contact", href: "/#contact" },
      ],
    },
  ],
};
