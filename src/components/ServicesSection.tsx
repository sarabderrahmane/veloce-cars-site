"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const serviceTiles = [
  {
    id: "expertise",
    title: "EXPERTISE CHINE",
    subtitle: "Sélection rigoureuse des meilleurs constructeurs : BYD, Zeekr, Li Auto, Avatr et bien plus.",
    image: "/images/service-location.jpg",
    large: true,
    href: "/services",
  },
  {
    id: "qualite",
    title: "CONTRÔLE QUALITÉ",
    subtitle: "Inspection technique détaillée avant chaque expédition depuis les ports chinois.",
    image: "/images/service-chauffeur.jpg",
    large: false,
    href: "/services",
  },
  {
    id: "logistique",
    title: "LOGISTIQUE PREMIUM",
    subtitle: "Transport sécurisé et assistance administrative complète jusqu'à Draria.",
    image: "/images/service-mariage.jpg",
    large: false,
    href: "/services",
  },
  {
    id: "cletmain",
    title: "CLÉ EN MAIN",
    subtitle: "De la commande à la remise des clés à Alger, nous gérons tout pour vous.",
    image: "/images/service-transfert.jpg",
    large: false,
    href: "/services",
  },
];

const vehicles = [
  { id: "byd-han", name: "BYD HAN EV", image: "/images/vehicles/ferrari-458.jpg", href: "/catalogue", type: "Électrique" },
  { id: "zeekr-001", name: "ZEEKR 001", image: "/images/vehicles/audi-r8.jpg", href: "/catalogue", type: "Électrique" },
  { id: "li-l9", name: "LI AUTO L9", image: "/images/vehicles/rolls-phantom.jpg", href: "/catalogue", type: "Hybride" },
  { id: "byd-yangwang", name: "YANGWANG U8", image: "/images/vehicles/lamborghini-urus.jpg", href: "/catalogue", type: "Hybride" },
  { id: "avatr-11", name: "AVATR 11", image: "/images/vehicles/bmw-m5.jpg", href: "/catalogue", type: "Électrique" },
  { id: "zeekr-x", name: "ZEEKR X", image: "/images/vehicles/ferrari-portofino.jpg", href: "/catalogue", type: "Électrique" },
  { id: "byd-seal", name: "BYD SEAL", image: "/images/vehicles/porsche-992.jpg", href: "/catalogue", type: "Électrique" },
  { id: "li-l7", name: "LI AUTO L7", image: "/images/vehicles/aston-dbs.jpg", href: "/catalogue", type: "Hybride" },
];

const VISIBLE = 4;
const CARD_WIDTH = 280;
const GAP = 16;

