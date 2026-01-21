import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import ModelSection from "@/components/ModelSection";
import FleetSection from "@/components/FleetSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ModelSection />
        <FleetSection />
        <DifferentialsSection />
        <ClientsSection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
};

export default Index;
