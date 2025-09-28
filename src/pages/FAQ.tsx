import { useState } from "react";
import { ChevronDown, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What ingredients are used in your perfumes?",
      answer: "Our perfumes are crafted using the finest natural and synthetic ingredients sourced globally. We use premium essential oils, rare botanicals, and carefully selected aromatic compounds. Each fragrance contains a blend of top, middle, and base notes including bergamot, jasmine, sandalwood, amber, vanilla, and precious woods. All ingredients are ethically sourced and undergo rigorous quality testing."
    },
    {
      question: "How long do your perfumes typically last?",
      answer: "Our luxury fragrances are designed for exceptional longevity. Most of our Eau de Parfum concentrations last 6-8 hours, while our Parfum extracts can last up to 12 hours or more. Longevity varies based on skin type, application method, and environmental factors. For best results, apply to pulse points and avoid rubbing the fragrance into your skin."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 35 countries worldwide. International orders typically arrive within 7-14 business days, depending on your location. We use secure, tracked shipping methods and ensure all packages are properly insulated to protect your fragrances during transit. International customers are responsible for any customs duties or taxes."
    },
    {
      question: "What's the best way to apply perfume for maximum effect?",
      answer: "For optimal fragrance performance, apply to clean, moisturized skin at pulse points including wrists, neck, behind ears, and the inner elbows. Spray from 6-8 inches away and avoid rubbing the fragrance in, as this can break down the molecular structure. Apply before putting on jewelry or clothing to prevent staining."
    },
    {
      question: "How should I store my perfumes to maintain their quality?",
      answer: "Store your fragrances in a cool, dry place away from direct sunlight and heat sources. The original box provides excellent protection. Avoid storing in bathrooms due to humidity fluctuations. Properly stored perfumes can maintain their quality for 3-5 years. Keep bottles upright and ensure caps are tightly closed when not in use."
    },
    {
      question: "Tell me more about your perfume creation workshops.",
      answer: "Our exclusive workshops offer a hands-on experience in the art of perfumery. Led by master perfumers, these 3-hour sessions cover fragrance families, ingredient selection, and blending techniques. You'll create your own 50ml signature fragrance to take home, plus receive a certificate of completion. Workshops include premium ingredient tastings, professional consultation, and light refreshments."
    },
    {
      question: "Do you offer custom or bespoke fragrance services?",
      answer: "Yes, we offer personalized fragrance creation services for special occasions, corporate gifts, or personal signature scents. Our bespoke service includes one-on-one consultations with our master perfumers, multiple iterations, and custom packaging options. The process typically takes 4-6 weeks and includes detailed documentation of your unique formula."
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a 30-day satisfaction guarantee on all unopened products. If you're not completely satisfied, you may return items in their original packaging for a full refund or exchange. For hygiene reasons, opened perfumes can only be exchanged if defective. Please contact our customer service team to initiate any returns or exchanges."
    },
    {
      question: "Are your perfumes suitable for sensitive skin?",
      answer: "While our fragrances are created with high-quality ingredients, individual sensitivities vary. We recommend patch testing any new fragrance on a small area of skin before full application. Our perfumes contain no parabens or sulfates, but they may contain natural allergens common in fragrances. Consult our ingredient lists or speak with our team if you have specific concerns."
    },
    {
      question: "Do you offer gift wrapping and personalization options?",
      answer: "Absolutely! We offer elegant gift wrapping with premium packaging, personalized notes, and custom ribbon colors. For special occasions, we can include engraved nameplates or custom labels. Gift sets are available year-round, and we offer express gift delivery for last-minute purchases. All gift services are complimentary with purchases over $75."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-16 bg-gradient-elegant">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="display-title text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="luxury-text text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our fragrances, services, and policies. 
              Can't find what you're looking for? Our team is here to help.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors duration-200"
                  >
                    <h3 className="font-display text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <div className="border-t border-border pt-4">
                        <p className="luxury-text text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Retellai Chatbot Integration Section */}
        <section className="py-16 bg-gradient-elegant">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="retellai-chatbot" 
              className="bg-card rounded-3xl shadow-premium overflow-hidden border-2 border-primary/20"
            >
              <div className="bg-gradient-gold p-6 text-center">
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
                  Chat with Aroma Luxe Support
                </h3>
                <p className="text-primary-foreground/80">
                  Get instant answers about our perfumes, shipping, and workshops
                </p>
              </div>
              
              <div className="p-8">
                <div className="bg-accent/50 border-2 border-dashed border-primary/30 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-display font-bold text-2xl">AI</span>
                  </div>
                  <h4 className="text-primary font-medium text-lg mb-2">
                    🤖 Retellai Chatbot Integration Placeholder
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Interactive AI chatbot will be embedded here using your Retellai public key
                  </p>
                  
                  {/* Retellai Integration Code Template */}
                  <div className="bg-background rounded-lg p-4 text-left text-xs font-mono text-muted-foreground mb-4">
                    <div className="text-primary mb-2">// Add this script to integrate Retellai:</div>
                    <div>&lt;script</div>
                    <div className="ml-4">src="https://widget.retellai.com/v1/script.js"</div>
                    <div className="ml-4">data-public-key="YOUR_PUBLIC_KEY_HERE"</div>
                    <div className="ml-4">data-agent-id="agent_dd6f316c4331845731df312197"</div>
                    <div className="ml-4">data-title="Chat with Aroma Luxe Support"</div>
                    <div className="ml-4">data-color="#D4AF37"</div>
                    <div className="ml-4">data-bot-name="Aroma Luxe Support"</div>
                    <div>&gt;&lt;/script&gt;</div>
                  </div>
                  
                  <Button className="btn-luxury">
                    Start Chat (Demo Mode)
                  </Button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Integration Ready:</strong> Simply add your Retellai public key to activate the live chatbot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-title text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="luxury-text text-muted-foreground">
                Our fragrance experts are ready to assist you
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold-glow">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Call Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Speak with our fragrance consultants
                </p>
                <Button variant="outline" className="btn-outline-gold">
                  +1 (555) 123-4567
                </Button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold-glow">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get detailed answers via email
                </p>
                <Button variant="outline" className="btn-outline-gold">
                  info@aromaluxe.com
                </Button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold-glow">
                  <MessageCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Live Chat
                </h3>
                <p className="text-muted-foreground mb-4">
                  Instant support during business hours
                </p>
                <Button className="btn-luxury">
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQ;