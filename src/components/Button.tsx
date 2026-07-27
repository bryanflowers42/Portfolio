import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "lime" | "outlineLight";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 h-11 text-sm font-medium tracking-[-0.01em] transition-all duration-300 ease-ruul whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-canvas hover:bg-forest",
  secondary: "bg-canvas text-ink hover:bg-canvas-muted",
  ghost: "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  lime: "bg-lime text-ink hover:brightness-105",
  outlineLight:
    "border border-canvas/25 text-canvas hover:border-canvas/60 hover:bg-canvas/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const isExternal =
    external ??
    (href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.endsWith(".pdf"));

  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
