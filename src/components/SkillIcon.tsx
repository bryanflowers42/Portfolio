/* One place that turns a skill's `icon` key (from content/site.ts) into a
   picture. In order of preference:
     1. the real brand logo from Simple Icons
     2. a brand mark Simple Icons doesn't carry (Adobe app badges drawn
        here, the ACF logo from /public/images/logos)
     3. a general icon from Lucide                                           */
import type { SimpleIcon } from "simple-icons";
import {
  siWordpress,
  siElementor,
  siWebflow,
  siWix,
  siFigma,
  siClaude,
  siHtml5,
  siCss,
  siJavascript,
  siPhp,
  siLighthouse,
} from "simple-icons";
import {
  Accessibility,
  CalendarCheck,
  Clapperboard,
  ClipboardCheck,
  Columns2,
  Database,
  Gauge,
  GraduationCap,
  Image as ImageIcon,
  LayoutTemplate,
  MessagesSquare,
  MousePointerClick,
  Network,
  Palette,
  PanelsTopLeft,
  PenTool,
  Plug,
  Route,
  ScanEye,
  Server,
  Smartphone,
  Sparkles,
  Type,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const BRANDS: Record<string, SimpleIcon> = {
  wordpress: siWordpress,
  elementor: siElementor,
  webflow: siWebflow,
  wix: siWix,
  figma: siFigma,
  claude: siClaude,
  html: siHtml5,
  css: siCss,
  javascript: siJavascript,
  php: siPhp,
  lighthouse: siLighthouse,
};

/* Adobe pulled its marks from Simple Icons, so the app badges are drawn
   here: the familiar rounded square with the two letter code. */
const ADOBE: Record<string, { letters: string; bg: string; fg: string }> = {
  photoshop: { letters: "Ps", bg: "#001E36", fg: "#31A8FF" },
  illustrator: { letters: "Ai", bg: "#330000", fg: "#FF9A00" },
  premiere: { letters: "Pr", bg: "#00005B", fg: "#9999FF" },
};

/* Logos kept as files in /public/images/logos */
const FILES: Record<string, string> = {
  acf: "/images/logos/acf.svg",
};

const ICONS: Record<string, LucideIcon> = {
  wireframe: LayoutTemplate,
  prototype: MousePointerClick,
  sitemap: Network,
  journey: Route,
  testing: ClipboardCheck,
  ab: Columns2,
  personas: Users,
  interviews: MessagesSquare,
  responsive: Smartphone,
  accessibility: Accessibility,
  landing: PanelsTopLeft,
  speed: Gauge,
  server: Server,
  database: Database,
  plugin: Plug,
  templates: LayoutTemplate,
  photo: ImageIcon,
  pen: PenTool,
  video: Clapperboard,
  palette: Palette,
  type: Type,
  mentor: GraduationCap,
  review: ScanEye,
  team: UsersRound,
  plan: CalendarCheck,
};

/** true when the icon is a real logo (so it can sit on a light tile) */
export const isLogo = (key: string) =>
  key in BRANDS || key in ADOBE || key in FILES;

export default function SkillIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: string;
  className?: string;
}) {
  const brand = BRANDS[icon];
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill={`#${brand.hex}`} aria-hidden>
        <path d={brand.path} />
      </svg>
    );
  }

  const adobe = ADOBE[icon];
  if (adobe) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <rect width="24" height="24" rx="4.5" fill={adobe.bg} />
        <text
          x="12"
          y="16.2"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="700"
          fontSize="11.5"
          fill={adobe.fg}
        >
          {adobe.letters}
        </text>
      </svg>
    );
  }

  const file = FILES[icon];
  if (file) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={file} alt="" className={className} aria-hidden />;
  }

  const Icon = ICONS[icon] ?? Sparkles;
  return <Icon className={className} strokeWidth={1.75} aria-hidden />;
}
