# Performance GT — Behavior Bible

## Global

- **Scroll library:** Lenis (`lenis lenis-smooth` classes on `<html>`). All scrolling feels slightly smooth/damped.
- **Word splitting:** `splitting.js` — headings have words wrapped in `<span class="word">`. Used for staggered reveal animations (`.wow` class via WOW.js).
- **Body classes change on scroll:**
  - At top: `topScroll` present
  - After scrolling: `inScroll` added, `topScroll` removed
- **Background lines:** 30 vertical `div.bkgLines-line` elements with red-to-transparent gradient (`linear-gradient(rgb(229, 6, 19), rgba(0, 0, 0, 0))`). Purely decorative.

---

## Header (`.siteHeader`)

- **Position:** `fixed`, `z-index: 900`, `height: 80px`
- **Scroll behavior:** Background is `rgba(0,0,0,0)` transparent initially. When body gets `inScroll` class (after leaving hero), header background transitions to a dark/semi-transparent bg.
- **Buttons:** "NOS VÉHICULES" outlined, "NOUS CONTACTER" filled dark — both have border-radius and icon-right.
- **Hamburger menu:** Left side with "MENU" text + lines icon.
- **Logo:** Centered SVG.
- **INTERACTION MODEL:** scroll-driven (CSS class on body triggers header style change)

---

## Hero Section (`.heroscreen`)

- **Height:** 900px (100vh)
- **Background:** Dark `rgb(15, 15, 16)` behind image
- **Image slider:** Tiny Slider (tns) with fade animation — single slide (Porsche 911 GT3 Touring)
- **H1:** 55px, Oswald Bold 700, white `rgb(255,255,255)`, uppercase — "PERFORMANCE GT, SPÉCIALISTE DE LA LOCATION DE VOITURES D'EXCEPTION"
- **Red highlight:** "SPÉCIALISTE" word has red background `rgb(227, 6, 19)`, white text
- **Scroll-down button:** Bottom center, "Découvrir" text + arrow icon, white text
- **Entrance animation:** Words animate in on page load (splitting.js + WOW.js stagger)
- **INTERACTION MODEL:** time-driven (page load animation) + scroll-down button click

---

## Services/Collection Section (`.contentWithCollection`)

- **Background:** `rgb(15, 15, 16)` (near black)
- **Padding:** `80px 188px` on desktop
- **H2:** "Performance GT est à votre service afin de trouver le véhicule de luxe dont vous avez envie."
  - "trouver le véhicule de luxe" wrapped in `<strong>` with red bg highlight
- **Search form:** 4 dropdowns (Zone de livraison, Type de véhicule, Marque, Nombre de places) + "RECHERCHER →" red button
- **Service tiles below:** 4 full-width image tiles with title overlay
  1. LOCATION (full-width top)
  2. LOCATION AVEC CHAUFFEUR (bottom left)
  3. MARIAGE & ÉVÉNEMENT (bottom right)
  Plus a vehicle carousel (Tiny Slider with car images)
- **INTERACTION MODEL:** click-driven (search form + dropdowns)

---

## ContentImage Section (`.contentImage.whiteBkg`)

- **Background:** `rgb(245, 245, 245)` light gray
- **Layout:** 2-column desktop (text left ~40%, image right ~60%)
- **H2:** "LOUEZ VOTRE VÉHICULE DE PRESTIGE EN TOUTE SIMPLICITÉ"
  - "VÉHICULE DE PRESTIGE" red bg highlight
- **Body text:** DM Sans 17px, gray `rgb(95, 95, 95)`
- **"Lire plus" link:** Underlined text link
- **Image:** Red Ferrari/Portofino on right side, rounded corners
- **INTERACTION MODEL:** static

---

## ContentWithImageBackground Section

- **Background:** Full-width car interior image (red Ferrari interior) with dark overlay
- **Layout:** Centered text on dark bg
- **H2:** "PROFITEZ DE SERVICES HAUT DE GAMME LORS DE LA LOCATION DE VOTRE VOITURE DE LUXE"
  - "SERVICES HAUT DE GAMME" red bg highlight
- **Body text:** white, DM Sans, centered
- **"Lire plus" link:** white underlined
- **CTA button:** "EN SAVOIR PLUS" — solid red bg `rgb(227, 6, 19)`, white text, uppercase, Oswald
- **INTERACTION MODEL:** static

---

## Social/Instagram Section

- **Title:** "PARTAGEZ VOTRE EXPÉRIENCE" with red highlight
- **Layout:** 6-column grid of square Instagram photos
- **Social handle:** "@performance_gt_p" or similar
- **Background:** white
- **INTERACTION MODEL:** static (photos link to Instagram)

---

## Locations Section (footer upper part)

- **Background:** `rgb(245, 245, 245)` or white
- **Layout:** 4-column grid
- **Columns:** RHÔNE-ALPES, CANNES, NICE, MONACO
- **Each column:** City title (Oswald bold, uppercase), address, email link, phone link
- **Dividers:** Vertical thin lines between columns
- **INTERACTION MODEL:** static

---

## Footer (`.siteFooter`)

- **Upper block:** Location contact cards (same as Locations section above — they share the footer element)
- **Lower block:** Logo + social icons (Facebook, Instagram, YouTube) + 5-column nav
  - NOS SERVICES: Location, Transfert, Mariage, Location avec chauffeur, Agences, VIP
  - NOS VÉHICULES: Berline, Cabriolet, Citadine, Coupé, SUV
  - NOS DESTINATIONS: Côte d'Azur et Luberon, Rhône Alpes, Nice, Cannes, Monaco, Paris
  - Qui sommes-nous?, Le Club, Magazine, Où nous trouver ?
- **Background:** Dark `rgb(27, 27, 27)` or `rgb(15, 15, 16)`
- **Text color:** Gray/white
- **INTERACTION MODEL:** static

---

## Responsive Breakpoints

- **Desktop:** 1440px — full layout
- **Tablet ~768px:** Service tiles become stacked, search form wraps
- **Mobile 390px:** Single column everything, hamburger menu, hero text smaller, service cards stacked 1-column
