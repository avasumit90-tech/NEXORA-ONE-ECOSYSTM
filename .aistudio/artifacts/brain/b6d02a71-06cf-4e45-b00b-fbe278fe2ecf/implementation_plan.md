# Nexora One — Final Home Page Implementation Plan
## One-Pass Consolidated Blueprint (Frozen Version)

This document establishes the single, authoritative architectural blueprint for building **only the Home Page (`/`)** of Nexora One, aligning strictly with `Nexora_One_Home_Page_PRD.md` for page structure and functionality, and `design.md` for visual tokens.

---

## 1. Scope & Source-of-Truth Hierarchy

- **Source Order of Authority**:
  1. `Nexora_One_Home_Page_PRD.md`: Defines Home Page scope, content order, navigation, interaction rules, and mobile behavior.
  2. `design.md`: Defines colors, typography, spacing, shapes, motion, and accessibility tokens.
- **Strict Single-Page Scope**:
  - Build **only** the Home Page (`/`), including its shared Header and Footer.
  - The eventual 11-page roadmap (About, Customer, Salon Owner, Growth Partner, B2B Market, Investors, Join, Salon Jobs, Real Estate, Food Delivery) is strictly deferred. Zero secondary routes, placeholder screens, dashboards, or booking engines will be created in this phase.
  - Survey functionality remains permanently cancelled.

---

## 2. Design System & Approved Tokens

### 2.1 Core Palette (Zapocuts-Style UI — Exactly Three Colors)
- **Canvas / Background**: `#0A0705` (`--color-1`)
- **Accent (Primary CTA / Active)**: `#10B981` (`--accent`)
- **Text Light**: `#F0E9E7` (`--text`)

### 2.2 Minimal Documented Token Derivations (Via `color-mix()`)
*All auxiliary surface, hover, border, glass, and shadow tokens derive strictly from the three approved tokens above. Unapproved raw colors (e.g. `#14100D`, `#059669`, or any gold hex) are banned:*
- **Elevated Surface**: `color-mix(in srgb, var(--color-1) 92%, var(--text) 8%)` (`--surface`)
- **Accent Hover / Pressed**: `color-mix(in srgb, var(--accent) 85%, var(--color-1) 15%)` (`--accent-hover`)
- **Accent Subtle (Badge background)**: `color-mix(in srgb, var(--accent) 12%, transparent)` (`--accent-subtle`)
- **Text Muted**: `color-mix(in srgb, var(--text) 60%, transparent)` (`--text-muted`)
- **Hairline Border**: `color-mix(in srgb, var(--text) 8%, transparent)` (`--border-subtle`)
- **Accent Border**: `color-mix(in srgb, var(--accent) 30%, transparent)` (`--border-accent`)
- **Glass Surface**: `color-mix(in srgb, var(--text) 4%, transparent)` (`--surface-glass`)
- **Glass Border**: `color-mix(in srgb, var(--text) 8%, transparent)` (`--border-glass`)
- **Glass Blur**: `12px` (`--blur-glass`)
- **Soft Shadow**: `0 8px 32px -4px color-mix(in srgb, var(--color-1) 50%, transparent)` (`--shadow-soft`)
- **Product Card Width**: `280px` (`--card-width-product`)
- **Minimum Touch Target**: `44px` (`--touch-target-min`)
- **Header Height**: `64px` (`--header-height`)

### 2.3 Typography Scale
- **Headings**: `Space Grotesk` (weights 600, 700)
- **Body & Controls**: `Inter` (weights 400, 500, 600)
- **Numeric & Dates**: `Manrope` (tabular numerals)
- **Hero Headline**: Approved 76px (`text-3xl`) on desktop, scaling down to approved 36px (`text-2xl`) on mobile/tablet.
- **Section Headings**: Approved 36px (`text-2xl`).

---

