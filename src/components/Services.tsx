import { LandPlot, Building, Home, FileCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: LandPlot,
    title: "Land for Sale",
    description: "Premium plots in strategic locations across Asaba. From 500sqm to multiple hectares, suitable for residential and commercial development.",
    features: ["Survey Plans Available", "Government Approval", "Flexible Payment Plans"],
  },
  {
    icon: Building,
    title: "Commercial Properties",
    description: "Ready-to-use commercial spaces including office complexes, shopping plazas, and warehouses in high-traffic areas.",
    features: ["Prime Locations", "Modern Facilities", "High ROI Potential"],
  },
  {
    icon: Home,
    title: "Residential Buildings",
    description: "Quality-built duplexes, flats, and bungalows in secure estates with excellent infrastructure and amenities.",
    features: ["Modern Architecture", "Secure Estates", "24/7 Power Options"],
  },
  {
    icon: FileCheck,
    title: "Property Documentation",
    description: "Comprehensive documentation services including C of O processing, survey, and deed of assignment preparation.",
    features: ["Legal Support", "Fast Processing", "Transparent Fees"],
  },
];

const Services = () => {
  return (
    <AnimatedSection animation="fade-up">
      <div id="services" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                What We
                <span className="text-gradient-gold"> Offer</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive real estate solutions tailored to meet your investment 
                goals in Asaba and across Delta State.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-premium"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-charcoal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
