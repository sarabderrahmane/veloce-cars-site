"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Services", href: "/services" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          zIndex: 900,
          display: "flex",
          alignItems: "center",
          backgroundColor: menuOpen ? "rgba(0,0,0,0.98)" : scrolled ? "rgba(0,0,0,0.95)" : "transparent",
          borderBottom: (scrolled || menuOpen) ? "1px solid #2A2A2A" : "none",
          backdropFilter: scrolled && !menuOpen ? "blur(10px)" : "none",
          transition: "background-color 0.3s ease, border-bottom 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 30px",
            position: "relative",
          }}
        >
          {/* Left: Hamburger */}
          <button
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "28px" }}>
              <span style={{ display: "block", height: "2px", backgroundColor: "#D4AF37", transition: "all 0.3s ease", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none", width: "28px" }} />
              <span style={{ display: "block", height: "2px", backgroundColor: "#D4AF37", transition: "all 0.3s ease", opacity: menuOpen ? 0 : 1, width: "20px" }} />
              <span style={{ display: "block", height: "2px", backgroundColor: "#D4AF37", transition: "all 0.3s ease", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none", width: "28px" }} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-michroma), Arial, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#D4AF37",
              }}
            >
              {menuOpen ? "FERMER" : "MENU"}
            </span>
          </button>

          {/* Center: Logo */}
          <Link
            href="/"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-michroma), Arial, sans-serif",
                fontSize: "22px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                background: "linear-gradient(135deg, #D4AF37, #C5A059)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textTransform: "uppercase",
              }}
            >
              VELOCE
            </span>
            <span
              style={{
                fontFamily: "var(--font-montserrat), Arial, sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.5em",
                color: "#8A8A8A",
                textTransform: "uppercase",
                marginTop: "3px",
              }}
            >
              CARS
            </span>
          </Link>

          {/* Right: CTAs */}
          <div
            className="header-ctas"
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <Link
              href="/catalogue"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "transparent",
                color: pathname === "/catalogue" ? "#D4AF37" : "#D4AF37",
                fontFamily: "var(--font-michroma), Arial, sans-serif",
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "10px 20px",
                border: "1px solid #D4AF37",
                textDecoration: "none",
                transition: "all 0.2s ease",
                opacity: pathname === "/catalogue" ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #D4AF37, #C5A059)";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#D4AF37";
              }}
            >
              NOS VÉHICULES
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #D4AF37, #C5A059)",
                color: "#000000",
                fontFamily: "var(--font-michroma), Arial, sans-serif",
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "10px 20px",
                border: "none",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              NOUS CONTACTER
            </Link>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 800,
          backgroundColor: "rgba(0,0,0,0.98)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Decorative lines */}
        <div style={{ position: "absolute", inset: 0, display: "flex", zIndex: 0 }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} style={{ flex: 1, background: "linear-gradient(#D4AF37, transparent)", opacity: 0.03 }} />
          ))}
        </div>

        <nav style={{ position: "relative", zIndex: 1, textAlign: "center", display: "flex", flexDirection: "column", gap: "0" }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-michroma), Arial, sans-serif",
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                textDecoration: "none",
                color: pathname === link.href ? "#D4AF37" : "rgba(255,255,255,0.85)",
                transition: "color 0.2s ease, letter-spacing 0.2s ease",
                padding: "12px 40px",
                display: "block",
                animation: menuOpen ? `fadeInUp 0.4s ease ${i * 0.07}s both` : "none",
                borderBottom: pathname === link.href ? "1px solid rgba(212,175,55,0.3)" : "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                (e.currentTarget as HTMLElement).style.letterSpacing = "0.14em";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = pathname === link.href ? "#D4AF37" : "rgba(255,255,255,0.85)";
                (e.currentTarget as HTMLElement).style.letterSpacing = "0.08em";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone numbers */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "32px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["0661-735-000", "0550-346-075", "0559-573-089"].map((phone) => (
            <a
              key={phone}
              href={`tel:+213${phone.replace(/-/g, "").substring(1)}`}
              style={{
                fontFamily: "var(--font-michroma), Arial, sans-serif",
                fontSize: "13px",
                color: "#8A8A8A",
                textDecoration: "none",
                letterSpacing: "0.1em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#D4AF37"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8A8A8A"; }}
            >
              {phone}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .header-ctas { display: none !important; }
        }
      `}</style>
    </>
  );
}
