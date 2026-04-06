# About Section Spec

## File
`src/components/AboutSection.tsx`

## Screenshot Reference
`docs/design-references/about-desktop.png`

## Overview
Light background section (~700px) with a 2-column layout. Left column: stacked images (person + car). Right column: eyebrow tag, H2, body paragraphs, stats row, and a CTA button. Background: `rgb(245, 245, 245)`.

## Layout Structure
```
<section> (light bg, py 80px)
  <div> (container, max-width 1400px, mx auto, px 30px)
    <div> (2-column grid: 40% left, 60% right, gap 60px)
      <!-- LEFT: Images -->
      <div> (relative, image composition)
        <div> (main image: about-person.jpg, large)
        <div> (overlay image: about-car.jpg, smaller, offset bottom-right)
      <!-- RIGHT: Text -->
      <div>
        <div> eyebrow
        <h2> heading
        <p> × 2 body paragraphs
        <div> stats row (3 stats)
        <a> CTA button
```

## Section Element
- `background-color: rgb(245, 245, 245)`
- `padding: 80px 0`

## Left Column — Image Composition

### Container
- `position: relative`
- `height: 500px` (desktop)

### Main Image (person)
- Asset: `/images/about-person.jpg`
- `position: absolute`
- `top: 0`
- `left: 0`
- `width: 75%`
- `height: 85%`
- `object-fit: cover`

### Overlay Image (car)
- Asset: `/images/about-car.jpg` (red Ferrari)
- `position: absolute`
- `bottom: 0`
- `right: 0`
- `width: 60%`
- `height: 55%`
- `object-fit: cover`
- `border: 4px solid rgb(245, 245, 245)` (white gap from main image)

## Right Column — Text Content

### Eyebrow
- Red line + "À PROPOS"
- Same pattern as ServicesSection eyebrow:
  - `display: flex; align-items: center; gap: 10px`
  - Line: `width: 30px; height: 2px; background: rgb(227,6,19); display: inline-block`
  - Text: `font-family: var(--font-oswald); font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: rgb(95,95,95)`
- `margin-bottom: 16px`

### H2
```
PERFORMANCE GT, VOTRE SPÉCIALISTE EN LOCATION DE VOITURES DE LUXE
```
- `font-family: var(--font-oswald)`
- `font-size: clamp(28px, 3vw, 44px)`
- `font-weight: 700`
- `color: rgb(27, 27, 27)`
- `text-transform: uppercase`
- `line-height: 1.1`
- `margin-bottom: 20px`
- One word/phrase wrapped in `<span className="highlight-red">`

### Body Paragraphs
```
Paragraph 1:
Depuis plus de 10 ans, Performance GT est le spécialiste de la location de voitures de luxe et de prestige en région Rhône-Alpes et PACA. Notre flotte d'exception réunit les plus grands noms de l'automobile.

Paragraph 2:
Que ce soit pour une occasion spéciale, un mariage, un événement d'entreprise ou simplement pour le plaisir de conduire, nous mettons à votre disposition des véhicules d'exception avec un service personnalisé.
```
- `font-family: var(--font-dm-sans)`
- `font-size: 16px`
- `line-height: 1.6`
- `color: rgb(95, 95, 95)`
- `margin-bottom: 16px` between paragraphs
- `margin-bottom: 32px` after last paragraph

### Stats Row
3 stats side by side:
```
+200          10 ANS        5 ÉTOILES
Véhicules     d'expérience  de satisfaction
```

#### Stats Container
- `display: flex`
- `gap: 32px`
- `margin-bottom: 36px`
- Optional: thin top border `border-top: 1px solid rgb(193,193,193)`, `padding-top: 24px`

#### Each Stat
- Number: `font-family: var(--font-oswald); font-size: 36px; font-weight: 700; color: rgb(227,6,19)` (red)
- Label: `font-family: var(--font-dm-sans); font-size: 13px; color: rgb(95,95,95); text-transform: uppercase; letter-spacing: 0.05em`

### CTA Button
- Style: `.btn-primary` (red, from globals.css)
- Text: "EN SAVOIR PLUS →"
- `href="#"`

## Responsive Behavior

### Desktop (≥ 1024px)
- 2-column grid: `grid-template-columns: 2fr 3fr`
- Image column visible and composed

### Tablet (768px–1023px)
- 2-column but narrower
- Image column: single main image, overlay hidden or repositioned

### Mobile (< 768px)
- Stack: image on top (just main image, 300px height), text below
- Stats wrap to 2×2 or 1×3 column

## Assets Used
- `/images/about-person.jpg`
- `/images/about-car.jpg`
