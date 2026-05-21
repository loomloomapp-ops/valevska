# Handoff: YULIIA&MAX — Wellness Business Landing Page

## Overview

A bilingual (Ukrainian) personal-brand landing page for **YULIIA&MAX** — wellness business partners (Vice-Presidents of a German wellness brand, ТОП-2 Іспанія, 45 264 partners). The page invites visitors to join their team or become a VIP customer of the brand. Two viewports are designed: **mobile (≤420px)** and **desktop (≥880px)** — both fully realized as standalone HTML prototypes.

## About the Design Files

The files in this bundle are **design references created in HTML/CSS** — prototypes showing intended look, layout, copy, and behavior. They are **not production code to copy directly**.

Your task is to **recreate these designs in the target codebase's existing environment** (React/Next.js, Vue/Nuxt, SvelteKit, Astro, whatever the project uses) using its established component patterns, design system, and libraries. If no environment exists yet, pick the framework that best fits the project (recommend Next.js + Tailwind for a marketing site like this).

## Fidelity

**High-fidelity (hifi).** Pixel-perfect with final colors, typography, spacing, animations, and content. Recreate the UI exactly using the codebase's existing components, replacing the prototype's vanilla CSS with the project's styling solution (CSS-in-JS, Tailwind, styled-components, modules — whichever is in use).

---

## Design Tokens

### Color palette (deep plum + gold)
```
--bg-1:           #0a2418   (legacy, mostly unused in current palette)
--bg-2:           #3d1532   (top of body gradient)
--bg-3:           #1a0716   (mid body gradient)
--bg-4:           #0d030a   (bottom body gradient / deep dark)

--surface:         rgba(22,8,18,.55)
--surface-strong:  rgba(20,8,16,.78)
--border:          rgba(244,234,217,.10)
--border-strong:   rgba(244,234,217,.18)
--border-gold:     rgba(232,200,121,.22)

--ink:        #f4ead9   (primary text — warm ivory)
--ink-2:      #c8b894   (secondary — muted beige)
--ink-3:      rgba(244,234,217,.55)
--ink-mute:   rgba(244,234,217,.72)

--gold-1:     #f0d287
--gold-2:     #d4a85a
--gold-3:     #b8893d
--gold-soft:  #e8c879   (most-used accent — links, highlights, bold copy)

--rose:       #c4554d
--rose-soft:  #e07a72

Body background:
  radial-gradient(80% 40% at 50% 20%, rgba(180,100,130,.12), transparent 70%),
  radial-gradient(60% 35% at 5% 60%, rgba(140,60,90,.10), transparent 60%),
  linear-gradient(180deg, #3d1532 0%, #1a0716 45%, #0d030a 100%);
  background-attachment: fixed;
```

