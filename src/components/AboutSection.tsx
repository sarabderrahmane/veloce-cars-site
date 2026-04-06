import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      style={{
        backgroundColor: "#111111",
        padding: "100px 0",
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
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 3fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left: Image Composition */}
          <div
            className="about-images"
            style={{ position: "relative", height: "520px" }}
          >
            {/* Main image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "75%",
                height: "85%",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/about-person.jpg"
                alt="Veloce Cars équipe"
                fill
                style={{ objectFit: "cover", filter: "brightness(0.8)" }}
              />
            </div>
            {/* Overlay image */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "60%",
                height: "55%",
                overflow: "hidden",
                border: "3px solid #111111",
              }}
            >
              <Image
                src="/images/about-car.jpg"
                alt="Véhicule importé Veloce Cars"
                fill
                style={{ objectFit: "cover", filter: "brightness(0.8)" }}
              />
            </div>
            {/* Gold corner accent */}
            <div
              style={{
                position: "absolute",
                bottom: "55%",
                right: "0",
                width: "60%",
                height: "2px",
                background: "linear-gradient(to left, #D4AF37, transparent)",
              }}
            />
          </div>

          {/* Right: Text */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
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
                À PROPOS
              </span>
            </div>

            {/* H2 */}
            <h2
              style={{
                fontFamily: "var(--font-michroma), Arial, sans-serif",
                fontSize: "clamp(24px, 3vw, 42px)",
                fontWeight: 400,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.03em",
                lineHeight: 1.15,
                marginTop: 0,
                marginBottom: "24px",
              }}
            >
              NOUS REDÉFINISSONS L&apos;EXPÉRIENCE DE{" "}
              <span className="highlight-red">L&apos;ACHAT</span>{" "}
              AUTOMOBILE
            </h2>

            {/* Body */}
            <p
              style={{
                fontFamily: "var(--font-montserrat), Arial, sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#8A8A8A",
                marginTop: 0,
                marginBottom: "20px",
              }}
            >
              Chez <strong style={{ color: "#D4AF37" }}>Veloce Cars</strong>, nous redéfinissons l&apos;expérience
              de l&apos;achat automobile. Forts de notre expertise sur le marché chinois,
              nous sélectionnons des véhicules qui allient design futuriste,
              performances exceptionnelles et technologies de pointe.
            </p>
            <p
              style={{
                fontFamily: "var(--font-montserrat), Arial, sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#8A8A8A",
                marginTop: 0,
                marginBottom: "36px",
              }}
            >
              Notre engagement est de vous offrir une <strong style={{ color: "#B0B0B0" }}>transparence totale</strong>,
              du choix du modèle jusqu&apos;à la remise des clés dans notre showroom de{" "}
              <strong style={{ color: "#B0B0B0" }}>Draria, Alger</strong>.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                paddingTop: "28px",
                borderTop: "1px solid #1A1A1A",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              {[
                { number: "BYD", label: "Zeekr · Li Auto" },
                { number: "100%", label: "Clé en main" },
                { number: "DRARIA", label: "Alger · Showroom" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-michroma), Arial, sans-serif",
                      fontSize: "22px",
                      fontWeight: 400,
                      background: "linear-gradient(135deg, #D4AF37, #C5A059)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      letterSpacing: "0.05em",
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-montserrat), Arial, sans-serif",
                      fontSize: "11px",
                      color: "#8A8A8A",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "6px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="/services" className="btn-primary">
              NOTRE PROCESSUS D&apos;IMPORTATION <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-images { height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
