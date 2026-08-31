# SeaPDPA Design System

## Philosophy

SeaPDPA is a practical tool, not a marketing site. The interface IS the product — visitors see real checklist chrome, actual templates, and working assessment flows from the first scroll. No hero illustrations, no abstract promises.

---

## Color Palette

**Monochrome foundation + single accent.**

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--bg-primary` | `#FFFFFF` | `#0F0F0F` | Page canvas |
| `--bg-secondary` | `#FAFAFA` | `#171717` | Cards, wells |
| `--bg-tertiary` | `#F5F5F5` | `#1F1F1F` | Hover states, kbd |
| `--border` | `#E5E5E5` | `#2A2A2A` | All borders (1px hairline) |
| `--text-primary` | `#0F0F0F` | `#FAFAFA` | Headlines, body |
| `--text-secondary` | `#525252` | `#A3A3A3` | Captions, meta |
| `--text-muted` | `#737373` | `#737373` | Disabled, hints |
| `--accent` | `#0891B2` | `#22D3EE` | Links, focus rings, primary actions |
| `--accent-hover` | `#0E7490` | `#67E8F9` | Accent interactions |
| `--success` | `#16A34A` | `#4ADE80` | Completed states |
| `--warning` | `#CA8A04` | `#FACC15` | Warnings |
| `--error` | `#DC2626` | `#F87171` | Errors |

**Accent rationale**: Cyan (`#0891B2`) conveys trust and clarity without veering into overused indigo/purple startup palette. Passes WCAG AA on white.

---

## Typography

### Font Stack

**Primary (Headlines + Body)**: `IBM Plex Sans Thai`, `IBM Plex Sans`, sans-serif

IBM Plex Sans Thai provides:
- Genuine Thai glyphs (not system fallback)
- Excellent Latin support in the same family
- Open-source (SIL OFL)
- Professional, neutral tone appropriate for legal/compliance content

**Monospace (code, IDs)**: `IBM Plex Mono`, monospace

### Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-xs` | 12px | 400 | 1.5 | Badges, disclaimers |
| `--text-sm` | 14px | 400 | 1.5 | Captions, secondary |
| `--text-base` | 16px | 400 | 1.6 | Body text |
| `--text-lg` | 18px | 500 | 1.5 | Subheads |
| `--text-xl` | 20px | 600 | 1.4 | Section titles |
| `--text-2xl` | 24px | 600 | 1.3 | Page titles |
| `--text-3xl` | 30px | 700 | 1.2 | Hero statements |

---

## Spacing & Layout

### Spacing Scale (px)

`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`

### Container

- Max-width: `1120px`
- Padding: `16px` (mobile), `24px` (tablet+)
- Gutters: `16px` grid gap minimum

### Border Radius

**Maximum**: `8px` for cards and containers  
**Buttons/inputs**: `6px`  
**Badges/tags**: `4px`  
**No radius**: Tables, code blocks

---

## Components

### Buttons

```
Primary:   bg-accent, text-white, border-none, rounded-[6px], px-4, py-2
Secondary: bg-transparent, text-accent, border-1 border-accent, rounded-[6px]
Ghost:     bg-transparent, text-secondary, hover:bg-tertiary, no border
```

**States**: 
- Hover: Shift to `--accent-hover` or `--bg-tertiary`
- Focus: `2px` outline using `--accent`, `2px` offset
- Disabled: 50% opacity, cursor-not-allowed

### Cards

```
bg-secondary, border-1 border-border, rounded-[8px], p-6
```

- No shadows by default
- Hover state (interactive cards): `border-accent` transition
- No stacked card patterns (avoid "3 feature boxes" cliché)

### Inputs

```
bg-primary, border-1 border-border, rounded-[6px], px-3, py-2
Focus: border-accent, ring-2 ring-accent/20
```

### Checkboxes (crucial for checklist UI)

```
Custom checkbox: 18x18px, border-1 border-border, rounded-[4px]
Checked: bg-accent, checkmark in white
```

### Progress indicators

```
Track: h-2, bg-tertiary, rounded-full
Fill:  h-2, bg-accent, rounded-full, transition-all
```

### Navigation

- Horizontal top nav on desktop
- Slide-out drawer on mobile (< 768px)
- Active link: `text-accent`, no underline
- Hover: `text-primary` transition
- Language toggle: pill-shaped, subtle background

