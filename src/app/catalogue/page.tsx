import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogue · Veloce Cars",
  description: "Découvrez notre catalogue de véhicules chinois haut de gamme : BYD, Zeekr, Li Auto, Avatr. Importation clé en main depuis la Chine vers Alger.",
};

const vehicles = [
  { id: "byd-han", name: "BYD HAN EV", image: "/images/vehicles/ferrari-458.jpg", type: "Électrique", marque: "BYD", desc: "Berline de luxe 100% électrique, 715 km d'autonomie, 0–100 km/h en 3,9s." },
  { id: "zeekr-001", name: "ZEEKR 001", image: "/images/vehicles/audi-r8.jpg", type: "Électrique", marque: "Zeekr", desc: "Break sportif électrique, design avant-gardiste, autonomie 1000 km." },
  { id: "li-l9", name: "LI AUTO L9", image: "/images/vehicles/rolls-phantom.jpg", type: "Hybride", marque: "Li Auto", desc: "SUV premium 6 places, hybride rechargeable, 0 km d'anxiété de recharge." },
  { id: "yangwang-u8", name: "YANGWANG U8", image: "/images/vehicles/lamborghini-urus.jpg", type: "Hybride", marque: "BYD", desc: "SUV hors route de luxe, 4 moteurs électriques, flottaison sur l'eau." },
  { id: "avatr-11", name: "AVATR 11", image: "/images/vehicles/bmw-m5.jpg", type: "Électrique", marque: "Avatr", desc: "SUV coupé électrique Huawei, écran panoramique, 578 cv." },
  { id: "zeekr-x", name: "ZEEKR X", image: "/images/vehicles/ferrari-portofino.jpg", type: "Électrique", marque: "Zeekr", desc: "Compact SUV électrique urbain, intérieur minimaliste haut de gamme." },
  { id: "byd-seal", name: "BYD SEAL", image: "/images/vehicles/porsche-992.jpg", type: "Électrique", marque: "BYD", desc: "Berline sportive électrique, plateforme e-Platform 3.0, 570 km d'autonomie." },
  { id: "li-l7", name: "LI AUTO L7", image: "/images/vehicles/aston-dbs.jpg", type: "Hybride", marque: "Li Auto", desc: "Berline executive hybride rechargeable, habitacle ultra-confort 5 places." },
];

const types = ["Tous", "Électrique", "Hybride"];
const marques = ["Toutes", "BYD", "Zeekr", "Li Auto", "Avatr"];

export default function CataloguePage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#000", minHeight: "100vh" }}>
        {/* Page Hero */}
        <div
          style={{
            backgroundColor: "#0A0A0A",
            paddingTop: "140px",
            paddingBottom: "60px",
            borderBottom: "1px solid #1A1A1A",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, display: "flex", zIndex: 0 }}>
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} style={{ flex: 1, background: "linear-gradient(#D4AF37, transparent)", opacity: 0.03 }} />
            ))}
          </div>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 30px", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)" }} />
              <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>
                NOS VÉHICULES
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-michroma)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", margin: "0 0 12px" }}>
              CATALOGUE <span className="highlight-red">2024–2025</span>
            </h1>
            <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "15px", color: "#8A8A8A", maxWidth: "550px", lineHeight: 1.7, margin: 0 }}>
              Sélection exclusive de véhicules chinois haut de gamme, importés clé en main jusqu&apos;à Draria, Alger.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div style={{ backgroundColor: "#0D0D0D", borderBottom: "1px solid #1A1A1A", padding: "20px 0" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 30px", display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", color: "#8A8A8A", letterSpacing: "0.1em", textTransform: "uppercase", marginRight: "8px" }}>Filtrer :</span>
            {types.map((t) => (
              <button key={t} style={{ padding: "6px 16px", border: "1px solid #2A2A2A", background: t === "Tous" ? "linear-gradient(135deg,#D4AF37,#C5A059)" : "transparent", color: t === "Tous" ? "#000" : "#8A8A8A", fontFamily: "var(--font-montserrat)", fontSize: "12px", letterSpacing: "0.05em", cursor: "pointer", textTransform: "uppercase", transition: "all 0.2s ease" }}>
                {t}
              </button>
            ))}
            <span style={{ width: "1px", height: "20px", background: "#2A2A2A", margin: "0 8px" }} />
            {marques.map((m) => (
              <button key={m} style={{ padding: "6px 16px", border: "1px solid #2A2A2A", background: "transparent", color: "#8A8A8A", fontFamily: "var(--font-montserrat)", fontSize: "12px", letterSpacing: "0.05em", cursor: "pointer", textTransform: "uppercase" }}>
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Grid */}
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 30px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2px",
            }}
          >
            {vehicles.map((v) => (
              <div
                key={v.id}
                style={{
                  backgroundColor: "#0D0D0D",
                  border: "1px solid #1A1A1A",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease",
                  cursor: "pointer",
                }}
                className="veh-card"
              >
                <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                  <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", transition: "transform 0.5s ease", filter: "brightness(0.85)" }} className="veh-img" />
                  <div style={{ position: "absolute", top: "14px", right: "14px", background: "linear-gradient(135deg,#D4AF37,#C5A059)", color: "#000", fontSize: "10px", fontFamily: "var(--font-montserrat)", fontWeight: 700, letterSpacing: "0.1em", padding: "4px 10px", textTransform: "uppercase" }}>
                    {v.type}
                  </div>
                  <div style={{ position: "absolute", top: "14px", left: "14px", color: "#D4AF37", fontSize: "10px", fontFamily: "var(--font-montserrat)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    {v.marque}
                  </div>
                </div>
                <div style={{ padding: "20px 22px" }}>
                  <h3 style={{ fontFamily: "var(--font-michroma)", fontSize: "14px", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 10px" }}>
                    {v.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "13px", color: "#8A8A8A", lineHeight: 1.6, margin: "0 0 18px" }}>
                    {v.desc}
                  </p>
                  <div style={{ height: "1px", background: "#1A1A1A", marginBottom: "16px" }} />
                  <Link
                    href="/contact"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", transition: "opacity 0.2s ease" }}
                  >
                    Demander une offre <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        .veh-card:hover { border-color: #D4AF37 !important; }
        .veh-card:hover .veh-img { transform: scale(1.05); }
      `}</style>
    </>
  );
}
