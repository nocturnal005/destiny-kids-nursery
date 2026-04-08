# Destiny Kids Nursery — Design Tokens
# System: "Editorial Organicism" — The Nurtured Gallery

> **Creative North Star:** High-end editorial sophistication + soft, tactile nursery warmth.  
> Intentional asymmetry. Claymorphic depth. Organic flowing compositions.  
> "A high-end scrapbook: curated, breathable, and deeply intentional."

---

## Color & Tonal Architecture

### Surface Hierarchy (The Nesting System)

| Token | Hex | Role | Physical Metaphor |
|---|---|---|---|
| `--surface` | `#fef8f3` | Page background, Level 1 | The Floor |
| `--surface-bright` | `#fffcf8` | Bright alternate background | Polished Floor |
| `--surface-container-low` | `#f8f3ee` | Large content blocks, Level 2 | The Rug |
| `--surface-container` | `#f2ede8` | Standard containers | The Cushion |
| `--surface-container-high` | `#ece7e2` | Emphasized containers | The Seat |
| `--surface-container-highest` | `#e6e1dc` | Secondary button backgrounds | The Shelf |
| `--surface-container-lowest` | `#ffffff` | High-interaction cards, Level 3 | The Pillow |

### Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#533480` | Deep purple — headings accent, gradients |
| `--primary-container` | `#6b4c9a` | Lighter purple — gradient endpoints, containers |
| `--on-primary` | `#ffffff` | Text on primary surfaces |
| `--on-primary-container` | `#f3eefa` | Text on primary containers |

### Accent Colors

| Token | Hex | Usage |
|---|---|---|
| `--secondary` | `#2ABFBF` | Teal — Trust Accent (testimonials, badges) |
| `--secondary-container` | `#e0f7f7` | Teal container background |
| `--tertiary` | `#F4A261` | Warm Amber — Primary CTAs |
| `--tertiary-container` | `#fef0e0` | Amber container background |
| `--accent-pink` | `#E76F8B` | Coral — playful highlights |
| `--accent-green` | `#7BC67E` | Nature green — growth theme |

### Text Colors (The Warmth Rule)

| Token | Hex | Usage |
|---|---|---|
| `--on-surface` | `#1d1b19` | Primary text — **NEVER use #000000** |
| `--on-surface-variant` | `#4a4640` | Body text, secondary copy |
| `--on-surface-subtle` | `#8e8a84` | Captions, timestamps, meta |
| `--outline` | `#7c7770` | Subtle outlines (rare) |
| `--outline-variant` | `#ccc3d1` | Ghost borders at 15% opacity |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--success` | `#7BC67E` | Form success states |
| `--error` | `#E76F6F` | Form errors |
| `--info` | `#5BA8D9` | Informational highlights |

---

## Typography: The Editorial Voice

### Font Stack
```css
--font-display: 'Fredoka One', cursive;          /* Hero Moments only */
--font-heading: 'Plus Jakarta Sans', sans-serif;  /* Section headers */
--font-body: 'Inter', sans-serif;                 /* Workhorse */
```

### Type Scale

| Token | Font | Size | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| `--display-lg` | Fredoka One | 3.5rem (56px) | 400 | 1.1 | Hero headlines ONLY |
| `--display-md` | Fredoka One | 2.75rem (44px) | 400 | 1.15 | Page hero headlines |
| `--headline-lg` | Plus Jakarta Sans | 2.25rem (36px) | 700 | 1.2 | Major section headers |
| `--headline-md` | Plus Jakarta Sans | 1.75rem (28px) | 600 | 1.25 | Section headers |
| `--headline-sm` | Plus Jakarta Sans | 1.375rem (22px) | 600 | 1.3 | Sub-section headers |
| `--title-lg` | Inter | 1.25rem (20px) | 600 | 1.4 | Card titles, emphasis |
| `--title-md` | Inter | 1.125rem (18px) | 500 | 1.4 | Card titles, labels |
| `--body-lg` | Inter | 1rem (16px) | 400 | 1.65 | General narrative |
| `--body-md` | Inter | 0.9375rem (15px) | 400 | 1.6 | Compact body text |
| `--label-lg` | Inter | 0.875rem (14px) | 500 | 1.4 | Buttons, form labels |
| `--label-md` | Inter | 0.8125rem (13px) | 500 | 1.4 | Tags, badges, small labels |
| `--caption` | Inter | 0.75rem (12px) | 400 | 1.5 | Timestamps, meta |

---

## Spacing & Layout

### Spacing Scale
| Token | Value |
|---|---|
| `--space-2xs` | 0.25rem (4px) |
| `--space-xs` | 0.5rem (8px) |
| `--space-sm` | 0.75rem (12px) |
| `--space-md` | 1rem (16px) |
| `--space-lg` | 1.5rem (24px) |
| `--space-xl` | 2rem (32px) |
| `--space-2xl` | 3rem (48px) |
| `--space-3xl` | 4rem (64px) |
| `--space-4xl` | 6rem (96px) |
| `--space-5xl` | 8rem (128px) |

### Asymmetric Layout Rule
> **Do** use asymmetrical margins. If left margin is 80px, try 120px right margin for a more editorial, custom feel. High-end brands breathe.

