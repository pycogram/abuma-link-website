import { Building2, Shield, Users } from 'lucide-react';
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <AnimatedSection animation="fade-up">
      <div id="about" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                Your Trusted Partner in
                <span className="text-gradient-gold block">Asaba Real Estate</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                With years of experience in the Delta State property market, we connect 
                discerning investors with premium land, building and commercial opportunities.
              </p>
            </div>

            {/* Stats/Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-premium">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Prime Locations
                </h3>
                <p className="text-muted-foreground">
                  Strategic properties in Asaba's most sought-after areas including GRA, 
                  Cable Point, Summit Road, and emerging hotspots.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-premium">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Verified & Secure
                </h3>
                <p className="text-muted-foreground">
                  Every property comes with proper documentation, survey plans, and 
                  legal verification. Your investment is protected.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-premium">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Expert Guidance
                </h3>
                <p className="text-muted-foreground">
                  Our experienced team provides personalized consultation to help 
                  you find the perfect property for your needs.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-20 text-center p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-charcoal to-charcoal/90 text-cream">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-cream/80 text-lg max-w-3xl mx-auto leading-relaxed">
                To be the most trusted real estate partner in Delta State, providing 
                our clients with transparent, secure, and profitable property investments 
                that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