### Typography
- **Display / headings**: `Oswald` (Google Fonts) — weights 500, 600, 700. Used for all uppercase titles, nameplates, CTAs, numbered prefixes, certificate badges.
- **Body**: `Inter` (Google Fonts) — weights 400, 500, 600, 700. Used for paragraphs, lists, descriptions, UI text.
- Both loaded via:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  ```

#### Type scale (mobile / desktop)
| Element | Mobile | Desktop |
|---|---|---|
| Hero l1 ("Побудуй") | 38px Oswald 500 | 78px Oswald 500 |
| Hero l2 ("Міжнародний бізнес") | 34px Oswald 700 uppercase | 72px Oswald 700 uppercase |
| Hero l3 (subtitle) | 16-18px Inter 400, gold-soft | 26px Inter 400, gold-soft |
| Section title | 28px Oswald 600 uppercase | 52px Oswald 600 uppercase |
| Section eyebrow | 22px Oswald 500, gold-soft | 16px Oswald 500 uppercase, gold-soft, letter-spacing .18em, with 38×1px gold line before |
| Brand name | 30px Oswald 700 | 54px Oswald 700 |
| Body text | 15-16px Inter 400 | 17-18px Inter 400 |
| CTA label | 19-20px Oswald 700 uppercase, letter-spacing .1em | 18px Oswald 700 uppercase, letter-spacing .14em |
| Stat number | 20px Oswald 600, gold-soft | 30px Oswald 600, gold-soft |

### Spacing
- Mobile section padding: `34px 22px 0`
- Desktop section padding: `72px 0 0`
- Desktop content gutter: `48px` (32px at ≤1100px)
- Max content width: `1240px`
- Gaps between sub-elements typically 10-22px; between sections 0 (smooth gradient transitions handle separation).

### Radii & shadows
- Card radius: `14-22px` (sections), `12-18px` (smaller cards)
- Pill radius: `999px`
- Polaroid radius: `4px` (intentionally sharp, like a real polaroid)
- Standard card shadow: `0 30px 60px -30px rgba(0,0,0,.6), 0 8px 24px -12px rgba(0,0,0,.45)`
- CTA shadow (animated pulse): see CTA section below

### Animations
- **CTA pulse**: `cta-pulse 2.6s ease-in-out infinite` — shadow oscillates between rest and lifted state
- **CTA shine**: `cta-shine 3.2s ease-in-out infinite` — diagonal white highlight sweeps left→right across the button
- Both respect `@media (prefers-reduced-motion: reduce)` — disabled when user prefers reduced motion
- Hover lifts: `translateY(-1px to -3px)` with deeper glow

---

## Page Structure (Section by Section)

Both mobile and desktop have the same sections in the same order. Where layouts differ, both are listed.

### 1. Hero

**Mobile** (Valevska Landing.html):
- Full-bleed couple photo (`hero-couple.png`) absolutely positioned as the hero background, anchored bottom-center, 108% height, with `drop-shadow` for separation from the plum gradient.
- Readability overlay: 180deg linear-gradient — dark at top (rgba(13,3,10,.45) 0% → .18 18% → 0 38-52% → .55 72% → .92 90% → .95 100%) — lets faces show through middle, darkens top for title and bottom for cards.
- Content stacked vertically inside `.hero-inner` (padding `22px 22px 22px`, min-height 580px):
  1. Pill "Дохід без обмежень" (right-aligned)
  2. Hero title (3 lines):
     - "Побудуй" (38px Oswald 500)
     - "МІЖНАРОДНИЙ БІЗНЕС" (34px Oswald 700 uppercase, text-wrap:balance)
     - "*у сфері* здоров'я та краси" (em italic 300 / regular gold-soft 16-18px)
  3. `.hero-bottom` stack pushed to bottom (margin-top:auto):
     - **Nameplate card** (glass plum gradient + gold border):
       - Title: "YULIIA&MAX" (22px Oswald 600 uppercase, letter-spacing .04em)
       - Sub: "Лідери **ТОП-2** на ринку Іспанії" (13px uppercase, ТОП-2 in gold)
     - **Desc card** (darker plum, glass): "Приєднуйся до нашої команди та розвивайся разом із **німецьким брендом** у понад **30 країнах** світу"
     - **CTA button**: "Стати партнером" (block, full-width, gold gradient, animated)

**Desktop** (Valevska Landing - Desktop.html):
- Same couple photo absolutely positioned but anchored bottom-right (right:-3%, height:120%) so faces sit in the right third.
- Wider readability gradient with darker left band (for title readability) and lighter right band (lets the couple show).
- 2-column hero-grid `1.15fr 1fr`, gap 48px, min-height 600px:
  - Left: pill + 3-line title (sizes scale up to 78/72/26px).
  - Right: same nameplate + desc-card + CTA stack, max-width 460px, aligned to end.

### 2. About ("Про нас")

**Mobile** (about-section): photo-as-background pattern, same as hero.
- `about-couple.png` (couple looking at phone) positioned bottom-center, 96% height.
- Compact top stack:
  - Eyebrow "Про нас" (gold-soft 22px Oswald)
  - Row: "YULIIA & MAX" (30px Oswald 700 uppercase) + IG chip "_businesswithlove_lr" (links to https://www.instagram.com/_businesswithlove_lr) inline-flex with wrap fallback.
- Bottom: glass-blurred dark card containing 2 short paragraphs ("Ми — підприємці..." / "Працюємо з німецьким брендом..."). Bold accents in gold.

**Desktop** (about-section-d): 2-column split, NO background photo treatment.
- `.about-wrap-d` grid `1.1fr 1fr`, gap 60px, max-width 1240px:
  - Left: eyebrow + name+IG row + 3-paragraph body (max-width 600px).
  - Right: framed photo container (aspect 4:5, border-radius 24px, plum gradient bg) containing `about-couple.png` (height 104%, anchored bottom).

### 3. Results ("Наші результати")

Stat cards row + checklist + photo polaroids + callout.

**Mobile**:
- Stat grid (3 stacked cards), each with:
  - Gold-tinted icon box (44px square, plum gradient bg, gold border)
  - Big gold number + label (line-break to 2 lines)
  - Values:
    - **15 000 €** / наш сімейний дохід на місяць
    - **45 264** / партнерів у структурі — одна з найбільших у світі
    - **ТОП 2 · Іспанія** / наша позиція в національному рейтингу
- **First polaroid pair** (2 overlapping photos, ±5-7° rotation, ivory background with bottom border like real polaroids, drag-and-drop image slots labeled "Фото 1" / "Фото 2")
- **Checklist** (5 items with gold-circled checkmarks, gold-bold inline accents):
  - Вийшли на цей дохід **за 2 роки** цілеспрямованої роботи
  - Маємо одну з **найбільших структур** у компанії — понад 45 000 людей
  - Кваліфікувались на статус **Віце-Президентів** компанії
  - Виступаємо на онлайн і офлайн заходах у понад 10 країнах
  - (one more)
- **Second polaroid pair** (flipped — different rotation, slots 3/4)
- Italic callout card (gold border, italic): "Якщо ти теж хочеш такий шлях — читай далі. Ми не беремо всіх підряд у команду, але **якщо ти 'наш' — ми навчимо всьому**."

**Desktop**:
- Stat grid: 3 columns side-by-side, larger sizes.
- `results-cols` grid `1fr 1fr` (gap 32px): checklist on left, polaroid pairs stacked on right.

### 4. Кого ми шукаємо в команду

- Centered "Команда" eyebrow + centered title "Кого ми **шукаємо** в команду" (шукаємо in gold).
- Single golden-edged card (`team-col yes`, max-width 760px centered) containing 6-item checklist:
  - Цілеспрямованих та проактивних людей
  - Тих, хто хоче працювати на себе і за свій результат
  - Любителів вчитися і відкритих до нових ідей
  - Тих, хто розуміє цінність продукту та довіру до бренду
  - Активних батьків, які прагнуть гнучкий графік і свободу
  - Людей з підприємницьким мисленням, готових діяти
- Centered "Приєднатися" CTA below.

### 5. Про бренд ("Про бренд")

The brand is a **generic "wellness-бренд з Німеччини"** — never name it; the design intentionally avoids reproducing any specific company's trademarks. A drag-and-drop logo slot is provided for the end-user to insert their own brand artwork in their browser.

- Header row: compact `brand-head` grid:
  - Left: "WELLNESS-БРЕНД З НІМЕЧЧИНИ" (30/54px Oswald 700, line break preserved)
  - Right: square logo card (108px mobile / 200px desktop) — drag-and-drop image slot.
- 2 body paragraphs:
  - "Німецька компанія, заснована у **1985 році**, яка вже понад **40 років** є одним із лідерів прямих продажів у Європі."
  - "Сьогодні бренд представлений більш ніж у **30 країнах** світу та об'єднує мільйони клієнтів і партнерів."
- **Countries list** — bullet grid with emoji flags:
  - Mobile: 3 columns. Desktop: 4 columns. Each row: `<emoji flag> <country>`.
  - 29 countries: Албанія 🇦🇱, Австрія 🇦🇹, Бельгія 🇧🇪, Болгарія 🇧🇬, Кіпр 🇨🇾, Чехія 🇨🇿, Данія 🇩🇰, Фінляндія 🇫🇮, Франція 🇫🇷, Німеччина 🇩🇪, Греція 🇬🇷, Угорщина 🇭🇺, Італія 🇮🇹, Казахстан 🇰🇿, Ліхтенштейн 🇱🇮, Люксембург 🇱🇺, Нідерланди 🇳🇱, Норвегія 🇳🇴, Польща 🇵🇱, Португалія 🇵🇹, Румунія 🇷🇴, Словаччина 🇸🇰, Україна 🇺🇦, Іспанія 🇪🇸, Швеція 🇸🇪, Швейцарія 🇨🇭, Туреччина 🇹🇷, Південна Корея 🇰🇷, Велика Британія 🇬🇧.
- **Polaroid product pair** — 2 overlapping ivory polaroid cards, drag-and-drop image slots for product photos ("Продукт 1" / "Продукт 2").
- Cert paragraph (centered, with gold accent on "незалежну сертифікацію"): "Уся продукція виробляється в Німеччині відповідно до найвищих стандартів якості та проходить **незалежну сертифікацію** міжнародних інститутів, включно з:"
- **Cert grid** (2 cols mobile / 3 cols desktop): premium badge cards with:
  - Gold gradient circular tick (✓)
  - Cert name in Oswald 500 uppercase letter-spacing .04em
  - Plum gradient bg, gold border, subtle gold radial highlight in top-right corner
  - Items: **Dermatest**, **Halal и HACCP**, **Fresenius**, **ISO**, **IFS**, **ECO Control**
- **Callout pill** (dark plum, gold border, centered text): "Це підтверджує безпеку, ефективність і преміальний рівень продукції."
- Centered "Стати партнером" CTA.

### 6. Продукція бренду

- Centered title "Продукція бренду" (no eyebrow).
- Centered lead paragraph: "Німецький бренд поєднує **здоров'я, красу та lifestyle-підхід**." (bold parts in ink, rest in muted).
- Left-aligned eyebrow "Основні категорії:" (gold-soft Oswald 500 18-22px).
- **Numbered category cards** (1 col mobile / 2 cols desktop):
  - Each card: rounded plum bg, gold-numbered prefix (01-10) in Oswald 600 + category name.
  - 10 categories:
    1. Питні гелі Aloe Vera для підтримки організму
    2. Вітаміни та харчові добавки
    3. Протеїнові коктейлі FiguActive
    4. Доглядова та декоративна косметика
    5. Засоби для тіла та волосся
    6. Парфумерія
    7. Програми контролю ваги
    8. Чоловіча лінійка
    9. Дитяча лінійка
    10. Подарункові набори та міні-формати
- **Banner slider** (replaces the older separate "Схуднення" section):
  - Mobile: 64% width slides, aspect 9:12, 1 visible at a time with peek.
  - Desktop: 33% width slides (3 visible), aspect 9:13.
  - Below: arrow controls (left/right circular icon buttons) + dot indicators (active dot stretches to a pill).
  - 4-5 drag-and-drop image slots for promotional banners.

### 7. Дохід / Фінансові можливості

- **Mobile**: 2-col header (`income-head`):
  - Left: eyebrow "Дохід" + title "Фінансові можливості" (26px Oswald 600)
  - Right: 4 overlapping gold coins (€/$/€/$) with radial gradient + inner shadow, 34px each, offset -8px.
- Below: short lead "5 рівнів доходу — від першого продажу до пасивних чеків зі структури."
- Single-column checklist with 5 items (Бонус за особистий товарообіг / командний оборот / Лідерські бонуси і кваліфікаційні рівні / Авто-програма / Travel-програма).
- **Desktop**: same header layout (larger 46px title, 58px coins), checklist becomes 2-column (`income-list` max-width 880px).

### 8. Формати співпраці

Two side-by-side cards (1-col mobile / 2-col desktop):
- **VIP-клієнт** (gold-edged card): "Тільки для себе — Купуй продукт зі **знижкою від 28% до 50%** для особистого використання. Без зобов'язань і обороту."
- **Партнер** (standard card): "Бізнес-формат — Побудова **доходу через залучення клієнтів і розвиток власної структури**. Доступ до навчання і нашої підтримки 1:1."
- Each card has a small gold pill tag at the top with the format name.
- Centered CTA below.

### 9. Кому буде цікава співпраця з нами

Centered title + 1-col mobile / 2-col desktop checklist of target audiences:
- Б'юті-спеціалістам, Мамам у декреті, Підприємцям, Тим хто веде здоровий спосіб життя, Дієтологам і нутриціологам, Психологам та коучам, Блогерам, Спеціалістам онлайн, Імігрантам в Європі.

### 10. Відгуки нашої команди

- Eyebrow + title "Реальні історії наших партнерів" + lead "Скріншоти повідомлень від людей, які пройшли цей шлях разом з нами."
- **Slider of testimonial screenshots**:
  - Mobile: 62% width slides, aspect 9:14, scroll-snap, 5 image slots.
  - Desktop: 33% width slides (3 visible), 6 slots.
  - Arrow buttons (circular) + dot indicators below.
  - Drag-and-drop image slots labeled "Скріншот відгуку 1-6".

### 11. Фінальне CTA

Centered card:
- Big title "Якщо ти готовий стати **частинкою нашої команди**" (Oswald 600 uppercase, 24-44px scale)
- Subtitle "Заповни коротку анкету — і ми зв'яжемося з тобою особисто."
- Gold "Заповнити анкету" CTA.

### 12. Footer

Single line: `© 2026 YULIIA&MAX · Health & Beauty Business`

---

## Interactions & Behavior

### Sliders
Both the testimonial slider and product banner slider use a **scroll-snap** approach:
- Track is a horizontal scrollable flex container with `scroll-snap-type: x mandatory` and per-slide `scroll-snap-align: center`.
- Arrow buttons compute the current index by measuring which slide's center is closest to the track's center, then call `track.scrollTo({left, behavior:'smooth'})` for the target slide.
- Dot indicators are generated dynamically (1 dot per slide); active dot has `width: 22-30px` (pill shape) instead of round.
- Scroll listener throttled with `requestAnimationFrame` updates the active dot as the user scrolls.

Implementation in the prototype is plain vanilla JS at the bottom of each HTML file — reproduce as a `<Slider>` component in your framework. Key requirement: keyboard + touch + arrow-button navigation should all stay in sync.

### Image slots (drag-and-drop)
The prototype uses a custom `<image-slot>` web component that:
- Renders a placeholder (text label) over a dark dropzone bg.
- Accepts file drag-drop OR file picker click.
- Persists the dropped image as base64 to localStorage keyed by the slot's `id`.
- Restores on page load.

For production: replace with the project's own image upload component, or skip entirely and accept image URLs as props for each placeholder. The image slots in the design are intentional — the user (the brand owner) fills in their own photos in their browser. In the live site, these should be pre-populated by the CMS / content layer.

### CTAs (animated gold buttons)
All `.cta` buttons share the same look:
- Background: 5-stop gradient `#f8e3a0 → #f0c769 → #d9a554 → #f0c769 → #b88636` (200% height, position 0%).
- Text: `#1a1208` (deep brown), Oswald 700 uppercase letter-spacing .1-.14em.
- Multi-layer shadow: outer gold glow + dark drop + inset light top + inset dark bottom.
- **Shine animation**: `::before` pseudo-element with diagonal white gradient strip translated -130% → +130% over 3.2s ease-in-out infinite, `mix-blend-mode: overlay`.
- **Pulse animation**: shadow values oscillate 2.6s ease-in-out infinite.
- **Hover**: `translateY(-1 to -3px)`, background-position animates to 100% (darker bottom of gradient becomes top), brighter shadow.
- **Active**: `translateY(0 or +1px)`.
- **prefers-reduced-motion**: animations disabled, shine hidden.

