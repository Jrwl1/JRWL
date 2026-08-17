---
name: "JRWL"
description: "A maintained, type-led technical reference sheet for John Lindström."
colors:
  cobalt: "#2448e8"
  cobalt-deep: "#1733b8"
  cobalt-soft: "#e8ecff"
  cobalt-on-surface: "#dfe4ff"
  technical-paper: "#f6f7f5"
  white: "#ffffff"
  graphite: "#121419"
  muted-slate: "#5c626d"
  rule-light: "#c8ccd2"
  rule-strong: "#7c828d"
typography:
  display:
    fontFamily: '"Archivo Narrow", "Arial Narrow", sans-serif'
    fontSize: "clamp(4.5rem, 9vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Archivo Narrow", "Arial Narrow", sans-serif'
    fontSize: "clamp(2.6rem, 5vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  lead:
    fontFamily: '"Archivo", "Helvetica Neue", sans-serif'
    fontSize: "clamp(1.35rem, 2.1vw, 1.85rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Archivo Narrow", "Arial Narrow", sans-serif'
    fontSize: "1.45rem"
    fontWeight: 700
    lineHeight: 1.55
  body-large:
    fontFamily: '"Archivo", "Helvetica Neue", sans-serif'
    fontSize: "clamp(1.15rem, 2vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Archivo", "Helvetica Neue", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '"Archivo Narrow", "Arial Narrow", sans-serif'
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.55
  control:
    fontFamily: '"Archivo", "Helvetica Neue", sans-serif'
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.55
rounded:
  square: "0"
spacing:
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  section-heading: "clamp(2.5rem, 5vw, 4rem)"
  section: "clamp(5rem, 10vw, 8rem)"
components:
  action-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1.1rem"
    height: "48px"
  action-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1.1rem"
    height: "48px"
  action-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1.1rem"
    height: "48px"
  action-secondary-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1.1rem"
    height: "48px"
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted-slate}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    height: "44px"
  language-option:
    backgroundColor: "transparent"
    textColor: "{colors.muted-slate}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    height: "38px"
    width: "42px"
  language-option-active:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    height: "38px"
    width: "42px"
  stack-cell:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.title}"
    rounded: "{rounded.square}"
    padding: "clamp(1rem, 2vw, 1.5rem)"
  ledger-row:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.square}"
    padding: "1.75rem 0"
  project-row:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.square}"
    padding: "1rem 0"
    height: "82px"
  project-row-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "1rem"
    height: "82px"
  contact-plane:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)"
---

# Design System: JRWL

## Overview

**Creative North Star: "The Maintained Technical Reference"**

JRWL is a maintained technical reference sheet: precise, current, and optimized for a recruiter’s short scan. Near-white paper, graphite type, and hard rules establish the working surface; cobalt identifies the current stack, decisive actions, and the contact plane.

The interface stays flat and type-led. Archivo Narrow compresses identity and section structure while Archivo keeps sentences readable; square controls and full-width rows make every transition explicit. Motion is limited to one left-to-right scan across the stack band, then the page becomes still.

The system must remain factual and multilingual across English, Finnish, and Swedish. It explicitly rejects maritime themes, symbols, logos, charts, technology-badge clouds, portfolio dashboards, and ship-derived visual language.

**Key Characteristics:**

- Near-white paper, graphite text, and cobalt emphasis.
- Archivo Narrow structure paired with Archivo body copy.
- Square controls, hard rules, and full-width information rows.
- Flat depth with one non-looping stack-row scan.
- Responsive layouts that preserve 44-pixel mobile targets and EN/FI/SV wrapping.

## Colors

The palette is a restrained technical neutral field with one high-confidence cobalt signal.

### Primary

- **Maintained Cobalt:** The signature accent for the current-stack band, primary action, contact plane, selection, scrollbar, active navigation indicator, and strong interactive rows.
- **Deep Cobalt:** The darker response state for the primary action.
- **Soft Cobalt:** A quiet interaction wash for language controls.
- **On-Cobalt Tint:** Secondary copy on solid cobalt surfaces; primary copy remains white.

### Neutral

- **Technical Paper:** The page and transparent-control ground; warmer and softer than pure white without reading as cream.
- **White:** Inverse text and high-contrast content on cobalt or graphite.
- **Graphite:** Primary type, heavy rules, the active language state, and the secondary-action hover fill.
- **Muted Slate:** Secondary copy, inactive navigation, and footer text.
- **Light Rule:** Internal separators in compact navigation.
- **Strong Rule:** Ledger rows, project rows, language-control borders, and major section divisions.

### Named Rules

**The Cobalt Allocation Rule.** Cobalt marks the current stack, decisive actions, contact information, or active interaction; it is not decoration.

**The Graphite Skeleton Rule.** Hard graphite and slate rules create structure; do not replace them with cards, shadows, or soft tinted containers.

## Typography

**Display Font:** Archivo Narrow with Arial Narrow and sans-serif fallbacks

**Body Font:** Archivo with Helvetica Neue and sans-serif fallbacks

**Character:** The pairing is compact, direct, and technical without becoming monospaced or terminal-like. Condensed display type gives names, headings, labels, and statuses authority; the wider body face keeps factual copy readable in three languages.

### Hierarchy

- **Display:** The two-line personal name; very tight leading creates one graphic identity block.
- **Headline:** Major section titles and the contact heading; condensed and tightly tracked for fast vertical landmarks.
- **Lead:** The role statement; larger than body copy but still sentence-led.
- **Title:** Project names and the four current-stack technologies.
- **Body Large:** Skills, working-principle rows, and other high-value factual content.
- **Body:** Descriptions, availability, contact details, and supporting copy.
- **Label:** Navigation, skill categories, statuses, language controls, brand text, and footer metadata.
- **Control:** Primary and secondary action labels.

