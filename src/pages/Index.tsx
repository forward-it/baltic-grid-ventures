import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RevenuePotential from "@/components/RevenuePotential";
import EngineeringExperience from "@/components/EngineeringExperience";
import MarketParticipation from "@/components/MarketParticipation";
import AssetIntegration from "@/components/AssetIntegration";
import PlatformCapabilities from "@/components/PlatformCapabilities";
import ProfitShareModel from "@/components/ProfitShareModel";
import RevenueCalculator from "@/components/RevenueCalculator";
import HowItWorks from "@/components/HowItWorks";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RevenuePotential />
      <MarketParticipation />
      <AssetIntegration />
      <PlatformCapabilities />
      <ProfitShareModel />
      <RevenueCalculator />
      <HowItWorks />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
