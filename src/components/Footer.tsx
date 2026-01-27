import { Phone, MessageCircle, MapPin, Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import configDetail from "config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const phoneNumber = configDetail.phoneNumber; 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatedSection animation="fade">
      <footer className="bg-charcoal text-cream">
        <div className="container mx-auto px-4">
          {/* Main Footer */}
          <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif flex place-items-center font-bold mb-4">
                <Image
                  src="/assets/AL2.png" 
                  alt="AL" 
                  width={50}  
                  height={50} 
                  className="mr-0 mb-1 [filter:drop-shadow(0_0_1px_gray)_drop-shadow(0_0_1px_gray)] dark:[filter:none]" 
                />
                Abuma<span className="text-gold">Link</span>
              </h3>
              <p className="text-cream/70 mb-6 max-w-md">
                Your trusted partner for premium land and commercial properties 
                in Asaba, Delta State. Building wealth through strategic real estate investment.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-gold/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-gold/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-gold/20 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-cream/70 hover:text-gold transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-cream/70 hover:text-gold transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#properties" className="text-cream/70 hover:text-gold transition-colors">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-cream/70 hover:text-gold transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-cream/70">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>Asaba, Delta State, Nigeria</span>
                </li>
                <li className="flex items-center gap-3 text-cream/70">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>{phoneNumber}</span>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>WhatsApp Us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 place-self-end rounded-lg bg-neutral-500 mb-2 flex items-center justify-center hover:bg-accent/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-accent-foreground" />
          </button>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
            <p>© {currentYear} AbumaLink Enterprises. All rights reserved.</p>
            <p>Designed with excellence for Delta State investors.</p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};

export default Footer;
