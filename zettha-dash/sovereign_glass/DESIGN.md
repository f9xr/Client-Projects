# Design System Specification: The Sovereign Ledger

## 1. Overview & Creative North Star
**Creative North Star: "The Velvet Vault"**
This design system moves away from the sterile, "SaaS-blue" dashboard aesthetic to create a digital environment that feels like a private high-stakes terminal. We balance the rigid precision of corporate treasury with the dopamine-driven engagement of high-end gaming.

The system breaks the "template" look through **intentional depth and atmospheric layering**. Rather than a flat grid, the UI is treated as a series of floating glass panes suspended in a deep, pressurized navy void. We achieve a "Sovereign" feel by utilizing high-contrast typography scales—where massive, thin display numbers (Treasury yields) meet hyper-legible, compact labels (Data points).

---

## 2. Colors & Atmospheric Depth
Our palette is rooted in the depth of `background: #0c1321`. We do not use color to "fill" space; we use it to conduct light.

### The Color Logic
*   **Primary (#f2ca50):** Reserved for "The Golden Path." This is for achievement, high-value yields, and primary CTAs. It represents the "Dynasty" element.
*   **Surface Hierarchy:** To create a premium feel, avoid flat 1px borders. 
    *   **The "No-Line" Rule:** Sectioning is achieved through background shifts. A `surface_container_low` section sits on a `background` floor. The eye perceives the edge through the shift in value, not a stroke.
    *   **The "Glass & Gradient" Rule:** All primary cards must use glassmorphism. Use `surface_container` at 60% opacity with a `backdrop-filter: blur(20px)`. 
    *   **Signature Textures:** Use a subtle linear gradient on primary action buttons—transitioning from `primary` (#f2ca50) to `primary_container` (#d4af37) at a 135-degree angle. This adds a "metallic" weight that flat hex codes lack.

---

## 3. Typography: Editorial Authority
We pair **Manrope** (Display) for its geometric authority with **Inter** (Body) for its technical precision.

*   **Display (Manrope):** Used for "Big Numbers"—portfolio balances, level-up ranks, and treasury discounts. Use `display-lg` (3.5rem) with `tracking-tighter` to create a bold, editorial impact.
*   **Headlines (Manrope):** Use `headline-md` for module titles. Ensure these are always `on_surface`.
*   **Body (Inter):** Standardized at `body-md` (0.875rem) for data tables and tooltips. 
*   **The Contrast Play:** Pair a `display-sm` value (The Gain) with a `label-sm` unit (The Currency) to create a sophisticated, "Bloomberg-meets-Elden-Ring" typographic hierarchy.

---

## 4. Elevation & Depth: Tonal Layering
In this system, "Elevation" is a measure of light transparency, not just shadow.

*   **The Layering Principle:** 
    *   **Level 0 (Floor):** `surface_dim` (#0c1321)
    *   **Level 1 (Sub-sections):** `surface_container_low`
    *   **Level 2 (Active Cards):** `surface_container` with blur.
*   **Ambient Shadows:** We forbid standard black shadows. Use `on_background` at 6% opacity with a 40px blur and 20px Y-offset. This creates a "glow" of dark energy rather than a heavy drop shadow.
*   **The "Ghost Border" Fallback:** Where separation is critical for accessibility, use the `outline_variant` (#4d4635) at 15% opacity. It should be felt, not seen.
*   **Glassmorphism:** Floating elements (like "Level Up" notifications) must use `surface_bright` with a 30% opacity and a high `backdrop-blur`. This allows the complex treasury charts underneath to bleed through softly, maintaining context.

---

## 5. Components: Precision & Play

### Buttons
*   **Primary:** `primary` background, `on_primary` text. Use `rounded-md` (0.75rem). No border.
*   **Tertiary (Ghost):** No background. Use `primary` for text. On hover, apply a `surface_container_high` background at 40% opacity.

### Progress Gauges (The "Dynasty" Elements)
*   Instead of standard bars, use thick, circular gauges using `primary` for the fill and `surface_container_highest` for the track.
*   Incorporate a "Glow" state: when a treasury goal is 90% complete, apply a 10px drop-shadow using the `primary` color to the gauge itself.

### Cards & Lists
*   **The Divider Forbid:** Never use `<hr>` tags or 1px lines to separate list items. Use **Vertical White Space** (Spacing scale `8` or `10`) or a subtle hover state shift to `surface_container_lowest`.
*   **Data Tables:** Header rows should use `label-md` in `on_surface_variant` (all caps). Data cells use `body-md` in `on_surface`.

### Chips (Badges/Levels)
*   **Achievement Chips:** Use `inverse_primary` (#735c00) backgrounds with `primary_fixed` text. This "inverted" gold creates a premium, "medal-like" appearance for earned badges.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place a large `display-lg` metric off-center to create a dynamic, modern feel.
*   **Embrace "Breathing Room":** Use the higher end of the spacing scale (`12`, `16`, `20`) between major modules.
*   **Tint Your Greys:** Ensure all "neutral" surfaces have a hint of the navy background to keep the palette cohesive.

### Don't:
*   **Don't use 100% white:** Use `on_surface` (#dce2f6) to avoid eye strain in dark mode.
*   **Don't use sharp corners:** Stick strictly to the `md` (0.75rem) and `lg` (1rem) roundedness scale to keep the "sleek" glass aesthetic.
*   **Don't use "Stock" Icons:** Use thin-stroke (1.5pt) icons that match the `outline` token weight. Avoid filled, heavy "chunky" iconography.