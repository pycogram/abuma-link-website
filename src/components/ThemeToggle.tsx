import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

interface ThemeToggleProps {
  scrolled?: boolean;
}

const ThemeToggle = ({ scrolled = false }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`rounded-full transition-colors ${
        scrolled 
          ? "hover:bg-secondary" 
          : "hover:bg-cream/10"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className={`h-5 w-5 ${scrolled ? "text-foreground" : "text-cream"}`} />
      ) : (
        <Moon className={`h-5 w-5 ${scrolled ? "text-foreground" : "text-cream"}`} />
      )}
    </Button>
  );
};

export default ThemeToggle;
