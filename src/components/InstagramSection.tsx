import Image from "next/image";
import Link from "next/link";

const posts = [
  { id: "insta-1", image: "/images/instagram/insta-1.jpg", alt: "Veloce Cars arrivage" },
  { id: "insta-2", image: "/images/instagram/insta-2.jpg", alt: "Veloce Cars véhicule" },
  { id: "insta-3", image: "/images/instagram/insta-3.jpg", alt: "Veloce Cars showroom" },
  { id: "insta-4", image: "/images/instagram/insta-4.jpg", alt: "Veloce Cars livraison" },
  { id: "insta-5", image: "/images/instagram/insta-5.jpg", alt: "Veloce Cars nouveauté" },
  { id: "insta-6", image: "/images/instagram/insta-6.jpg", alt: "Veloce Cars Draria" },
];

const FACEBOOK_URL = "https://www.facebook.com/velocecars";

export default function InstagramSection() {
  return (
    <section
      style={{
        backgroundColor: "#0A0A0A",
        padding: "100px 0",
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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
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
              NOS ARRIVAGES
            </span>
            <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to left, transparent, #D4AF37)" }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-michroma), Arial, sans-serif",
              fontSize: "clamp(24px, 3vw, 42px)",
              fontWeight: 400,
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              marginTop: 0,
              marginBottom: "12px",
            }}
          >
            SUIVEZ NOS DERNIERS ARRIVAGES
          </h2>

          <p
            style={{
              fontFamily: "var(--font-montserrat), Arial, sans-serif",
              fontSize: "14px",
              color: "#8A8A8A",
              marginTop: 0,
              marginBottom: 0,
              lineHeight: 1.7,
            }}
          >
            Retrouvez toutes nos nouveautés et véhicules disponibles sur notre page Facebook{" "}
            <Link
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D4AF37", textDecoration: "none" }}
            >
              Veloce Cars
            </Link>
          </p>
        </div>

        {/* Grid */}
        <div
          className="insta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            marginBottom: "50px",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "relative",
                display: "block",
                aspectRatio: "4/3",
                overflow: "hidden",
              }}
              className="insta-tile"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                style={{ objectFit: "cover", transition: "transform 0.4s ease", filter: "brightness(0.75)" }}
                className="insta-img"
              />
              {/* Gold hover overlay */}
              <div
                className="insta-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(212,175,55,0.4), rgba(197,160,89,0.4))",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                {/* Facebook icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ textDecoration: "none" }}
          >
            VOIR TOUS NOS ARRIVAGES SUR FACEBOOK
          </Link>
        </div>
      </div>

      <style>{`
        .insta-tile:hover .insta-img { transform: scale(1.06); filter: brightness(0.6) !important; }
        .insta-tile:hover .insta-overlay { opacity: 1 !important; }
        @media (max-width: 767px) {
          .insta-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
