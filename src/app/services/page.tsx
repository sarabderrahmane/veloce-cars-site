import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services · Veloce Cars",
  description: "Notre processus d'importation clé en main : conseil, commande, transit maritime, livraison à Draria Alger. Expertise Chine Algérie.",
};

const steps = [
  {
    num: "01",
    title: "CONSEIL",
    desc: "Analyse approfondie de vos besoins : budget, usage, préférences. Nous vous guidons dans la sélection du modèle idéal parmi nos partenaires constructeurs en Chine.",
    details: ["Étude personnalisée", "Comparatif de modèles", "Simulation de financement", "Disponibilité vérifiée"],
  },
  {
    num: "02",
    title: "COMMANDE",
    desc: "Gestion sécurisée de la transaction auprès du constructeur chinois. Contrat clair, acompte sécurisé, confirmation de commande officielle.",
    details: ["Contrat bilingue", "Transaction sécurisée", "Confirmation constructeur", "Délai garanti"],
  },
  {
    num: "03",
    title: "TRANSIT",
    desc: "Suivi en temps réel de l'acheminement maritime depuis les ports de Shanghai, Tianjin ou Guangzhou jusqu'au port d'Alger. Dédouanement inclus.",
    details: ["Expédition maritime", "Suivi GPS en ligne", "Dédouanement complet", "Assurance transport"],
  },
  {
    num: "04",
    title: "LIVRAISON",
    desc: "Remise des clés à notre showroom de Draria, Alger. Vérification technique finale, documents complets, immatriculation accompagnée.",
    details: ["Contrôle technique", "Documents complets", "Aide immatriculation", "Formation véhicule"],
  },
];

const avantages = [
  { title: "EXPERTISE CHINE", desc: "Partenariats directs avec BYD, Zeekr, Li Auto, Avatr et NIO. Accès aux modèles avant leur commercialisation locale." },
  { title: "CONTRÔLE QUALITÉ", desc: "Inspection pré-expédition systématique. Chaque véhicule est contrôlé par nos équipes avant embarquement." },
  { title: "TRANSPARENCE TOTALE", desc: "Pas de coûts cachés. Devis complet dès le départ : prix véhicule + transport + dédouanement + livraison." },
  { title: "SUPPORT CONTINU", desc: "Accompagnement de A à Z, de la sélection du modèle jusqu'à l'immatriculation finale à Alger." },
];

export default function ServicesPage() {
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
              <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>NOS SERVICES</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-michroma)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", margin: "0 0 12px" }}>
              IMPORTATION <span className="highlight-red">CLÉ EN MAIN</span>
            </h1>
            <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "15px", color: "#8A8A8A", maxWidth: "600px", lineHeight: 1.7, margin: 0 }}>
              Un processus transparent, sécurisé et entièrement pris en charge — de la sélection du véhicule en Chine jusqu&apos;à la remise des clés à Draria, Alger.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "80px 30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px", marginBottom: "80px" }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ backgroundColor: "#0D0D0D", border: "1px solid #1A1A1A", padding: "40px 28px", position: "relative", overflow: "hidden" }} className="step-card">
                <div style={{ fontFamily: "var(--font-michroma)", fontSize: "52px", fontWeight: 400, color: "rgba(212,175,55,0.08)", letterSpacing: "0.05em", lineHeight: 1, marginBottom: "24px" }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "var(--font-michroma)", fontSize: "15px", fontWeight: 400, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 14px" }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "13px", color: "#8A8A8A", lineHeight: 1.7, margin: "0 0 20px" }}>
                  {step.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {step.details.map((d) => (
                    <li key={d} style={{ fontFamily: "var(--font-montserrat)", fontSize: "12px", color: "#B0B0B0", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#D4AF37", flexShrink: 0 }} />
                      {d}
                    </li>
                  ))}
                </ul>
                {i < steps.length - 1 && (
                  <div style={{ position: "absolute", top: "50%", right: "-13px", transform: "translateY(-50%)", zIndex: 2, color: "#D4AF37", fontSize: "18px", display: "none" }} className="step-arrow">→</div>
                )}
                <div className="step-line" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, #D4AF37, #C5A059)", transform: "scaleX(0)", transition: "transform 0.3s ease", transformOrigin: "left" }} />
              </div>
            ))}
          </div>

          {/* Avantages */}
          <div style={{ marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37)" }} />
                <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>POURQUOI NOUS</span>
                <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to left, transparent, #D4AF37)" }} />
              </div>
              <h2 style={{ fontFamily: "var(--font-michroma)", fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", margin: 0 }}>
                NOS <span className="highlight-red">ENGAGEMENTS</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2px" }}>
              {avantages.map((a) => (
                <div key={a.title} style={{ backgroundColor: "#0D0D0D", border: "1px solid #1A1A1A", padding: "32px 28px" }}>
                  <h4 style={{ fontFamily: "var(--font-michroma)", fontSize: "13px", fontWeight: 400, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>
                    {a.title}
                  </h4>
                  <div style={{ width: "24px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)", marginBottom: "16px" }} />
                  <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "13px", color: "#8A8A8A", lineHeight: 1.7, margin: 0 }}>
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Background image CTA */}
          <div style={{ position: "relative", overflow: "hidden", minHeight: "320px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/services-bg.jpg" alt="Veloce Cars" fill style={{ objectFit: "cover", opacity: 0.15 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(212,175,55,0.05), transparent)" }} />
            <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 30px" }}>
              <h2 style={{ fontFamily: "var(--font-michroma)", fontSize: "clamp(22px, 3vw, 40px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", margin: "0 0 16px" }}>
                PRÊT À COMMENCER ?
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "15px", color: "#8A8A8A", margin: "0 0 32px", maxWidth: "480px", lineHeight: 1.7 }}>
                Contactez-nous pour obtenir une offre personnalisée sur le véhicule de votre choix.
              </p>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
                DEMANDER UNE OFFRE →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        .step-card:hover { border-color: #2A2A2A !important; }
        .step-card:hover .step-line { transform: scaleX(1) !important; }
      `}</style>
    </>
  );
}
