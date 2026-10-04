/* Decorative line work: hand-drawn squiggles and a 3D "ribbon" of flowing
   lines. Purely visual (aria-hidden), drawn as SVG so it stays crisp, and
   every animation is switched off under prefers-reduced-motion. */

const SQUIGGLES = {
  // loose wave, good as an underline or divider
  wave: {
    viewBox: "0 0 240 40",
    d: "M4 26 C 24 4, 44 4, 62 22 S 100 40, 120 20 S 160 0, 180 20 S 218 38, 236 14",
  },
  // loop-de-loop, good in empty corners
  loop: {
    viewBox: "0 0 220 90",
    d: "M6 70 C 40 70, 52 18, 84 18 C 112 18, 112 58, 90 58 C 66 58, 70 20, 104 14 C 140 8, 150 64, 182 60 C 200 58, 208 44, 214 32",
  },
  // curvy arrow, points down and to the right
  arrow: {
    viewBox: "0 0 160 120",
    d: "M8 10 C 60 6, 96 26, 92 52 C 88 76, 54 70, 62 50 C 70 30, 118 44, 132 96 M 116 86 L 133 100 L 146 80",
  },
} as const;

export function Squiggle({
  variant = "wave",
  className = "",
  strokeWidth = 3,
}: {
  variant?: keyof typeof SQUIGGLES;
  className?: string;
  strokeWidth?: number;
}) {
  const s = SQUIGGLES[variant];
  return (
    <svg
      viewBox={s.viewBox}
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden
    >
      <path
        d={s.d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className="squiggle-draw"
      />
    </svg>
  );
}

/* A band of lines that twists like a ribbon. Each line is a sine wave whose
   vertical offset is scaled by cos(x), so the band pinches and opens and
   reads as a 3D surface. Paths are computed once at build time. */
function ribbonPaths(count: number, width: number, height: number) {
  const mid = height / 2;
  const paths: string[] = [];
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0 : i / (count - 1); // 0..1 across the band
    let d = "";
    for (let x = 0; x <= width; x += 8) {
      const u = (x / width) * Math.PI * 2;
      const twist = Math.cos(u * 0.9 + 0.6); // pinches the band
      const wave = Math.sin(u * 1.3 + t * 1.1) * height * 0.22;
      const y = mid + wave + (t - 0.5) * height * 0.55 * twist;
      d += `${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)} `;
    }
    paths.push(d.trim());
  }
  return paths;
}

const RIBBON = ribbonPaths(26, 1200, 320);

export function FlowLines({
  className = "",
  opacity = 0.35,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 1200 320"
      preserveAspectRatio="none"
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden
    >
      <g className="flow-drift" style={{ opacity }}>
        {RIBBON.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="currentColor"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            // fade the outer lines so the band has depth
            strokeOpacity={0.35 + 0.65 * Math.sin((i / (RIBBON.length - 1)) * Math.PI)}
          />
        ))}
      </g>
    </svg>
  );
}
