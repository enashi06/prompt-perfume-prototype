import { Award, Heart, Leaf, Sparkles } from "lucide-react";

const BrandStory = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Swiss Excellence",
      description: "Crafted with precision and attention to detail that defines Swiss luxury standards."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Passionate Artistry",
      description: "Each fragrance is a masterpiece, blending tradition with innovative perfumery techniques."
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Natural Ingredients",
      description: "Sourced from the finest botanical gardens around the world for authentic scent profiles."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Timeless Elegance",
      description: "Creating fragrances that transcend trends and become cherished personal signatures."
    }
  ];

  return (
    <section className="py-24 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-primary w-12"></div>
            <Sparkles className="h-6 w-6 text-primary mx-4" />
            <div className="h-px bg-primary w-12"></div>
          </div>
          <h2 className="section-title text-foreground mb-6">
            Our Heritage of Excellence
          </h2>
          <p className="luxury-text text-muted-foreground max-w-3xl mx-auto">
            For over two decades, we have been dedicated to the art of perfumery, creating 
            exceptional fragrances that capture the essence of luxury and sophistication.
          </p>
        </div>

        {/* Brand Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Story Text */}
          <div className="animate-slide-up">
            <h3 className="font-display text-3xl font-semibold text-foreground mb-6">
              A Journey of Scent and Soul
            </h3>
            <div className="space-y-6 luxury-text text-muted-foreground">
              <p>
                Born from a passion for the extraordinary, our perfume house combines the 
                precision of Swiss craftsmanship with the artistry of traditional perfumery. 
                Every bottle represents a journey through carefully selected ingredients from 
                the world's most pristine locations.
              </p>
              <p>
                Our master perfumers spend years perfecting each composition, ensuring that 
                every note harmonizes to create an unforgettable olfactory experience. From 
                the first spray to the lasting dry-down, our fragrances evolve beautifully 
                on your skin.
              </p>
              <p>
                We believe that a great fragrance is more than just a scent—it's a personal 
                signature, a memory maker, and a confidence booster that accompanies you 
                through life's most precious moments.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-2xl shadow-elegant hover-lift group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-premium animate-fade-in">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-4xl font-bold text-primary mb-2">1998</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Unique Fragrances</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-primary mb-2">35</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;