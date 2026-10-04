/* ==========================================================================
   SITE CONTENT — EDIT THIS FILE TO UPDATE THE SITE
   --------------------------------------------------------------------------
   Everything you see on the site lives here. You should almost never need to
   open a component file to change wording, add a job, or add a project.

   Images: leave `image` as null to hide it. When you have the real file, drop
   it in /public/images/ and set the path, e.g.
       image: "/images/dryforce-hero.jpg"
   ========================================================================== */

/* ---------- types (keeps you honest while editing) ---------- */

export type NavLink = { label: string; href: string };
export type Stat = { value: string; label: string };
export type SkillGroup = { title: string; items: string[] };
export type Step = { number: string; title: string; body: string };
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
  resumeHref: "/Bryan_Flowers_Resume.pdf",
  // Set to null to hide a social link entirely.
  socials: [
    { label: "LinkedIn", href: null as string | null },
    { label: "GitHub", href: "https://github.com/bryanflowers42" as string | null },
    { label: "Dribbble", href: null as string | null },
  ],
};

export const seo = {
  title: "Bryan Flowers — Senior Web Designer",
  description:
    "Senior web designer in Michigan. I design and build websites from first sitemap to launch. 30+ sites shipped.",
  url: "https://bryanrflowers.com",
  ogImage: "/images/og-default.jpg", // 1200x630
};

/* ---------- navigation ---------- */

export const nav: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
];

export const navCta = { label: "Get in touch", href: "/#contact" };

/* ---------- hero ---------- */

export const hero = {
  chip: "Senior Web Designer at Youtech",
  heading: "I design and build websites, from the first sitemap to launch day.",
  body: "30+ sites shipped for home service, construction, and local brands. Research, design, and development, all under one roof.",
  primaryCta: { label: "See the work", href: "/#work" },
  secondaryCta: { label: "Résumé", href: "/Bryan_Flowers_Resume.pdf" },
  image: null as string | null, // optional visual under the hero text
  imageAlt: "",
};

/* ---------- client logo marquee (not on the home page right now) ---------- */

export const logos = {
  heading: "Brands I've designed and built for",
  items: [
    { name: "Youtech", image: null },
    { name: "DryForce", image: null },
    { name: "Next Door & Window", image: null },
    { name: "America Sports Construction", image: null },
    { name: "Sunrise Kitchen", image: null },
    { name: "University of Michigan", image: null },
  ] as ClientLogo[],
};

/* ---------- work section ---------- */

export const work = {
  eyebrow: "Selected work",
  heading: "Recent projects",
  note: "Open any project to see how it came together, start to finish.",
  disclaimer:
    "Some of these sites are now maintained by the client or another team, so they may have changed since launch.",
};

/* ---------- process ---------- */

export const process = {
  eyebrow: "Process",
  heading: "How a site gets made",
  intro: "The same five steps on every project, whether it's 10 pages or 200.",
  steps: [
    {
      number: "01",
      title: "Discover",
      body: "Learn the business, its customers, and its competitors. Research and brand review before anything gets drawn.",
    },
    {
      number: "02",
      title: "Plan",
      body: "Sitemap, page templates, and content plan, settled up front so the build can scale.",
    },
    {
      number: "03",
      title: "Design",
      body: "Wireframes, then full mockups in Figma. Reviewed with the client until it's right.",
    },
    {
      number: "04",
      title: "Build",
      body: "WordPress, with reusable templates. Accessibility and page speed are part of the build, not a cleanup pass.",
    },
    {
      number: "05",
      title: "Launch",
      body: "Test on every screen size, ship it, then keep it current with updates and new landing pages.",
    },
  ] as Step[],
};

/* ---------- about (spotlight) ---------- */

export const spotlight = {
  eyebrow: "About",
  heading: "Designer, developer, and the client's main contact.",
  cards: [
    {
      label: "Role",
      title: "Senior point of contact",
      body: "On priority accounts, I'm the one the client talks to. I explain technical decisions in plain terms and keep everyone on the same page through launch.",
      chips: ["Client-facing", "Technical direction", "Team lead"],
    },
    {
      label: "Education",
      title: "M.S. in User-Centered Agile Development",
      body: "From the University of Michigan, after a B.S. in Cognitive Science. It's why my projects start with research.",
      chips: ["University of Michigan", "UX research", "Agile"],
    },
  ],
};

/* ---------- capabilities ---------- */

