# Founder / Services Background Section Spec

## File
`src/components/FounderSection.tsx`

## Screenshot Reference
`docs/design-references/founder-desktop.png`

## Overview
Full-width section (~600px) with a full-bleed background image (car interior). Dark overlay. Centered content: eyebrow tag, large H2, subtitle, and one CTA button. Called "contentWithImageBackground" in the source site. Visually dramatic — nearly full viewport height with the image bleeding edge to edge.

## Layout Structure
```
<section> (position relative, height 600px, overflow hidden)
  <div> (background image + overlay, absolute inset)
    <Image> (services-bg.jpg, object-fit cover)
    <div> (dark overlay)
  </div>
  <div> (content, relative z-10, centered column)
    <div> eyebrow
    <h2> heading
    <p> subtitle
    <a> CTA button
  </div>
```

## Section Element
- `position: relative`
- `height: 600px`
- `overflow: hidden`
- `display: flex`
- `align-items: center`
- `justify-content: center`

## Background Image
- Asset: `/images/services-bg.jpg` (car interior / steering wheel shot)
- `position: absolute`
- `inset: 0`
- `width: 100%`
- `height: 100%`
- `object-fit: cover`
- `object-position: center`

## Dark Overlay
- `position: absolute`
- `inset: 0`
- `background-color: rgba(15, 15, 16, 0.75)`
- `z-index: 1`

## Content Container
- `position: relative`
- `z-index: 10`
- `text-align: center`
- `max-width: 700px`
- `padding: 0 30px`

## Eyebrow
- Red line (left) + tag text (right) — same as other sections but centered
- Or: red line left, text, red line right (symmetric)
- Tag text: "NOS PRESTATIONS"
- `font-family: var(--font-oswald); font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: rgb(166,166,171)`
- `display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 16px`
- Lines: `width: 30px; height: 2px; background: rgb(227,6,19)`

## H2
```
UNE EXPÉRIENCE DE CONDUITE INOUBLIABLE
```
- `font-family: var(--font-oswald)`
- `font-size: clamp(32px, 4vw, 56px)`
- `font-weight: 700`
- `color: rgb(255, 255, 255)`
- `text-transform: uppercase`
- `line-height: 1.05`
- `margin-bottom: 20px`
- One word wrapped in `<span className="highlight-red">`

## Subtitle
```
Performance GT vous propose une gamme exclusive de véhicules pour vivre des sensations uniques au volant des plus grandes marques automobiles.
```
- `font-family: var(--font-dm-sans)`
- `font-size: 16px`
- `line-height: 1.6`
- `color: rgba(255, 255, 255, 0.8)`
- `max-width: 560px`
- `margin: 0 auto 36px`

## CTA Button
- Style: outlined white (custom for dark bg)
- `display: inline-flex; align-items: center; gap: 8px`
- `background: transparent`
- `color: rgb(255, 255, 255)`
- `border: 2px solid rgb(255, 255, 255)`
- `font-family: var(--font-oswald); font-weight: 700; font-size: 15px; letter-spacing: 0.05em; text-transform: uppercase`
- `padding: 14px 32px`
- On hover: `background: rgb(227,6,19); border-color: rgb(227,6,19)`
- `transition: all 0.2s ease`
- Text: "DÉCOUVRIR NOS SERVICES →"
- `href="#"`

## Responsive Behavior

### Desktop (≥ 1024px)
- `height: 600px`

### Tablet
- `height: 500px`

### Mobile (< 768px)
- `height: 450px` (or `min-height: 450px`)
- H2 font-size: `32px`
- Subtitle font-size: `15px`

## Assets Used
- `/images/services-bg.jpg`
