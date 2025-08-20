import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Building2,
  Users,
  Globe,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import category-specific videos
import architecturalVideo from "@/assets/videos/architectural-models.mp4";
import industrialVideo from "@/assets/videos/industrial-models.mp4";
import interactiveVideo from "@/assets/videos/interactive-technology.mp4";
import digitalVideo from "@/assets/videos/digital-presentation.mp4";

interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  link: string;
}

export default function HeroSection() {
  const navigate = useNavigate();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Product categories with video sections
  const productCategories: ProductCategory[] = [
    {
      id: "architectural",
      title: "Architectural Models",
      subtitle: "Office buildings, residential, urban planning & more",
      videoUrl: architecturalVideo,
      link: "/products/architectural-models",
    },
    {
      id: "industrial",
      title: "Industrial Models",
      subtitle: "Plant layouts, machinery, energy systems & maritime",
      videoUrl: industrialVideo,
      link: "/products/industrial-models",
    },
    {
      id: "interactive",
      title: "Interactive Integrated Technology",
      subtitle: "Engaging scale models with interactive features",
      videoUrl: interactiveVideo,
      link: "/products/interactive-technology",
    },
    {
      id: "3d-visualization",
      title: "3D Visualization",
      subtitle: "Architectural rendering, real estate signage & design",
      videoUrl: digitalVideo,
      link: "/products/3d-visualization",
    },
  ];

  // Set video playback rate on mount
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.playbackRate = 1;
      }
    });
  }, []);

  const handleCategoryClick = (link: string) => {
    navigate(link);
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4">
        {productCategories.map((category, index) => (
          <div
            key={category.id}
            className="relative cursor-pointer group transition-all"
            onClick={() => handleCategoryClick(category.link)}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={category.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Darkening overlay */}
            <div
              className={`absolute inset-0 bg-black transition-all duration-300 ${
                hoveredCategory === category.id
                  ? "bg-opacity-30"
                  : "bg-opacity-60"
              }`}
            />

            {/* Category title */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl lg:text-2xl font-bold drop-shadow-lg">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative select-none z-10 flex flex-col justify-center items-center min-h-screen px-4 text-center pointer-events-none">
        <div className="max-w-4xl mx-auto mt-32 max-md:hidden">
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            We Build the Future of{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              African Living
            </span>
          </h1>

          <p className="text-gray-200 mb-8 max-w-3xl mx-auto">
            From high-fidelity miniatures to luxury housing, VaidHomes brings
            Africa's real estate to life with beauty, sustainability, and
            purpose.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => navigate("/products")}
              variant="hero"
              size="xl"
              className="group"
            >
              View Our Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="premium"
              size="xl"
              className="group"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
