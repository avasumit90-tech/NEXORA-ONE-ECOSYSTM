# Nexora One — Design System (`design.md`)

## 1. Overview

**Project:** Nexora One  
**Brand Design:** Zapocuts-style UI  
**Allowed Palette:** Exactly three color tokens: Dark Charcoal Canvas (`#0A0705`), Emerald Accent (`#10B981`), Warm Off-White (`#F0E9E7`).  
**Token Derivation Rule:** All secondary/muted text, surfaces, hover states, borders, glass surfaces, and shadows must be derived strictly via `color-mix()` or transparency from these three approved tokens. Raw unapproved values (such as `#14100D`, `#059669`, or any gold hex) are strictly prohibited.  
**Scope:** Home Page Only (`/`).

---

## 2. Design Tokens

### 2.1 Core Palette & Derived Tokens

| Semantic Token | CSS Variable | Value / Definition | Role |
|---|---|---|---|
| `color.canvas` | `--color-1` | `#0A0705` | Main dark background surface |
| `color.surface` | `--surface` | `color-mix(in srgb, var(--color-1) 92%, var(--text) 8%)` | Elevated dark card surface |
| `color.accent` | `--accent` | `#10B981` | Emerald accent for primary CTAs, active indicators |
| `color.accent.hover` | `--accent-hover` | `color-mix(in srgb, var(--accent) 85%, var(--color-1) 15%)` | Emerald hover / active state |
| `color.accent.subtle` | `--accent-subtle` | `color-mix(in srgb, var(--accent) 12%, transparent)` | Subtle emerald badge background |
| `color.text.light` | `--text` | `#F0E9E7` | Primary text and headers |
| `color.text.muted` | `--text-muted` | `color-mix(in srgb, var(--text) 60%, transparent)` | Secondary copy derived strictly from `--text` |
| `color.border.subtle` | `--border-subtle` | `color-mix(in srgb, var(--text) 8%, transparent)` | Hairline dividers and quiet card borders |
| `color.border.accent` | `--border-accent` | `color-mix(in srgb, var(--accent) 30%, transparent)` | Active borders and focus rings |

*Gold in reference images is imagery only and NOT an approved UI CSS colour token.*

### 2.2 Minimal Documented Token-Extension (Glass & Sizing)

| Semantic Token | CSS Variable | Value / Definition | Role |
|---|---|---|---|
| Glass Blur | `--blur-glass` | `12px` | Backdrop filter blur |
| Glass Surface | `--surface-glass` | `color-mix(in srgb, var(--text) 4%, transparent)` | Semi-transparent card surface |
| Glass Border | `--border-glass` | `color-mix(in srgb, var(--text) 8%, transparent)` | Semi-transparent hairline border |
| Soft Shadow | `--shadow-soft` | `0 8px 32px -4px color-mix(in srgb, var(--color-1) 50%, transparent)` | Elevation shadow for cards/hover |
| Product Card Width | `--card-width-product` | `280px` | Uniform card width in horizontal rows |
| Minimum Touch Target | `--touch-target-min` | `44px` | Minimum touch button dimension |
| Header Height | `--header-height` | `64px` | Fixed reference for scroll margin offset |

### 2.3 Typography Tokens

- **Space Grotesk:** Primary display, hero headline, and major section headings (`font-display`).
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

### 2.4 Spacing & Shape Tokens

- **Spacing Scale:**
  - `space-1` (4px), `space-2` (5px), `space-3` (6px), `space-4` (8px), `space-6` (12px)
  - `space-8` (16px), `space-10` (20px), `space-12` (24px), `space-14` (32px), `space-16` (44px)
  - `space-18` (56px), `space-20` (80px), `space-22` (100px)
- **Radius Tokens:**
  - `radius-sm` (7px): Compact status tags
  - `radius-md` (8px): Form inputs, secondary buttons
  - `radius-lg` (24px): Cards, containers
  - `radius-pill` (100px): Primary CTA buttons
  - `radius-circle` (50%): Round icon containers

### 2.5 Motion Tokens

| Motion Token | Duration | Timing | Use |
|---|---|---|---|
| `motion-fast` | 0.2s | `ease-out` | Button hover, icon transitions |
| `motion-border` | 0.25s | `ease-out` | Border highlight |
| `motion-entrance` | 0.6s | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero headline slide-up & card reveal |
| `motion-none` | 0s | `linear` | When `prefers-reduced-motion` is active |

Card / Logo hover: Subtle `1.05` scale and soft shadow on pointer devices only.

---

## 3. Global HTML & Responsive Rules

1. **Global Reset:** `box-sizing: border-box`, `html, body, #root { width: 100%; max-width: 100%; overflow-x: hidden; }`.
2. **Scroll Margins:** All sections with IDs use `scroll-margin-top: 5rem`.
3. **Reduced Motion:** When `prefers-reduced-motion: reduce` is active, disable smooth scroll (`html { scroll-behavior: auto !important; }`) and remove Framer Motion transforms.
4. **Font Loading:** Space Grotesk, Inter, and Manrope loaded via Google Fonts with `font-display: swap` and system fallbacks.
5. **Horizontal Carousel:** Outer wrapper has `overflow-x-clip`, inner scroller has `overflow-x-auto scrollbar-none snap-x snap-mandatory`.
6. **Mobile Footer:** Compact collapsible format on mobile without dead space; full multi-column layout on tablet/desktop.