### Badges

```
Disclaimer badge: text-xs, bg-tertiary, text-secondary, rounded-[4px], px-2, py-1
Status badge:     text-xs, rounded-[4px], px-2, py-0.5
```

---

## Iconography

**Lucide React** at `20px` default (not 48px feature icons).

Usage:
- Inline with text (aligned to baseline)
- Navigation and actions only
- Never as decorative feature illustrations
- Never emoji-as-icons

---

## Motion

Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: no-preference) {
  .transition-base { transition: all 150ms ease-out; }
}
@media (prefers-reduced-motion: reduce) {
  .transition-base { transition: none; }
}
```

**Allowed animations**:
- Fade in (opacity 0→1, 150ms)
- Subtle slide (translate 8px max)
- Progress bar width transitions
- Checkbox tick animation

**Banned**:
- Parallax scrolling
- Floating/pulsing elements
- Page-load animations beyond fade
- Confetti, particles, blobs

---

## Page Patterns

### Home (Product-as-Landing)

DO:
- Show actual checklist interface with real items above the fold
- Display progress ring with meaningful number
- Include language toggle prominently
- Link directly to Assessment

DON'T:
- Hero image with abstract illustration
- "Welcome to SeaPDPA" generic greeting
- 4-column feature grid with icons
- Testimonial carousel

### Assessment

- Multi-step form with progress indicator
- Questions grouped by PDPA domain
- Radio/checkbox responses
- Results as actionable recommendations, not scores

### Templates

- List view, not cards
- File type + size visible
- Preview capability where possible
- Download as .md or .txt (plain text, forkable)

### Checklist

- Sectioned by operational area
- Checkbox + label + optional explainer expand
- Progress persisted to localStorage
- Print-friendly view

### Guide/Docs

- Left sidebar navigation (desktop)
- Collapsible sections (mobile)
- Language toggle affects content, not layout
- Anchor links for deep linking

### About

- Single column, readable width
- Disclaimer as small badge, not hero banner
- License info (MIT)
- Contribution guidelines link

---

## Accessibility (WCAG 2.2 AA)

### Color Contrast

- All text: minimum 4.5:1 ratio
- Large text (24px+): minimum 3:1
- UI components: minimum 3:1

### Focus Management

- Visible focus indicators on all interactive elements
- Skip-to-content link
- Logical tab order
- No keyboard traps

### Screen Readers

- Semantic HTML (nav, main, article, section)
- ARIA labels where semantic HTML insufficient
- Announce dynamic content changes
- Alt text for any images (though we minimize decorative images)

### Motion

- All animations respect `prefers-reduced-motion`
- No auto-playing video/animation
- User-controlled progress only

---

## Bilingual Implementation

### Strategy

- URL-based locale: `/en/...` and `/th/...`
- Default: Thai (`/th/`)
- Toggle persisted to localStorage
- Content in JSON/MDX files, keyed by locale

### UI Considerations

- Thai text is typically 20-30% longer than English equivalent
- Ensure containers accommodate both
- Line heights may need adjustment for Thai script
- Never mix languages within a paragraph

---

## File Naming

```
components/
  ui/           # Primitives (Button, Card, Input, Checkbox)
  layout/       # Shell, Nav, Footer
  features/     # Checklist, Assessment, TemplateList
  
app/
  [locale]/     # Locale-specific routing
    page.tsx    # Home
    assess/     # Assessment
    templates/  # Templates
    checklist/  # Checklist
    guide/      # Guide/Docs
    about/      # About
    
content/
  en/           # English content
  th/           # Thai content
```

---

## Anti-Patterns (Explicitly Banned)

1. **Indigo/purple gradients** — Overused in SaaS, lacks credibility for legal tool
2. **Glass morphism** — Visual noise, accessibility issues
3. **Glow blobs** — Decorative cruft
4. **Emoji as icons** — Unprofessional for compliance context
5. **48px Lucide feature grids** — Template slop
6. **Centered hero → cards → FAQ** — Generic SaaS landing pattern
7. **"Get Started Free" CTAs** — This is open source, not a trial
8. **Dashboard preview screenshots** — Show real UI, not mockups
9. **Testimonial carousels** — No social proof needed for OSS tool
10. **Abstract illustrations** — Concrete content only