### Smooth section transitions
The body has a fixed-attachment plum gradient (`background-attachment: fixed`). Most sections are transparent backgrounds layered on top — no per-section solid bg, so there are no visible seams. The hero and about sections use `::after` overlay gradients to fade the photo backgrounds smoothly into the body gradient. Replicate this behavior so scroll doesn't show step-like color jumps.

### Polaroid pairs
Two ivory cards overlapping with manual rotations:
- `.polaroid.r-1`: `rotate(-6deg) translate(8-10px, 4-6px)` `z-index: 2`
- `.polaroid.r-2`: `rotate(5deg) translate(-8-10px, -2-4px)` `margin-left: -22 to -30px` `z-index: 1`
- `.polaroid.r-3 / .r-4`: similar but flipped rotation direction for variety.
- Each has a `::after` strip at the bottom for the classic polaroid lip.

### Responsive breakpoints
- **Mobile prototype**: max-width 420px column.
- **Desktop prototype**: full-width, breaks at:
  - `1100px` — reduce gutters/font sizes, drop some grid columns.
  - `880px` — collapse most multi-col layouts to single column.
  - `380px` — tighten further inside mobile.

In production target the same breakpoints, or whatever the codebase already uses — the design tolerates small variation as long as the section order and content hierarchy stay intact.

