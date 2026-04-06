# Footer Component Spec

## File
`src/components/Footer.tsx`

## Screenshot Reference
`docs/design-references/footer-desktop.png`

## Overview
Two-part footer:
1. **Upper footer**: Dark background (`#1B1B1B`), 4-column nav link grid, logo centered or left, social icons.
2. **Lower footer**: Near-black (`#0F0F10`), single row with copyright text left and legal links right.

## Layout Structure
```
<footer>
  <!-- Upper Footer -->
  <div> (bg #1B1B1B, py 60px)
    <div> (container, max-width 1400px, mx auto, px 30px)
      <div> (grid: logo column + 3 nav link columns + contact column)
        <!-- Logo Column -->
        <div>
          <a href="/"> <img src="/images/logo.svg" alt="Performance GT" />
          <p> tagline
          <div> social icons row
        <!-- Nav Columns × 3 -->
        <div> × 3
          <h4> column title
          <ul> <li><a> × N links
        <!-- Contact Column -->
        <div>
          <h4> "CONTACT"
          <p> address / phone / email items

  <!-- Lower Footer -->
  <div> (bg #0F0F10, py 20px)
    <div> (container, flex, space-between)
      <p> copyright
      <div> legal links (Privacy, CGV, Mentions légales)
```

## Upper Footer Element
- `background-color: rgb(27, 27, 27)`
- `padding: 60px 0`

## Footer Grid
- `display: grid`
- `grid-template-columns: 2fr 1fr 1fr 1fr` (logo col wider)
- `gap: 48px`

## Logo Column

### Logo Image
- `/images/logo.svg`
- `height: 40px; width: auto`
- `margin-bottom: 16px`

### Tagline
```
Spécialiste de la location de voiture de luxe et de prestige depuis 2012.
```
- `font-size: 14px; color: rgb(135,135,135); line-height: 1.6; max-width: 260px; margin-bottom: 24px`

### Social Icons Row
- `display: flex; gap: 12px`
- Each icon: `width: 36px; height: 36px; border: 1px solid rgb(51,51,51); display: flex; align-items: center; justify-content: center; color: rgb(166,166,171)`
- On hover: `background: rgb(227,6,19); border-color: rgb(227,6,19); color: white`
- `transition: all 0.2s ease`
- Platforms: Facebook, Instagram, YouTube (or just Facebook + Instagram)
- Use simple SVG icons inline or text characters (f, in, yt)

## Nav Columns (3 columns)

### Column Header (H4)
- `font-family: var(--font-oswald)`
- `font-size: 16px`
- `font-weight: 700`
- `text-transform: uppercase`
- `color: rgb(255, 255, 255)`
- `margin-bottom: 20px`
- Optional: bottom red border `width: 30px; height: 2px; background: rgb(227,6,19); margin-top: 6px`

### Column Links
- `font-size: 14px`
- `color: rgb(135, 135, 135)`
- `text-decoration: none`
- `line-height: 1`
- `margin-bottom: 12px`
- `display: block`
- On hover: `color: rgb(227, 6, 19)`
- `transition: color 0.2s ease`

### Column Data
```typescript
const footerColumns: FooterColumn[] = [
  {
    title: 'SERVICES',
    links: [
      { label: 'Location Voiture', href: '#' },
      { label: 'Service Chauffeur', href: '#' },
      { label: 'Location Mariage', href: '#' },
      { label: 'Transfert Aéroport', href: '#' },
      { label: 'Événements', href: '#' },
    ],
  },
  {
    title: 'VÉHICULES',
    links: [
      { label: 'Ferrari', href: '#' },
      { label: 'Porsche', href: '#' },
      { label: 'Lamborghini', href: '#' },
      { label: 'Rolls-Royce', href: '#' },
      { label: 'Aston Martin', href: '#' },
      { label: 'BMW', href: '#' },
    ],
  },
  {
    title: 'INFORMATIONS',
    links: [
      { label: 'À propos', href: '#' },
      { label: 'Nos agences', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Partenaires', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];
```

## Lower Footer Element
- `background-color: rgb(15, 15, 16)`
- `padding: 20px 0`
- `border-top: 1px solid rgb(51, 51, 51)`

### Inner Container
- `display: flex`
- `justify-content: space-between`
- `align-items: center`
- `flex-wrap: wrap`
- `gap: 12px`

### Copyright
```
© 2024 Performance GT. Tous droits réservés.
```
- `font-size: 13px`
- `color: rgb(95, 95, 95)`

### Legal Links
- `display: flex; gap: 24px`
- Each: `font-size: 13px; color: rgb(95,95,95); text-decoration: none`
- On hover: `color: rgb(166,166,171)`
- Links: "Mentions légales", "Politique de confidentialité", "CGV"

## Responsive Behavior

### Desktop (≥ 1024px)
- Upper footer: 4-column grid
- Lower footer: row layout

### Tablet (768px–1023px)
- Upper footer: 2×2 grid
- `grid-template-columns: repeat(2, 1fr)`

### Mobile (< 768px)
- Upper footer: 1 column stacked
- Lower footer: column layout (copyright top, links below)
- Social icons centered
