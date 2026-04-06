# Header Component Spec

## File
`src/components/Header.tsx`

## Screenshot Reference
`docs/design-references/header-desktop.png`

## Overview
Fixed overlay header, always on top (z-index: 900). Transparent on page load, transitions to dark background after scrolling ~50px. Contains logo (center), hamburger menu button (left), and two CTA buttons (right). On mobile, the right CTAs are hidden.

## Layout Structure
```
<header> (fixed, full-width, z-index: 900)
  <div> (inner container, flex, space-between, align-center, max-width ~1400px, mx auto, px 30px)
    [LEFT]  <button> hamburger + "MENU" label
    [CENTER] <a> logo SVG
    [RIGHT]  <a> "NOS VÉHICULES" (outlined btn)
             <a> "NOUS CONTACTER" (filled dark btn)
```

## Computed CSS — Header Element
- `position: fixed`
- `top: 0`
- `left: 0`
- `right: 0`
- `width: 100%`
- `height: 80px`
- `z-index: 900`
- `background-color: transparent` (initial state)
- `transition: background-color 0.3s ease, box-shadow 0.3s ease`
- `display: flex`
- `align-items: center`

## Scroll Behavior
**Trigger:** window scroll > 50px (body gains class `inScroll`)
**State change:**
- Before scroll: `background-color: transparent`, `box-shadow: none`
- After scroll: `background-color: rgb(15, 15, 16)` (#0F0F10), `box-shadow: 0 2px 10px rgba(0,0,0,0.3)`
- Transition: `background-color 0.3s ease`

Implementation: add `scroll` event listener, toggle a `scrolled` state at 50px, apply dark bg class.

## Inner Container
- `display: flex`
- `justify-content: space-between`
- `align-items: center`
- `width: 100%`
- `max-width: 1400px`
- `margin: 0 auto`
- `padding: 0 30px`

## Logo (Center)
- Asset: `/images/logo.svg`
- Wrapped in `<a href="/">` 
- `height: 45px` (the SVG itself)
- `width: auto`
- Logo is white/light colored (visible on dark background)
- Position: centered (flex item, use `position: absolute; left: 50%; transform: translateX(-50%)` on desktop OR use a 3-column flex layout with the logo in the middle column)

## Hamburger Button (Left)
- `display: flex`
- `align-items: center`
- `gap: 10px`
- `background: none`
- `border: none`
- `cursor: pointer`
- `color: rgb(255, 255, 255)`

### Hamburger Icon
Three horizontal lines stacked:
- Each line: `width: 28px`, `height: 2px`, `background-color: rgb(255, 255, 255)`
- Gap between lines: `4px`
- No animation needed for this spec (menu open state is out of scope for the static clone)

### "MENU" Label
- `font-family: var(--font-oswald)`
- `font-weight: 700`
- `font-size: 14px`
- `letter-spacing: 0.1em`
- `text-transform: uppercase`
- `color: rgb(255, 255, 255)`

## Right CTAs

### "NOS VÉHICULES" button
- Style: `.btn-outline` (already in globals.css)
- `color: rgb(255, 255, 255)` (override the default dark color since header is dark)
- `border-color: rgb(255, 255, 255)`
- On hover: `background-color: rgb(255, 255, 255)`, `color: rgb(15, 15, 16)`
- `href="/nos-vehicules"` (or `"#vehicles"` for single-page)
- Text: "NOS VÉHICULES"

### "NOUS CONTACTER" button
- Style: `.btn-filled-dark` BUT with white bg variant since it appears lighter
- Actually: `background-color: rgb(255, 255, 255)`, `color: rgb(15, 15, 16)`, white filled
- `border: 1.5px solid rgb(255, 255, 255)`
- On hover: `background-color: transparent`, `color: rgb(255, 255, 255)`
- `href="/contact"` (or `"#contact"`)
- Text: "NOUS CONTACTER"

## Responsive Behavior

### Desktop (≥ 1024px)
- Show all elements: hamburger + logo + both CTAs

### Tablet (768px–1023px)
- Show: hamburger + logo
- Hide: right CTAs

### Mobile (< 768px)
- Show: hamburger + logo
- Hide: right CTAs
- Inner container padding reduced to `0 16px`

## TypeScript Interface
```typescript
// No props needed — header is standalone with internal scroll state
// Uses React useState for scrolled state
```

## Implementation Notes
1. Use `useEffect` with a `scroll` event listener to toggle scrolled state
2. On scrolled, apply `bg-[rgb(15,15,16)] shadow-md` (or the CSS class `.header-scrolled`)
3. The logo must always be centered regardless of whether the left/right items have different widths — use a 3-column grid or absolute centering
4. All text/icons are white by default (header is always dark or transparent over dark content)
5. No full-screen menu needed — just the closed state

## Assets Used
- `/images/logo.svg` — the Performance GT logo
