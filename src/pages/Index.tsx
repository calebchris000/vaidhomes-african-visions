import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import ProjectShowcase from "@/components/ProjectShowcase";
import TeamSection from "@/components/TeamSection";
import InvestorSection from "@/components/InvestorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactElement = document.querySelector("#contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustedBy />
      <ServicesOverview />
      <ProjectShowcase />
      <TeamSection />
      <InvestorSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