---

## Assets

All assets live next to the HTML files in this bundle:

| File | What it is | Used in |
|---|---|---|
| `hero-couple.png` | Cutout PNG of Yuliia + Max (provided by client) — transparent background, dark clothing | Hero (both mobile + desktop) |
| `about-couple.png` | Cutout PNG of the couple looking at a phone — transparent background | About section |
| `image-slot.js` | Custom web component for drag-and-drop image placeholders | All `<image-slot>` references — replace with the codebase's image system for prod |

**Brand logo, product photos, testimonial screenshots, event photos** — NOT included. The design uses drag-and-drop slots so the brand owner fills them in. In production these should be content-managed (CMS or static asset folder).

**Icons** — all inline SVG (no icon library dependency). Look for `<svg viewBox="0 0 24 24">` blocks. Style: 1.8px stroke, rounded line caps/joins, single-color stroke (currentColor).

**Flags** — emoji flag characters (🇩🇪 🇺🇦 etc.). No icon library required. Use the project's emoji font support; falls back to the OS emoji renderer.

---

## Files

Source design files included in this folder:

- `Valevska Landing.html` — Mobile version (420px column)
- `Valevska Landing - Desktop.html` — Desktop version (full-width, responsive down to 880px)
- `styles.css` — All mobile CSS (linked from the mobile HTML)
- `styles-desktop.css` — All desktop CSS (linked from the desktop HTML)
- `image-slot.js` — Web component for image placeholders
- `hero-couple.png` / `about-couple.png` — Cutout PNGs