## 3. Exact Home Page Section Order & Content

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. Section A — Global Header                                           │
│    - Wordmark: "Nexora One"                                            │
│    - Valid Links: Home (#home), Ecosystem (#ecosystem),                │
│      Products (#products), Who It's For (#audiences), About (#about)   │
│    - Primary CTA: "Apna Option Chunein" (-> #audiences)                │
│    - Mobile Drawer: id="mobile-menu", focus trap & return, Escape close│
├────────────────────────────────────────────────────────────────────────┤
│ 2. Section B — Hero Section (`id="home"`)                              │
│    - Eyebrow: "Nexora One"                                             │
│    - Headline: "Apne kaam ka digital platform, ek hi jagah."           │
│    - Supporting: "Salon ki website banani ho, beauty service           │
│      dhoondhni ho, job dekhni ho ya apna business badhana ho —         │
│      apna option chunein."                                             │
│    - Primary CTA: "Apna Option Chunein" (-> #audiences)                │
│    - Secondary CTA: "Products Dekhein" (-> #products)                  │
│    - Visual: Genuine repo image/screenshot first; CSS/SVG device       │
│      mockup with emerald glow fallback if none available                │
├────────────────────────────────────────────────────────────────────────┤
│ 3. Section C — Audience Choice Cards (`#audiences`)                   │
│    - Heading: "Aap Nexora par kis kaam se aaye hain?"                  │
│    - Supporting: "Apne kaam ka option chunein."                        │
│    - Grid: Mobile 2-col (5th card spans full row), Tablet 3-col,       │
│      Desktop 5-col. Each card: icon, benefit, defined next action      │
├────────────────────────────────────────────────────────────────────────┤
│ 4. Section D — Product Showcase (`#products`)                          │
│    - Heading: "Nexora ke Products"                                     │
│    - Supporting: "Alag-alag zarooraton ke liye alag products —         │
│      ek hi jagah se explore karein."                                   │
│    - Row 1: Beauty & Business Products (5 cards)                       │
│    - Row 2: Other Products (3 cards)                                   │
│    - Compact horizontal rows: 280px cards, touch swipe, hidden         │
│      scrollbars, accessible desktop arrow controls, overflow-x-clip     │
├────────────────────────────────────────────────────────────────────────┤
│ 5. Section E — Ecosystem Categories (`#about` & `#ecosystem`)          │
│    - Narrative Top Anchor: #about ("Ecosystem Vision")                 │
│    - Categories Grid Anchor: #ecosystem                                │
│    - Heading: "Nexora ka ecosystem"                                    │
│    - Supporting: "Beauty se lekar business ki doosri zarooraton tak,   │
│      alag-alag digital products."                                      │
│    - 7 Categories: Beauty, Real Estate, Food Delivery, Jobs, Commerce, │
│      Advertising, AI & Technology                                      │
├────────────────────────────────────────────────────────────────────────┤
│ 6. Section F — Simple “How It Works” Strip (`#how-it-works`)          │
│    - Heading: "Shuru kaise karein?"                                    │
│    - 3 Steps: 1. Apna option chunein, 2. Relevant product dekhein,     │
│      3. Join karein ya use karna shuru karein                          │
├────────────────────────────────────────────────────────────────────────┤
│ 7. Section G — Final CTA (`#cta`)                                      │
│    - Heading: "Nexora mein apne kaam ka option chunein."               │
│    - Supporting: "Apni zaroorat ke hisaab se product ya partnership    │
│      explore karein."                                                  │
│    - CTA: "Apna Option Chunein" (-> #audiences)                        │
├────────────────────────────────────────────────────────────────────────┤
│ 8. Section H — Global Footer                                           │
│    - Wordmark & description, working section anchors, dynamic copyright│
│    - Mobile: Compact collapsible accordion (visible, no blank space)   │
│    - Desktop/Tablet: Multi-column directory                            │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Audience Cards & Truthful Destination Mapping

| # | Audience Card | Plain Hinglish Benefit | Defined Next Step Destination |
|---|---|---|---|
| 1 | **Customer** | Salon aur beauty services dhoondhein. | Scrolls to `#products` (Row 1 — Customer App card) |
| 2 | **Salon / Shop Owner** | Apne business ko online laayein. | Scrolls to `#products` (Row 1 — SalonOS & White-label card) |
| 3 | **Growth Partner** | Salons ko Nexora se jodne ka kaam samjhein. | Scrolls to `#products` (Row 1 — Growth Partner platform card) |
| 4 | **B2B Market** | Distributor ya Manufacturer ke roop mein explore karein. | Scrolls to `#products` (Row 1 — B2B Marketplace card) |
| 5 | **Investor** | Business model aur current progress dekhein. | Clearly marked as coming in a future phase (`"Agli phase mein aayega"` / disabled button `"Page Coming in Future Phase"`) — no false `#about` redirect or invented data |

*Grid layout: Mobile 2 columns with 5th card spanning `col-span-2`; Tablet 3 columns; Desktop 5 columns.*

---

## 5. Product Showcase: 8 Products & Status/URL Management

Centralized in `/src/config/nexoraConfig.ts`:

### Row 1: Beauty and Business Products
1. **Customer App**: `benefit: 'Salons aur beauty services dhoondhein aur book karein.'`
2. **SalonOS**: `benefit: 'Salon management, billing, staff aur appointments sambhalein.'`
3. **White-label Salon Website / Website Templates**: `benefit: 'Salon ke apne naam par customized booking website.'`
4. **Growth Partner platform**: `benefit: 'Local salons ko platform se jodne aur expand karne ka network.'`
5. **B2B Marketplace**: `benefit: 'Distributors aur manufacturers ke saath direct inventory trade.'`

### Row 2: Other Products
6. **Salon Jobs**: `benefit: 'Beauticians, hair stylists aur salon staff ke liye job listings.'`
7. **No-Broker Real Estate**: `benefit: 'Salons aur commercial shops ke liye direct listing aur leasing.'`
8. **Food Delivery**: `benefit: 'Food ordering aur restaurant discovery platform.'`

### Status & Link Verification Protocol
- **Repository Audit Result**: No external URLs are configured in `.env.example` or repository files.
- **Product Owner Context**: Salon Jobs, No-Broker Real Estate, and Food Delivery are existing products (*owner ke mutabiq bane hain; URL aur functionality verify karni hai*).
- **Rule Against Invented Claims**: Because exact live URLs and production workflows have not yet been provided in the repository, cards will not claim a false verified `Live Website` status.
- **Card Action Behavior**:
  - `status: null` (status badge is quietly omitted until verified).
  - Button Action: Displays a clean disabled state `"Link Pending Confirmation"` with clear assistive label, ensuring zero dead clicks, zero broken external redirects, and zero fake destinations.
  - When exact URLs are confirmed by the owner, they will be inserted into `/src/config/nexoraConfig.ts` with status updated to `Live Website` and `target="_blank"` with `rel="noopener noreferrer"`.

---

## 6. Section E: 7 Ecosystem Categories

Anchor structure: Top intro block holds `id="about"` (resolving the header About link); the 7-card grid holds `id="ecosystem"`.

1. **Beauty**: Salons, parlours aur wellness services.
2. **Real Estate**: Commercial spaces aur salon properties.
3. **Food Delivery**: Food ordering aur local restaurants.
4. **Jobs**: Salon aur beauty industry ke jobs.
5. **Commerce**: Inventory, equipment aur salon supplies.
6. **Advertising**: Local business visibility aur promotions.
7. **AI & Technology**: Salon management software aur smart tools.

---

## 7. Component Hierarchy & File Structure

```
src/
├── config/
│   └── nexoraConfig.ts          # Central data: products, categories, audiences, navigation
├── components/
│   ├── ui/
│   │   ├── Button.tsx           # Primary pill, outline secondary, disabled states
│   │   ├── GlassCard.tsx        # Glassmorphic container with --border-glass & hover scale
│   │   ├── StatusBadge.tsx      # Verified status chip (renders only when status !== null)
│   │   └── SectionHeading.tsx   # Consistent section heading + Hinglish subtitle
│   ├── AudienceCard.tsx         # Audience card (icon, title, benefit, defined next step)
│   ├── AudienceCards.tsx        # Section C grid (2-col mobile, 3-col tablet, 5-col desktop)
│   ├── ProductCard.tsx          # 280px card, SVG icon fallback, Hinglish copy, non-nested action
│   ├── HorizontalProductRow.tsx # Row with touch swipe, hidden scrollbar, accessible arrow buttons
│   ├── ProductShowcase.tsx      # Section D container with Row 1 & Row 2
│   ├── EcosystemCard.tsx        # Category card for Section E
│   ├── EcosystemCategories.tsx  # Section E (#about intro + #ecosystem 7-card grid)
│   ├── HowItWorks.tsx           # Section F 3-step strip
│   ├── Hero.tsx                 # Section B (id="home") with headline, dual CTAs, asset/mockup visual
│   ├── Header.tsx               # Section A sticky header with active link, mobile drawer toggle
│   ├── MobileMenu.tsx           # Drawer with id="mobile-menu", focus trap & return, Escape close
│   ├── FinalCTA.tsx             # Section G call-to-action
│   └── Footer.tsx               # Section H: mobile compact accordion, desktop multi-column
├── App.tsx                      # Main single-page shell with wrapper overflow-x-clip
├── index.css                    # CSS variables from design.md & scroll utilities
└── main.tsx                     # React entry point
```

---

## 8. Interactions, Motion & Accessibility

- **Framer Motion**:
  - Hero headline: fade in and slide up (`y: 20 -> 0`, `duration: 0.6s`, `easeOut`).
  - Hero visual: fade in with subtle scale (`0.96 -> 1`).
  - Cards and sections: restrained fade-up entrance triggered once in view.
  - Card/Logo hover: `scale-[1.05]` and subtle shadow on pointer-capable devices.
  - `prefers-reduced-motion`: disables Framer Motion transforms and forces `scroll-behavior: auto !important`.
- **Carousel Arrow Controls**:
  - Left button: `aria-label="Pichhle products"`, disabled when scrolled to start (`atStart`).
  - Right button: `aria-label="Agle products"`, disabled when scrolled to end (`atEnd`).
  - Keyboard accessible (`Tab`, `Enter`, `Space`).
  - No nested interactive elements inside cards.
- **Header & Navigation**:
  - Valid anchors: `#home`, `#ecosystem`, `#products`, `#audiences`, `#about`.
  - `scroll-margin-top: 5rem` on all section IDs to prevent content hiding under the 64px sticky header.
  - Mobile drawer: `id="mobile-menu"`, `aria-controls="mobile-menu"`, auto-close on anchor selection or outside click, focus returns to hamburger button on close.
  - Active nav link indicated via current scroll position.
- **SEO & Viewport**:
  - Viewport: `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />` (pinch-to-zoom preserved).
  - Title: `<title>Nexora One — Salon, Beauty aur Business ke Digital Products</title>`.
  - Meta Description: `<meta name="description" content="Nexora One par salon website, beauty discovery, salon jobs, real estate aur food delivery products explore karein." />`.
  - Single `<h1>` in Hero, followed by nested `<h2>` and `<h3>`.

---

## 9. Planned Responsive Verification Plan

*The following viewports will be actively tested during execution:*
- **320px & 360px** (Narrow mobile / small Android): Zero horizontal page overflow, compact header, audience grid 2-col (5th card spanning `col-span-2`), compact mobile footer accordion visible, touch targets $\ge 44$px.
- **375px, 390px, 414px, 430px** (Standard / Plus / Max iOS): 36px hero typography, natural finger swiping for product rows, mobile drawer operates smoothly with focus return.
- **768px** (Tablet): 3-column audience reflow, desktop navigation active, multi-column footer visible.
- **1024px & 1440px** (Desktop): Full 5-column audience grid, carousel desktop arrow buttons active, 76px hero typography, centered max-width container (`max-w-7xl`).

---

## 10. Catalog of Pending Production URLs

*These products are built or planned per owner information, but exact production domain URLs are currently pending confirmation:*
1. **SalonOS**: Pending production domain URL
2. **White-label Salon Website**: Pending production showcase URL
3. **Salon Jobs**: Pending production portal URL
4. **No-Broker Real Estate**: Pending production platform URL
5. **Food Delivery**: Pending production platform URL
6. **Customer App**: Pending production app/demo URL
7. **Growth Partner platform**: Pending onboarding URL
8. **B2B Marketplace**: Pending trade platform URL

---

## 11. Acceptance Checklist

- [ ] Home page (`/`) is the ONLY page implemented.
- [ ] No secondary routes, placeholder pages, dashboards, or surveys exist.
- [ ] Header includes wordmark, 5 valid links (`#home`, `#ecosystem`, `#products`, `#audiences`, `#about`), and `Apna Option Chunein` CTA.
- [ ] Mobile drawer operates with `id="mobile-menu"`, Escape close, and focus return.
- [ ] Hero section has `id="home"`, Space Grotesk headline, everyday Hinglish copy, dual CTAs, and asset/mockup visual.
- [ ] 5 audience cards render with truthful destinations and 2/3/5 column responsive layout. Investor card clearly indicates future phase without false `#about` redirect.
- [ ] Product showcase features exactly 8 products across 2 horizontal rows with arrow controls.
- [ ] 7 ecosystem categories render under Section E with distinct `#about` and `#ecosystem` anchors.
- [ ] How It Works strip renders 3 concise steps.
- [ ] Final CTA scrolls to `#audiences`.
- [ ] Footer is visible in compact accordion format on mobile, multi-column on desktop.
- [ ] Zapocuts-style palette (`#0A0705`, `#10B981`, `#F0E9E7`) used throughout; all auxiliary tokens derive strictly via `color-mix()`; no unapproved colors.
- [ ] Zero page-level horizontal overflow (`overflow-x-clip` on wrapper).
- [ ] Tested across all 9 target viewports (320px to 1440px).
