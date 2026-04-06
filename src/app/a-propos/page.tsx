import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos · Veloce Cars",
  description: "Veloce Cars, spécialiste de l'importation automobile depuis la Chine. Notre histoire, notre mission et nos valeurs. Showroom à Draria, Alger.",
};

const valeurs = [
  { title: "TRANSPARENCE", desc: "Chaque étape du processus vous est communiquée. Pas de coûts cachés, pas de mauvaises surprises. Un devis complet dès le premier contact." },
  { title: "EXPERTISE", desc: "Une connaissance approfondie du marché automobile chinois. Nous suivons chaque constructeur, chaque nouveau modèle, pour vous offrir le meilleur." },
  { title: "FIABILITÉ", desc: "Des partenariats directs avec les constructeurs garantissent l'authenticité et la qualité de chaque véhicule importé." },
  { title: "AVANT-GARDE", desc: "La Chine est en avance sur l'électrification et la connectivité. Nous vous donnons accès à cette avance technologique dès aujourd'hui." },
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#000", minHeight: "100vh" }}>
        {/* Page Hero */}
        <div style={{ backgroundColor: "#0A0A0A", paddingTop: "140px", paddingBottom: "60px", borderBottom: "1px solid #1A1A1A", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", zIndex: 0 }}>
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} style={{ flex: 1, background: "linear-gradient(#D4AF37, transparent)", opacity: 0.03 }} />
            ))}
          </div>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 30px", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)" }} />
              <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>À PROPOS</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-michroma)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", margin: "0 0 12px" }}>
              NOTRE <span className="highlight-red">HISTOIRE</span>
            </h1>
            <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "15px", color: "#8A8A8A", maxWidth: "600px", lineHeight: 1.7, margin: 0 }}>
              Veloce Cars est né d&apos;une passion pour l&apos;automobile et d&apos;une conviction : l&apos;innovation chinoise mérite d&apos;être accessible en Algérie.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "80px 30px" }}>
          {/* Mission */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "100px" }} className="about-story-grid">
            <div style={{ position: "relative", height: "480px" }} className="about-story-img">
              <div style={{ position: "absolute", top: 0, left: 0, width: "75%", height: "85%", overflow: "hidden" }}>
                <Image src="/images/about-person.jpg" alt="Veloce Cars équipe" fill style={{ objectFit: "cover", filter: "brightness(0.8)" }} />
              </div>
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "58%", height: "52%", overflow: "hidden", border: "3px solid #000" }}>
                <Image src="/images/about-car.jpg" alt="Véhicule Veloce Cars" fill style={{ objectFit: "cover", filter: "brightness(0.8)" }} />
              </div>
              <div style={{ position: "absolute", bottom: "52%", right: 0, width: "58%", height: "1px", background: "linear-gradient(to left, #D4AF37, transparent)" }} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)" }} />
                <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>NOTRE MISSION</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-michroma)", fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.15, margin: "0 0 24px" }}>
                UNE PASSERELLE TECHNOLOGIQUE ENTRE LA CHINE ET <span className="highlight-red">L&apos;ALGÉRIE</span>
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "15px", color: "#8A8A8A", lineHeight: 1.8, margin: "0 0 18px" }}>
                Chez <strong style={{ color: "#D4AF37" }}>Veloce Cars</strong>, nous redéfinissons l&apos;expérience de l&apos;achat automobile. Forts de notre expertise sur le marché chinois, nous sélectionnons des véhicules qui allient design futuriste, performances exceptionnelles et technologies de pointe.
              </p>
              <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "15px", color: "#8A8A8A", lineHeight: 1.8, margin: "0 0 36px" }}>
                Notre engagement est de vous offrir une <strong style={{ color: "#B0B0B0" }}>transparence totale</strong>, du choix du modèle jusqu&apos;à la remise des clés dans notre showroom de <strong style={{ color: "#B0B0B0" }}>Draria, Alger</strong>.
              </p>
              <blockquote style={{ borderLeft: "2px solid #D4AF37", paddingLeft: "20px", margin: "0 0 36px", fontFamily: "var(--font-montserrat)", fontSize: "15px", fontStyle: "italic", color: "#B0B0B0", lineHeight: 1.7 }}>
                &ldquo;L&apos;excellence automobile chinoise, importée pour vous.&rdquo;
              </blockquote>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
                NOUS CONTACTER →
              </Link>
            </div>
          </div>

          {/* Valeurs */}
          <div style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37)" }} />
                <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>NOS VALEURS</span>
                <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to left, transparent, #D4AF37)" }} />
              </div>
              <h2 style={{ fontFamily: "var(--font-michroma)", fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", margin: 0 }}>
                PRESTIGE · FIABILITÉ · <span className="highlight-red">AVANT-GARDE</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2px" }}>
              {valeurs.map((v) => (
                <div key={v.title} style={{ backgroundColor: "#0D0D0D", border: "1px solid #1A1A1A", padding: "36px 28px" }}>
                  <h4 style={{ fontFamily: "var(--font-michroma)", fontSize: "13px", fontWeight: 400, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>
                    {v.title}
                  </h4>
                  <div style={{ width: "24px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)", marginBottom: "16px" }} />
                  <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "13px", color: "#8A8A8A", lineHeight: 1.7, margin: 0 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "60px 0", borderTop: "1px solid #1A1A1A" }}>
            <h2 style={{ fontFamily: "var(--font-michroma)", fontSize: "clamp(20px, 2.5vw, 34px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", margin: "0 0 16px" }}>
              PRÊT À REJOINDRE L&apos;AVENTURE ?
            </h2>
            <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "15px", color: "#8A8A8A", margin: "0 0 32px" }}>
              Découvrez notre catalogue ou contactez-nous directement.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/catalogue" className="btn-primary" style={{ textDecoration: "none" }}>VOIR LE CATALOGUE →</Link>
              <Link href="/contact" className="btn-outline" style={{ textDecoration: "none" }}>NOUS CONTACTER</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 767px) {
          .about-story-grid { grid-template-columns: 1fr !important; }
          .about-story-img { height: 280px !important; }
        }
      `}</style>
    </>
  );
}
