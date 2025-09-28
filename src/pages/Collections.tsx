import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star, ShoppingCart, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Perfume {
  id: string;
  name: string;
  description: string;
  notes: string[];
  price: string;
  image: string;
}

interface Region {
  id: string;
  name: string;
  description: string;
  perfumes: Perfume[];
}

const Collections = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("arabian");

  const regions: Record<string, Region> = {
    arabian: {
      id: "arabian",
      name: "Arabian Peninsula",
      description: "Discover the mystical scents of the Arabian Peninsula, where ancient perfumery traditions meet modern luxury.",
      perfumes: [
        {
          id: "midnight-medina",
          name: "Midnight in Medina",
          description: "A mystical oud blend that captures the essence of ancient Arabian nights.",
          notes: ["Oud", "Rose", "Amber", "Sandalwood"],
          price: "$189",
          image: "/src/assets/perfume-1.jpg"
        },
        {
          id: "rose-damascus",
          name: "Rose of Damascus",
          description: "Royal romance captured in the finest Damascus rose petals.",
          notes: ["Damascus Rose", "Jasmine", "Musk", "Vanilla"],
          price: "$156",
          image: "/src/assets/perfume-2.jpg"
        },
        {
          id: "desert-winds",
          name: "Desert Winds",
          description: "Warm amber notes that evoke the endless beauty of desert landscapes.",
          notes: ["Amber", "Cardamom", "Cedarwood", "Benzoin"],
          price: "$134",
          image: "/src/assets/perfume-3.jpg"
        },
        {
          id: "jasmine-nights",
          name: "Jasmine Nights",
          description: "An exotic floral journey through moonlit Arabian gardens.",
          notes: ["Jasmine", "Orange Blossom", "White Musk", "Patchouli"],
          price: "$145",
          image: "/src/assets/perfume-4.jpg"
        },
        {
          id: "saffron-dreams",
          name: "Saffron Dreams",
          description: "Luxurious spiced elegance with precious saffron threads.",
          notes: ["Saffron", "Rose", "Agarwood", "Amber"],
          price: "$198",
          image: "/src/assets/perfume-5.jpg"
        },
        {
          id: "frankincense-tales",
          name: "Frankincense Tales",
          description: "Sacred resin capturing ancient spiritual traditions.",
          notes: ["Frankincense", "Myrrh", "Sandalwood", "Cedar"],
          price: "$167",
          image: "/src/assets/perfume-6.jpg"
        }
      ]
    },
    switzerland: {
      id: "switzerland",
      name: "Switzerland",
      description: "Experience the crisp, clean elegance of Swiss Alpine landscapes in every drop.",
      perfumes: [
        {
          id: "alpine-morning",
          name: "Alpine Morning",
          description: "Fresh crisp mountain air captured in a bottle of pure elegance.",
          notes: ["Mountain Air", "Pine", "Bergamot", "White Musk"],
          price: "$142",
          image: "/src/assets/perfume-1.jpg"
        },
        {
          id: "mountain-mist",
          name: "Mountain Mist",
          description: "Clean elegance inspired by Swiss mountain peaks.",
          notes: ["Eucalyptus", "Mint", "Cedar", "Ambergris"],
          price: "$138",
          image: "/src/assets/perfume-2.jpg"
        },
        {
          id: "geneva-nights",
          name: "Geneva Nights",
          description: "Sophisticated cool elegance of Swiss urban luxury.",
          notes: ["Violet", "Iris", "Cashmere Wood", "Musk"],
          price: "$156",
          image: "/src/assets/perfume-3.jpg"
        },
        {
          id: "swiss-pine",
          name: "Swiss Pine",
          description: "Forest fresh with the essence of Alpine pine forests.",
          notes: ["Pine", "Juniper", "Moss", "Amber"],
          price: "$129",
          image: "/src/assets/perfume-4.jpg"
        },
        {
          id: "glacier-breeze",
          name: "Glacier Breeze",
          description: "Pure ice-cold freshness of glacial mountain air.",
          notes: ["Mint", "Ice Accord", "White Tea", "Musk"],
          price: "$134",
          image: "/src/assets/perfume-5.jpg"
        },
        {
          id: "edelweiss-bloom",
          name: "Edelweiss Bloom",
          description: "Rare mountain flower captured in delicate beauty.",
          notes: ["Edelweiss", "White Flowers", "Green Leaves", "Soft Musk"],
          price: "$149",
          image: "/src/assets/perfume-6.jpg"
        }
      ]
    },
    portugal: {
      id: "portugal",
      name: "Portugal",
      description: "Embrace the coastal warmth and Mediterranean charm of Portugal's finest scents.",
      perfumes: [
        {
          id: "lisbon-sunset",
          name: "Lisbon Sunset",
          description: "Citrus warmth reminiscent of golden Portuguese sunsets.",
          notes: ["Orange", "Lemon", "Amber", "Sandalwood"],
          price: "$127",
          image: "/src/assets/perfume-1.jpg"
        },
        {
          id: "atlantic-breeze",
          name: "Atlantic Breeze",
          description: "Coastal freshness from the Portuguese Atlantic shores.",
          notes: ["Sea Salt", "Driftwood", "Marine Accord", "White Musk"],
          price: "$132",
          image: "/src/assets/perfume-2.jpg"
        },
        {
          id: "porto-dreams",
          name: "Porto Dreams",
          description: "Vintage charm inspired by Portugal's wine country.",
          notes: ["Fig", "Grape Leaves", "Oak", "Vanilla"],
          price: "$145",
          image: "/src/assets/perfume-3.jpg"
        },
        {
          id: "douro-valley",
          name: "Douro Valley",
          description: "Rich wine notes from Portugal's most celebrated region.",
          notes: ["Wine Accord", "Blackcurrant", "Cedar", "Musk"],
          price: "$139",
          image: "/src/assets/perfume-4.jpg"
        },
        {
          id: "ocean-mist",
          name: "Ocean Mist",
          description: "Marine freshness capturing the Portuguese coastline.",
          notes: ["Ocean Breeze", "Seaweed", "Salt", "Clean Musk"],
          price: "$124",
          image: "/src/assets/perfume-5.jpg"
        },
        {
          id: "portuguese-rose",
          name: "Portuguese Rose",
          description: "Mediterranean bloom with Portuguese rose gardens.",
          notes: ["Portuguese Rose", "Geranium", "Green Leaves", "White Musk"],
          price: "$136",
          image: "/src/assets/perfume-6.jpg"
        }
      ]
    },
    france: {
      id: "france",
      name: "France",
      description: "Classic French elegance and sophisticated artistry in every fragrance.",
      perfumes: [
        {
          id: "paris-elegance",
          name: "Paris Elegance",
          description: "Timeless Parisian sophistication in a bottle.",
          notes: ["French Rose", "Peony", "Cashmere", "Blonde Woods"],
          price: "$167",
          image: "/src/assets/perfume-1.jpg"
        },
        {
          id: "provence-lavender",
          name: "Provence Lavender",
          description: "Fields of purple lavender from the French countryside.",
          notes: ["Lavender", "Herbs", "Honey", "White Musk"],
          price: "$142",
          image: "/src/assets/perfume-2.jpg"
        },
        {
          id: "champagne-bubbles",
          name: "Champagne Bubbles",
          description: "Effervescent joy of French champagne celebrations.",
          notes: ["Champagne Accord", "Pear", "Freesia", "Musk"],
          price: "$154",
          image: "/src/assets/perfume-3.jpg"
        },
        {
          id: "riviera-sun",
          name: "Riviera Sun",
          description: "Golden warmth of the French Riviera coastline.",
          notes: ["Bergamot", "Mimosa", "Amber", "Sandalwood"],
          price: "$148",
          image: "/src/assets/perfume-4.jpg"
        },
        {
          id: "loire-gardens",
          name: "Loire Gardens",
          description: "Blooming gardens of the French Loire Valley.",
          notes: ["White Flowers", "Green Leaves", "Lily", "Soft Musk"],
          price: "$135",
          image: "/src/assets/perfume-5.jpg"
        },
        {
          id: "bordeaux-nights",
          name: "Bordeaux Nights",
          description: "Rich sophistication of French wine country evenings.",
          notes: ["Blackcurrant", "Oak", "Vanilla", "Amber"],
          price: "$159",
          image: "/src/assets/perfume-6.jpg"
        }
      ]
    },
    india: {
      id: "india",
      name: "India",
      description: "Vibrant spices and exotic florals from the heart of India's perfume heritage.",
      perfumes: [
        {
          id: "mumbai-monsoon",
          name: "Mumbai Monsoon",
          description: "Fresh petrichor and spices of Indian monsoon season.",
          notes: ["Petrichor", "Cardamom", "Vetiver", "Sandalwood"],
          price: "$128",
          image: "/src/assets/perfume-1.jpg"
        },
        {
          id: "rajasthan-gold",
          name: "Rajasthan Gold",
          description: "Opulent spices and golden warmth of royal Rajasthan.",
          notes: ["Turmeric", "Saffron", "Rose", "Amber"],
          price: "$156",
          image: "/src/assets/perfume-2.jpg"
        },
        {
          id: "kerala-spices",
          name: "Kerala Spices",
          description: "Exotic spice markets captured in aromatic harmony.",
          notes: ["Black Pepper", "Cardamom", "Ginger", "Sandalwood"],
          price: "$134",
          image: "/src/assets/perfume-3.jpg"
        },
        {
          id: "himalayan-breeze",
          name: "Himalayan Breeze",
          description: "Pure mountain air from the majestic Himalayas.",
          notes: ["Mountain Air", "Pine", "White Musk", "Cedar"],
          price: "$141",
          image: "/src/assets/perfume-4.jpg"
        },
        {
          id: "lotus-temple",
          name: "Lotus Temple",
          description: "Sacred lotus blooms in peaceful temple gardens.",
          notes: ["Lotus", "White Tea", "Incense", "Soft Musk"],
          price: "$147",
          image: "/src/assets/perfume-5.jpg"
        },
        {
          id: "goa-beaches",
          name: "Goa Beaches",
          description: "Tropical coastal paradise with coconut and florals.",
          notes: ["Coconut", "Frangipani", "Sea Breeze", "White Musk"],
          price: "$132",
          image: "/src/assets/perfume-6.jpg"
        }
      ]
    },
    japan: {
      id: "japan",
      name: "Japan",
      description: "Zen-inspired minimalism meets delicate florals in Japanese perfume artistry.",
      perfumes: [
        {
          id: "tokyo-cherry",
          name: "Tokyo Cherry",
          description: "Delicate cherry blossoms in full springtime bloom.",
          notes: ["Cherry Blossom", "Green Tea", "Bamboo", "White Musk"],
          price: "$152",
          image: "/src/assets/perfume-1.jpg"
        },
        {
          id: "kyoto-temple",
          name: "Kyoto Temple",
          description: "Peaceful zen gardens with incense and meditation.",
          notes: ["Incense", "Moss", "Hinoki Wood", "Green Tea"],
          price: "$164",
          image: "/src/assets/perfume-2.jpg"
        },
        {
          id: "osaka-gardens",
          name: "Osaka Gardens",
          description: "Blooming Japanese gardens with seasonal flowers.",
          notes: ["Wisteria", "Iris", "Green Leaves", "Soft Musk"],
          price: "$143",
          image: "/src/assets/perfume-3.jpg"
        },
        {
          id: "mount-fuji",
          name: "Mount Fuji",
          description: "Pristine mountain air from Japan's sacred peak.",
          notes: ["Mountain Air", "Pine", "Snow Accord", "Clean Musk"],
          price: "$149",
          image: "/src/assets/perfume-4.jpg"
        },
        {
          id: "bamboo-forest",
          name: "Bamboo Forest",
          description: "Serene bamboo groves with fresh green tranquility.",
          notes: ["Bamboo", "Green Tea", "Moss", "Cedar"],
          price: "$138",
          image: "/src/assets/perfume-5.jpg"
        },
        {
          id: "zen-meditation",
          name: "Zen Meditation",
          description: "Minimalist peace captured in pure, clean notes.",
          notes: ["White Tea", "Clean Air", "Soft Woods", "Musk"],
          price: "$156",
          image: "/src/assets/perfume-6.jpg"
        }
      ]
    }
  };

  const RegionButton = ({ regionId, name }: { regionId: string; name: string }) => (
    <Button
      variant={selectedRegion === regionId ? "default" : "outline"}
      onClick={() => setSelectedRegion(regionId)}
      className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
        selectedRegion === regionId 
          ? "bg-primary text-primary-foreground shadow-gold-glow" 
          : "border-primary/30 text-primary hover:bg-primary/10"
      }`}
    >
      <MapPin className="h-4 w-4 mr-2" />
      {name}
    </Button>
  );

  const PerfumeCard = ({ perfume }: { perfume: Perfume }) => (
    <Card className="group hover-lift shadow-elegant hover:shadow-premium transition-all duration-300">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-2xl">
          <img 
            src={perfume.image} 
            alt={perfume.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-lg font-display text-foreground mb-2">
          {perfume.name}
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {perfume.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-xs font-medium text-primary mb-2">FRAGRANCE NOTES</h4>
          <div className="flex flex-wrap gap-1">
            {perfume.notes.map((note, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-display font-bold text-primary">
            {perfume.price}
          </span>
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="h-4 w-4 text-primary mr-1" />
            4.8 (124 reviews)
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1 btn-luxury text-xs">
            <ShoppingCart className="h-3 w-3 mr-1" />
            Add to Cart
          </Button>
          <Button size="sm" variant="outline" className="btn-outline-gold text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            Workshop
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const currentRegion = regions[selectedRegion];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-16 bg-gradient-elegant">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="display-title text-foreground mb-6">
                Global Perfume Collections
              </h1>
              <p className="luxury-text text-muted-foreground max-w-3xl mx-auto">
                Journey across continents and discover signature scents inspired by the world's 
                most enchanting destinations. Each fragrance tells a story of its homeland's 
                unique cultural heritage and natural beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive World Map Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-title text-foreground mb-4">
                Explore Our World of Fragrances
              </h2>
              <p className="luxury-text text-muted-foreground mb-8">
                Select a region to discover its unique perfume collection
              </p>
              
              {/* Region Selection */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <RegionButton regionId="arabian" name="Arabian Peninsula" />
                <RegionButton regionId="switzerland" name="Switzerland" />
                <RegionButton regionId="portugal" name="Portugal" />
                <RegionButton regionId="france" name="France" />
                <RegionButton regionId="india" name="India" />
                <RegionButton regionId="japan" name="Japan" />
              </div>

              {/* Interactive World Map Placeholder */}
              <div className="bg-card rounded-3xl shadow-premium p-8 mb-12">
                <div className="bg-gradient-elegant rounded-2xl p-12 text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Interactive World Map
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    An interactive 3D globe or SVG world map would be embedded here, 
                    allowing users to click on different regions to explore collections.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    {Object.entries(regions).map(([key, region]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedRegion(key)}
                        className={`p-3 rounded-lg border-2 border-dashed transition-all duration-300 ${
                          selectedRegion === key 
                            ? "border-primary bg-primary/10 text-primary" 
                            : "border-primary/30 text-muted-foreground hover:border-primary hover:text-primary"
                        }`}
                      >
                        {region.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Region Collection */}
        <section className="py-16 bg-gradient-elegant">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-title text-foreground mb-4">
                {currentRegion.name} Collection
              </h2>
              <p className="luxury-text text-muted-foreground max-w-3xl mx-auto">
                {currentRegion.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentRegion.perfumes.map((perfume) => (
                <PerfumeCard key={perfume.id} perfume={perfume} />
              ))}
            </div>

            {/* Workshop CTA */}
            <div className="mt-16 text-center">
              <div className="bg-card rounded-3xl shadow-premium p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Create Your Own {currentRegion.name} Blend
                </h3>
                <p className="text-muted-foreground mb-6">
                  Inspired by our {currentRegion.name.toLowerCase()} collection? Join our workshop 
                  to create your own signature fragrance using traditional techniques and premium ingredients.
                </p>
                <Button size="lg" className="btn-luxury">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Regional Workshop Experience
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;