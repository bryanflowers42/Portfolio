/* Layout primitives. Small, boring, reused everywhere. */
import type { ReactNode } from "react";
import Marked from "./Marked";

export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`shell ${className}`}>{children}</div>;
}

export function Section({
  id,
  children,
  className = "",
  tone = "canvas",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "canvas" | "surface" | "mist" | "navy" | "dark";
}) {
  const tones = {
    canvas: "bg-canvas text-ink",
    surface: "bg-surface text-ink",
    mist: "bg-mist text-ink",
    navy: "bg-navy text-canvas",
    dark: "bg-navy-dark text-canvas",
  } as const;

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-28 ${tones[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  index,
  children,
  invert = false,
}: {
  index?: string;
  children: ReactNode;
  invert?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-2 text-eyebrow font-medium uppercase ${
        invert ? "text-canvas/60" : "text-ink/40"
      }`}
    >
      {index && (
        <span className={invert ? "text-accent" : "text-ink/70"}>[{index}]</span>
      )}
      <span>{children}</span>
    </p>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  children,
  invert = false,
  size = "md",
  className = "",
}: {
  index?: string;
  eyebrow?: string;
  children: ReactNode;
  invert?: boolean;
  /** "sm" for sentence length headings that would feel shouty at full size */
  size?: "sm" | "md";
  className?: string;
}) {
  const sizes = {
    sm: "text-[30px] leading-[1.15] tracking-[-0.01em] md:text-[34px] lg:text-[38px]",
    md: "text-display-sm md:text-[42px] lg:text-display-md",
  } as const;

  return (
    <div className={`max-w-[672px] ${className}`}>
      {eyebrow && (
        <Eyebrow index={index} invert={invert}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={`mt-5 ${sizes[size]} ${
          invert ? "text-canvas" : "text-ink"
        }`}
      >
        {typeof children === "string" ? (
          <Marked text={children} invert={invert} />
        ) : (
          children
        )}
      </h2>
    </div>
  );
}
