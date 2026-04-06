# Hero Section Spec

## File
`src/components/HeroSection.tsx`

## Screenshot Reference
`docs/design-references/hero-desktop.png`

## Overview
Full-width, tall section (900px height on desktop) with a full-bleed background image of a Porsche 992 GT3 Touring. Dark overlay on the image. Contains a centered content block with a red tag line, H1 heading (with word-split animation stagger), subtitle text, and a "Découvrir nos Véhicules" CTA button. Decorative background vertical lines (bkg-lines). No video — static image.

## Layout Structure
```
<section> (position relative, height 900px, overflow hidden, dark bg)
  <div class="bkg-lines">  ← decorative red lines (30 divs)
    <div class="bkg-lines-line" /> × 30
  </div>
  <div> (hero background image, absolute inset, object-fit cover)
    <Image> (background car photo)
    <div> (dark gradient overlay)
  </div>
  <div> (content container, relative z-10, centered)
    <span> tag: "LOCATION VOITURE DE LUXE"
    <h1> heading with <span class="highlight-red"> wrapping a word
    <p> subtitle
    <a> CTA button
  </div>
  <button> (scroll-down indicator, bottom center)
```

## Section Element
- `position: relative`
- `height: 900px`
- `min-height: 900px`
- `overflow: hidden`
- `background-color: rgb(15, 15, 16)`
- `display: flex`
- `align-items: center`
- No top padding (header floats over it)

## Background Image
- Asset: `/images/hero-car.jpg` (Porsche 992 GT3 Touring, side profile)
- `position: absolute`
- `inset: 0`
- `width: 100%`
- `height: 100%`
- `object-fit: cover`
- `object-position: center`
- `opacity: 0.6` (darkened by overlay)

## Dark Gradient Overlay
Sits on top of the bg image:
- `position: absolute`
- `inset: 0`
- `background: linear-gradient(to right, rgba(15,15,16,0.85) 40%, rgba(15,15,16,0.3) 100%)`
- `z-index: 1`

## Decorative Background Lines
Already defined in globals.css as `.bkg-lines` and `.bkg-lines-line`.
Render 30 `<div className="bkg-lines-line" />` inside `.bkg-lines`.
- `z-index: 0` (behind content, in front of image)

## Content Container
- `position: relative`
- `z-index: 10`
- `max-width: 700px`
- `padding-left: 80px` (desktop)
- `padding-left: 24px` (mobile)
- Content is left-aligned

## Tag Line (above H1)
```
LOCATION VOITURE DE LUXE
```
- `font-family: var(--font-oswald)`
- `font-size: 13px`
- `font-weight: 600`
- `letter-spacing: 0.2em`
- `text-transform: uppercase`
- `color: rgb(166, 166, 171)` (`--pgt-gray-light`)
- `display: flex`
- `align-items: center`
- `gap: 10px`
- Before it: short red line `width: 30px, height: 2px, background: rgb(227,6,19)` (inline `<span>`)

## H1 Heading
```
LOUEZ LA VOITURE DE VOS RÊVES
```
- `font-family: var(--font-oswald)`
- `font-size: clamp(42px, 5.5vw, 72px)`
- `font-weight: 700`
- `text-transform: uppercase`
- `color: rgb(255, 255, 255)`
- `line-height: 1.05`
- `margin-top: 16px`
- `margin-bottom: 20px`
- One word wrapped in `<span className="highlight-red">VOS</span>` (or "RÊVES") — red bg highlight

## Subtitle Text
```
Spécialiste de la location de voiture de luxe et de prestige en Rhône-Alpes et PACA. Service chauffeur, mariages, transferts aéroports.
```
- `font-family: var(--font-dm-sans)`
- `font-size: 17px`
- `font-weight: 400`
- `color: rgba(255, 255, 255, 0.75)`
- `line-height: 1.5`
- `max-width: 500px`
- `margin-bottom: 36px`

## CTA Button
```
DÉCOUVRIR NOS VÉHICULES  →
```
- Style: `.btn-primary` (red fill, already in globals.css)
- Arrow icon: use `→` or `›` character, or an SVG arrow
- `href="#vehicles"` (or `"/nos-vehicules"`)

## Scroll Down Indicator (Bottom Center)
A small animated scroll indicator at the bottom-center of the section.
- `position: absolute`
- `bottom: 30px`
- `left: 50%`
- `transform: translateX(-50%)`
- `z-index: 10`
- Contains a vertical line + animated dot scrolling downward
- OR a simple down-arrow chevron
- Implementation: simple animated down-chevron:
  ```
  width: 24px, height: 24px
  border-right: 2px solid white
  border-bottom: 2px solid white
  transform: rotate(45deg)
  animation: bounce 1.5s infinite
  ```

## Animations (WOW.js style)
Elements animate in on page load via CSS:
- Tag line: `fadeInUp 0.6s ease 0.1s both`
- H1: `fadeInUp 0.6s ease 0.3s both`
- Subtitle: `fadeInUp 0.6s ease 0.5s both`
- CTA: `fadeInUp 0.6s ease 0.7s both`

Use inline `style={{ animation: '...' }}` or Tailwind `animate-` classes.

## Responsive Behavior

### Desktop (≥ 1024px)
- `height: 900px`
- `padding-left: 80px`
- H1 font-size: clamp(42px, 5.5vw, 72px)

### Tablet (768px–1023px)
- `height: 700px`
- `padding-left: 40px`

### Mobile (< 768px)
- `height: 600px` (or `100svh`)
- `padding-left: 24px`
- H1 font-size: `38px`
- Subtitle font-size: `15px`

## Assets Used
- `/images/hero-car.jpg` — Porsche 992 GT3 Touring hero background
