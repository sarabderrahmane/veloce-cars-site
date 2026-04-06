# Services Section Spec

## File
`src/components/ServicesSection.tsx`

## Screenshot Reference
`docs/design-references/services-desktop.png`

## Overview
Dark background section (~1400px tall) containing:
1. Section header (eyebrow + H2 + subtitle)
2. Search/filter bar with 4 dropdowns
3. Service tile grid (1 large + 3 small tiles in a row)
4. Vehicle carousel (horizontal scrolling cards with prev/next arrows)

All on `background-color: rgb(15, 15, 16)`.

## Layout Structure
```
<section> (dark bg, relative, overflow hidden)
  <div class="bkg-lines">  ← decorative lines
  <div> (content, max-width 1400px, mx auto, px 30px, py 80px)
    <!-- Section Header -->
    <div> (eyebrow row: red line + tag)
    <h2> heading
    <p> subtitle
    <!-- Search Bar -->
    <form> (4 select dropdowns + submit button)
    <!-- Service Tiles Grid -->
    <div> (grid: 1 large + 3 small)
      <a> large tile (LOCATION)
      <a> small tile (CHAUFFEUR)
      <a> small tile (MARIAGE)
      <a> small tile (TRANSFERT)
    <!-- Vehicle Carousel -->
    <div> (carousel header: H3 + arrows)
    <div> (carousel track, overflow hidden)
      <div> (flex row of vehicle cards)
```

## Section Element
- `background-color: rgb(15, 15, 16)`
- `position: relative`
- `overflow: hidden`
- `padding: 80px 0`

## Section Header

### Eyebrow
- Red line: `width: 30px, height: 2px, background: rgb(227,6,19), display: inline-block`
- Tag text: "NOS SERVICES"
- `font-family: var(--font-oswald)`
- `font-size: 13px`
- `letter-spacing: 0.2em`
- `color: rgb(166, 166, 171)`
- `display: flex; align-items: center; gap: 10px`

### H2
```
DÉCOUVREZ NOS PRESTATIONS
```
- `font-family: var(--font-oswald)`
- `font-size: clamp(32px, 3.5vw, 52px)`
- `font-weight: 700`
- `color: rgb(255, 255, 255)`
- `text-transform: uppercase`
- `margin: 12px 0 16px`
- Contains `<span className="highlight-red">` around one word

### Subtitle
```
Choisissez parmi nos différentes formules de location de véhicules d'exception.
```
- `font-size: 16px`
- `color: rgb(166, 166, 171)`
- `max-width: 500px`
- `margin-bottom: 40px`

## Search / Filter Bar
4 dropdowns + 1 submit button in a horizontal row.

### Container
- `display: flex`
- `gap: 0` (dropdowns are flush)
- `border: 1px solid rgb(51, 51, 51)`
- `background-color: rgb(27, 27, 27)`
- `margin-bottom: 40px`
- Full width

### Each Dropdown (`<select>` or custom)
- `flex: 1`
- `padding: 16px 20px`
- `background: transparent`
- `border: none`
- `border-right: 1px solid rgb(51, 51, 51)`
- `color: rgb(166, 166, 171)`
- `font-family: var(--font-dm-sans)`
- `font-size: 14px`
- `cursor: pointer`
- Label above select text in smaller font, or placeholder text

Filter options:
1. **Type de véhicule** — options: Sportive, SUV, Berline, Cabriolet, Limousine
2. **Marque** — options: Ferrari, Porsche, Lamborghini, Rolls-Royce, BMW, Audi, Aston Martin
3. **Budget / jour** — options: < 500€, 500€-1000€, 1000€-2000€, > 2000€
4. **Durée** — options: 1 jour, Weekend, 1 semaine, +1 semaine

### Submit Button
- `background-color: rgb(227, 6, 19)`
- `color: rgb(255, 255, 255)`
- `padding: 16px 32px`
- `border: none`
- `font-family: var(--font-oswald)`
- `font-weight: 700`
- `font-size: 15px`
- `letter-spacing: 0.05em`
- `text-transform: uppercase`
- `cursor: pointer`
- Text: "RECHERCHER"
- On hover: `background-color: rgb(200, 5, 15)`

## Service Tiles Grid
Grid layout: 1 large tile taking full width on first row, then 3 equal tiles on second row.
Actually it's a 3-column CSS grid where the first tile spans 3 columns (or `col-span-3` in Tailwind). Or a 3-column grid where large tile is col-span-full, then 3 small tiles below.

