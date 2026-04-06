import type { Metadata } from "next";
import { Michroma, Montserrat } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Veloce Cars · Importation Automobile Chine — Algérie",
  description:
    "Veloce Cars, spécialiste de l'importation de voitures chinoises haut de gamme en Algérie. BYD, Zeekr, Li Auto. Showroom à Draria, Alger. Contactez-nous.",
  icons: {
    icon: [
      { url: "/seo/favicon.png", sizes: "32x32" },
      { url: "/seo/favicon.png", sizes: "192x192" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${michroma.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
