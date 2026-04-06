import Link from "next/link";

const footerColumns = [
  {
    title: "VÉHICULES",
    links: [
      { label: "BYD", href: "/catalogue" },
      { label: "Zeekr", href: "/catalogue" },
      { label: "Li Auto", href: "/catalogue" },
      { label: "Avatr", href: "/catalogue" },
      { label: "NIO", href: "/catalogue" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Importation clé en main", href: "/services" },
      { label: "Conseil & sélection", href: "/services" },
      { label: "Suivi de commande", href: "/services" },
      { label: "Assistance administrative", href: "/services" },
    ],
  },
  {
    title: "INFORMATIONS",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Notre processus", href: "/services" },
      { label: "Showroom Draria", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Upper Footer */}
      <div
        style={{
          backgroundColor: "#0A0A0A",
          padding: "70px 0 50px",
          borderTop: "1px solid #1A1A1A",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 30px",
          }}
        >
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "2.5fr 1fr 1fr 1fr",
              gap: "60px",
            }}
          >
            {/* Brand Column */}
            <div>
              <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>
                <div style={{ lineHeight: 1 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-michroma), Arial, sans-serif",
                      fontSize: "26px",
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
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-montserrat), Arial, sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.5em",
                      color: "#8A8A8A",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    CARS
                  </div>
                </div>
              </Link>
              <p
                style={{
                  fontFamily: "var(--font-montserrat), Arial, sans-serif",
                  fontSize: "13px",
                  color: "#8A8A8A",
                  lineHeight: 1.8,
                  maxWidth: "280px",
                  marginTop: 0,
                  marginBottom: "28px",
                }}
              >
                L&apos;excellence automobile chinoise, importée pour vous.
                Showroom à Draria, Alger.
              </p>

              {/* Social */}
              <div style={{ display: "flex", gap: "10px" }}>
                <Link
                  href="https://www.facebook.com/velocecars"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid #2A2A2A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8A8A8A",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  className="social-icon"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </div>

              {/* Address */}
              <div
                style={{
                  marginTop: "28px",
                  paddingTop: "28px",
                  borderTop: "1px solid #1A1A1A",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-montserrat), Arial, sans-serif",
                    fontSize: "12px",
                    color: "#8A8A8A",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  Résidence les deux oliviers<br />
                  Draria, Alger · Algérie<br />
                  <a href="tel:+213661735000" style={{ color: "#D4AF37", textDecoration: "none" }}>0661-735-000</a>
                </p>
              </div>
            </div>

            {/* Nav Columns */}
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4
                  style={{
                    fontFamily: "var(--font-michroma), Arial, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#FFFFFF",
                    marginTop: 0,
                    marginBottom: "8px",
                  }}
                >
                  {col.title}
                </h4>
                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    background: "linear-gradient(to right, #D4AF37, #C5A059)",
                    marginBottom: "20px",
                  }}
                />
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.links.map((link) => (
                    <li key={link.label} style={{ marginBottom: "12px" }}>
                      <Link
                        href={link.href}
                        style={{
                          fontFamily: "var(--font-montserrat), Arial, sans-serif",
                          fontSize: "13px",
                          color: "#8A8A8A",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                          display: "block",
                          lineHeight: 1,
                        }}
                        className="footer-link"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div
        style={{
          backgroundColor: "#000",
          padding: "20px 0",
          borderTop: "1px solid #1A1A1A",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-montserrat), Arial, sans-serif",
              fontSize: "12px",
              color: "#8A8A8A",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Veloce Cars. Tous droits réservés. · Draria, Alger
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Mentions légales", "Politique de confidentialité"].map((label) => (
              <Link
                key={label}
                href="#"
                style={{
                  fontFamily: "var(--font-montserrat), Arial, sans-serif",
                  fontSize: "12px",
                  color: "#8A8A8A",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  letterSpacing: "0.02em",
                }}
                className="legal-link"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .social-icon:hover { background: linear-gradient(135deg, #D4AF37, #C5A059) !important; border-color: #D4AF37 !important; color: #000 !important; }
        .footer-link:hover { color: #D4AF37 !important; }
        .legal-link:hover { color: #D4AF37 !important; }
        @media (max-width: 1023px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 767px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
