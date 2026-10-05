/* ==========================================================================
   SITE CONTENT: EDIT THIS FILE TO UPDATE THE SITE
   --------------------------------------------------------------------------
   Everything you see on the site lives here. You should almost never need to
   open a component file to change wording, add a job, or add a project.

   Headings: wrap a word or two in *asterisks* to give it the accent
   highlighter, e.g.  heading: "How a site *gets made*"

   Images: leave `image` as null to hide it. When you have the real file, drop
   it in /public/images/ and set the path.

   Copy style: no dashes or hyphens anywhere in visible text.
   ========================================================================== */

/* ---------- types (keeps you honest while editing) ---------- */

export type NavLink = { label: string; href: string };
export type Stat = { value: string; label: string };
/** `icon` is a brand logo key or a general icon key; see components/SkillIcon.tsx */
export type Skill = { label: string; icon: string };
export type SkillGroup = { title: string; items: Skill[] };
export type Step = { number: string; title: string; body: string };
export type Job = {
  role: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
};
export type School = {
  school: string;
  dates: string;
  degree: string;
  note: string;
  image?: string | null;
  imageAlt?: string;
  credit?: string; // photo credit, shown small under the image when set
};
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
    { label: "GitHub", href: null as string | null },
    { label: "Dribbble", href: null as string | null },
  ],
};

export const seo = {
  title: "Bryan Flowers, Senior Web Designer",
  description:
    "I'm Bryan, a senior web designer. I design and build websites start to finish, mostly in WordPress and Elementor, and I'm comfortable on just about any platform.",
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
  heading: "I design and build websites, *start to finish.*",
  body: "I love being creative, making new things, and figuring out the tricky parts, on whatever platform a project calls for.",
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
  heading: "Some things *I've built*",
  note: "Click into any project to see how it came together, from the first plan to launch day.",
  disclaimer:
    "Some of these sites are now looked after by the client or another team, so they may have changed since launch.",
};

/* ---------- process ---------- */

export const process = {
  eyebrow: "Process",
  heading: "How a site *gets made*",
  intro: "Every project goes through the same five steps, whether it's 10 pages or 200.",
  steps: [
    {
      number: "01",
      title: "Discover",
      body: "I start by getting to know the business, who it's for, and who it's up against.",
    },
    {
      number: "02",
      title: "Plan",
      body: "Then comes the sitemap, the page templates, and the content plan, so the build has room to grow.",
    },
    {
      number: "03",
      title: "Design",
      body: "Wireframes first, then full mockups in Figma. We go back and forth until it feels right.",
    },
    {
      number: "04",
      title: "Build",
      body: "I build it out in WordPress and Elementor with reusable templates, and keep it fast and accessible the whole way.",
    },
    {
      number: "05",
      title: "Launch",
      body: "I test it on every screen, launch it, and keep it fresh afterward with updates and new landing pages.",
    },
  ] as Step[],
};

/* ---------- about ---------- */

export const spotlight = {
  eyebrow: "About",
  heading: "I like *making new things* and figuring out how to make them work.",
  body: "Web design checks every box for me. I get to be creative, build something that didn't exist yesterday, and solve a bunch of little problems along the way. I'm always looking for the next thing to learn, and every project seems to have one.",
  cards: [
    {
      label: "Team",
      title: "Working across a bigger company",
      body: "I'm on a web team of about 10 inside a company of around 100, so I work across teams a lot. Most days that's alongside project managers, and I've worked with clients directly when a project needed it.",
      chips: ["Project managers", "Cross team work", "Client calls"],
    },
    {
      label: "Mentoring",
      title: "Helping a junior designer grow",
      body: "I've managed a junior designer for over a year now, and he's since earned a promotion of his own. Watching that happen has been one of my favorite parts of the job.",
      chips: ["Day to day lead", "Reviews", "Promotion"],
    },
    {
      label: "Platforms",
      title: "Comfortable on any builder",
      body: "WordPress and Elementor are home base, front end and back end. I'm just as comfortable in Webflow, Wix, or whatever else a project runs on, and I use Claude to move faster.",
      chips: ["WordPress", "Elementor", "Webflow", "Wix", "Claude"],
    },
  ],
};

/* ---------- skills ----------
   `tools` render as a logo wall. Each skill's `icon` is either a brand key
   (wordpress, elementor, webflow, wix, figma, claude, html, css, javascript,
   php, woocommerce, googleanalytics) or a general icon key. The full list is
   in components/SkillIcon.tsx.                                              */

