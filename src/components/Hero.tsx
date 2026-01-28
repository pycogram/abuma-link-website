"use client"
import { Phone,Building2, MapPin, MessageCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; 
import configDetail from "config";
// import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const phoneNumber = configDetail.phoneNumber; 
  const phoneNumber2 = configDetail.phoneNumber_2;
  const phoneNumber3 = configDetail.phoneNumber_3;
  
  const handleWhatsApp = () => {
    const phoneNumbers = [phoneNumber, phoneNumber2, phoneNumber3].filter(Boolean);
    const selectedPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
    const message = encodeURIComponent("Hello! I'd like to inquire about your properties in Asaba.");
    window.open(`https://wa.me/${selectedPhone}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    const phoneNumbers = [phoneNumber, phoneNumber2, phoneNumber3].filter(Boolean);
    const selectedPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
    window.location.href = `tel:${selectedPhone.replace(/\s/g, "")}`;
  };

  const stats = [
    { icon: Building2, value: '700+', label: 'Properties Sold' },
    { icon: MapPin, value: '150+', label: 'Prime Locations' },
    { icon: Home, value: '2500+', label: 'Happy Clients' },
  ];

  return (
    <section className="pt-[6rem] pb-[2rem] relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Image
          src="/assets/hero-image.jpg"  // Changed to public path
          alt="Luxury property"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block px-4 py-2 border border-gold/30 rounded-full bg-charcoal/40 backdrop-blur-sm">
            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              Premium Properties in Asaba
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-cream leading-tight">
            Your Gateway to
            <span className="block text-gradient-gold mt-2">Prime Real Estate</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed">
            Discover exceptional land and commercial properties in Asaba, 
            Delta State with AbumaLink Enterprises. We offer verified, 
            high-value investment opportunities in one of Nigeria’s fastest-growing cities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-gradient-gold hover:opacity-90 text-charcoal font-semibold px-8 py-6 text-lg shadow-gold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
            <Button
              onClick={handleCall}
              size="lg"
              variant="outline"
              className="border-gold/50 text-charcoal dark:text-gray-100 font-semibold hover:bg-gold/10 hover:border-gold px-8 py-6 text-lg transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap pt-4 place-self-center gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl text-start w-fit font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicator */}
          <div className="pt-6 block space-y-2 sm:space-y-0 sm:flex flex-wrap justify-center sm:gap-8 text-cream/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Verified Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Legal Documentation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Trusted Since 2010</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
