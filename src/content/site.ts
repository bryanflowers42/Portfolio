/* ==========================================================================
   SITE CONTENT: EDIT THIS FILE TO UPDATE THE SITE
   --------------------------------------------------------------------------
   Everything you see on the site lives here. You should almost never need to
   open a component file to change wording, add a job, or add a project.

   Headings: wrap a word or two in *asterisks* to give it the accent
   highlighter, e.g.  heading: "Always happy to *talk web.*"

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
  title: "Bryan Flowers, UX/UI Designer",
  description:
    "I'm Bryan, a UX/UI designer with a master's in user centered development from the University of Michigan. I design websites around the people using them, from research to launch.",
  url: "https://bryanrflowers.com",
  ogImage: "/images/og-default.jpg", // 1200x630
};

/* ---------- navigation ---------- */

export const nav: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Experience", href: "/#experience" },
];


/* ---------- hero ---------- */

export const hero = {
  chip: "UX/UI Designer",
  heading: "I design for real people, *start to finish.*",
  primaryCta: { label: "See the work", href: "/#work" },
  secondaryCta: { label: "Résumé", href: "/Bryan_Flowers_Resume.pdf" },
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
  heading: "Some things I've built",
  note: "Click into any project to see how it came together, from the first plan to launch day.",
  disclaimer:
    "Some of these sites are now looked after by the client or another team, so they may have changed since launch.",
};

/* ---------- process ---------- */

export const process = {
  eyebrow: "Process",
  heading: "My site building process",
  intro: "It always starts with the people who'll use the site, whether it's 10 pages or 200.",
  steps: [
    {
      number: "01",
      title: "Understand",
      body: "Who's using this, and what are they trying to get done? I look at the audience, the competition, and what the current site gets wrong.",
    },
    {
      number: "02",
      title: "Structure",
      body: "Sitemap, page templates, and the path someone takes through the site, all sorted out before any visuals.",
    },
    {
      number: "03",
      title: "Design",
      body: "I go straight to full mockups in Figma, then we go back and forth until it feels right.",
    },
    {
      number: "04",
      title: "Build",
      body: "I build it in WordPress and Elementor with reusable templates, keeping it fast and accessible for everyone.",
    },
    {
      number: "05",
      title: "Test & launch",
      body: "I test it on every screen size, launch it, and keep improving it afterward based on how people use it.",
    },
  ] as Step[],
};

/* ---------- about ---------- */

export const spotlight = {
  eyebrow: "Hi, I'm Bryan",
  heading: "I love making new things and solving problems.",
  body: "I'm a UX/UI designer, and right now a senior web designer at Youtech, with over three years designing for the web. I studied cognitive science and then user centered development at the University of Michigan, so I like to start with the people who'll actually use the thing. From there it's the fun part: being creative, building something that didn't exist yesterday, and solving a bunch of little problems along the way. I'm always looking to create memorable experiences, for myself and the people around me.",
  cards: [
    {
      label: "Team",
      title: "Small team, bigger company",
      body: "I'm part of a tight web team of about 10, inside a company of around 100. So I'm just as comfortable heads down with my own team as I am working across departments with project managers and everyone else who touches a project.",
      icon: "team",
    },
    {
      label: "Growth",
      title: "Growing, and helping others grow",
      body: "I'm always pushing to get better as a designer, whether that's a new tool or a better way to work. I've also managed a junior designer for over a year, and helping him grow into a promotion of his own has been one of the best parts of the job.",
      icon: "mentor",
    },
    {
      label: "Platforms",
      title: "Good on any builder",
      body: "WordPress, Elementor, Webflow, Wix, you name it. Whatever a project runs on, I'm comfortable in it, front end and back end, and I pick up new ones fast.",
      icon: "builder",
    },
  ],
};

/* ---------- skills ----------
   `tools` render as a logo wall. Each skill's `icon` is either a brand key
   (wordpress, elementor, webflow, wix, figma, claude, html, css, javascript,
   php, woocommerce, googleanalytics) or a general icon key. The full list is
   in components/SkillIcon.tsx.                                              */

export const capabilities = {
  eyebrow: "The Toolbox",
  heading: "My Skills",
  intro: "If it builds websites, I've probably worked in it. These are the ones I reach for most.",
  tools: [
    { label: "WordPress", icon: "wordpress" },
    { label: "Elementor", icon: "elementor" },
    { label: "ACF", icon: "acf" },
    { label: "Webflow", icon: "webflow" },
    { label: "Wix", icon: "wix" },
    { label: "Figma", icon: "figma" },
    { label: "Photoshop", icon: "photoshop" },
    { label: "Premiere Pro", icon: "premiere" },
    { label: "Claude", icon: "claude" },
    { label: "HTML", icon: "html" },
    { label: "CSS", icon: "css" },
    { label: "JavaScript", icon: "javascript" },
    { label: "PHP", icon: "php" },
    { label: "Lighthouse", icon: "lighthouse" },
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
        { label: "Core Web Vitals", icon: "lighthouse" },
      ],
    },
    {
      title: "Backend & build",
      items: [
        { label: "WordPress backend", icon: "wordpress" },
        { label: "Custom fields (ACF)", icon: "acf" },
        { label: "Plugins & integrations", icon: "plugin" },
        { label: "Reusable templates", icon: "templates" },
      ],
    },
    {
      title: "Graphic design",
      items: [
        { label: "Photoshop", icon: "photoshop" },
        { label: "Premiere Pro", icon: "premiere" },
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
  heading: "Where I've worked",
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
  school: "University of Michigan",
  campus: "Ann Arbor",
  logo: "/images/logos/umich-block-m.svg",
  background: "/images/education/burton-tower.jpg",
  backgroundAlt: "Burton Memorial Tower on the University of Michigan campus",
  credit: "Photo: Cbl62, CC BY 3.0",
  heading: "My Education",
  schools: [
    {
      school: "University of Michigan",
      dates: "2021 to 2023",
      degree: "M.S. in User Centered Agile Development",
      note: "How to build products around real users, on real deadlines.",
    },
    {
      school: "University of Michigan",
      dates: "2017 to 2021",
      degree: "B.S. in Cognitive Science, minor in Computer Science",
      note: "How people see, think, and make decisions, plus the code side of things.",
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
  heading: "Always happy to *talk web.*",
  body: "A new project, a site that needs some love, or just a question about anything web related. Whatever it is, I'd love to hear about it.",
  primary: { label: "Email me", href: "mailto:bryanflowers42@gmail.com" },
  secondary: { label: "Call me: (810) 986-5599", href: "tel:+18109865599" },
};

export const footer = {
  blurb: "UX/UI Designer",
  columns: [
    {
      title: "Site",
      links: [
        { label: "About", href: "/#about" },
        { label: "Work", href: "/#work" },
        { label: "Process", href: "/#process" },
        { label: "Experience", href: "/#experience" },
        { label: "Contact", href: "/#contact" },
      ],
    },
  ],
};
