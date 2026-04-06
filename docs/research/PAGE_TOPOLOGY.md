# Performance GT — Page Topology

## URL
https://www.performance-gt.com/fr/

## Overall Structure

```
<html class="lenis lenis-smooth ...">
  <body class="homepage pageBuilderTemplate ...">
    <header class="siteHeader">          ← FIXED overlay, z-index: 900
    <nav class="menu js-nwi">            ← Full-screen menu (hidden by default)
    
    <main / page content>
      1. section.panel.heroscreen        ← Hero, 900px, z-index: 5
      2. section.panel.contentWithCollection  ← Services + vehicles, dark bg
      3. section.panel.contentImage      ← About, light bg, 2-column
      4. section.panel.contentWithImageBackground  ← Services highlight, full bg image
      5. section.panel.socialLink        ← Instagram grid
    
    <footer class="siteFooter">
      - Location cards (4 cities)
      - Footer nav + logo + social
```

## Sections (top to bottom)

| # | Name | Class | Type | Bg | Height |
|---|------|-------|------|----|--------|
| 0 | Header | `.siteHeader` | fixed sticky | transparent → dark | 80px |
| 1 | Hero | `.heroscreen` | flow | dark `#0F0F10` + full image | 900px |
| 2 | Services | `.contentWithCollection` | flow | dark `#0F0F10` | ~1400px |
| 3 | About | `.contentImage.whiteBkg` | flow | light `#F5F5F5` | ~700px |
| 4 | Services BG | `.contentWithImageBackground` | flow | full-width image | ~600px |
| 5 | Instagram | `.socialLink` | flow | white | ~400px |
| 6 | Footer | `.siteFooter` | flow | light + dark | ~500px |

## Z-index Layers

- Header: 900 (always on top)
- Full-screen menu: above header (when open)
- Hero: 5
- All other sections: auto/0

## Dependencies

- Header overlays everything — all sections need `padding-top` consideration or header is truly floating
- Lenis smooth scroll wraps the entire page
- `.bkgLines` decorative element spans full page height in background

## Components to Build

1. `Header.tsx` — fixed nav with logo, menu button, CTAs
2. `HeroSection.tsx` — fullscreen image + H1 + scroll button
3. `ServicesSection.tsx` — dark bg, H2, search form, service tiles + vehicle carousel
4. `AboutSection.tsx` — light bg, 2-column text+image
5. `FounderSection.tsx` — full bg image, centered text, CTA button
6. `InstagramSection.tsx` — social grid
7. `LocationsSection.tsx` — 4-column contact cards
8. `Footer.tsx` — logo, social, nav columns
