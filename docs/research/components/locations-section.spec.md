# Locations Section Spec

## File
`src/components/LocationsSection.tsx`

## Screenshot Reference
`docs/design-references/footer-desktop.png` (locations are in the upper part of the footer area)

## Overview
Light/white background section with 4 location cards side by side (one per city/region). Each card shows a region name, addresses, email, and phone. This is the top part of the footer area — sometimes rendered inside `<footer>` or as a standalone section just above the footer.

## Layout Structure
```
<section> (light bg or white, py 60px)
  <div> (container, max-width 1400px, mx auto, px 30px)
    <div> (4-column grid)
      <div> × 4 (location cards)
        <h3> region name
        <ul> addresses (city + address lines)
        <a href="mailto:..."> email
        <a href="tel:..."> phone
```

## Section Element
- `background-color: rgb(245, 245, 245)` (or white)
- `padding: 60px 0`
- `border-top: 1px solid rgb(193, 193, 193)` (optional separator)

## Grid Container
- `display: grid`
- `grid-template-columns: repeat(4, 1fr)`
- `gap: 32px`

## Location Card

### Card Base
- No explicit border by default — cards are borderless
- Optional: left border accent `border-left: 3px solid rgb(227,6,19); padding-left: 20px`

### Region Heading (H3)
- `font-family: var(--font-oswald)`
- `font-size: 20px`
- `font-weight: 700`
- `text-transform: uppercase`
- `color: rgb(27, 27, 27)`
- `margin-bottom: 16px`
- Optional: small red underline `width: 30px; height: 2px; background: rgb(227,6,19); margin-top: 4px`

### Addresses
Each address block:
- City (if given): `font-weight: 700; font-size: 14px; color: rgb(27,27,27); margin-bottom: 2px`
- Address line: `font-size: 14px; color: rgb(95,95,95); line-height: 1.5`
- `margin-bottom: 12px`

### Contact Info
Email and phone rendered as links:
- `font-size: 14px`
- `color: rgb(95,95,95)`
- `display: flex; align-items: center; gap: 8px`
- Icon: small envelope/phone icon (or just text)
- `text-decoration: none`
- On hover: `color: rgb(227,6,19)`
- `margin-bottom: 6px`

## Location Data
```typescript
const locations: LocationOffice[] = [
  {
    region: 'RHÔNE-ALPES',
    addresses: [
      { city: 'Lyon', address: '20 rue de la République, 69002 Lyon' },
    ],
    email: 'lyon@performance-gt.com',
    phone: '+33 4 78 00 00 00',
  },
  {
    region: 'PACA',
    addresses: [
      { city: 'Marseille', address: '15 avenue du Prado, 13008 Marseille' },
      { city: 'Nice', address: '3 promenade des Anglais, 06000 Nice' },
    ],
    email: 'paca@performance-gt.com',
    phone: '+33 4 91 00 00 00',
  },
  {
    region: 'ALPES',
    addresses: [
      { city: 'Courchevel', address: 'Avenue du Jardin Alpin, 73120 Courchevel' },
      { city: 'Megève', address: 'Route Nationale, 74120 Megève' },
    ],
    email: 'alpes@performance-gt.com',
    phone: '+33 4 79 00 00 00',
  },
  {
    region: 'CÔTE D\'AZUR',
    addresses: [
      { city: 'Cannes', address: 'La Croisette, 06400 Cannes' },
      { city: 'Monaco', address: 'Avenue Princesse Grace, Monaco' },
    ],
    email: 'cotedazur@performance-gt.com',
    phone: '+33 4 93 00 00 00',
  },
];
```

## Responsive Behavior

### Desktop (≥ 1024px)
- 4-column grid

### Tablet (768px–1023px)
- 2-column grid: `grid-template-columns: repeat(2, 1fr)`

### Mobile (< 768px)
- 1-column: `grid-template-columns: 1fr`

## Notes
- Phone/email data above is approximate — real contact details from the original site should be used if accessible
- The region names match the website's operating areas: Rhône-Alpes, PACA, Alps ski resorts, Côte d'Azur
