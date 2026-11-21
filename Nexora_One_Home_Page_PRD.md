# Nexora One — Home Page PRD (Phase 1 Final Source)

## ROLE
Act as a senior product designer, UX architect, and frontend engineer. Build the **Home Page only** (`/`) for Nexora One, including the shared site Header and Footer components. Treat this document as the source of truth for scope, content, and layout.

---

## 1. Product Overview & Core Proposition
- **Brand:** Nexora One
- **Website Type:** Multi-service ecosystem entry point and showcase gateway.
- **Positioning:** Nexora One is the entry point connecting salon owners, beauty customers, local partners, and commercial services. It does not deliver every service directly inside the entry page.
- **Central Value Proposition:**
  > **“Free beauty website + 30+ templates + real Growth Partner-assisted onboarding + one connected beauty ecosystem.”**
- **Supporting Hinglish Copy:**
  > **“Free beauty website, 30+ templates aur Growth Partner ki onboarding help — sab ek connected beauty ecosystem mein.”**
- **Audience:** Salon/shop owners, customers, Growth Partners, B2B distributors/manufacturers, investors, job seekers, property seekers, and food delivery users.
- **Language:** Clear, professional English paired with everyday natural Indian Hinglish. Avoid awkward literal translations, cheap slogans, corporate jargon, and AI-sounding copy.
- **Scope Limit:** Home Page (`/`) only. Future 11-page website roadmap is strictly deferred. No survey, no booking engine, and no separate dashboards.

---

## 2. Design System Tokens & Surface Rules
Follows `design.md` as the styling authority:
- **Canvas Background:** `--color-1: #0A0705` (Main dark surface)
- **Card & Container Background:** `--surface-card: #161616` (Dark Charcoal / Near Black for all elevated cards, containers, panels, and modals)
- **Emerald Accent:** `--accent: #10B981` (Primary actions and focus rings)
- **Warm Off-White Text:** `--text: #F0E9E7`
- **Muted Text:** `--text-muted: color-mix(in srgb, var(--text) 60%, transparent)`
- **Fonts:** Space Grotesk (display headings), Inter (body, UI, navigation, buttons), Manrope (numbers & dates).
- **Glass & Elevation:** `--surface-glass`, `--border-glass`, `--shadow-soft` (derived via `color-mix`).
- **No Gold UI Colour:** Gold in reference graphics is treated strictly as image content; no gold CSS tokens exist.

### Where `--surface-card: #161616` Is Used:
- Audience navigation cards
- Service and platform showcase cards
- Ecosystem visual container and detail cards
- Feature highlight blocks
- Modal surfaces, dropdown drawers, and elevated containers

---

## 3. Clear Section Titles & Home Page Flow

### Section A — Global Header
- **Wordmark:** `Nexora One` in Space Grotesk.
- **Navigation Links:** `Home` (`#home`), `Ecosystem` (`#ecosystem`), `Products` (`#products`), `Who It's For` (`#audiences`), `About` (`#about`).
- **Primary CTA:** `Apna Option Chunein` (scrolls to `#audiences`).
- **Mobile Menu:** Accessible drawer with `id="mobile-menu"`, `aria-controls="mobile-menu"`, focus trap & return, Escape close.
- **Behavior:** 64px sticky header with smooth scrolling and `scroll-margin-top` offset compensation.

### Section B — Hero Section (`id="home"`)
- **Eyebrow:** `Nexora One`
- **Headline (Space Grotesk):** `Apne kaam ka digital platform, ek hi jagah.`
- **Central Proposition:**
  `Free beauty website, 30+ templates aur Growth Partner ki onboarding help — sab ek connected beauty ecosystem mein.`
- **Primary CTA:** `Apna Option Chunein` (scrolls to `#audiences`).
- **Secondary CTA:** `Explore Services` (scrolls to `#products`).
- **Visual Asset:** Genuine Nexora connected ecosystem Hero reference or clean CSS/SVG mockup frame highlighting the connected ecosystem without fake data.

