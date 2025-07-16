import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Building2,
  Users,
  Globe,
  TrendingUp,
} from "lucide-react";
import heroImage from "@/assets/hero-models.jpg";

export default function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: "100+", label: "Projects Completed", icon: Building2 },
    { value: "₦100M+", label: "Contract Revenue", icon: TrendingUp },
    { value: "10+", label: "States & 2 Countries", icon: Globe },
    { value: "20+", label: "Trusted Organizations", icon: Users },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="VaidHomes Architectural Models"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-navy-deep/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold-rich/20 text-gold-rich px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">
              Africa's First Full-Scale Architectural Model-Making Company
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We Build the Future of{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              African Living
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            From high-fidelity miniatures to luxury housing, VaidHomes brings
            Africa's real estate to life with beauty, sustainability, and
            purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              See Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="premium" size="xl" className="group">
              <Play className="w-5 h-5 mr-2" />
              Partner With Us
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-md rounded-xl p-6 transition-all duration-500 ${
                  currentStat === index ? "transform scale-105 shadow-glow" : ""
                }`}
              >
                <stat.icon className="w-8 h-8 text-gold-rich mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
}
