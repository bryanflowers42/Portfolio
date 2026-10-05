/* One place that turns a skill's `icon` key (from content/site.ts) into a
   picture: the real brand logo when the tool has one (Simple Icons), or a
   general icon (Lucide) when it doesn't. */
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
  siWoocommerce,
  siGoogleanalytics,
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
  woocommerce: siWoocommerce,
  googleanalytics: siGoogleanalytics,
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

export const isBrand = (key: string) => key in BRANDS;

export default function SkillIcon({
  icon,
  className = "h-5 w-5",
  mono = false,
}: {
  icon: string;
  className?: string;
  /** draw brand logos in currentColor instead of their brand color */
  mono?: boolean;
}) {
  const brand = BRANDS[icon];
  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill={mono ? "currentColor" : `#${brand.hex}`}
        aria-hidden
      >
        <path d={brand.path} />
      </svg>
    );
  }
  const Icon = ICONS[icon] ?? Sparkles;
  return <Icon className={className} strokeWidth={1.75} aria-hidden />;
}
