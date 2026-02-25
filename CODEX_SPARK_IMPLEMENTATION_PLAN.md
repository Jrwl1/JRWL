# Codex-Spark Implementation Plan for `jrwl.io`

Use this document as a direct execution brief for Codex-Spark.

## 0) Copy/Paste Prompt for Codex-Spark

```text
Implement a complete static landing page for jrwl.io in this directory using only:
- index.html
- styles.css
- script.js
- assets/* (existing SVG assets)

Design intent:
- Match the JRWL logo style: dark modular panels, high contrast white/gray text, one electric blue accent.
- Avoid generic template look.
- Root domain is a personal identity page. Subdomains are where apps/services live.

Functional requirements:
1) Hero section with badge/logo art, headline, short intro, and two CTAs.
2) Subdomain card grid (4-8 cards) with hover effects and clear external links.
3) Compact "Who am I" section.
4) Footer with social/contact links.
5) Rich but performant animations (staggered reveal, panel wipes, subtle parallax/tilt).
6) Fully responsive mobile -> desktop.
7) Accessible keyboard navigation and reduced-motion support.
8) Basic SEO + Open Graph metadata.

Do not use frameworks or build tools. Use semantic HTML, modern CSS, and minimal vanilla JS.
Use CSS custom properties for all color/spacing/motion tokens.
Keep JS small and only for interactions (not rendering main content).

After implementation:
- Verify the page works by opening index.html directly in browser.
- Ensure no console errors.
- Return a short changelog listing created/updated files and key behavior added.
```

---

## 1) Project Objective

Build a polished, fast, logo-matched landing page for `jrwl.io` that communicates:
- who JRWL is,
- what JRWL builds,
- where to find services via subdomains.

Primary success metric: the page should feel intentionally branded to the JRWL mark, not like a default portfolio template.

## 2) Design System (Must Match Logo)

### 2.1 Visual Language
- Hard-edged panel geometry.
- 2x2 block motifs taken from the badge logo.
- Strong dark background, bright foreground, single blue accent for action and emphasis.
- Diagonal cuts and technical line overlays as decorative structure.

### 2.2 Color Tokens (CSS Variables)
Define in `:root`:

- `--bg-0: #03060C`
- `--bg-1: #070B12`
- `--panel-a: #171B24`
- `--panel-b: #1B1F28`
- `--panel-c: #2B2F37`
- `--ink: #F1F3F7`
- `--ink-soft: #CFD1D6`
- `--accent: #2B97FF`
- `--accent-2: #1B7FE4`
- `--line: #2A3342`
- `--ok: #66D59C`

### 2.3 Typography
- Headings: `Orbitron` (fallback `Rajdhani`, `Segoe UI`, `sans-serif`).
- Body/UI: `Space Grotesk` (fallback `Segoe UI`, `sans-serif`).
- Small meta labels: uppercase with letter spacing.

### 2.4 Surface Style
- Panels: subtle gradients + thin border + light inner highlight.
- Buttons: sharp corners or lightly chamfered style.
- Focus rings: visible blue outline for accessibility.

## 3) File-by-File Implementation Plan

## 3.1 `index.html`

Create semantic structure:

1. `head`
   - title: `JRWL - Builder on the Root Domain`
   - meta description focused on identity + subdomain services
   - OG tags (`og:title`, `og:description`, `og:type`, `og:image` placeholder)
   - viewport meta
   - favicon from `assets/jrwl-badge.svg`
   - preconnect and stylesheet links for chosen fonts

2. `body`
   - background decor layers (`div`s for gradient glow, grid, vector map)
   - `header` with compact brand lockup (badge + JRWL text)
   - `main` containing sections:
     - `section.hero`
       - left column: kicker, H1, short paragraph, CTA row
       - right column: large badge image + map overlay
     - `section.subdomains`
       - heading + short helper text
       - responsive card grid with 4-8 cards
       - each card: subdomain, purpose, status chip, arrow icon
     - `section.about`
       - short bio
       - list of current focus areas
       - small technical map callout panel
   - `footer`
     - social links (GitHub, X/LinkedIn, email)
     - copyright line

3. Content defaults (can be placeholders but realistic)
   - One-liner identity example: "I build internet tools. Root domain is identity, subdomains run the products."
   - Example cards:
     - `app.jrwl.io`
     - `api.jrwl.io`
     - `labs.jrwl.io`
     - `status.jrwl.io`

