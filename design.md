# Nexora One — Design System (`design.md`)

## 1. Overview

**Project:** Nexora One  
**Brand Design:** Zapocuts-style UI  
**Allowed Core Palette:** 
- Dark Background Canvas: `#0A0705` (`--color-1`)
- Card & Container Surface: `#161616` (`--surface-card`)
- Emerald Accent: `#10B981` (`--accent`)
- Warm Off-White Text: `#F0E9E7` (`--text`)

**Token Derivation Rule:** Secondary/muted text, borders, glass tints, and shadows derive strictly via `color-mix()` or transparency from approved tokens. Raw unapproved values or CSS gold are strictly prohibited. Gold inside reference imagery remains part of that imagery and is NOT a CSS UI color.  
**Scope:** Home Page Only (`/`).

---

## 2. Design Tokens

### 2.1 Color Tokens

| Semantic Token | CSS Variable | Hex / Definition | Role |
|---|---|---|---|
| `color.canvas` | `--color-1` | `#0A0705` | Main website background surface |
| `color.surface.card` | `--surface-card` | `#161616` | Dedicated card, container, panel & modal background |
| `color.accent` | `--accent` | `#10B981` | Primary emerald accent for key CTAs & active states |
| `color.accent.hover` | `--accent-hover` | `color-mix(in srgb, var(--accent) 85%, var(--color-1) 15%)` | Emerald hover / active state |
| `color.accent.subtle` | `--accent-subtle` | `color-mix(in srgb, var(--accent) 12%, transparent)` | Subtle emerald badge background |
| `color.text.light` | `--text` | `#F0E9E7` | Primary text and bright headers |
| `color.text.muted` | `--text-muted` | `color-mix(in srgb, var(--text) 60%, transparent)` | Secondary copy derived strictly from `--text` |
| `color.border.subtle` | `--border-subtle` | `color-mix(in srgb, var(--text) 8%, transparent)` | Card borders and subtle dividers |
| `color.border.accent` | `--border-accent` | `color-mix(in srgb, var(--accent) 30%, transparent)` | Active borders and focus rings |

#### Usage of `--surface-card: #161616`
Use `--surface-card` consistently across:
- Audience navigation cards
- Service and platform cards
- Ecosystem visual container and detail cards
- Feature highlight cards
- Dropdown panels, modal dialogs, and elevated dark containers
- Form containers and product previews

The main website body canvas remains `#0A0705`; all elevated cards and containers use `#161616` to create crisp visual contrast and clear separation.

---

### 2.2 Glassmorphism, Elevation & Sizing Tokens

| Semantic Token | CSS Variable | Value / Definition | Role |
|---|---|---|---|
| Glass Blur | `--blur-glass` | `12px` | Backdrop filter blur |
| Glass Surface | `--surface-glass` | `color-mix(in srgb, var(--surface-card) 85%, transparent)` | Card glassmorphism tint |
| Glass Border | `--border-glass` | `color-mix(in srgb, var(--text) 8%, transparent)` | Hairline container border |
| Soft Shadow | `--shadow-soft` | `0 8px 32px -4px color-mix(in srgb, var(--color-1) 50%, transparent)` | Card depth & hover elevation |
| Product Card Width | `--card-width-product` | `280px` | Base width for horizontal service cards |
| Minimum Touch Target | `--touch-target-min` | `44px` | Minimum touch dimension for accessibility |
| Header Height | `--header-height` | `64px` | Sticky header height offset reference |

---

### 2.3 Typography Tokens

- **Space Grotesk:** Primary display headings, hero title, section headings (`font-display`).
- **Inter:** Body prose, navigation links, buttons, and UI labels (`font-sans`).
- **Manrope:** Numeric highlights, tabular figures, and dates.
- **ui-sans-serif:** System fallback.

| Type Token | Size | Line Height | Use |
|---|---|---|---|
| `text-xs` | 11px | 16px | Compact status badges, timestamps |
| `text-sm` | 13px | 18px | Helper text, secondary descriptions |
| `text-base` | 14px | 22px | Default body copy, standard controls |
| `text-lg` | 16px | 24px | Card descriptions, lead-in text |
| `text-xl` | 18px | 26px | Card titles, subsection headings |
| `text-2xl` | 36px | 1.2 | Major section headings & mobile hero |
| `text-3xl` | 76px | 1.1 | Large desktop hero headline |

---

### 2.4 Spacing & Shape Tokens

- **Spacing Scale:**
  - `space-1` (4px), `space-2` (5px), `space-3` (6px), `space-4` (8px), `space-6` (12px)
  - `space-8` (16px), `space-10` (20px), `space-12` (24px), `space-14` (32px), `space-16` (44px)
  - `space-18` (56px), `space-20` (80px), `space-22` (100px)
- **Radius Tokens:**
  - `radius-sm` (7px): Compact status tags
  - `radius-md` (8px): Form inputs, secondary buttons
  - `radius-lg` (24px): Cards, containers, hero visual frame
  - `radius-pill` (100px): Primary CTA buttons
  - `radius-circle` (50%): Round icon containers

---

### 2.5 Motion Tokens

| Motion Token | Duration | Timing | Use |
|---|---|---|---|
| `motion-fast` | 0.2s | `ease-out` | Button hover, icon transitions |
| `motion-border` | 0.25s | `ease-out` | Border highlight |
| `motion-entrance` | 0.6s | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero headline slide-up & card reveal |
| `motion-none` | 0s | `linear` | When `prefers-reduced-motion` is active |

Card / Logo hover: Subtle `1.05` scale and soft shadow on pointer devices only.

---

## 3. Responsive & Accessibility Rules

1. **Global Reset:** `box-sizing: border-box`, `html, body, #root { width: 100%; max-width: 100%; overflow-x: hidden; }`.
2. **Sticky Header & Scroll Margins:** All sections with IDs use `scroll-margin-top: calc(var(--header-height) + 1.5rem)`.
3. **Smooth Scroll:** `scroll-behavior: smooth` on `html`, disabled under `prefers-reduced-motion: reduce`.
4. **Horizontal Service Carousel:** Outer wrapper has `overflow-x-clip`, inner scroller has `overflow-x-auto scrollbar-none snap-x snap-mandatory`.
5. **Mobile Footer:** Compact collapsible accordion on mobile without dead space; multi-column directory on tablet/desktop.
