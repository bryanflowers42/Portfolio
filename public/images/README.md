# Images

Drop real images here, then point to them from the content files.

| Where it shows up | Set in | Field | Recommended size |
| --- | --- | --- | --- |
| Hero visual | `src/content/site.ts` | `hero.image` | 1600 × 1000 |
| Client logos | `src/content/site.ts` | `logos.items[].image` | ~200 × 60, transparent PNG/SVG |
| Process step visuals | `src/content/site.ts` | `process.steps[].image` | 800 × 600 |
| Project card | `src/content/projects.ts` | `cardImage` | 1200 × 750 (first card is wider: 1600 × 690) |
| Project hero | `src/content/projects.ts` | `heroImage` | 1600 × 1000 |
| Project gallery | `src/content/projects.ts` | `gallery[].image` | 1200 × 900 |
| Social share card | `src/content/site.ts` | `seo.ogImage` | 1200 × 630 |

Paths are relative to `/public`, so a file at `public/images/dryforce-hero.jpg`
is referenced as `/images/dryforce-hero.jpg`.

Any field left as `null` renders a labelled placeholder instead — nothing breaks.
