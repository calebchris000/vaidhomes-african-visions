import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import ProjectShowcase from '@/components/ProjectShowcase';
import TeamSection from '@/components/TeamSection';
import InvestorSection from '@/components/InvestorSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
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
