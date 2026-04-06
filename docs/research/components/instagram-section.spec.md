# Instagram Section Spec

## File
`src/components/InstagramSection.tsx`

## Screenshot Reference
`docs/design-references/instagram-desktop.png`

## Overview
White background section with a centered header and a 6-image grid (2 rows × 3 columns on desktop, or varying sizes). Each image is a square-ish grid tile linking to Instagram. Below the grid, a "Suivez-nous sur Instagram" CTA link.

## Layout Structure
```
<section> (white bg, py 80px)
  <div> (container, max-width 1400px, mx auto, px 30px)
    <!-- Header -->
    <div> (centered text)
      <div> eyebrow
      <h2> heading
      <p> subtitle
    <!-- Instagram Grid -->
    <div> (6-column or 3-column grid, gap 4px)
      <a> × 6 (each image tile)
    <!-- CTA -->
    <div> (centered)
      <a> Instagram link button
```

## Section Element
- `background-color: rgb(255, 255, 255)`
- `padding: 80px 0`

## Section Header (centered)

### Eyebrow
- Tag text: "INSTAGRAM"
- `display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 12px`
- Red line (left) + text + red line (right), symmetric
- `font-family: var(--font-oswald); font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: rgb(95,95,95)`

### H2
```
SUIVEZ-NOUS SUR INSTAGRAM
```
- `font-family: var(--font-oswald)`
- `font-size: clamp(28px, 3vw, 44px)`
- `font-weight: 700`
- `color: rgb(27, 27, 27)`
- `text-transform: uppercase`
- `text-align: center`
- `margin-bottom: 12px`

### Subtitle
```
Retrouvez nos dernières actualités et moments forts sur notre compte Instagram @performancegt
```
- `font-size: 15px`
- `color: rgb(95, 95, 95)`
- `text-align: center`
- `margin-bottom: 40px`

## Instagram Grid

### Container
- `display: grid`
- `grid-template-columns: repeat(3, 1fr)` (desktop)
- `gap: 4px`
- `margin-bottom: 40px`

### Each Image Tile
- `<a>` wrapping a relative `<div>` with `aspect-ratio: 4/3` (or fixed height)
- `overflow: hidden`
- `position: relative`
- `display: block`

#### Image
- `width: 100%; height: 100%; object-fit: cover`
- `transition: transform 0.4s ease`

#### Hover Overlay
- `position: absolute; inset: 0`
- `background-color: rgba(227, 6, 19, 0.5)` (semi-transparent red)
- `opacity: 0`
- `transition: opacity 0.3s ease`
- On parent hover: `opacity: 1`
- Center: Instagram icon (camera/heart icon) in white

#### Instagram Icon on hover
```
<svg> camera or Instagram logo, 32×32px, white
position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)
```

### 6 Instagram Images
```typescript
const posts = [
  { id: 'insta-1', image: '/images/instagram/insta-1.jpg', alt: 'Performance GT Instagram', href: 'https://www.instagram.com/performancegt' },
  { id: 'insta-2', image: '/images/instagram/insta-2.jpg', alt: 'Performance GT Instagram', href: 'https://www.instagram.com/performancegt' },
  { id: 'insta-3', image: '/images/instagram/insta-3.jpg', alt: 'Performance GT Instagram', href: 'https://www.instagram.com/performancegt' },
  { id: 'insta-4', image: '/images/instagram/insta-4.jpg', alt: 'Performance GT Instagram', href: 'https://www.instagram.com/performancegt' },
  { id: 'insta-5', image: '/images/instagram/insta-5.jpg', alt: 'Performance GT Instagram', href: 'https://www.instagram.com/performancegt' },
  { id: 'insta-6', image: '/images/instagram/insta-6.jpg', alt: 'Performance GT Instagram', href: 'https://www.instagram.com/performancegt' },
];
```

## CTA Button (below grid)
- `text-align: center`
- Button text: "NOUS SUIVRE SUR INSTAGRAM"
- Style: `.btn-outline` (dark border, from globals.css)
- With Instagram icon to the left (optional)
- `href="https://www.instagram.com/performancegt"`

## Responsive Behavior

### Desktop (≥ 1024px)
- `grid-template-columns: repeat(3, 1fr)` — 2 rows of 3

### Tablet (768px–1023px)
- `grid-template-columns: repeat(3, 1fr)` — same but smaller

### Mobile (< 768px)
- `grid-template-columns: repeat(2, 1fr)` — 3 rows of 2
- Or `repeat(1, 1fr)` — 6 stacked

## Assets Used
- `/images/instagram/insta-1.jpg`
- `/images/instagram/insta-2.jpg`
- `/images/instagram/insta-3.jpg`
- `/images/instagram/insta-4.jpg`
- `/images/instagram/insta-5.jpg`
- `/images/instagram/insta-6.jpg`
