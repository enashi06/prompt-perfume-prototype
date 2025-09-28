import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorkshopCTA = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Expert Guidance",
      description: "Learn from master perfumers with decades of experience"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Personalized Creation",
      description: "Create your unique signature fragrance to take home"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "3-Hour Experience",
      description: "Immersive workshop covering all aspects of perfumery"
    }
  ];

  return (
    <section className="py-24 bg-gradient-dark text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <Calendar className="h-6 w-6 text-primary mr-3" />
              <span className="text-primary font-medium tracking-wide uppercase text-sm">
                Exclusive Workshop Experience
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Create Your Own 
              <span className="text-primary block">Signature Fragrance</span>
            </h2>
            
            <p className="luxury-text text-secondary-foreground/80 mb-8">
              Join our exclusive perfume creation workshops and discover the secrets 
              of master perfumers. Learn to blend rare ingredients and create a 
              personalized fragrance that tells your unique story.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-foreground/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/workshops">
                <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground group">
                  Book Your Workshop
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Workshop Info Cards */}
          <div className="space-y-6 animate-slide-up">
            
            {/* Upcoming Workshop Card */}
            <div className="bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-3xl p-8 shadow-premium">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-semibold text-secondary-foreground">
                  Next Workshop
                </h3>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-secondary-foreground/70">Date</span>
                  <span className="text-secondary-foreground font-medium">March 15, 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-foreground/70">Time</span>
                  <span className="text-secondary-foreground font-medium">2:00 PM - 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-foreground/70">Spots Available</span>
                  <span className="text-primary font-medium">3 remaining</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-foreground/70">Price</span>
                  <span className="text-secondary-foreground font-bold text-lg">$150</span>
                </div>
              </div>
            </div>

            {/* What's Included Card */}
            <div className="bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-3xl p-8 shadow-premium">
              <h3 className="font-display text-xl font-semibold text-secondary-foreground mb-6">
                What's Included
              </h3>
              
              <ul className="space-y-3">
                {[
                  "3-hour guided perfume creation session",
                  "50ml bottle of your custom fragrance",
                  "Professional perfumer consultation",
                  "Premium ingredient tasting",
                  "Certificate of completion",
                  "Light refreshments & champagne"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-secondary-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopCTA;