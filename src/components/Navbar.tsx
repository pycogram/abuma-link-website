import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import configDetail from "config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  const phoneNumber = configDetail.phoneNumber; 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Properties", href: "#properties" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const handleCall = () => {
    window.location.href = phoneNumber;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container bg-transparent mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-xl flex place-items-center font-serif font-bold">
          <Image
            src="/assets/AL2.png" 
            alt="AL" 
            width={50}  
            height={50} 
            className="w-12 h-10 md:w-[50px] md:h-[42px] mr-1 [filter:drop-shadow(0_0_1px_gray)_drop-shadow(0_0_1px_gray)] dark:[filter:none]" 
          />
            <span className={scrolled ? "text-foreground" : "text-cream"}>
              Abuma{" "}
            </span>
            <span className="text-gold">Link</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  scrolled ? "text-foreground/80" : "text-cream/80"
                }`}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle scrolled={scrolled} />
            <Button
              onClick={handleCall}
              size="sm"
              className="bg-gradient-gold hover:opacity-90 text-charcoal font-semibold shadow-gold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle scrolled={scrolled} />
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-cream"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-cream"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-transparent backdrop-blur-md py-4 border-t border-border rounded-b-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`dark:text-gray-100 dark:hover:text-gold ml-6 hover:scale-95 hover:text-gold font-medium py-2 transition-colors 
                    ${!scrolled ? "text-white" : "text-charcoal"}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={handleCall}
                className="bg-gradient-gold w-[80%] place-self-center hover:opacity-90 text-charcoal font-semibold shadow-gold mt-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
