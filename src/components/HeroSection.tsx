import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "600px",
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image */}
      <Image
        src="/images/hero-car.jpg"
        alt="Véhicule haut de gamme Veloce Cars"
        fill
        style={{ objectFit: "cover", objectPosition: "center", opacity: 0.45 }}
        priority
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.3) 100%)",
          zIndex: 1,
        }}
      />

      {/* Gold bottom gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, rgba(212,175,55,0.08), transparent)",
          zIndex: 1,
        }}
      />

      {/* Decorative background lines */}
      <div className="bkg-lines">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="bkg-lines-line" />
        ))}
      </div>

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "750px",
          width: "100%",
          paddingLeft: "80px",
          paddingRight: "30px",
        }}
      >
        {/* Eyebrow tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
            animation: "fadeInUp 0.6s ease 0.1s both",
          }}
        >
          <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to right, #D4AF37, #C5A059)" }} />
          <span
            className="hero-eyebrow"
            style={{
              fontFamily: "var(--font-montserrat), Arial, sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#D4AF37",
            }}
          >
            IMPORTATION AUTOMOBILE · CHINE → ALGÉRIE
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "var(--font-michroma), Arial, sans-serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 400,
            textTransform: "uppercase",
            color: "#FFFFFF",
            lineHeight: 1.1,
            letterSpacing: "0.03em",
            marginTop: 0,
            marginBottom: "24px",
            animation: "fadeInUp 0.6s ease 0.3s both",
          }}
        >
          VOTRE ACCÈS DIRECT AU{" "}
          <span className="highlight-red">FUTUR</span>{" "}
          DE L&apos;AUTOMOBILE
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-montserrat), Arial, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginTop: 0,
            marginBottom: "40px",
            animation: "fadeInUp 0.6s ease 0.5s both",
          }}
        >
          Veloce Cars vous ouvre les portes de l&apos;innovation automobile
          chinoise. BYD, Zeekr, Li Auto — des véhicules d&apos;exception,
          importés clé en main jusqu&apos;à Draria, Alger.
        </p>

        {/* CTAs */}
        <div
          className="hero-ctas"
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            animation: "fadeInUp 0.6s ease 0.7s both",
          }}
        >
          <a href="/catalogue" className="btn-primary">
            DÉCOUVRIR LE CATALOGUE <span>→</span>
          </a>
          <a
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "var(--font-michroma), Arial, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 0",
              border: "none",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            NOTRE PROCESSUS <span style={{ color: "#D4AF37" }}>→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-montserrat), Arial, sans-serif",
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#D4AF37",
            opacity: 0.6,
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #D4AF37, transparent)",
            animation: "scrollPulse 1.5s ease infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @media (max-width: 1023px) {
          .hero-content { padding-left: 40px !important; }
        }
        @media (max-width: 767px) {
          .hero-content {
            padding-left: 16px !important;
            padding-right: 16px !important;
            max-width: 100% !important;
          }
          .hero-content h1 {
            font-size: 26px !important;
            word-break: break-word !important;
          }
          .hero-content .hero-eyebrow {
            font-size: 9px !important;
            letter-spacing: 0.15em !important;
          }
          .hero-content p {
            font-size: 14px !important;
          }
          .hero-ctas {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-ctas a {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
