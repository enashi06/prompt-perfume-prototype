import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "#collection" },
    { name: "Workshops", href: "/workshops" },
    { name: "FAQ", href: "/faq" },
    { name: "About Us", href: "#about" }
  ];

  const services = [
    { name: "Custom Fragrances", href: "#" },
    { name: "Gift Sets", href: "#" },
    { name: "Corporate Events", href: "#" },
    { name: "Private Consultations", href: "#" },
    { name: "Fragrance Care", href: "#" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="py-12 border-b border-secondary-foreground/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3">
                Stay in the Loop
              </h3>
              <p className="text-secondary-foreground/70">
                Be the first to know about new fragrances, exclusive workshops, 
                and special offers from our luxury perfume collection.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Enter your email address"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
              <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-glow">
                <span className="text-primary-foreground font-display font-bold text-lg">A</span>
              </div>
              <span className="font-display text-2xl font-bold">Aroma Luxe</span>
            </div>
            <p className="text-secondary-foreground/70 mb-6 leading-relaxed">
              Crafting exquisite fragrances with Swiss precision and artistry 
              since 1998. Experience the art of luxury perfumery.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-secondary-foreground/70 text-sm">
                  <div>123 Luxury Lane</div>
                  <div>Geneva, Switzerland 1204</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  info@aromaluxe.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/60 text-sm">
              © 2024 Aroma Luxe. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;