### Container
```css
--container-max: 1280px;
--container-padding: clamp(1.5rem, 5vw, 4rem);
```

---

## Elevation & Depth: Claymorphism

### Ambient Purple Shadows (NOT standard drop shadows)

| Token | Value | Usage |
|---|---|---|
| `--shadow-subtle` | `0 2px 8px rgba(107, 76, 154, 0.04)` | Resting cards |
| `--shadow-soft` | `0 8px 24px rgba(107, 76, 154, 0.06)` | Slight lift |
| `--shadow-medium` | `0 12px 32px rgba(107, 76, 154, 0.08)` | Floating elements |
| `--shadow-elevated` | `0 20px 48px rgba(107, 76, 154, 0.12)` | Modals, lightbox |
| `--shadow-glow` | `0 0 0 4px rgba(107, 76, 154, 0.12)` | Focus rings |

### CTA Gradient (Claymorphic Volume)
```css
--gradient-primary: radial-gradient(ellipse at 30% 20%, #6b4c9a, #533480);
--gradient-cta: linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 50%);
/* Apply gradient-cta as inner glow on top of tertiary button */
```

### Ghost Border Fallback
```css
/* ONLY when accessibility requires a border */
--ghost-border: 1px solid rgba(204, 195, 209, 0.15);
```

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 8px | Small tags, badges |
| `--radius-md` | 12px | Input fields, small cards |
| `--radius-lg` | 16px | Cards, containers |
| `--radius-xl` | 24px | Buttons, panels |
| `--radius-2xl` | 32px | Feature blocks, modals |
| `--radius-pill` | 9999px | Nav pill, pill buttons |
| `--radius-blob` | `30% 70% 60% 40% / 50% 30% 70% 50%` | Signature organic mask |

---

## Transitions

| Token | Value | Usage |
|---|---|---|
| `--ease-default` | `250ms ease` | Standard hover transitions |
| `--ease-smooth` | `400ms cubic-bezier(0.16, 1, 0.3, 1)` | Panel opens, card lifts |
| `--ease-spring` | `600ms cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce-in effects |
| `--ease-gentle` | `300ms ease-in-out` | Fade transitions |

---

## Z-Index Scale

| Token | Value | Usage |
|---|---|---|
| `--z-base` | 0 | Default |
| `--z-above` | 10 | Floating shapes |
| `--z-sticky` | 50 | Sticky elements |
| `--z-nav` | 100 | Glass navigation |
| `--z-overlay` | 200 | Overlays, backdrops |
| `--z-modal` | 300 | Modals, lightbox |
| `--z-toast` | 400 | Notifications |

---

## Breakpoints

| Token | Value | Description |
|---|---|---|
| `--bp-mobile` | 375px | Small phones |
| `--bp-tablet` | 768px | Tablets |
| `--bp-desktop` | 1024px | Small desktops |
| `--bp-wide` | 1280px | Standard |
| `--bp-ultra` | 1536px | Large monitors |

---

## Component Specifications

### Navigation Bar
- **Shape:** Floating pill (`border-radius: pill`)
- **Effect:** Glassmorphism — `surface-container-lowest` at 80% opacity
- **Blur:** `backdrop-filter: blur(24px)`
- **Border:** Ghost border (`outline-variant` at 20% opacity)
- **Behavior:** Shrinks on scroll, blur intensifies

### Buttons
- **Primary CTA:** `--tertiary` (warm amber) background, `--radius-xl`, inner glow (top-down white gradient at 10%)
- **Secondary:** `--surface-container-highest` background, `--primary` text, no border
- **Hover (Primary):** Slight lift + ambient shadow
- **Hover (Cards):** "Squish" — `transform: scale(0.98)` — tactile, not floaty

### Cards
- **Background:** `--surface-container-lowest` (white pillow) on `--surface-container-low` (cream rug)
- **Radius:** `--radius-lg`
- **Shadow:** `--shadow-subtle` at rest, `--shadow-soft` on hover
- **NO borders** — depth comes from nesting contrast
- **NO dividers** — use 24px whitespace or alternating surface tones

### Images
- **Never** sharp rectangles
- Use `--radius-lg`, `--radius-xl`, or the CSS Blob Mask
- Apply ambient purple shadow to the mask element
- Signature Blob: `border-radius: 30% 70% 60% 40% / 50% 30% 70% 50%`

---

## Hard Rules

### DO:
- ✅ Use asymmetrical margins for editorial feel
- ✅ Lean into whitespace — high-end brands breathe
- ✅ Use teal (`--secondary`) as Trust Accent for testimonials and badges
- ✅ Transition sections via background color shifts, not lines
- ✅ Apply ambient purple-tinted shadows only

### DON'T:
- ❌ **Never** use `#000000` for text — always `--on-surface` (#1d1b19)
- ❌ **Never** use `1px solid` borders for sectioning
- ❌ **Never** use standard grey drop shadows
- ❌ **Never** stack more than two blobs in a row
- ❌ **Never** use sharp-cornered image containers

---

*All tokens above will be defined as CSS Custom Properties on `:root` in `css/tokens.css`.*
