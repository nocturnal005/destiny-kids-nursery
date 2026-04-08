# Design System Specification: Editorial Organicism

## 1. Overview & Creative North Star: "The Nurtured Gallery"
This design system rejects the "cluttered toy box" aesthetic common in early childhood education. Instead, it adopts the **Creative North Star: The Nurtured Gallery.** This philosophy blends high-end editorial sophistication with the soft, tactile warmth of a premium nursery.

We break the "template" look by utilizing **intentional asymmetry** and **claymorphic depth**. We avoid rigid grids in favor of organic, flowing compositions where "blob" geometries act as windows into the school's world. The experience should feel like a high-end scrapbook: curated, breathable, and deeply intentional.

---

## 2. Color & Tonal Architecture
The palette is rooted in a "Cream & Lavender" foundation, punctuated by sophisticated jewel tones.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or tonal transitions. To separate the Hero from the "Our Philosophy" section, transition from `surface` (#fef8f3) to `surface-container-low` (#f8f3ee).

### Surface Hierarchy & Nesting
Treat the UI as a physical environment. Instead of flat cards, use **Nesting** to create importance:
* **Level 1 (The Floor):** `surface` or `surface-bright`.
* **Level 2 (The Rug):** `surface-container-low` for large content blocks.
* **Level 3 (The Pillow):** `surface-container-lowest` for high-interaction cards (white-on-cream) to create a soft "pop."

### The Glass & Gradient Rule
* **Navigation:** Must utilize Glassmorphism. Use `surface_container_lowest` at 70% opacity with a `24px` backdrop-blur.
* **Signature Textures:** For primary CTAs and Hero accents, use a subtle radial gradient: `primary` (#533480) transitioning to `primary_container` (#6b4c9a). This adds a "plump," claymorphic volume that flat colors lack.

---

## 3. Typography: The Editorial Voice
Our type system balances the playfulness of childhood with the authority of a premium institution.

* **Display (Fredoka One):** Used sparingly for "Hero Moments" and large pull-quotes. It provides the "smile" of the brand.
* **Headings (Plus Jakarta Sans / Nunito):** We use Plus Jakarta Sans for a modern, geometric clarity that feels institutional yet approachable.
* **Body & Labels (Inter):** The workhorse. High legibility, neutral, and professional.

| Token | Font | Size | Weight | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| `display-lg` | Fredoka One | 3.5rem | 400 | Hero Headlines |
| `headline-md`| Plus Jakarta | 1.75rem | 600 | Section Headers |
| `title-md` | Inter | 1.125rem | 500 | Card Titles |
| `body-lg` | Inter | 1rem | 400 | General Narrative |

---

## 4. Elevation & Depth: Claymorphism
We do not use standard Material shadows. We use **Ambient Purple Depth.**

* **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The subtle contrast creates a natural lift.
* **Ambient Shadows:** For floating elements, use a tinted shadow: `box-shadow: 0 12px 32px rgba(107, 76, 154, 0.08)`. The purple tint ensures the shadow feels like a reflection of the brand color rather than "dirty" grey.
* **The Ghost Border Fallback:** If accessibility requires a border, use `outline-variant` at **15% opacity**. Never use 100% opaque lines.
* **Organic Masking:** All primary imagery must be masked using the **Signature Blob**: `border-radius: 30% 70% 60% 40% / 50% 30% 70% 50%`. This breaks the "digital grid" and feels human-made.

---

## 5. Components

### Buttons
* **Primary:** Uses the Warm Amber (`tertiary`) to stand out. `border-radius: xl`. Apply a subtle inner-glow (top-down white gradient at 10%) to enhance the claymorphic feel.
* **Secondary:** `surface_container_highest` background with `primary` text. No border.

### Cards & Lists
* **Forbid Dividers:** Do not use lines to separate list items. Use 24px of vertical whitespace or alternating `surface-container-low` and `surface-bright` backgrounds.
* **Interactive Cards:** Should "squish" on hover (scale 0.98) rather than just lifting, reinforcing the soft, tactile brand nature.

### Organic Shapes (Image Containers)
* Images should never be sharp rectangles. Use the `lg` or `xl` roundedness scale, or the CSS Blob Mask. Apply the ambient purple shadow to the mask itself.

### Navigation Bar
* **Style:** Floating "pill" shape.
* **Effect:** Glassmorphism (`surface_container_lowest` @ 80%) with a `1px` Ghost Border (#ccc3d1 @ 20%).

---

## 6. Do's and Don'ts

### Do:
* **Do** use asymmetrical margins. If the left margin is 80px, try a 120px right margin for a more editorial, custom feel.
* **Do** lean into white space. High-end brands "breath."
* **Do** use the Teal (`secondary`) as a "Trust Accent" for testimonials or accreditation badges.

### Don't:
* **Don't** use black (#000000) for text. Always use `on_surface` (#1d1b19) to maintain the warmth of the cream background.
* **Don't** use standard "Drop Shadows." If it looks like a default Photoshop shadow, it is wrong.
* **Don't** stack more than two "Blobs" in a row. Balance organic shapes with the clean, structured lines of Inter typography.
