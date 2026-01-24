import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import configDetail from "config";

const Contact = () => {
  const whatsappNumber = configDetail.whatsappNumber; 
  const phoneNumber = configDetail.phoneNumber; 
  const email = configDetail.socialLinks.email; 
  
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to inquire about your properties in Asaba.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
  };

  return (
    <AnimatedSection animation="fade-up">
      <div id="contact" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
                Let's
                <span className="text-gradient-gold"> Connect</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Ready to invest in Asaba's thriving property market? 
                Reach out today and let's discuss your requirements.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
                    <MapPin className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      Asaba, Delta State<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
                    <Phone className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">{phoneNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
                    <Mail className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">{email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
                    <Clock className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="p-8 lg:p-12 rounded-3xl bg-card border border-border shadow-premium">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Ready to Find Your Perfect Property?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Contact us now via WhatsApp for instant response or give us a call. 
                  We're here to help you make the best investment decision.
                </p>
                
                <div className="space-y-4">
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="w-full bg-gradient-gold hover:opacity-90 text-charcoal font-semibold py-6 text-lg shadow-gold transition-all duration-300 hover:scale-[1.02]"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                  <Button
                    onClick={handleCall}
                    size="lg"
                    variant="outline"
                    className="w-full border-gold/50 text-foreground hover:bg-gold/10 hover:border-gold py-6 text-lg transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  We respond to all inquiries within 2 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
