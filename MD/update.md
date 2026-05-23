# Site Update — Planned Work

Started 2026-05-23. Major overhaul: clean professional redesign + Jekyll migration + content additions.

## Locked decisions

- **Visual brief**: clean, professional, AP-appropriate (not magazine-style, not corporate). References: [yimingma.com/about-3](https://www.yimingma.com/about-3), [mengbozhang.weebly.com/publications](https://mengbozhang.weebly.com/publications.html), [sites.google.com/site/erikjmayer/research](https://sites.google.com/site/erikjmayer/research).
- **Cox logo**: dropped from header (`cox.png` still on disk for now).
- **Stack**: Jekyll on GitHub Pages. Research listing driven from markdown in `MD/`.
- **Research listing**:
  - Two sections: **Working Papers** / **Publications** (newest first within each).
  - Keep current image-per-paper layout (image ~1/3 row, content ~2/3).
  - **Working papers**: keep one-sentence elevator pitch (tighten any 2-3 sentence ones down to one).
  - **Published papers**: drop teaser sentence — journal credential carries the weight.
  - Below each paper, bulleted sub-items as needed: status (R&R / forthcoming), awards, selected presentations / major conferences, NBER WP link, slides/data/code links, media coverage.
- **Color palette**: keep mustang red (`#CC0035`) accent + royal (`#354CA1`) link color, but use sparingly.
- **Typography**: replace Times New Roman body; keep Garamond display for headings.

## Goals

- Easy to update without editing HTML — paper changes happen in `MD/` files.
- Mobile-first responsive layout (current site breaks below ~768px).
- Standardize per-paper metadata.
- Faster, cleaner first impression.

## Phase 1 — Jekyll skeleton

Build structure with placeholder content. Lets us preview design on a real layout before touching live content.

- [ ] `_config.yml` with site title, baseurl, papers collection
- [ ] `_layouts/default.html` — shared `<head>`, nav, footer (kills nav duplication)
- [ ] `_layouts/paper.html` — single-paper card
- [ ] `_includes/nav.html`, `_includes/footer.html`
- [ ] `Gemfile` (github-pages gem) for local preview
- [ ] Wire `MD/` (or `_papers/`) → Jekyll collection
- [ ] Local preview via `bundle exec jekyll serve`

## Phase 2 — Design system

- [ ] Pick body typeface (candidates: Inter, Source Sans, Charter, EB Garamond for serif option)
- [ ] Type scale (h1 / h2 / h3 / body / caption / bullet)
- [ ] Spacing tokens (4 / 8 / 16 / 24 / 48 / 96 px)
- [ ] Color tokens (primary, accent, ink, paper, muted)
- [ ] Paper card component: image left, citation + sub-bullets + (optional) teaser right
- [ ] Uniform image sizing (no more per-paper height/width tweaks)
- [ ] Hero section for home: headshot, name, role, one-line tagline, contact strip
- [ ] Section dividers / consistent vertical rhythm
- [ ] Mobile breakpoints: stack image + content on narrow screens
- [ ] Decide dark mode: y/n

## Phase 3 — Content migration

### Research listing — per-paper to-do

For each, fill in: status, conferences, NBER WP link, awards, slides/data/code link.

**Working Papers** (keep one-sentence pitch):
- [ ] **What Do Lead Banks Learn from Leveraged Loan Investors?** (Bruche, Meisenzahl) — status, conferences, NBER WP
- [ ] **Information Acquisition by Mutual Fund Investors** (Sialm) — status, conferences
- [ ] **Illiquidity Meets Intelligence: AI-Driven Price Discovery in Corporate Bonds** (Jacobsen, Venkataraman) — status, conferences
- [ ] **Growth and Performance of AI in Asset Management** (Chen, Sialm) — status, conferences
- [ ] **Human Capital and Local Credit Supply** (Huang, Mayer, Titman) — status, conferences
- [ ] **New paper** (TBD — title, coauthors, image)

**Publications** (drop teaser sentence):
- [ ] **Portfolio Dynamics and the Supply of Safe Securities** — Management Science, accepted. Add DOI when available. Surface slides (`paper/Slides_portfolio_dynamics.pdf`).
- [ ] **The Geography of Information Acquisition** (Chen, Qu, Shen, Wang) — JFQA 2022. Add DOI.

### Home page
- [ ] Optional: News / What's New block (last 3-5 items: acceptance, conference, award) — TBD whether to include
- [ ] Slightly longer About paragraph (current is one sentence)
- [ ] Keep social icons strip

### Teaching page
- [ ] Add course evaluations (numerical scores) — format TBD
- [ ] Optional: sample syllabi PDFs
- [ ] Optional: short teaching-philosophy paragraph

### Assets in `paper/` to surface
- `Slides_20230505_OFR.pdf` — link from which paper?
- `Slides_portfolio_dynamics.pdf` — link from Portfolio Dynamics
- `jmp_poster.pdf` — link from JMP-corresponding paper
- `aifund.pdf` — supplement for AI Asset Management?

## Phase 4 — Polish & launch

- [ ] Favicon refresh (currently `mustang_square.jpg`)
- [ ] Open Graph meta tags (Twitter/LinkedIn/Slack link previews)
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Lighthouse audit (target 95+)
- [ ] Cross-browser check (Chrome / Safari / Firefox / mobile Safari)
- [ ] Final proofread
- [ ] Push to GitHub, verify Pages build

## Open questions

- News section: include or skip for V1?
- Dark mode: y/n?
- Which paper does `Slides_20230505_OFR.pdf` belong to?
- Delete `cox.png` from repo entirely now that the logo is removed?

## Done

- 2026-05-22 — Initial cleanup (polyfill.io removed, `<head>` structure fixed, unclosed `<p>` tags closed, orphan `cv.html` and `navigation.html` deleted). See [clean_up.md](clean_up.md).
- 2026-05-23 — SMU Cox logo removed from home / research / teaching headers.
