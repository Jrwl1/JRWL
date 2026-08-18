---
name: "JRWL"
description: "A compact, image-led technical profile organized as a luminous Orbital Index."
colors:
  ember: "#ff6138"
  gold: "#ffc857"
  disk-blue: "#73aaff"
  blue-white: "#dcecff"
  void: "#05070b"
  surface: "#0b0e15"
  line: "#252c39"
  line-bright: "#465469"
  text: "#eef4ff"
  muted: "#99a5b6"
typography:
  display:
    fontFamily: '"IBM Plex Sans Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(2.8rem, 4.5vw, 4.35rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"IBM Plex Sans Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(2.2rem, 4.2vw, 4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"IBM Plex Sans Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(1.45rem, 2vw, 2rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.025em"
  lead:
    fontFamily: '"Sora", sans-serif'
    fontSize: "clamp(1.1rem, 2vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: '"Sora", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"Sora", sans-serif'
    fontSize: "0.84rem"
    fontWeight: 500
    lineHeight: 1.6
  control:
    fontFamily: '"Sora", sans-serif'
    fontSize: "0.88rem"
    fontWeight: 600
    lineHeight: 1.6
  metadata:
    fontFamily: '"IBM Plex Mono", monospace'
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  panel: "18px"
  pill: "999px"
  circle: "50%"
spacing:
  section-space: "clamp(88px, 10vw, 148px)"
components:
  action-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.void}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  action-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "44px"
  language-option:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.metadata}"
    rounded: "{rounded.pill}"
    height: "44px"
    width: "44px"
  language-option-active:
    backgroundColor: "{colors.text}"
    textColor: "{colors.void}"
    typography: "{typography.metadata}"
    rounded: "{rounded.pill}"
    height: "44px"
    width: "44px"
  orbital-map:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.blue-white}"
    rounded: "{rounded.panel}"
    padding: "clamp(52px, 7vw, 92px)"
  project-row:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    padding: "20px 4px"
    height: "92px"
  contact-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
    padding: "clamp(40px, 7vw, 88px)"
---

# Design System: JRWL

## Overview

**Creative North Star: "Orbital Index"**

JRWL is a compact technical profile arranged as an Orbital Index: factual content sits inside a dark field of authored accretion light, fine trajectories, and sparse instrument-like metadata. The visual system feels precise and cinematic without becoming a space-themed costume; the artwork supplies atmosphere while the interface stays legible and direct.

Void black and layered navy establish the field. Blue-white and disk blue describe cold illumination, while ember orange and photon gold mark energy, focus, and decisive interaction. Condensed headings keep identity modest, Sora carries readable copy, and IBM Plex Mono handles short status and coordinate data.

The system remains multilingual across English, Finnish, and Swedish. It preserves semantic structure, visible keyboard focus, reduced-motion behavior, and 44-pixel interactive targets while rejecting the discarded white-paper/cobalt world, visible logos, maritime imagery, and repeated technology inventories.

**Key Characteristics:**

- Void-led, luminous surfaces anchored by authored accretion imagery.
- Cold blue illumination balanced by sparse ember-to-gold signals.
- IBM Plex Sans Condensed structure, Sora prose, and IBM Plex Mono metadata.
- Fine orbit lines, 18-pixel panels, pill controls, and flat information rows.
- One radial skill map and one non-looping horizon reveal.

## Colors

The palette reads as cold orbital light on near-black surfaces, with a narrow warm spectrum reserved for energy and interaction.

### Primary

- **Ember Orange:** Starts the primary-action gradient, marks project status, colors warm orbit traces, and anchors selected text.
- **Photon Gold:** Completes the warm gradient, carries visible keyboard focus, marks small orbital beacons, and signals hover emphasis.

### Secondary

- **Disk Blue:** Supplies the radial-map atmosphere, cool halo geometry, and blue light reflected from the hero artwork.
- **Blue-White:** Keeps lead copy, skill content, and fine orbital details luminous without using pure white everywhere.

### Neutral

