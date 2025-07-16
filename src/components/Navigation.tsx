import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Eye,
  Users,
  TrendingUp,
  Phone,
  ChevronRight,
} from "lucide-react";
import logo from "@/assets/vaid-logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "Our Work", href: "#showcase", icon: Eye },
    { name: "Team", href: "#team", icon: Users },
    { name: "Investors", href: "#investors", icon: TrendingUp },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center relative -left-10">
            <img src={logo} className="w-28" />
            <div className="text-xl relative -left-8 font-bold bg-gradient-accent bg-clip-text text-transparent">
              VaidHomes
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth flex items-center gap-2 py-2 px-3 rounded-md hover:bg-muted/50"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
            <Button
              onClick={() => {
                window.location.href = "#contact";
              }}
              variant="hero"
              size="sm"
            >
              Get Started
              <ChevronRight />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button variant="hero" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