export default function ServicesSection() {
  const [index, setIndex] = useState(0);
  const maxIndex = vehicles.length - VISIBLE;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section
      id="pourquoi"
      className="services-section"
      style={{
        backgroundColor: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
        padding: "100px 0",
      }}
    >
      {/* Decorative lines */}
      <div className="bkg-lines">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="bkg-lines-line" />
        ))}
      </div>

      <div
        className="services-container"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 30px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)" }} />
          <span
            style={{
              fontFamily: "var(--font-montserrat), Arial, sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#D4AF37",
            }}
          >
            POURQUOI NOUS CHOISIR
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-michroma), Arial, sans-serif",
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 400,
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: "0.03em",
            margin: "12px 0 16px",
            lineHeight: 1.1,
          }}
        >
          L&apos;EXCELLENCE AUTOMOBILE{" "}
          <span className="highlight-red">CHINOISE</span>,<br />
          IMPORTÉE POUR VOUS
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "#8A8A8A",
            maxWidth: "550px",
            marginTop: 0,
            marginBottom: "50px",
            lineHeight: 1.7,
            fontFamily: "var(--font-montserrat), Arial, sans-serif",
          }}
        >
          Veloce Cars sélectionne et importe les véhicules chinois les plus innovants
          pour vous offrir une expérience d&apos;achat transparente et sécurisée.
        </p>

        {/* Filter Bar */}
        <div
          className="filter-bar"
          style={{
            display: "flex",
            border: "1px solid #2A2A2A",
            backgroundColor: "#111",
            marginBottom: "50px",
          }}
        >
          {[
            { label: "Type de motorisation", options: ["Électrique", "Hybride rechargeable", "Hybride", "Thermique"] },
            { label: "Marque", options: ["BYD", "Zeekr", "Li Auto", "Avatr", "NIO", "AITO"] },
            { label: "Budget", options: ["< 4 000 000 DA", "4–6 000 000 DA", "6–9 000 000 DA", "> 9 000 000 DA"] },
            { label: "Carrosserie", options: ["Berline", "SUV", "Break", "Coupé"] },
          ].map((filter, i, arr) => (
            <select
              key={filter.label}
              defaultValue=""
              style={{
                flex: 1,
                padding: "16px 20px",
                background: "transparent",
                border: "none",
                borderRight: i < arr.length - 1 ? "1px solid #2A2A2A" : "none",
                color: "#8A8A8A",
                fontFamily: "var(--font-montserrat), Arial, sans-serif",
                fontSize: "13px",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <option value="" disabled>{filter.label}</option>
              {filter.options.map((opt) => (
                <option key={opt} value={opt} style={{ background: "#111" }}>{opt}</option>
              ))}
            </select>
          ))}
          <button
            style={{
              background: "linear-gradient(135deg, #D4AF37, #C5A059)",
              color: "#000000",
              padding: "16px 32px",
              border: "none",
              fontFamily: "var(--font-michroma), Arial, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            RECHERCHER
          </button>
        </div>

        {/* Service Tiles */}
        <div
          className="service-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            marginBottom: "80px",
          }}
        >
          {serviceTiles.map((tile) => (
            <Link
              key={tile.id}
              href={tile.href}
              style={{
                gridColumn: tile.large ? "1 / -1" : undefined,
                position: "relative",
                overflow: "hidden",
                height: tile.large ? "300px" : "200px",
                display: "block",
                textDecoration: "none",
              }}
              className="service-tile"
            >
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                style={{ objectFit: "cover", transition: "transform 0.5s ease", filter: "brightness(0.6)" }}
                className="tile-img"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)",
                  zIndex: 1,
                }}
              />
              {/* Gold top-left accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "3px",
                  height: "100%",
                  background: "linear-gradient(to bottom, #D4AF37, transparent)",
                  zIndex: 2,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="tile-accent"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "28px",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-michroma), Arial, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "white",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {tile.title}
                  <span style={{ color: "#D4AF37", fontSize: "14px" }}>→</span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat), Arial, sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.5,
                    maxWidth: "320px",
                    margin: 0,
                  }}
                >
                  {tile.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Vehicle Carousel */}
        <div id="catalogue">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-michroma), Arial, sans-serif",
                  fontSize: "clamp(20px, 2.5vw, 30px)",
                  fontWeight: 400,
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  margin: 0,
                }}
              >
                NOS VÉHICULES
              </h3>
              <div style={{ width: "40px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)", marginTop: "8px" }} />
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { label: "←", action: prev, disabled: index === 0 },
                { label: "→", action: next, disabled: index >= maxIndex },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  disabled={btn.disabled}
                  style={{
                    width: "44px",
                    height: "44px",
                    border: "1px solid",
                    borderColor: btn.disabled ? "#2A2A2A" : "#D4AF37",
                    background: "transparent",
                    color: btn.disabled ? "#2A2A2A" : "#D4AF37",
                    cursor: btn.disabled ? "default" : "pointer",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="carousel-wrapper" style={{ overflow: "hidden" }}>
            <div
              className="carousel-track"
              style={{
                display: "flex",
                gap: `${GAP}px`,
                transition: "transform 0.4s ease",
                transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
              }}
            >
              {vehicles.map((v) => (
                <Link
                  key={v.id}
                  href={v.href}
                  style={{
                    width: `${CARD_WIDTH}px`,
                    flexShrink: 0,
                    backgroundColor: "#111",
                    border: "1px solid #1A1A1A",
                    textDecoration: "none",
                    overflow: "hidden",
                    transition: "border-color 0.3s ease",
                  }}
                  className="vehicle-card"
                >
                  <div style={{ position: "relative", height: "185px", overflow: "hidden" }}>
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.4s ease", filter: "brightness(0.85)" }}
                      className="card-img"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "linear-gradient(135deg, #D4AF37, #C5A059)",
                        color: "#000",
                        fontSize: "10px",
                        fontFamily: "var(--font-montserrat), Arial, sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        padding: "4px 8px",
                        textTransform: "uppercase",
                      }}
                    >
                      {v.type}
                    </div>
                  </div>
                  <div style={{ padding: "16px" }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-michroma), Arial, sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "white",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        margin: "0 0 8px",
                        lineHeight: 1.3,
                      }}
                    >
                      {v.name}
                    </h4>
                    <div style={{ width: "100%", height: "1px", backgroundColor: "#1A1A1A", margin: "8px 0" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#D4AF37",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontFamily: "var(--font-montserrat), Arial, sans-serif",
                        }}
                      >
                        Demander une offre
                      </span>
                      <span style={{ color: "#D4AF37", fontSize: "14px" }}>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .service-tile:hover .tile-img { transform: scale(1.06); filter: brightness(0.7) !important; }
        .service-tile:hover .tile-accent { opacity: 1 !important; }
        .vehicle-card:hover .card-img { transform: scale(1.05); }
        .vehicle-card:hover { border-color: #D4AF37 !important; }
        @media (max-width: 1023px) {
          .services-section { padding: 70px 0 !important; }
        }
        @media (max-width: 767px) {
          .services-section { padding: 50px 0 !important; }
          .filter-bar { flex-direction: column; }
          .filter-bar select { border-right: none !important; border-bottom: 1px solid #2A2A2A; padding: 14px 16px !important; font-size: 14px !important; }
          .filter-bar button { padding: 14px 20px !important; }
          .service-grid { grid-template-columns: 1fr !important; }
          .service-grid a { grid-column: 1 !important; height: 200px !important; }
          .carousel-wrapper { overflow-x: auto !important; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .carousel-wrapper::-webkit-scrollbar { display: none; }
          .carousel-track { transform: none !important; }
          .vehicle-card { width: 250px !important; min-width: 250px !important; }
        }
      `}</style>
    </section>
  );
}