The actual layout from the site: The large tile is 100% width on top row, then 3 tiles share the row below. Use:
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 4px;
margin-bottom: 60px;
```
Large tile: `grid-column: 1 / -1` (spans all 3 cols)

### Tile Base Styles
- `position: relative`
- `overflow: hidden`
- `cursor: pointer`
- Image inside: `width: 100%; height: 100%; object-fit: cover`
- Dark overlay: `position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)`
- Content: `position: absolute; bottom: 24px; left: 24px; z-index: 2`

### Large Tile (LOCATION)
- `grid-column: 1 / -1`
- `height: 320px`
- Image: `/images/service-location.jpg`
- Title: "LOCATION"
- Subtitle: "Profitez de l'expérience ultime en conduisant vous-même nos véhicules d'exception."

### Small Tiles
- `height: 220px`
Tiles:
1. `/images/service-chauffeur.jpg` — "SERVICE CHAUFFEUR" — "Voyagez avec style grâce à nos chauffeurs professionnels."
2. `/images/service-mariage.jpg` — "MARIAGE" — "Sublimez votre jour J avec un véhicule d'exception."
3. `/images/service-transfert.jpg` — "TRANSFERT" — "Transferts aéroports et gares en véhicules de prestige."

### Tile Text
- Title: `font-family: var(--font-oswald); font-size: 22px; font-weight: 700; color: white; text-transform: uppercase; margin-bottom: 6px`
- Subtitle: `font-family: var(--font-dm-sans); font-size: 13px; color: rgba(255,255,255,0.8); line-height: 1.4; max-width: 280px`
- Arrow: after title, small right-arrow `→` in red or white

### Hover Effect on Tiles
- Image: `transform: scale(1.05)` with `transition: transform 0.4s ease`
- Title arrow: slides right slightly

## Vehicle Carousel

### Carousel Header
- `display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px`
- H3 left: "NOS VÉHICULES"
  - `font-family: var(--font-oswald); font-size: 28px; font-weight: 700; color: white; text-transform: uppercase`
- Navigation arrows right:
  - Two circle buttons: prev (←) and next (→)
  - `width: 44px; height: 44px`
  - `border: 1.5px solid rgb(255,255,255)`
  - `background: transparent`
  - `color: white`
  - `border-radius: 50%`
  - `cursor: pointer`
  - On hover: `background: rgb(227,6,19); border-color: rgb(227,6,19)`

### Carousel Track
- `overflow: hidden`
- Inner flex container:
  - `display: flex`
  - `gap: 16px`
  - `transition: transform 0.4s ease`
  - Transform controlled by JS state

### Vehicle Card
- `width: 280px`
- `flex-shrink: 0`
- `position: relative`
- `overflow: hidden`
- `background-color: rgb(27, 27, 27)`

Card layout:
```
<a href="#">
  <div> (image wrapper, height 185px, overflow hidden)
    <Image> (object-fit cover, w-full h-full, hover scale)
  </div>
  <div> (card body, padding 16px)
    <h4> vehicle name
    <div> (red separator line: w-full, h-px, bg-red, my-8px)
    <div> (bottom row: "En savoir plus" + → arrow)
  </div>
```

Card text:
- Name: `font-family: var(--font-oswald); font-size: 18px; font-weight: 700; color: white; text-transform: uppercase; margin-bottom: 8px`
- "En savoir plus": `font-size: 13px; color: rgb(166,166,171); letter-spacing: 0.05em; text-transform: uppercase`
- Arrow: `color: rgb(227,6,19)`

### Vehicle Data (8 cards)
```typescript
const vehicles = [
  { id: 'ferrari-458', name: 'FERRARI 458 SPÉCIALE', image: '/images/vehicles/ferrari-458.jpg', href: '#' },
  { id: 'audi-r8', name: 'AUDI R8', image: '/images/vehicles/audi-r8.jpg', href: '#' },
  { id: 'rolls-phantom', name: 'ROLLS-ROYCE PHANTOM', image: '/images/vehicles/rolls-phantom.jpg', href: '#' },
  { id: 'lamborghini-urus', name: 'LAMBORGHINI URUS PERFORMANTE', image: '/images/vehicles/lamborghini-urus.jpg', href: '#' },
  { id: 'bmw-m5', name: 'BMW M5 CS', image: '/images/vehicles/bmw-m5.jpg', href: '#' },
  { id: 'ferrari-portofino', name: 'FERRARI PORTOFINO', image: '/images/vehicles/ferrari-portofino.jpg', href: '#' },
  { id: 'porsche-992', name: 'PORSCHE 992 GT3 TOURING', image: '/images/vehicles/porsche-992.jpg', href: '#' },
  { id: 'aston-dbs', name: 'ASTON MARTIN DBS', image: '/images/vehicles/aston-dbs.jpg', href: '#' },
];
```

### Carousel Logic
- Show 4 cards at once on desktop (≥1024px), 2 on tablet, 1 on mobile
- State: `currentIndex` (0-based)
- Prev/next buttons shift by 1 card
- Clamp: don't go below 0 or above `vehicles.length - visibleCount`
- Use `useState` + `useRef` for the track, compute `translateX` from `currentIndex * (cardWidth + gap)`

## Responsive Behavior
- Desktop: 3-col tile grid, 4 visible carousel cards
- Tablet: 3-col tiles (smaller), 2 visible carousel cards  
- Mobile: 1-col tiles stacked, 1 visible carousel card, filter bar stacks vertically

## Assets Used
- `/images/service-location.jpg`
- `/images/service-chauffeur.jpg`
- `/images/service-mariage.jpg`
- `/images/service-transfert.jpg`
- `/images/vehicles/ferrari-458.jpg`
- `/images/vehicles/audi-r8.jpg`
- `/images/vehicles/rolls-phantom.jpg`
- `/images/vehicles/lamborghini-urus.jpg`
- `/images/vehicles/bmw-m5.jpg`
- `/images/vehicles/ferrari-portofino.jpg`
- `/images/vehicles/porsche-992.jpg`
- `/images/vehicles/aston-dbs.jpg`
