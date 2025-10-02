import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import FeaturedPerfumes from "@/components/FeaturedPerfumes";
import WorkshopCTA from "@/components/WorkshopCTA";
import Footer from "@/components/Footer";
import FloatingChatBubble from "@/components/FloatingChatBubble";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingChatBubble />
      <HeroSection />
      <BrandStory />
      <FeaturedPerfumes />
      
      {/* Collections CTA Section */}
      <section className="py-16 bg-gradient-elegant">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-foreground mb-6">
            Discover Luxury Perfumes from Around the World
          </h2>
          <p className="luxury-text text-muted-foreground max-w-3xl mx-auto mb-8">
            Journey across continents and explore our curated collections inspired by the world's 
            most enchanting destinations. From Arabian oud to Swiss alpine freshness, each fragrance 
            tells a unique story of its homeland.
          </p>
          <Link to="/collections">
            <Button size="lg" className="btn-luxury">
              <MapPin className="h-5 w-5 mr-2" />
              Explore Our Global Collections
            </Button>
          </Link>
        </div>
      </section>

      <WorkshopCTA />
      <Footer />
    </div>
  );
};

export default Index;