### Section C — Audience Section (`id="audiences"`)
- **Section Title:** `What are you looking for?`
- **Supporting Line:** `Apne kaam ka option chunein.`
- **5 Audience Navigation Cards (Using `--surface-card: #161616`):**
  1. **Customer** — `Salon aur beauty services dhoondhein.` → Scrolls to `#products` (Customer App)
  2. **Salon / Shop Owner** — `Apne business ko online laayein aur website banayein.` → Scrolls to `#products` (SalonOS / White-label)
  3. **Growth Partner** — `Salons ko Nexora se jodne ka kaam samjhein.` → Scrolls to `#products` (Growth Partner Network)
  4. **B2B Market** — `Distributor ya Manufacturer ke roop mein explore karein.` → Scrolls to `#products` (B2B Marketplace)
  5. **Investor** — `Business model aur current progress dekhein.` → Clearly marked: `Agli phase mein aayega` (Future phase notice)
- **Grid Layout:** 2 columns on mobile (5th card spans full row), 3 columns on tablet, 5 columns on desktop.

### Section D — Service & Platform Showcase (`id="products"`)
- **Section Title:** `Explore Our Services & Platforms`
- **Supporting Line:** `Alag-alag zarooraton ke liye specific digital products — ek hi jagah se explore karein.`
- **Exactly 8 Unique Service / Platform Cards (in two horizontal rows):**
  - **Row 1 — Beauty and Business:**
    1. **Customer App** — Salons aur beauty services dhoondhein aur book karein.
    2. **SalonOS** — Salon management, billing, staff aur appointments sambhalein.
    3. **White-label Salon Website / Website Templates** — Salon ke apne naam par customized booking website (30+ templates).
    4. **Growth Partner Network** — Local salons ko platform se jodne aur expand karne ka network.
    5. **B2B Marketplace** — Distributors aur manufacturers ke saath direct inventory trade.
  - **Row 2 — Other Services:**
    6. **Salon Jobs** — Beauticians, hair stylists aur salon staff ke liye job listings.
    7. **No-Broker Real Estate** — Salons aur commercial shops ke liye direct listing aur leasing.
    8. **Food Delivery** — Food ordering aur restaurant discovery platform.
- **Card Specifications:**
  - Container: `--surface-card: #161616`, `--card-width-product: 280px`.
  - Icon/Image reference fallback with descriptive `alt`.
  - Plain Hinglish benefit.
  - Action link: Direct external link when verified; clean disabled state `"Link Pending Confirmation"` when URL is pending. Zero fake links.
  - Row controls: Touch swipeable on mobile, hidden native scrollbars, accessible desktop arrow buttons (`aria-label="Pichhle products"` / `aria-label="Agle products"`), `overflow-x-clip` on parent.

### Section E — Ecosystem Section (`id="about"` & `#ecosystem`)
- **Section Title:** `One Ecosystem, Multiple Services`
- **Supporting Line:** `Beauty se lekar business ki doosri zarooraton tak, ek connected framework.`
- **Visual Architecture:** Connected network diagram / visual overview showing how salons, customers, partners, and B2B trade interconnect, rather than repeating the same 8 services as another redundant product grid.
- **Anchors:** Top narrative holds `id="about"` (resolving the header About link); visual ecosystem holds `id="ecosystem"`.

### Section F — Getting Started (`id="how-it-works"`)
- **Section Title:** `How to Get Started`
- **Supporting Line:** `Teen aasaan steps mein platform explore karein.`
- **3 Concise Steps:**
  1. `Apna option chunein`
  2. `Relevant product dekhein`
  3. `Join karein ya use karna shuru karein`

### Section G — Final CTA (`#cta`)
- **Section Title:** `Nexora mein apne kaam ka option chunein.`
- **Supporting Line:** `Free beauty website, 30+ templates aur Growth Partner support ke saath shuru karein.`
- **Primary CTA:** `Apna Option Chunein` (scrolls to `#audiences`).

### Section H — Global Footer
- Reusable footer for the Home Page.
- Wordmark `Nexora One` and concise summary.
- Working section links (`#home`, `#about`, `#ecosystem`, `#products`, `#audiences`, `#how-it-works`).
- Product links shown only when verified URLs exist.
- Dynamic copyright year.
- **Mobile Rule:** Compact collapsible accordion on mobile (visible, no blank space, no booking dock); full multi-column layout on tablet/desktop.

---

## 4. Non-Negotiable Constraints
1. **Scope:** Home Page (`/`) ONLY. Do not create the other 10 pages.
2. **Surveys:** Permanently cancelled.
3. **No Duplicate Offerings:** Each product card appears exactly once in Section D.
4. **URL Verification:** Never invent URLs or claim unverified `Live Website` status.
5. **Responsiveness:** Mobile-first, tested across 320px to 1440px.
