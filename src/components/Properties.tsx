import { MapPin, Ruler, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image"; 
import configDetail from "config";

const properties = [
  {
    id: 1,
    title: "Prime Land at Summit Road",
    type: "Land",
    location: "Summit Road, Asaba",
    size: "1,200 sqm",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Commercial Plaza at Nnebisi Road",
    type: "Commercial",
    location: "Nnebisi Road, Asaba",
    size: "8 Units",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "GRA Premium Plot",
    type: "Land",
    location: "GRA Phase II, Asaba",
    size: "800 sqm",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=600&q=80",
    featured: true,
  },
  {
    id: 4,
    title: "Office Complex at Cable Point",
    type: "Commercial",
    location: "Cable Point, Asaba",
    size: "12 Offices",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Development Land - Okpanam",
    type: "Land",
    location: "Okpanam Road, Asaba",
    size: "2 Hectares",
    image: "https://plus.unsplash.com/premium_photo-1697729672472-abd2ae5bcd63?q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Mixed-Use Building",
    type: "Commercial",
    location: "Infant Jesus, Asaba",
    size: "6 Floors",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&q=80",
    featured: true,
  },
];

const Properties = () => {
  const phoneNumber = configDetail.phoneNumber; 
  const phoneNumber2 = configDetail.phoneNumber_2;
  const phoneNumber3 = configDetail.phoneNumber_3;

  const handleInquiry = (propertyTitle: string) => {
    const phoneNumbers = [phoneNumber, phoneNumber2, phoneNumber3].filter(Boolean);
    const selectedPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];

    const message = encodeURIComponent(
      `Hello! I'm interested in: ${propertyTitle}. Please share more details including price and availability.`
    );
    window.open(`https://wa.me/${selectedPhone}?text=${message}`, "_blank");
  };

  return (
    <AnimatedSection animation="fade-up">
      <div id="properties" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Featured Listings
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                Premium
                <span className="text-gradient-gold"> Properties</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our handpicked selection of prime land and commercial 
                properties available for immediate purchase.
              </p>
            </div>

            {/* Properties Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-premium"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold text-charcoal text-xs font-semibold rounded-full">
                        {property.type}
                      </span>
                    </div>
                    
                    {property.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-charcoal/80 text-gold text-xs font-semibold rounded-full border border-gold/30">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                      {property.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 text-gold" />
                        {property.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Ruler className="w-4 h-4 text-gold" />
                        {property.size}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleInquiry(property.title)}
                      className="w-full bg-gradient-gold hover:opacity-90 text-charcoal font-semibold shadow-gold"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Inquire Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Looking for something specific? We have more properties available.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-gold/50 text-foreground dark:text-gray-100 hover:bg-gold/10 hover:border-gold"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Hello! I'm looking for a specific type of property in Asaba. Can you help?"
                  );

                  const phoneNumbers = [phoneNumber, phoneNumber2, phoneNumber3].filter(Boolean);
                  const selectedPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];

                  window.open(`https://wa.me/${selectedPhone}?text=${message}`, "_blank");
                }}
              >
                Contact for More Options
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Properties;
