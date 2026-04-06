import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import InstagramSection from "@/components/InstagramSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FounderSection />
        <InstagramSection />
        <LocationsSection />
      </main>
      <Footer />
    </>
  );
}