## 3.2 `styles.css`

Implement in this order:

1. Reset/base
   - `box-sizing`, body margin reset, default text rendering.

2. Tokens
   - all color/spacing/radius/shadow/motion tokens in `:root`.
   - include `@media (prefers-reduced-motion: reduce)` overrides.

3. Layout
   - centered max-width container.
   - hero: 2-column desktop, stacked mobile.
   - subdomain cards: 1 col mobile, 2 col tablet, 3 or 4 col desktop.

4. Visual details
   - multi-layer background gradients and subtle grid.
   - map layer with low opacity.
   - panel cards with border and soft shadow.
   - button states: hover, focus-visible, active.

5. Animation
   - staggered reveal using classes (`.reveal`, `.is-visible`).
   - diagonal wipe or sweep pseudo-element on hover.
   - card hover transform (small translate and rotate).
   - avoid expensive animation properties.

6. Accessibility
   - strong text contrast.
   - keyboard focus styles.
   - minimum tap target sizes.

## 3.3 `script.js`

Only lightweight behavior:

1. Staggered reveal
   - use `IntersectionObserver` for sections/cards.
   - add `is-visible` class with slight delays.

2. Subdomain card tilt/parallax (desktop only)
   - pointermove math for tiny transforms.
   - reset on pointerleave.
   - disable on touch devices and reduced-motion.

3. CTA accent pulse or subtle active state loop
   - CSS class toggled by JS timer OR pure CSS keyframes.

4. Safety
   - no runtime errors if selectors not found.
   - no third-party scripts.

## 4) Asset Usage and Vector Map Guidance

Use:
- `assets/jrwl-badge.svg` as primary mark (header + hero).
- `assets/jrwl-logo-map.svg` as decorative blueprint layer in hero/about.

If assets need tuning, keep the same style:
- dark block quadrants,
- crisp white/gray typography forms,
- blue accent concentrated in select regions,
- no colorful gradients beyond the blue accent family.

## 5) Responsive Behavior Requirements

### Mobile (360px+)
- Single-column layout.
- Hero art below intro text or tightly stacked.
- Reduced parallax and hover dependence.

### Tablet (768px+)
- Two-column hero.
- Two-column subdomain grid.

### Desktop (1100px+)
- Expanded spacing, enhanced hover effects.
- Three/four-column grid if card count supports it.

## 6) Accessibility and UX Requirements

- Semantic headings in correct order.
- Every interactive item keyboard reachable.
- `aria-label` for icon-only links.
- Reduced motion support.
- Links and buttons must have clear hover/focus states.

## 7) SEO and Metadata Checklist

Required in `index.html`:
- `<title>`
- `<meta name="description">`
- OG title/description/type/image/url
- favicon link to badge
- canonical URL (`https://jrwl.io`)

Optional but recommended:
- short JSON-LD (`Person` or `WebSite`) script block.

## 8) Performance Guardrails

- Keep JS minimal.
- Prefer SVG and CSS over heavy images.
- Animate `transform` and `opacity` only.
- Avoid layout thrashing in pointer handlers.

## 9) Definition of Done

All of the following must be true:
- Page loads as a complete branded landing experience.
- Visual style clearly matches JRWL logo reference.
- Desktop and mobile layouts are clean.
- Animations feel smooth and are reduced when requested by user settings.
- No console errors.
- All links, CTAs, and sections are functional.
- Code is readable and organized.

## 10) QA Steps for Codex-Spark

1. Open `index.html` locally.
2. Check viewport widths: 375, 768, 1280.
3. Keyboard test: `Tab` through all controls.
4. Toggle reduced-motion simulation if available.
5. Validate that hero, cards, and footer are readable against dark backgrounds.
6. Confirm subdomain links point to intended URLs.

## 11) Suggested Implementation Order (Execution Sequence)

1. Scaffold semantic `index.html` with placeholders.
2. Build tokenized `styles.css` and static layout.
3. Integrate SVG assets into hero and background layers.
4. Style cards/buttons/panels to logo-matched look.
5. Add motion and interactions in `script.js`.
6. Add SEO/meta, accessibility polish, and final QA tweaks.

## 12) Output Format Requested From Codex-Spark

Ask Codex-Spark to return:
- Brief changelog by file.
- Any assumptions made.
- Final QA notes and unresolved placeholders (if any).
