import { ReactNode, forwardRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, animation = "fade-up", delay = 0 }, _ref) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const animationStyles: Record<string, string> = {
      "fade-up": isVisible 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-12",
      "fade-left": isVisible 
        ? "opacity-100 translate-x-0" 
        : "opacity-0 -translate-x-12",
      "fade-right": isVisible 
        ? "opacity-100 translate-x-0" 
        : "opacity-0 translate-x-12",
      "scale": isVisible 
        ? "opacity-100 scale-100" 
        : "opacity-0 scale-95",
      "fade": isVisible 
        ? "opacity-100" 
        : "opacity-0",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "transition-all duration-700 ease-out",
          animationStyles[animation],
          className
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </section>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
