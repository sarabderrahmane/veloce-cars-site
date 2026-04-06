"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const phones = [
  { number: "0661-735-000", href: "tel:+213661735000" },
  { number: "0550-346-075", href: "tel:+213550346075" },
  { number: "0559-573-089", href: "tel:+213559573089" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", telephone: "", email: "", vehicule: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
              <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>CONTACT</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-michroma)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", margin: "0 0 12px" }}>
              NOUS <span className="highlight-red">CONTACTER</span>
            </h1>
            <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "15px", color: "#8A8A8A", maxWidth: "550px", lineHeight: 1.7, margin: 0 }}>
              Vous avez un projet ? Demandez une offre personnalisée ou venez nous rendre visite à notre showroom de Draria, Alger.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "80px 30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "2px", alignItems: "start" }} className="contact-layout">

            {/* Left: Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {/* Showroom */}
              <div style={{ backgroundColor: "#0D0D0D", border: "1px solid #1A1A1A", padding: "36px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ display: "inline-block", width: "30px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)" }} />
                  <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>SHOWROOM</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-michroma)", fontSize: "16px", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px" }}>ADRESSE</h3>
                <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "14px", color: "#8A8A8A", lineHeight: 1.8, margin: 0 }}>
                  Résidence les deux oliviers<br />
                  <strong style={{ color: "#B0B0B0" }}>Draria, Alger</strong><br />
                  Algérie
                </p>
              </div>

              {/* Phones */}
              <div style={{ backgroundColor: "#0D0D0D", border: "1px solid #1A1A1A", padding: "36px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ display: "inline-block", width: "30px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)" }} />
                  <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>TÉLÉPHONES</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-michroma)", fontSize: "16px", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 20px" }}>NOUS APPELER</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {phones.map((p) => (
                    <a key={p.number} href={p.href} style={{ fontFamily: "var(--font-michroma)", fontSize: "16px", color: "#D4AF37", textDecoration: "none", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: "10px", transition: "opacity 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      <span style={{ fontSize: "10px", color: "#8A8A8A" }}>☎</span>
                      {p.number}
                    </a>
                  ))}
                </div>
              </div>

              {/* Gold CTA block */}
              <div style={{ background: "linear-gradient(135deg, #D4AF37, #C5A059)", padding: "36px 28px" }}>
                <h3 style={{ fontFamily: "var(--font-michroma)", fontSize: "15px", fontWeight: 400, color: "#000", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px" }}>
                  LA QUALITÉ SANS COMPROMIS
                </h3>
                <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "13px", color: "rgba(0,0,0,0.7)", lineHeight: 1.7, margin: 0 }}>
                  Chaque véhicule importé par Veloce Cars est soumis à une batterie de tests rigoureux pour répondre aux standards internationaux de sécurité et de confort.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ backgroundColor: "#0D0D0D", border: "1px solid #1A1A1A", padding: "50px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)" }} />
                <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37" }}>FORMULAIRE</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-michroma)", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 36px" }}>
                DEMANDER UNE OFFRE PERSONNALISÉE
              </h2>

              {sent ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{ fontFamily: "var(--font-michroma)", fontSize: "32px", color: "#D4AF37", marginBottom: "16px" }}>✓</div>
                  <h3 style={{ fontFamily: "var(--font-michroma)", fontSize: "18px", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 12px" }}>MESSAGE ENVOYÉ</h3>
                  <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "14px", color: "#8A8A8A" }}>
                    Nous vous contacterons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                    {[
                      { key: "nom", label: "Nom complet *", type: "text", required: true },
                      { key: "telephone", label: "Téléphone *", type: "tel", required: true },
                    ].map((field) => (
                      <div key={field.key}>
                        <label style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8A8A", display: "block", marginBottom: "8px" }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required={field.required}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          style={{ width: "100%", backgroundColor: "#111", border: "1px solid #2A2A2A", color: "#fff", fontFamily: "var(--font-montserrat)", fontSize: "14px", padding: "12px 16px", outline: "none", transition: "border-color 0.2s ease", boxSizing: "border-box" }}
                          onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                          onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
                        />
                      </div>
                    ))}
                  </div>

                  {[
                    { key: "email", label: "Email", type: "email", required: false },
                    { key: "vehicule", label: "Véhicule souhaité", type: "text", required: false, placeholder: "Ex: BYD Han EV, Zeekr 001..." },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8A8A", display: "block", marginBottom: "8px" }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        placeholder={"placeholder" in field ? field.placeholder : ""}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        style={{ width: "100%", backgroundColor: "#111", border: "1px solid #2A2A2A", color: "#fff", fontFamily: "var(--font-montserrat)", fontSize: "14px", padding: "12px 16px", outline: "none", transition: "border-color 0.2s ease", boxSizing: "border-box" }}
                        onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                        onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A8A8A", display: "block", marginBottom: "8px" }}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ width: "100%", backgroundColor: "#111", border: "1px solid #2A2A2A", color: "#fff", fontFamily: "var(--font-montserrat)", fontSize: "14px", padding: "12px 16px", outline: "none", resize: "vertical", transition: "border-color 0.2s ease", boxSizing: "border-box" }}
                      onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                      onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "8px" }}>
                    ENVOYER MA DEMANDE →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 1023px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
