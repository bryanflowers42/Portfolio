# Bryan Flowers — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Styled to match
[ruul.io](https://ruul.io/business/home) — same palette, same Hedvig Letters
type pairing, same layout language (numbered section eyebrows, rounded cards,
pill buttons, logo marquee, stat band, `<details>` FAQ).

---

## The only files you need to edit

| I want to change… | Edit |
| --- | --- |
| Any text, contact info, skills, jobs, education, FAQ, testimonials, nav | `src/content/site.ts` |
| Projects / case studies (also creates their pages) | `src/content/projects.ts` |
| Colors, fonts, spacing tokens | `tailwind.config.ts` |
| Which sections appear on the home page, and in what order | `src/app/page.tsx` |
| Images | drop files in `public/images/`, then set the path in the content files |

Components in `src/components/` read from those content files. You should
rarely need to open them.

### Adding a project

Open `src/content/projects.ts`, copy an existing object in the `projects`
array, change the fields. That's it — the card appears in the "Selected work"
grid and `/work/<slug>` is generated automatically. Set `featured: false` to
keep the page but hide the card.

### Images / placeholders

Every image field is `null` right now, which renders a labelled placeholder.
See `public/images/README.md` for the full map of image slots and recommended
sizes. Replace `null` with e.g. `"/images/dryforce-hero.jpg"` when ready.

Also drop your résumé at `public/Bryan_Flowers_Resume.pdf` — the header and
hero already link to it.

---

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

---

## Deploy: GitHub → Vercel

1. Create an empty repo on GitHub.
2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```

3. On [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
   Vercel detects Next.js; no settings to change. Click **Deploy**.
4. Add your domain under **Project → Settings → Domains**, then point
   `bryanrflowers.com` at Vercel's nameservers or add the A/CNAME records it
   shows you.

Every push to `main` redeploys. Pull requests get their own preview URL.

Before launch, update `seo.url` in `src/content/site.ts` and the sitemap URL in
`public/robots.txt` to your real domain.

---

## Structure

```
src/
  app/
    layout.tsx              header + footer + fonts + metadata
    page.tsx                home page = ordered list of sections
    sitemap.ts              auto-generated from projects.ts
    not-found.tsx           404
    work/[slug]/page.tsx    project detail template (one per project)
  components/
    Shell.tsx               Shell / Section / Eyebrow / SectionHeading
    Button.tsx              pill buttons (5 variants)
    Media.tsx               image slot with built-in placeholder
    Reveal.tsx              fade-up on scroll
    SiteHeader.tsx          sticky nav + mobile drawer
    SiteFooter.tsx
    Hero.tsx  LogoMarquee.tsx  Process.tsx  WorkGrid.tsx
    Capabilities.tsx  Stats.tsx  Experience.tsx
    Testimonials.tsx  Faq.tsx  CtaBand.tsx
  content/
    site.ts                 ← all page copy
    projects.ts             ← all case studies
```

## Accessibility & responsiveness notes

- Skip link, semantic landmarks, real `<h1>`/`<h2>` hierarchy.
- FAQ uses native `<details>`/`<summary>` — keyboard accessible with no JS.
- Visible `:focus-visible` ring on every interactive element.
- `prefers-reduced-motion` disables the marquee, scroll reveals, and smooth scroll.
- Mobile-first breakpoints: single column under 640px, 2-up at `sm`, 3-up at `lg`.
- Mobile nav is a drawer with `aria-expanded` / `aria-controls`.