- **Void:** The page ground, hero shadow field, and inverse text color on warm actions.
- **Orbital Surface:** The shared ground for the radial map, contact panel, and language-switch shell.
- **Text Light:** Primary text and the active language fill.
- **Muted Steel:** Supporting copy, navigation, metadata, and inactive controls.
- **Orbit Line:** Quiet section, panel, and control boundaries.
- **Bright Orbit Line:** Stronger row anchors, secondary-action borders, and prominent circular geometry.

### Named Rules

**The Warm Signal Rule.** Ember and gold appear as a compact gradient, a hairline, a dot, or an interaction signal; they do not become broad decorative planes.

**The Cold Light Rule.** Blue-white and disk blue describe illumination and technical depth, not a generic blue call-to-action palette.

## Typography

**Display Font:** IBM Plex Sans Condensed with Arial Narrow and sans-serif fallbacks

**Body Font:** Sora with a sans-serif fallback

**Label/Mono Font:** IBM Plex Mono with a monospace fallback

**Character:** The three voices separate identity, reading, and instrumentation. Condensed type is calm and space-efficient, Sora is plain and contemporary, and mono is restricted to compact operational metadata.

### Hierarchy

- **Display** (500, clamp(2.8rem, 4.5vw, 4.35rem), 1): The compact personal name in the hero; it remains subordinate to the artwork.
- **Headline** (400, clamp(2.2rem, 4.2vw, 4rem), 1): Section and contact titles that create clear scan landmarks.
- **Title** (500, clamp(1.45rem, 2vw, 2rem), 1): Personal-project names.
- **Lead** (400, clamp(1.1rem, 2vw, 1.45rem), 1.45): The concise role statement in blue-white.
- **Body** (400, 1rem, 1.6): Descriptions, supporting notes, and contact content.
- **Label** (500, 0.84rem, 1.6): Navigation and compact interface labels.
- **Control** (600, 0.88rem, 1.6): Primary and secondary action labels.
- **Metadata** (400, approximately 0.68rem, 0.1em tracking): Language options, project statuses, approach indices, and terse coordinate data.

### Named Rules

**The Three-Voice Rule.** Use IBM Plex Sans Condensed for names and headings, Sora for reading and controls, and IBM Plex Mono only for short status or instrument-like data.

## Layout

The primary shell is capped at 1440 pixels with 24-pixel desktop gutters. A three-part sticky header centers navigation between identity and the language switch; the hero then spans the viewport, holding compact content in the left field while the authored accretion artwork owns the brighter right side. The hero stays between 600 and 760 pixels tall on wide screens so the stack follows close behind.

Sections use a fluid vertical interval from 88 to 148 pixels. The radial skill map is a two-by-two field around a central core rather than a generic card grid. Personal projects remain secondary as full-width ruled rows; the working approach uses a three-stop horizon track; contact closes in a two-column luminous panel.

At 900 pixels and below, the shell narrows to a 720-pixel maximum with 16-pixel gutters, the header becomes two rows, the skill orbit tightens, and contact becomes one column. At 620 pixels and below, gutters reduce to 12 pixels, the hero content moves lower over a stronger image scrim, section intros stack, the skill orbit preserves its two-by-two radial relationship, project rows become two-line records, and the approach track becomes vertical. Copy and targets must expand for English, Finnish, and Swedish without clipping or fixed text heights.

**The Orbital Evidence Rule.** Present the current stack once in the radial map; supporting sections use rows and tracks instead of repeating technology badges or summary tiles.

## Elevation & Depth

Depth comes from the accretion artwork, transparent dark layers, radial gradients, fine orbit lines, and two small photon-gold glows. Conventional drop shadows are absent. Panels stay on the page plane; the secondary action and sticky header use translucent surfaces, while hover states adjust color, border, or position by only two pixels.

### Shadow Vocabulary

- **Gold Beacon:** A compact 14-to-18-pixel photon-gold glow used only on the availability and orbital-center dots.

### Named Rules

**The Light Source Rule.** Glow belongs to tiny luminous sources; panels, rows, controls, and typography never cast drop shadows.

## Shapes

The form language uses three recurring geometries: 18-pixel rounded panels for the skill map and contact surface, fully rounded pills for actions and language controls, and true circles for orbital lines, map cores, and status beacons. One-pixel hairlines define structure. Project and approach rows stay flat and uncontained so rounded panels remain rare.

