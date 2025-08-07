import { useState, useEffect } from "react";
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
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/vaid-logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", icon: Home, isRoute: true },
    { name: "About Us", href: "/about", icon: Users, isRoute: true },
    { name: "Our Projects", href: "/products", icon: Eye, isRoute: true },
    { name: "Our Clients", href: "/clients", icon: TrendingUp, isRoute: true },
  ];

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight - 400;
      setIsScrolled(scrollPosition >= viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    item: { href: string; isRoute?: boolean },
    e: React.MouseEvent,
  ) => {
    e.preventDefault();
    if (item.isRoute) {
      navigate(item.href);
    } else {
      // Handle hash navigation for sections on the same page
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/0 backdrop-blur-md shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center relative -left-10">
            <img src={logo} className="w-28" alt="VaidHomes Logo" />
            <div className="text-xl relative -left-8 font-bold bg-gradient-accent bg-clip-text text-transparent">
              VaidHomes
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleNavClick(item, e)}
                className={`transition-smooth flex items-center gap-2 py-2 px-3 rounded-md hover:bg-muted/50 ${
                  location.pathname === item.href ? "bg-muted/50" : ""
                } ${
                  isScrolled
                    ? "text-black hover:text-gray-700"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                if (location.pathname === "/") {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/#contact");
                }
              }}
              variant="hero"
              size="sm"
            >
              Get Started
              <ChevronRight />
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-smooth p-2 ${
                isScrolled
                  ? "text-black hover:text-gray-700"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleNavClick(item, e)}
                className={`transition-smooth flex items-center gap-3 py-3 px-4 rounded-md hover:bg-muted/50 ${
                  location.pathname === item.href ? "bg-muted/50" : ""
                } ${
                  isScrolled
                    ? "text-black hover:text-gray-700"
                    : "text-foreground hover:text-primary"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                setIsOpen(false);
                if (location.pathname === "/") {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/#contact");
                }
              }}
              variant="hero"
              size="sm"
              className="w-full mt-4"
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