### Named Rules

**The Condensed Structure Rule.** Use Archivo Narrow for identity, section structure, navigation, labels, and status; use Archivo for sentences, descriptions, and data.

## Layout

The desktop system uses a centered shell capped at 1240 pixels with 1.5rem outer gutters and a recurring 12-column grid. The header is a 74-pixel sticky rule with brand, centered navigation, and language controls. The hero fills the remaining viewport height: the name occupies seven columns, the role and actions begin at column nine, and the cobalt stack band spans all twelve columns.

Sections use generous fluid vertical spacing and full-width information rows. Skill labels occupy four columns and their content occupies eight; project rows align name, description, status, and optional external-link mark without becoming cards. The closing area divides into a seven-part working-principles field and a five-part cobalt contact field.

At 860 pixels and below, the header becomes static and two-row, the navigation becomes four equal cells, the hero and section headings become single-column, the stack band becomes a two-by-two grid, and skills and the closing area stack. At 520 pixels and below, actions become full width; the stack and contact planes bleed to the viewport gutter; project statuses wrap; and the footer stacks. Layout must tolerate English, Finnish, and Swedish copy without fixed text heights, ellipsis, or clipped controls.

**The Full-Width Evidence Rule.** Information rows span their container and separate with rules; avoid floating cards, badges, and tile grids.

## Elevation & Depth

The system has no shadows. All surfaces remain on one plane; hierarchy comes from type scale, spacing, hard rules, and the contrast between technical paper and solid cobalt fields. Interaction changes fill, text color, underline weight, or inline padding rather than lifting elements.

**The Flat-by-Default Rule.** Surfaces remain flat at rest; hierarchy comes from type, rules, and cobalt planes, never shadows.

## Shapes

Every control and surface uses square corners. Borders are functional: 1-pixel rules divide information, 2-pixel graphite rules anchor major boundaries, and 3-pixel cobalt or white outlines show keyboard focus with a 3-pixel offset. External-link marks use square stroke caps and mitered joins so their geometry matches the rest of the system.

**The Zero-Radius Rule.** Do not introduce pills, rounded cards, soft chips, or curved control shells; the implemented radius is zero.

## Components

### Actions

- **Shape:** Square, outlined controls with a 48-pixel minimum height and compact horizontal padding.
- **Primary:** Cobalt fill, white label, and cobalt border; hover and focus deepen the cobalt.
- **Secondary:** Transparent fill with graphite text and border; hover and focus reverse to graphite with white text.
- **Focus:** A 3-pixel cobalt outline with 3-pixel offset; use white when the control sits on cobalt.
- **Responsive:** At 520 pixels and below, actions stack and fill the available width.

### Navigation

- **Desktop:** Centered Archivo Narrow links in muted slate; hover and focus shift to graphite, while the current section adds a 3-pixel cobalt underline that resolves from left to right.
- **Compact:** At 860 pixels and below, links become four equal, rule-separated cells beneath the brand and language controls.
- **Targets:** Preserve at least a 44-pixel interactive height.

### Language Switch

- **Structure:** Three fused square cells inside one strong 1-pixel outline.
- **Default / Hover:** Transparent with muted text; hover and focus use soft cobalt with graphite text.
- **Active:** Graphite with white text and `aria-pressed="true"`.
- **Responsive:** Cells grow from 42 by 38 pixels to 44 by 44 pixels at the compact breakpoint.

### Stack Band

- **Structure:** Four equal cobalt cells with white Archivo Narrow titles and translucent white internal rules; collapse to a two-by-two grid at the compact breakpoint.
- **Motion:** One translucent scan strip crosses left to right over 900 milliseconds after a 180-millisecond delay. It does not loop, and reduced-motion preferences collapse it to an effectively instant pass.

### Information Rows

- **Skill Ledger:** Full-width ruled rows with a muted condensed category and larger graphite content.
- **Project Row:** Name, description, status, and optional external-link mark align on one row; compact layouts move the description to a second line.
- **Interactive Project:** Hover and focus add one rem of horizontal inset and reverse the row to cobalt with white text.

### Contact Plane

- **Structure:** A square, shadowless cobalt field paired directly with the working-principles field.
- **Content:** White heading and links with the on-cobalt tint reserved for location copy.
- **Focus:** Links keep their underline and use a white focus outline.

## Do's and Don'ts

### Do:

- **Do** reserve cobalt for the current stack, primary action, contact plane, active navigation, selection, focus, and strong row interaction.
- **Do** build hierarchy with Archivo Narrow, Archivo, hard rules, spacing, and full-width rows.
- **Do** keep controls square and keyboard focus visible with a 3-pixel outline and 3-pixel offset.
- **Do** preserve flexible copy widths and 44-pixel targets across English, Finnish, and Swedish.
- **Do** let the stack scan run once, then leave the page still; honor reduced-motion preferences.

### Don't:

- **Don't** introduce maritime themes, symbols, logos, charts, or ship-derived visual language.
- **Don't** turn the profile into a portfolio dashboard, technology-badge cloud, chart, or proof-theatre interface.
- **Don't** soften the system with pills, rounded cards, gradients, shadows, or floating panels.
- **Don't** spread cobalt across arbitrary decorative surfaces; its scarcity carries meaning.
- **Don't** add looping, ambient, parallax, or scroll-bound motion.
