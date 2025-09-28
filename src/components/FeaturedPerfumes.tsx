import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Heart } from "lucide-react";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";
import perfume5 from "@/assets/perfume-5.jpg";
import perfume6 from "@/assets/perfume-6.jpg";

const FeaturedPerfumes = () => {
  const perfumes = [
    {
      id: 1,
      name: "Midnight Elegance",
      description: "A sophisticated blend of bergamot, jasmine, and sandalwood",
      price: "$89",
      originalPrice: "$120",
      image: perfume1,
      rating: 4.9,
      reviews: 234,
      featured: true
    },
    {
      id: 2,
      name: "Golden Symphony",
      description: "Luxurious notes of amber, vanilla, and precious woods",
      price: "$95",
      originalPrice: "$135",
      image: perfume2,
      rating: 4.8,
      reviews: 187,
      featured: false
    },
    {
      id: 3,
      name: "Crystal Bloom",
      description: "Fresh florals with hints of citrus and white musk",
      price: "$78",
      originalPrice: "$105",
      image: perfume3,
      rating: 4.7,
      reviews: 298,
      featured: false
    },
    {
      id: 4,
      name: "Azure Dreams",
      description: "Ocean-inspired with marine accords and cedar",
      price: "$82",
      originalPrice: "$115",
      image: perfume4,
      rating: 4.6,
      reviews: 156,
      featured: false
    },
    {
      id: 5,
      name: "Rose Mystique",
      description: "Romantic rose petals with spicy pink pepper",
      price: "$92",
      originalPrice: "$125",
      image: perfume5,
      rating: 4.9,
      reviews: 312,
      featured: true
    },
    {
      id: 6,
      name: "Emerald Essence",
      description: "Rich green notes with vetiver and bergamot",
      price: "$88",
      originalPrice: "$118",
      image: perfume6,
      rating: 4.7,
      reviews: 203,
      featured: false
    }
  ];

  return (
    <section id="collection" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-foreground mb-6">
            Featured Collection
          </h2>
          <p className="luxury-text text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved fragrances, each carefully crafted to create 
            unforgettable memories and express your unique personality.
          </p>
        </div>

        {/* Perfumes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {perfumes.map((perfume, index) => (
            <div 
              key={perfume.id} 
              className="group bg-card rounded-3xl overflow-hidden shadow-elegant hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-elegant p-8">
                {perfume.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Bestseller
                  </div>
                )}
                <button className="absolute top-4 right-4 p-2 bg-card/80 rounded-full hover:bg-card transition-colors">
                  <Heart className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </button>
                
                <img 
                  src={perfume.image} 
                  alt={perfume.name}
                  className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium text-foreground">{perfume.rating}</span>
                    <span className="text-sm text-muted-foreground">({perfume.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-foreground">{perfume.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{perfume.originalPrice}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {perfume.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {perfume.description}
                </p>

                <div className="flex space-x-3">
                  <Button className="btn-luxury flex-1">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="border-border hover:border-primary">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in">
          <Button size="lg" variant="outline" className="btn-outline-gold group">
            View Complete Collection
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPerfumes;