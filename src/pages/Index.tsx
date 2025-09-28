import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import FeaturedPerfumes from "@/components/FeaturedPerfumes";
import WorkshopCTA from "@/components/WorkshopCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BrandStory />
      <FeaturedPerfumes />
      <WorkshopCTA />
      <Footer />
    </div>
  );
};

export default Index;
