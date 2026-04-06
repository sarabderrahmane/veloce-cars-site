"use client";

import Image from "next/image";

const steps = [
  { num: "01", title: "CONSEIL", desc: "Analyse de vos besoins et sélection du modèle idéal parmi nos partenaires en Chine." },
  { num: "02", title: "COMMANDE", desc: "Gestion sécurisée de la transaction et confirmation auprès du constructeur." },
  { num: "03", title: "TRANSIT", desc: "Suivi de l'acheminement maritime depuis les ports chinois jusqu'à Alger." },
  { num: "04", title: "LIVRAISON", desc: "Remise des clés à Draria, Alger, avec tous les documents administratifs." },
];

export default function FounderSection() {
  return (
    <section
      id="processus"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000",
        padding: "100px 0",
      }}
    >
      {/* Background image (dimmed) */}
      <Image
        src="/images/services-bg.jpg"
        alt="Processus importation Veloce Cars"
        fill
        style={{ objectFit: "cover", objectPosition: "center", opacity: 0.12 }}
      />

      {/* Gold bottom gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37)" }} />
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
              NOTRE PROCESSUS
            </span>
            <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to left, transparent, #D4AF37)" }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-michroma), Arial, sans-serif",
              fontSize: "clamp(28px, 4vw, 50px)",
              fontWeight: 400,
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              lineHeight: 1.1,
              marginTop: 0,
              marginBottom: "16px",
            }}
          >
            IMPORTATION{" "}
            <span className="highlight-red">CLÉ EN MAIN</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-montserrat), Arial, sans-serif",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#8A8A8A",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Un processus transparent et sécurisé, de la Chine jusqu&apos;à votre
            porte à Alger. Nous gérons chaque étape pour vous.
          </p>
        </div>

        {/* Steps */}
        <div
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
            marginBottom: "60px",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                backgroundColor: "#0D0D0D",
                border: "1px solid #1A1A1A",
                padding: "40px 28px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s ease",
              }}
              className="step-card"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "52px",
                    right: "-1px",
                    width: "1px",
                    height: "20px",
                    background: "#D4AF37",
                    opacity: 0.3,
                  }}
                />
              )}
              <div
                style={{
                  fontFamily: "var(--font-michroma), Arial, sans-serif",
                  fontSize: "42px",
                  fontWeight: 400,
                  background: "linear-gradient(135deg, rgba(212,175,55,0.15), transparent)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                  marginBottom: "20px",
                }}
              >
                {step.num}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-michroma), Arial, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#D4AF37",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 12px",
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-montserrat), Arial, sans-serif",
                  fontSize: "13px",
                  color: "#8A8A8A",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
              {/* Bottom gold line on hover */}
              <div
                className="step-line"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(to right, #D4AF37, #C5A059)",
                  transform: "scaleX(0)",
                  transition: "transform 0.3s ease",
                  transformOrigin: "left",
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a href="/contact" className="btn-primary" style={{ fontSize: "13px" }}>
            DEMANDER UNE OFFRE PERSONNALISÉE <span>→</span>
          </a>
        </div>
      </div>

      <style>{`
        .step-card:hover { border-color: #2A2A2A !important; }
        .step-card:hover .step-line { transform: scaleX(1) !important; }
        @media (max-width: 1023px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 767px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
