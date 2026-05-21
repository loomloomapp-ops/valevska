# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

This is **not an application** — it is a **design handoff bundle** for a single landing page: `YULIIA&MAX`, a bilingual (Ukrainian) wellness-business personal-brand page. The deliverables in `design_handoff_yuliia_max_landing/` are high-fidelity HTML/CSS **prototypes** intended to be re-implemented in a target framework (Next.js + Tailwind recommended), not shipped as-is.

There is no build system, no package.json, no tests. "Running" the prototype = open the HTML file in a browser.

```
design_handoff_yuliia_max_landing/
  Valevska Landing.html          # Mobile prototype (≤420px column)
  Valevska Landing - Desktop.html # Desktop prototype (responsive ≥880px)
  styles.css                      # Mobile-only CSS
  styles-desktop.css              # Desktop-only CSS
  image-slot.js                   # <image-slot> web component
  hero-couple.png, about-couple.png
  README.md                       # Authoritative design spec — read this first
```

`design_handoff_yuliia_max_landing/README.md` is the **source of truth** for design tokens, section structure, copy, animations, and production notes. When asked about colors, type scale, section order, or interaction behavior, consult it directly before inferring from CSS.

## Critical implementation constraints

These come from the spec and override any general assumptions:

- **Mobile and desktop are intentionally separate HTML files in the prototype.** In production, ship one responsive page — desktop styles activate above ~880px. Do not preserve the two-file split.
- **Never name the German wellness brand.** The copy uses the generic phrase "німецький бренд" / "wellness-бренд з Німеччини" on purpose (trademark avoidance). Preserve this everywhere.
- **All `<image-slot>` elements are placeholders** for end-user/CMS content (logo, product photos, testimonial screenshots, polaroid photos). In production, replace with the project's image/CMS component — do not keep the drag-and-drop localStorage web component.
- **Locale is Ukrainian.** Multilingual (likely Spanish) may be added later — keep copy externalizable.
- **Background gradient is `background-attachment: fixed` on `<body>`**, and most sections are transparent. Hero/About use `::after` overlay gradients to fade photo backgrounds into the body gradient. Re-implementations must preserve seamless section transitions — no per-section solid backgrounds.

## Design system quick reference

Full tokens in the handoff README. Highlights:

- **Fonts:** `Oswald` (display, weights 500/600/700, all uppercase headings) + `Inter` (body, 400–700). Loaded from Google Fonts.
- **Palette:** Deep plum body gradient (`#3d1532 → #1a0716 → #0d030a`) + warm ivory ink (`#f4ead9`) + gold accents (`--gold-soft: #e8c879` is the most-used accent).
- **CTAs:** Gold 5-stop gradient button with two infinite animations — `cta-pulse` (2.6s shadow oscillation) and `cta-shine` (3.2s diagonal white sweep via `::before` with `mix-blend-mode: overlay`). Both must respect `prefers-reduced-motion`.
- **Polaroid pairs:** Two ivory cards with manual ±5–7° rotations and overlapping `margin-left` negatives; `::after` for the polaroid lip.
- **Sliders** (testimonials + product banners): scroll-snap horizontal flex track + arrow buttons that compute nearest-center slide and call `scrollTo({behavior:'smooth'})` + dynamically generated dot indicators (active dot becomes a pill). Keyboard, touch, and arrow-button navigation must stay in sync.
- **Icons:** Inline SVG only, 1.8px stroke, `currentColor`, rounded caps/joins. No icon library. Country flags use emoji.
- **Breakpoints:** 1100px (reduce gutters), 880px (collapse multi-col → single col), 420px (mobile column), 380px (tighten).

## Section order (do not reorder)

Hero → About → Results → Кого ми шукаємо → Про бренд → Продукція → Дохід → Формати співпраці → Кому буде цікаво → Відгуки → Фінальне CTA → Footer. Same on mobile and desktop.

## Production wiring still open

The handoff README lists open questions (lead-capture endpoint, real IG handle, authoritative country list, real product/testimonial images, brand logo file, final pricing copy). Confirm with the client before hardcoding any of these.

## `.claude/rules/`

This directory contains a large set of opinionated design/engineering rule skills (taste, brutalist, minimalist, stitch, image-to-code, etc.) that are loaded as project instructions. They define banned patterns (no Inter font, no pure black, no purple/blue AI gradients, no generic 3-card rows, no emojis in code, etc.) and aesthetic directives. Treat them as binding when generating any new UI code in this repo.
