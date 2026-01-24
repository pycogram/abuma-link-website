import { CheckCircle2, Award, Clock, Handshake } from "lucide-react";
import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  {
    icon: CheckCircle2,
    title: "100% Verified Properties",
    description: "Every listing undergoes rigorous verification. We inspect locations, confirm ownership, and validate all documentation before presenting to you.",
  },
  {
    icon: Award,
    title: "Industry Experience",
    description: "With over a decade in the Asaba property market, we understand local regulations, market trends, and the best investment opportunities.",
  },
  {
    icon: Clock,
    title: "Quick & Transparent Process",
    description: "From property viewing to documentation, we streamline every step. No hidden fees, no surprises – just straightforward transactions.",
  },
  {
    icon: Handshake,
    title: "After-Sale Support",
    description: "Our relationship doesn't end at purchase. We assist with property development, management referrals, and future resale if needed.",
  },
];

const testimonials = [
  {
    quote: "They helped me secure a prime plot in GRA within two weeks. Professional, transparent, and truly committed to client satisfaction. Highly recommended!",
    name: "Chief Emmanuel O.",
    role: "Property Investor, Lagos",
    initials: "CE"
  },
  {
    quote: "I was skeptical about buying land in Asaba from Lagos, but their team made everything seamless. Virtual tours, legal documentation, everything was handled professionally.",
    name: "Mrs. Adaeze Nwosu",
    role: "Businesswoman, Abuja",
    initials: "AN"
  },
  {
    quote: "Best real estate experience I've had in Nigeria. They didn't just sell me land; they educated me on the investment potential and guided me through every step.",
    name: "Engr. David Okon",
    role: "Civil Engineer, Port Harcourt",
    initials: "DO"
  },
  {
    quote: "After-sale support is where they truly shine. They connected me with reliable developers and even helped negotiate construction costs. Outstanding service!",
    name: "Dr. Funmi Adeleke",
    role: "Medical Practitioner, Warri",
    initials: "FA"
  },
  {
    quote: "I purchased three plots for my children's future. The transparency and integrity displayed throughout the process earned my complete trust.",
    name: "Alhaji Musa Ibrahim",
    role: "Retired Civil Servant, Asaba",
    initials: "MI"
  },
  {
    quote: "From property inspection to title transfer, everything was completed in record time. Their knowledge of Asaba's property market is unmatched.",
    name: "Barrister Chidi Okafor",
    role: "Legal Practitioner, Onitsha",
    initials: "CO"
  }
];

const WhyChooseUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedSection animation="fade-up">
      <div id="why-us" className="py-20 lg:py-32 bg-charcoal text-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6">
                The
                <span className="text-gradient-gold"> Trusted Choice</span>
              </h2>
              <p className="text-cream/70 text-lg max-w-2xl mx-auto">
                When it comes to property investment in Asaba, experience and 
                integrity make all the difference.
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl border border-cream/10 hover:border-gold/30 bg-cream/5 hover:bg-cream/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                      <reason.icon className="w-7 h-7 text-charcoal" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-3 text-cream">
                      {reason.title}
                    </h3>
                    <p className="text-cream/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Carousel */}
            <div className="mt-20 text-center p-8 lg:p-12 rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-gold/10 relative overflow-hidden">
              <div className="text-gold text-5xl font-serif mb-6">"</div>
              
              {/* Testimonial Content */}
              <div className="relative min-h-[260px] sm:min-h-[200px] flex items-center justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentTestimonial
                        ? "opacity-100 translate-x-0"
                        : index < currentTestimonial
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <blockquote className="text-xl lg:text-2xl font-serif text-cream/90 mb-6 max-w-3xl mx-auto italic">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold">
                        {testimonial.initials}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-cream">{testimonial.name}</p>
                        <p className="text-sm text-cream/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-16 md:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-gold w-8"
                        : "bg-cream/30 hover:bg-cream/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseUs;