# Color System

## Purpose

This color system is designed to be **role-based, accessible, and scalable**. Instead of hard-coding colors per component, we define **semantic roles** (background, foreground, primary, secondary, accent, etc.) and map them to concrete values per theme (light, dark, system).

The goal is to:

- Maintain a **clear visual hierarchy**
- Enforce **consistent contrast ratios**
- Support **light, dark, and system themes** without rewriting components
- Make the system easy to extend without breaking visual balance

---

## Core Principles

### 1. Roles over raw colors

Components must **never reference raw color values** (e.g. `#1d32c8`).
They should reference **semantic tokens** such as:

- `--color-background`
- `--color-foreground`
- `--color-primary`
- `--color-secondary`
- `--color-accent`

This allows us to change the palette or theme globally without touching component code.

---

### 2. Contrast hierarchy (intentional, not accidental)

Contrast levels are intentionally tiered:

| Role                    | Approx. Contrast | Purpose                       |
| ----------------------- | ---------------- | ----------------------------- |
| Background ↔ Foreground | ~16:1            | Readability & comfort         |
| Primary ↔ Background    | ~8:1             | Brand identity & main actions |
| Accent ↔ Background     | ~5:1             | Attention & emphasis          |

This hierarchy ensures the UI feels calm, readable, and purposeful, rather than loud or chaotic.

---

## Color Roles & Usage

### At-a-glance role summary

| Role                  | What it represents        | What question it answers      | Typical feeling       | Typical usage                     |
| --------------------- | ------------------------- | ----------------------------- | --------------------- | --------------------------------- |
| Background            | The canvas                | “Where does everything live?” | Calm, neutral         | Page body, app root               |
| Foreground            | The content               | “What do I read or see?”      | Clear, readable       | Text, icons                       |
| Primary               | Product identity          | “What _is_ this product?”     | Trustworthy, familiar | Main buttons, active states       |
| Secondary             | Structure & layout        | “How is the UI organized?”    | Quiet, supportive     | Navbars, sidebars, panels         |
| Accent                | Attention & urgency       | “What matters _right now_?”   | Energetic, emotional  | CTAs, alerts, destructive actions |
| Highlight             | Subtle separation & edges | “Where are the boundaries?”   | Soft, unobtrusive     | Borders, dividers, subtle edges   |
| Transparent / Frosted | Translucent surfaces      | “What floats above content?”  | Light, airy, modern   | Frosted panels, glass overlays    |

---

### Background (`--color-background`)

- The main canvas of the application
- Covers the largest surface area
- Neutral and low-contrast by design

**Usage:**

- Page background
- App root container

---

### Foreground (`--color-foreground`)

- Primary text and icon color
- Must maintain maximum readability against the background

**Usage:**

- Body text
- Headings
- Default icons

---

### Primary (`--color-primary`)

- Represents **product identity**
- Aligned with brand personality
- Comfortable when used repeatedly

**Usage:**

- Primary buttons
- Active states
- Key interactive elements

**Guideline:**
Primary color is the _default_ emphasis, not an alert.

---

### Secondary (`--color-secondary`)

- Structural and organizational
- Typically neutral or muted
- Used to separate major UI regions

**Usage:**

- Navigation bars
- Sidebars
- Cards and panels

**Guideline:**
If you _notice_ the secondary color, it is likely too strong.

---

### Accent (`--color-accent`)

- Used to deliberately draw attention
- Higher emotional weight than primary
- Used sparingly

**Usage:**

- Critical calls to action
- Alerts or destructive actions
- Rare emphasis

**Guideline:**
Accent is contextual and intentional. Overuse weakens its effect.

---

### Highlight (`--color-highlight`)

- Subtle edge and boundary color
- Sits _between_ background and secondary
- Blends without creating strong contrast
- Helps define shapes without visual noise

**Usage:**

- Borders and outlines
- Dividers
- Table/grid lines
- Subtle separators between surfaces

**Guideline:**
Highlight should be _felt_, not noticed. If it draws attention, it is too strong.

---

### Transparent / Frosted (`--color-transparent`)

- Semi-translucent surface color
- Designed to be used **with `backdrop-filter`**
- Creates a frosted-glass / glassmorphism effect
- Softly separates layers without heavy contrast

**Usage:**

- Floating panels
- Modals and popovers
- Glass-style navigation bars
- Overlays that should reveal context beneath

**Guideline:**
This color is not for emphasis or alerts. It exists to suggest **depth and layering**. Always pair it with blur and subtle borders (highlight) for clarity.

---

## Theming Strategy

Themes (light, dark, system) map **the same semantic roles** to different color values.

Components do not change between themes — only the role mappings do.

This ensures:

- Predictable behavior across themes
- No duplication of component styles
- Easy future theme additions

---

## Developer Guidelines (Important)

- Do not use raw hex values in components
- Do not introduce new colors without a clear role
- Use semantic tokens exclusively
- Respect contrast hierarchy when designing new UI

If a new color is needed, define **why** it exists before defining **what** it looks like.

---

## Summary

This color system prioritizes:

- Readability over decoration
- Hierarchy over novelty
- Intentional emphasis over visual noise

It is designed to scale with the product while remaining visually consistent and accessible.