export const capabilities = {
  eyebrow: "Skills",
  heading: "The *toolbox*",
  intro: "If it builds websites, I've probably worked in it. These are the ones I reach for most.",
  tools: [
    { label: "WordPress", icon: "wordpress" },
    { label: "Elementor", icon: "elementor" },
    { label: "Webflow", icon: "webflow" },
    { label: "Wix", icon: "wix" },
    { label: "Figma", icon: "figma" },
    { label: "Claude", icon: "claude" },
    { label: "HTML", icon: "html" },
    { label: "CSS", icon: "css" },
    { label: "JavaScript", icon: "javascript" },
    { label: "PHP", icon: "php" },
  ] as Skill[],
  groups: [
    {
      title: "UX design",
      items: [
        { label: "Figma", icon: "figma" },
        { label: "Wireframing", icon: "wireframe" },
        { label: "Prototyping", icon: "prototype" },
        { label: "Information architecture", icon: "sitemap" },
        { label: "User journeys", icon: "journey" },
      ],
    },
    {
      title: "UX research",
      items: [
        { label: "Usability testing", icon: "testing" },
        { label: "A/B testing", icon: "ab" },
        { label: "Personas", icon: "personas" },
        { label: "Interviews", icon: "interviews" },
      ],
    },
    {
      title: "Web design",
      items: [
        { label: "Responsive design", icon: "responsive" },
        { label: "ADA compliance", icon: "accessibility" },
        { label: "Landing pages", icon: "landing" },
        { label: "Core Web Vitals", icon: "speed" },
      ],
    },
    {
      title: "Backend & build",
      items: [
        { label: "WordPress backend", icon: "server" },
        { label: "Custom fields (ACF)", icon: "database" },
        { label: "Plugins & integrations", icon: "plugin" },
        { label: "Reusable templates", icon: "templates" },
      ],
    },
    {
      title: "Graphic design",
      items: [
        { label: "Photoshop", icon: "photo" },
        { label: "Illustrator", icon: "pen" },
        { label: "Premiere Pro", icon: "video" },
        { label: "Branding", icon: "palette" },
        { label: "Typography", icon: "type" },
      ],
    },
    {
      title: "Leadership",
      items: [
        { label: "Mentoring", icon: "mentor" },
        { label: "Design reviews", icon: "review" },
        { label: "Working across teams", icon: "team" },
        { label: "Project planning", icon: "plan" },
      ],
    },
  ] as SkillGroup[],
};

/* ---------- stats band ---------- */

export const stats: Stat[] = [
  { value: "30+", label: "Websites designed and launched" },
  { value: "200+", label: "Pages on my biggest build" },
  { value: "3+", label: "Years designing for the web" },
  { value: "5", label: "Designers led on one build" },
];

/* ---------- experience ---------- */

export const experience = {
  eyebrow: "Experience",
  heading: "Where *I've worked*",
  jobs: [
    {
      role: "Senior Web Designer",
      company: "Youtech",
      start: "08/2025",
      end: "Present",
      bullets: [
        "Lead big WordPress and Elementor builds, from planning the structure all the way to launch.",
        "Manage a junior designer day to day. He's since earned a promotion of his own.",
        "Work across a company of about 100 people, mostly alongside project managers, to keep projects moving.",
      ],
    },
    {
      role: "Web Designer",
      company: "Youtech",
      start: "03/2024",
      end: "08/2025",
      bullets: [
        "Designed and launched 30+ websites, start to finish.",
        "Built fast, ADA compliant WordPress sites that hold up after launch.",
        "Designed landing pages for ad campaigns.",
      ],
    },
  ] as Job[],
};

/* ---------- previous employment ---------- */

export const previousExperience = {
  eyebrow: "Before Youtech",
  heading: "Where I got into research",
  jobs: [
    {
      role: "UX Researcher & Designer (part time)",
      company: "UX Mesh",
      start: "05/2023",
      end: "03/2024",
      bullets: [
        "Designed and built the startup's WordPress site.",
        "Ran surveys and user interviews, then turned what I learned into design and product ideas.",
        "Helped shape the UX strategy as the product came together.",
      ],
    },
  ] as Job[],
};

/* ---------- education ---------- */

export const education = {
  eyebrow: "Education",
  heading: "I studied how people think, then how to *build for them.*",
  schools: [
    {
      school: "University of Michigan",
      dates: "2021 to 2023",
      degree: "M.S. in User Centered Agile Development",
      note: "How to build products around real users, on real deadlines.",
      image: "/images/education/burton-tower.jpg",
      imageAlt: "Burton Memorial Tower on the University of Michigan campus on a sunny fall day",
      credit: "Photo: Cbl62, CC BY 3.0",
    },
    {
      school: "University of Michigan",
      dates: "2017 to 2021",
      degree: "B.S. in Cognitive Science, minor in Computer Science",
      note: "How people see, think, and make decisions, plus the code side of things.",
      image: "/images/education/hatcher-library.jpg",
      imageAlt: "The brick facade of the Hatcher Graduate Library at the University of Michigan",
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
      a: "Both. I design in Figma and build in WordPress and Elementor, so what launches is what was designed.",
    },
    {
      q: "How do you handle accessibility?",
      a: "It's part of the plan from day one. Contrast, structure, keyboard use, and focus states get decided in design, not patched after launch.",
    },
  ] as Faq[],
};

/* ---------- closing CTA ---------- */

export const cta = {
  heading: "Got a project in mind?",
  body: "I'm open to senior web design and UX roles, plus the occasional freelance project. I'd love to hear what you're working on.",
  primary: { label: "Email me", href: "mailto:bryanflowers42@gmail.com" },
  secondary: { label: "Call me: (810) 986-5599", href: "tel:+18109865599" },
};

export const footer = {
  blurb: "Senior Web Designer",
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