**The Three-Radius Rule.** Use 18-pixel panels, pill controls, and circular orbital geometry deliberately; do not introduce intermediate card radii.

## Components

### Hero Artwork

- **Structure:** A full-bleed 1536 by 1024 WebP sits behind content, cropped toward the right-side event horizon and protected by responsive void scrims.
- **Overlay:** Compact identity, role, availability, and two actions occupy the darker left field; fine orbit ellipses and faint horizontal calibration lines extend the image language.
- **Motion:** The image reveals from right to left over 1500 milliseconds with an ease-out curve, runs once, and collapses under reduced-motion preferences.

### Actions

- **Shape:** Fully rounded controls with a 48-pixel minimum height, 22-pixel inline padding, and a one-pixel border.
- **Primary:** Ember-to-gold gradient with void text.
- **Secondary:** Translucent orbital surface with light text and a bright orbit-line border.
- **Hover / Focus:** Both lift by two pixels on hover; the secondary surface brightens. Keyboard focus uses a two-pixel photon-gold outline with a four-pixel offset.

### Navigation

- **Desktop:** A 72-pixel sticky translucent-void header with centered muted links; the active section turns light and gains a one-pixel ember-to-gold underline.
- **Compact:** At 900 pixels, navigation occupies a second full-width row and each link shares the available width.
- **Targets:** Links preserve at least 44 pixels of interactive height.

### Language Switch

- **Structure:** Three 44-pixel minimum targets sit inside one orbital-surface pill.
- **Default:** Muted IBM Plex Mono labels on a transparent ground.
- **Active:** Light fill with void text and an inner pill.
- **State:** The selected language is exposed with aria-pressed; keyboard focus keeps the global photon-gold outline.

### Orbital Skill Map

- **Structure:** Four factual nodes sit around a circular center inside an 18-pixel surface panel, with two large orbit traces tying them into one system.
- **Content:** Gold uppercase category labels lead blue-white stack text. The central core repeats only the section identity, not the technology list.
- **Responsive:** The two-by-two orbit survives on narrow screens; typography and padding contract around the center instead of flattening into badges.

### Project Rows

- **Structure:** Each project is a 92-pixel ruled record aligning title, description, mono status, and an optional external-link mark.
- **Interaction:** Linked rows gain a small inline inset and photon-gold border/text emphasis on hover; focus remains visibly outlined.
- **Responsive:** Below 620 pixels, title and status share the first row while description and optional link occupy the second.

### Approach Track

- **Structure:** Three numbered statements share a bright horizontal hairline with small gold-outlined nodes.
- **Responsive:** The track becomes a vertical list below 620 pixels while keeping the same ordered progression.

### Contact Panel

- **Structure:** An 18-pixel orbital-surface panel pairs title/location with a vertical contact-link list.
- **Depth:** Restrained ember and disk-blue radial light enters from opposite edges; there is no drop shadow.
- **Interaction:** Links preserve 44-pixel targets and gain a photon-gold underline on hover.

## Do's and Don'ts

### Do:

- **Do** keep authored orbital imagery and dark negative space in a balanced image-led composition.
- **Do** use ember and gold as compact luminous signals against void, surface, and blue-white light.
- **Do** keep IBM Plex Sans Condensed, Sora, and IBM Plex Mono in their distinct structural, reading, and metadata roles.
- **Do** preserve two-pixel photon-gold focus outlines with four-pixel offsets and at least 44-pixel targets.
- **Do** run the horizon reveal once, then leave the page still; collapse motion when reduced motion is requested.
- **Do** preserve flexible English, Finnish, and Swedish copy without clipping or fixed text heights.

### Don't:

- **Don't** return to the discarded white-paper/cobalt technical-sheet treatment.
- **Don't** turn the orbital language into logos, spacecraft, dashboards, charts, or generic sci-fi decoration.
- **Don't** use broad warm fills, purple cyberpunk neon, or repeated blue boxes; light should feel sourced and restrained.
- **Don't** add floating drop-shadow cards or intermediate corner radii.
- **Don't** repeat the current stack as badges, highlights, or a second inventory.
- **Don't** add looping, parallax, cursor-following, or ambient motion.
