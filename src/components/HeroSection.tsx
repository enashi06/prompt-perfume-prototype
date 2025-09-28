import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-perfume.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Swiss-Inspired Luxury
            </span>
          </div>
          
          <h1 className="display-title text-foreground mb-6 leading-tight">
            Discover the Art of 
            <span className="text-primary block">Exquisite Fragrance</span>
          </h1>
          
          <p className="luxury-text text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Experience the pinnacle of perfumery craftsmanship. Each bottle tells a story of 
            Swiss precision, luxury ingredients, and timeless elegance that captivates the senses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <Button size="lg" className="btn-luxury group">
              Discover Our Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-gold">
              Watch Our Story
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
            <div>
              <div className="font-display text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Unique Fragrances</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-primary">25</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative animate-slide-up">
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Luxury perfume bottle on marble surface" 
              className="w-full h-auto rounded-2xl shadow-premium hover-lift"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-card shadow-elegant rounded-2xl p-4 animate-fade-in hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div>
                  <div className="font-medium text-sm">Premium Quality</div>
                  <div className="text-xs text-muted-foreground">Swiss Certified</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card shadow-elegant rounded-2xl p-4 animate-fade-in hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-sm">Handcrafted</div>
                  <div className="text-xs text-muted-foreground">Limited Edition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;