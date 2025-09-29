import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Award, MapPin, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
const Workshops = () => {
  const workshops = [{
    id: 1,
    title: "Signature Scent Creation",
    description: "Learn the fundamentals of perfumery and create your own unique 50ml fragrance",
    duration: "3 hours",
    participants: "Max 8 people",
    price: "$150",
    level: "Beginner",
    nextDate: "March 15, 2024",
    time: "2:00 PM - 5:00 PM",
    spotsLeft: 3
  }, {
    id: 2,
    title: "Advanced Blending Masterclass",
    description: "Deep dive into complex fragrance composition with rare and precious ingredients",
    duration: "4 hours",
    participants: "Max 6 people",
    price: "$250",
    level: "Advanced",
    nextDate: "March 22, 2024",
    time: "1:00 PM - 5:00 PM",
    spotsLeft: 2
  }, {
    id: 3,
    title: "Couples Fragrance Experience",
    description: "Create complementary fragrances together in this romantic workshop",
    duration: "3.5 hours",
    participants: "Max 6 couples",
    price: "$280",
    level: "All levels",
    nextDate: "March 29, 2024",
    time: "6:00 PM - 9:30 PM",
    spotsLeft: 4
  }];
  const included = ["Expert guidance from master perfumers", "All premium ingredients and materials", "50ml bottle of your custom fragrance", "Professional perfumer consultation", "Certificate of completion", "Light refreshments and champagne", "Digital fragrance formula for future orders", "10% discount on future fragrance purchases"];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-16 bg-gradient-elegant">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="display-title text-foreground mb-6">
                Perfume Creation Workshops
              </h1>
              <p className="luxury-text text-muted-foreground max-w-3xl mx-auto">
                Embark on a sensory journey and discover the ancient art of perfumery. 
                Our hands-on workshops offer an exclusive opportunity to create your 
                own signature fragrance under expert guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-card p-6 rounded-2xl shadow-elegant">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Expert Instructors
                </h3>
                <p className="text-muted-foreground text-sm">
                  Learn from master perfumers with decades of experience
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-elegant">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Small Groups
                </h3>
                <p className="text-muted-foreground text-sm">
                  Intimate sessions ensure personalized attention
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-elegant">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Luxury Studio
                </h3>
                <p className="text-muted-foreground text-sm">
                  State-of-the-art facility with premium ingredients
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Workshops */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center text-foreground mb-12">
              Available Workshops
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {workshops.map((workshop, index) => <div key={workshop.id} className="bg-card rounded-3xl overflow-hidden shadow-premium hover-lift animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {workshop.level}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {workshop.spotsLeft} spots left
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {workshop.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {workshop.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary mr-3" />
                        {workshop.nextDate}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary mr-3" />
                        {workshop.time} ({workshop.duration})
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary mr-3" />
                        {workshop.participants}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-2xl font-bold text-primary">
                        {workshop.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        per person
                      </span>
                    </div>

                    <Button className="btn-luxury w-full">
                      Reserve Your Spot
                    </Button>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-gradient-elegant">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title text-foreground mb-6">
                  What's Included in Every Workshop
                </h2>
                <p className="luxury-text text-muted-foreground mb-8">
                  Our comprehensive workshops provide everything you need for an 
                  unforgettable perfume creation experience, from premium ingredients 
                  to expert guidance and lasting memories.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {included.map((item, index) => <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>)}
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-premium">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Private & Corporate Events
                </h3>
                <p className="text-muted-foreground mb-6">
                  Looking for a unique team building experience or private celebration? 
                  We offer customized workshops for groups of 6-20 people.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Building</span>
                    <span className="font-medium">From $120/person</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Private Parties</span>
                    <span className="font-medium">From $140/person</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Corporate Events</span>
                    <span className="font-medium">Custom pricing</span>
                  </div>
                </div>

                <Button variant="outline" className="btn-outline-gold w-full">
                  Request Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Cal.com Booking Integration */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-title text-foreground mb-4">
                Book Your Workshop Experience
              </h2>
              <p className="luxury-text text-muted-foreground">
                Select your preferred workshop and schedule your visit with our fragrance experts
              </p>
            </div>

            {/* Cal.com Workshop Booking Grid */}
            <div id="workshop-booking" className="bg-card rounded-3xl shadow-premium overflow-hidden border-2 border-primary/20">
              <div className="bg-gradient-gold p-6 text-center">
                <Calendar className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
                  Workshop Booking System
                </h3>
                <p className="text-primary-foreground/80">
                  Choose from our signature workshop experiences
                </p>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Workshop 1: Signature Scent Creation */}
                  <div className="bg-accent/30 rounded-2xl p-6 text-center border border-primary/20">
                    <h4 className="font-display text-lg font-semibold text-primary mb-3">
                      Signature Scent Creation
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Create your personal fragrance (60 minutes)
                    </p>
                    <div className="bg-background rounded-lg p-4 mb-4">
                      <iframe src="https://cal.com/ihsane-eddaou-bvwoc0/30min" width="100%" height="500px" frameBorder="0" className="rounded-lg sm:h-[400px] lg:h-[500px]" />
                    </div>
                    
                  </div>

                  {/* Workshop 2: Regional Perfume Journey */}
                  <div className="bg-accent/30 rounded-2xl p-6 text-center border border-primary/20">
                    <h4 className="font-display text-lg font-semibold text-primary mb-3">
                      Regional Perfume Journey
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Explore scents from around the world (90 minutes)
                    </p>
                    <div className="bg-background rounded-lg p-4 mb-4">
                      <iframe src="https://cal.com/ihsane-eddaou-bvwoc0/secret" width="100%" height="500px" frameBorder="0" className="rounded-lg sm:h-[400px] lg:h-[500px]" />
                    </div>
                    
                  </div>

                  {/* Workshop 3: Private Group Experience */}
                  <div className="bg-accent/30 rounded-2xl p-6 text-center border border-primary/20">
                    <h4 className="font-display text-lg font-semibold text-primary mb-3">
                      Private Group Experience
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Exclusive workshop for groups (120 minutes)
                    </p>
                    <div className="bg-background rounded-lg p-4 mb-4">
                      <iframe src="https://cal.com/ihsane-eddaou-bvwoc0/15min" width="100%" height="500px" frameBorder="0" className="rounded-lg sm:h-[400px] lg:h-[500px]" />
                    </div>
                    
                  </div>
                </div>


                <div className="bg-gradient-gold rounded-2xl p-6 text-center">
                  <p className="text-primary-foreground font-medium">
                    Can't find a suitable time? Contact us for custom scheduling!
                  </p>
                  <Button variant="outline" className="mt-3 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    Request Custom Time
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-dark text-secondary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-semibold mb-6">
              Questions About Our Workshops?
            </h2>
            <p className="luxury-text text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Our workshop coordinators are here to help you choose the perfect 
              experience and answer any questions you may have.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground">
                Call +1 (555) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                Email workshops@aromaluxe.com
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default Workshops;