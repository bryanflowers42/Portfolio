# Images

Paths are relative to `/public`, so `public/images/work/dryforce-cover.jpg`
is referenced as `/images/work/dryforce-cover.jpg`.

## What's here

| File | Used for |
| --- | --- |
| `work/<slug>-cover.jpg` | Project card + case study hero (desktop browser and phone on a brand-colored stage, 2400 × 1500) |
| `work/<slug>-01.jpg` … | "The result" gallery on each case study: single sections of the live site in a browser frame (2400 × 1500) |
| `og-default.jpg` | Social share card (1200 × 630) |
| `<slug>-hero.png` | Original logo cards. Sunrise Kitchen still uses its one until it has screenshots |

All screenshots were taken from the live sites with cookie banners, chat
widgets, accessibility widgets, and promo bars removed.

## Adding process artifacts

Each step in a project's `process` (in `src/content/projects.ts`) takes an
optional `image` and `caption`. That's the place for sitemaps, wireframes,
and Figma frames, e.g.

```ts
{ stage: "Plan", body: "…", image: "/images/work/dryforce-sitemap.jpg", caption: "Sitemap" },
```

Use 16:10 images (e.g. 1600 × 1000) so they line up with the screenshots.
