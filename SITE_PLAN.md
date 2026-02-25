# JRWL.io Landing Page Plan (Logo-Matched)

## Goal
Build a fast, juicy personal landing page for `jrwl.io` that visually matches the JRWL logo system (dark geometric panels, high-contrast lettering, one electric blue accent).

## Core Visual Direction (Derived From Logo)
- **Mood:** stealth-tech, sharp, modular, intentional.
- **Shape language:** hard edges, block geometry, panel cuts, diagonal slices.
- **Composition:** 2x2 panel logic from the badge logo reused in layout and section framing.
- **Contrast:** mostly near-black and graphite with bright white text and a single blue accent.

## Brand System

### Color Tokens
- `--bg-0: #03060C` (page base)
- `--bg-1: #070B12` (surface base)
- `--panel-a: #171B24`
- `--panel-b: #1B1F28`
- `--panel-c: #2B2F37`
- `--ink: #F1F3F7` (primary text/logo white)
- `--ink-soft: #CFD1D6` (secondary text)
- `--accent: #2B97FF` (brand blue)
- `--accent-2: #1B7FE4` (accent depth)

### Typography
- Heading/display: `Orbitron` (or `Rajdhani`) for angular tech character.
- Body/UI: `Space Grotesk` for readable modern copy.
- Numeric/meta labels: tabular style for subdomain cards and status labels.

## Page Architecture

### 1) Hero (Top Fold)
- Left: stacked intro (`JRWL`, one-line identity, short bio).
- Right: large logo badge + vector map fragments.
- CTA row:
  - Primary: `Explore Subdomains`
  - Secondary: `Contact`
- Micro line under CTAs: `Root domain is identity. Subdomains are where products live.`

### 2) Subdomain Grid (Primary Action)
- 4-8 cards in modular panel style, inspired by the logo quadrants.
- Card anatomy: label, one-liner, status chip, external arrow.
- Hover behavior: panel lift + blue edge sweep + slight diagonal light pass.

### 3) Who Am I
- Compact paragraph + current focus list.
- Two-column desktop / one-column mobile.
- Integrate subtle vector map linework behind this block at low opacity.

### 4) Footer / Contact
- Minimal, high-contrast links (GitHub, X/LinkedIn, email).
- Monospace microcopy with current year + `jrwl.io`.

## Motion & Interaction (Richer Option #2)
- **Initial load:** staged reveal (hero text, badge, then cards) in 600-900ms.
- **Panel wipes:** diagonal clipping transitions between section reveals.
- **Accent pulse:** occasional blue pulse on active CTA border.
- **Card tilt/parallax:** lightweight transform-based effect (pointer-aware on desktop).
- **Reduced motion:** all animations collapse to simple fade for accessibility.

## Vector Map Direction (Using Provided Logo Style)
- Map overlays should use:
  - right-angle and diagonal connectors,
  - quadrant boundaries,
  - anchor nodes and short labels,
  - low-opacity slate lines + selective blue highlights.
- Keep map decorative and non-blocking: `opacity 0.12-0.28`, blend behind content.
- Main assets:
  - `assets/jrwl-badge.svg` (hero + favicon/source mark)
  - `assets/jrwl-logo-map.svg` (background blueprint layer)

## Responsive Rules
- Mobile first (`360px+`): stacked sections, simplified parallax.
- Tablet (`768px+`): 2-column hero, 2-column card grid.
- Desktop (`1100px+`): full panel composition and richer hover effects.
- Keep headline wrapping intentional to preserve geometric rhythm.

## Technical Plan (Static, Fast Deploy)
- Files:
  - `index.html`
  - `styles.css`
  - `script.js`
  - `assets/*`
- No heavy framework needed; pure HTML/CSS/JS for speed and easy hosting.
- Performance targets:
  - minimal JS,
  - CSS transforms/opacity for animation,
  - compressed SVG assets.

## Build Sequence
1. Finalize badge + map assets to exact style.
2. Implement page structure and semantic sections.
3. Apply panel-based visual system and typography.
4. Add richer motion and interactions.
5. Add SEO/meta/OG tags and favicon wiring.
6. Mobile + desktop QA and polish pass.

## Content Inputs Needed (Optional but Helpful)
- Your one-line identity statement.
- Subdomain list + short descriptions.
- Preferred contact links.
