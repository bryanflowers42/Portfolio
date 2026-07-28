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

## Currently in place

Six branded hero cards (992 × 693) are wired up as both the card image and the
project hero for DryForce, Next Door and Window, Sun Solar Solutions, American
Sports Construction, Ambient Edge, and Sunrise Kitchen. They are displayed with
`object-cover`, so the edges crop but the centered logo always stays in frame.

Two notes:

- They are 992px wide, so on the large project hero they'll be slightly soft on
  a high-DPI screen. Swap in ~1600px versions when you have them.
- The Next Door and Window file has a transparent background, so it renders
  near-white against the card. A version on their brand blue would match the
  others.
- `seo.ogImage` still points at `/images/og-default.png`, which doesn't exist
  yet — social shares won't show a preview image until you add it (1200 × 630).