export const capabilities = {
  eyebrow: "Skills",
  heading: "What I work with",
  groups: [
    {
      title: "UX design",
      items: ["Figma", "Wireframing", "Prototyping", "Information architecture", "User journeys"],
    },
    {
      title: "UX research",
      items: ["Usability testing", "A/B testing", "Personas", "Interviews"],
    },
    {
      title: "Web design",
      items: ["WordPress", "Webflow", "Responsive design", "ADA compliance", "Landing pages"],
    },
    {
      title: "Development",
      items: ["HTML", "CSS", "JavaScript", "ACF", "Core Web Vitals"],
    },
    {
      title: "Graphic design",
      items: ["Photoshop", "Illustrator", "Premiere Pro", "Branding", "Typography"],
    },
    {
      title: "Leadership",
      items: ["Team management", "Code review", "Client communication", "Project planning"],
    },
  ] as SkillGroup[],
};

/* ---------- stats band ---------- */

export const stats: Stat[] = [
  { value: "30+", label: "Sites taken from design to launch" },
  { value: "200+", label: "Pages on the largest build" },
  { value: "100+", label: "Updates shipped to live sites" },
  { value: "5", label: "Designers led on one build" },
];

/* ---------- experience ---------- */

export const experience = {
  eyebrow: "Experience",
  heading: "Where I've worked",
  jobs: [
    {
      role: "Senior Web Designer",
      company: "Youtech",
      start: "08/2025",
      end: "Present",
      bullets: [
        "Main technical contact for priority clients.",
        "Plan large WordPress builds from the ground up: scope, structure, and approach.",
        "Manage another designer's workload while carrying a full project load of my own.",
      ],
    },
    {
      role: "Web Designer",
      company: "Youtech",
      start: "03/2024",
      end: "08/2025",
      bullets: [
        "Took 30+ sites from first design to launch.",
        "Built ADA-compliant WordPress sites with strong Core Web Vitals, and shipped 100+ updates to live client sites.",
        "Designed landing pages for paid campaigns.",
      ],
    },
  ] as Job[],
};

/* ---------- previous employment ---------- */

export const previousExperience = {
  eyebrow: "Before Youtech",
  heading: "Research first",
  jobs: [
    {
      role: "UX Researcher & Designer (part-time)",
      company: "UX Mesh",
      start: "05/2023",
      end: "03/2024",
      bullets: [
        "Designed and built the startup's WordPress site.",
        "Ran surveys and user interviews, and turned the findings into design and product recommendations.",
        "Kept UX strategy tied to business goals as the product took shape.",
      ],
    },
  ] as Job[],
};

/* ---------- education ---------- */

export const education = {
  eyebrow: "Education",
  heading: "Two degrees from Michigan",
  schools: [
    {
      school: "University of Michigan, Ann Arbor",
      dates: "09/2021 – 05/2023",
      degree: "M.S. in User-Centered Agile Development",
    },
    {
      school: "University of Michigan, Ann Arbor",
      dates: "09/2017 – 05/2021",
      degree: "B.S. in Cognitive Science, minor in Computer Science",
    },
  ] as School[],
};

/* ---------- testimonials ----------
   Empty = section hidden. Add real quotes here to bring it back.        */

export const testimonials: Testimonial[] = [];

/* ---------- FAQ (not on the home page right now) ---------- */

export const faq = {
  heading: "Questions",
  items: [
    {
      q: "Do you design or build?",
      a: "Both. I design in Figma and build in WordPress, so what launches is what was designed.",
    },
    {
      q: "How do you handle accessibility?",
      a: "It's part of the plan from day one. Contrast, structure, keyboard use, and focus states get decided in design, not patched after launch.",
    },
    {
      q: "Can you lead a team?",
      a: "Yes. I've led five designers on a 100+ page build and co-led three on a 200+ page build.",
    },
  ] as Faq[],
};

/* ---------- closing CTA ---------- */

export const cta = {
  heading: "Have a project in mind?",
  body: "I'm open to senior web design and UX roles, and select freelance work.",
  primary: { label: "Email me", href: "mailto:bryanflowers42@gmail.com" },
  secondary: { label: "Call (810) 986-5599", href: "tel:+18109865599" },
};

export const footer = {
  blurb: "Senior web designer. Research, design, and build.",
  columns: [
    {
      title: "Site",
      links: [
        { label: "Work", href: "/#work" },
        { label: "Process", href: "/#process" },
        { label: "About", href: "/#about" },
        { label: "Experience", href: "/#experience" },
        { label: "Contact", href: "/#contact" },
      ],
    },
  ],
};
