export default function LocationsSection() {
  const phones = [
    { number: "0661-735-000", href: "tel:+213661735000" },
    { number: "0550-346-075", href: "tel:+213550346075" },
    { number: "0559-573-089", href: "tel:+213559573089" },
  ];

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#000",
        padding: "80px 0",
        borderTop: "1px solid #1A1A1A",
        position: "relative",
      }}
    >
      {/* Gold top line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "1px",
          background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2px",
          }}
        >
          {/* Showroom card */}
          <div
            style={{
              backgroundColor: "#0D0D0D",
              border: "1px solid #1A1A1A",
              padding: "40px 32px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <span style={{ display: "inline-block", width: "30px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)" }} />
              <span
                style={{
                  fontFamily: "var(--font-montserrat), Arial, sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                }}
              >
                SHOWROOM
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-michroma), Arial, sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginTop: 0,
                marginBottom: "20px",
              }}
            >
              VELOCE CARS
            </h3>
            <p
              style={{
                fontFamily: "var(--font-montserrat), Arial, sans-serif",
                fontSize: "14px",
                color: "#8A8A8A",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Résidence les deux oliviers<br />
              <strong style={{ color: "#B0B0B0" }}>Draria, Alger</strong><br />
              Algérie
            </p>
          </div>

          {/* Contact card */}
          <div
            style={{
              backgroundColor: "#0D0D0D",
              border: "1px solid #1A1A1A",
              borderLeft: "none",
              padding: "40px 32px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <span style={{ display: "inline-block", width: "30px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)" }} />
              <span
                style={{
                  fontFamily: "var(--font-montserrat), Arial, sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                }}
              >
                TÉLÉPHONES
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-michroma), Arial, sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginTop: 0,
                marginBottom: "20px",
              }}
            >
              NOUS APPELER
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {phones.map((phone) => (
                <a
                  key={phone.number}
                  href={phone.href}
                  style={{
                    fontFamily: "var(--font-michroma), Arial, sans-serif",
                    fontSize: "15px",
                    color: "#D4AF37",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "opacity 0.2s ease",
                  }}
                  className="phone-link"
                >
                  <span style={{ fontSize: "10px", color: "#8A8A8A" }}>☎</span>
                  {phone.number}
                </a>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div
            style={{
              background: "linear-gradient(135deg, #D4AF37, #C5A059)",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-montserrat), Arial, sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.5)",
                  marginTop: 0,
                  marginBottom: "8px",
                }}
              >
                RÉASSURANCE
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-michroma), Arial, sans-serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#000000",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginTop: 0,
                  marginBottom: "16px",
                }}
              >
                LA QUALITÉ SANS COMPROMIS
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-montserrat), Arial, sans-serif",
                  fontSize: "13px",
                  color: "rgba(0,0,0,0.7)",
                  lineHeight: 1.7,
                  margin: "0 0 32px",
                }}
              >
                Chaque véhicule importé par Veloce Cars est soumis à une batterie
                de tests rigoureux pour répondre aux standards internationaux de
                sécurité et de confort.
              </p>
            </div>
            <a
              href="/catalogue"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#000",
                color: "#D4AF37",
                fontFamily: "var(--font-michroma), Arial, sans-serif",
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "12px 20px",
                textDecoration: "none",
                alignSelf: "flex-start",
                transition: "opacity 0.2s ease",
              }}
            >
              VOIR LE CATALOGUE →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .phone-link:hover { opacity: 0.7; }
        @media (max-width: 1023px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
          .contact-grid > div:last-child { border-left: none !important; }
        }
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-grid > div { border-left: 1px solid #1A1A1A !important; }
        }
      `}</style>
    </section>
  );
}