The mobile and desktop are deliberately separate files in the prototype (so non-coding stakeholders can review both viewports independently). In production, ship one responsive page — desktop styles activate above ~880px.

---

## Production notes

1. **One responsive page, not two**. Merge the mobile + desktop into a single component tree; gate layouts with CSS media queries or the framework's responsive utilities.
2. **Form**: the final CTA "Заповнити анкету" currently points to `#form`. Hook this up to a real lead-capture form — name, contact (Instagram/Telegram/phone), short message. Either submit to a CRM webhook or email.
3. **CMS-driven content**: most text strings and all image slots should come from a content layer. Identify which strings are likely to change (numbers, country list, testimonials, banner images) and externalize them.
4. **SEO**: page title, meta description, OG tags. Title `<title>YULIIA&MAX — Міжнародний бізнес у сфері здоров'я та краси</title>` is already in the prototype.
5. **Locale**: design is in Ukrainian. If multilingual support is needed (likely — Spanish, given the TOP-2 Іспанія claim), wire copy through an i18n layer.
6. **Brand identity**: do NOT name the German wellness brand explicitly anywhere. The design intentionally uses the generic phrasing "німецький бренд" — keep this throughout.
7. **Accessibility**:
   - All CTAs are real `<a>` or `<button>` elements (not divs).
   - Section landmarks via `aria-label`.
   - Reduced-motion preference respected.
   - Color contrast: gold-soft (#e8c879) on plum (#1a0716) passes WCAG AA for large text; check small body text uses `--ink` (#f4ead9) which is ~13:1 ratio.
   - Add `alt` attributes for all real images that ship with the page.

---

## Open questions for the client

These should be confirmed before shipping:
- Final lead-capture mechanism (form endpoint? Telegram bot? IG DM CTA?).
- Whether the Instagram handle `_businesswithlove_lr` is the production handle.
- Confirmed list of countries (the design has 29; client may have an authoritative list).
- Real product photos and testimonial screenshots to replace the drag-and-drop slots.
- Production logo file (PNG or SVG) for the brand logo slot.
- Whether the brand pricing claim "знижка від 28% до 50%" is the final copy.
