import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter, ArrowRight, MapPin, Calendar, User } from "lucide-react";
import { images } from "@/assets/images/image";
import { useNavigate } from "react-router-dom";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "models", label: "Architectural Models" },
    { id: "construction", label: "Construction" },
    { id: "shortlets", label: "Shortlet Rentals" },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Multi-Story Building with Terracotta Accents",
      category: "construction",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "Private Developer",
      description:
        "A striking multi-story residential or mixed-use building featuring a clean white facade complemented by vertical sections of warm terracotta-toned cladding. The modern design incorporates private balconies with transparent railings, vertical window elements, and a well-integrated ground floor with shaded parking, set amidst lush green landscaping.",
      image: images.image1,
      featured: true,
    },
    {
      id: 2,
      title: "Contemporary Residential Building with Patterned Facade",
      category: "construction",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "Private Developer",
      description:
        "A contemporary multi-story building featuring a clean white facade and distinctive vertical sections of decorative patterned screens in a warm beige/brown tone. The modern design includes private balconies with clear glass railings, elongated vertical window elements, and a functional ground floor with integrated parking, all surrounded by green landscaping under a clear sky.",
      image: images.image2,
      featured: true,
    },
    {
      id: 3,
      title: "Contemporary Angled Facade Residences",
      category: "construction",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "VaidHomes",
      description:
        "A sophisticated residential complex showcasing modern architectural design with distinctive angular dark grey facades and contrasting light grey sections. The buildings feature bold vertical screen elements, expansive windows, and ample shaded parking, harmoniously integrated within a landscaped environment, offering a premium urban living experience.",
      image: images.image3,
      featured: true,
    },
    {
      id: 4,
      title: "Serene Urban Residential Complex",
      category: "construction",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "VaidHomes",
      description:
        "An elegant multi-story residential complex showcasing modern design with contrasting dark and light grey facades. The architecture features prominent vertical screen elements and large windows, harmoniously integrated within a lush, well-landscaped environment. Ample parking, including contemporary vehicles, and mature palm trees contribute to a serene and sophisticated urban living experience.",
      image: images.image4,
      featured: false,
    },
    {
      id: 5,
      title: "Residential Estate Development",
      category: "construction",
      location: "Abuja, Nigeria",
      year: "2023",
      client: "Private Developer",
      description:
        "Complete project supervision for 50-unit residential estate with modern amenities.",
      image: images.image12,
      featured: false,
    },
    {
      id: 6,
      title: "Creative Studio Shortlet",
      category: "shortlets",
      location: "Ikeja, Lagos",
      year: "2024",
      client: "VaidHomes",
      description:
        "Designer shortlet space optimized for creative professionals with workspace and living areas.",
      image: images.image5,
      featured: false,
    },
    {
      id: 7,
      title: "Urban Farming Initiative",
      category: "agriculture",
      location: "Lagos, Nigeria",
      year: "2023",
      client: "Local Community",
      description:
        "Community-driven urban farming project providing fresh produce and education.",
      image: images.image7,
      featured: false,
    },
    {
      id: 8,
      title: "Eco-Friendly Living",
      category: "sustainability",
      location: "Abuja, Nigeria",
      year: "2022",
      client: "Green Initiative",
      description:
        "Sustainable living project promoting eco-friendly practices and green spaces.",
      image: images.image8,
      featured: false,
    },
    {
      id: 9,
      title: "Renewable Energy Solutions",
      category: "sustainability",
      location: "Kigali, Rwanda",
      year: "2021",
      client: "Renewable Energy Agency",
      description:
        "Solar panel installation and energy efficiency initiatives.",
      image: images.image9,
      featured: false,
    },
    {
      id: 10,
      title: "Urban Green Spaces",
      category: "sustainability",
      location: "Lagos, Nigeria",
      year: "2022",
      client: "Urban Development Agency",
      description:
        "Initiatives to create and maintain green spaces in urban areas.",
      image: images.image10,
      featured: false,
    },
    {
      id: 11,
      title: "Modern Urban High-Rise",
      category: "construction",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "VaidHomes",
      description:
        "A striking multi-story residential complex featuring contemporary architecture, private balconies with integrated planters, and a rooftop pool. The design incorporates elegant dark and light facades with distinctive patterned screens, set within a lush urban landscape with ample parking.",
      image: images.image11,
      featured: false,
    },
    {
      id: 12,
      title: "Contemporary Residential Complex",
      category: "construction",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "VaidHomes",
      description:
        "A modern and upscale residential complex featuring sophisticated multi-story buildings with dark grey and white facades, integrated vertical screen elements, and large windows. The design emphasizes contemporary aesthetics, complemented by lush green landscaping, mature palm trees, and ample parking, creating a serene and exclusive urban living environment.",
      image: images.image10,
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Showcasing Africa's real estate future through precision,
            innovation, and local expertise
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-accent rounded-full" />
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-64 bg-muted flex items-center justify-center text-muted-foreground relative overflow-hidden">
                  <img src={project.image} alt={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <User className="w-4 h-4" />
                      <span>{project.client}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-card-foreground mb-3">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* <Button variant="outline" size="sm" className="group">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300"
            >
              <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>

                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  {project.title}
                </h4>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-orange-african font-medium">
                    {project.client}
                  </span>
                  {/* <Button variant="ghost" size="sm">
                    <ArrowRight className="w-4 h-4" />
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of our work or discuss your project?
          </p>
          <a
            href="#contact"
            className="bg-orange-500 p-4 px-5 font-medium text-white flex w-fit mx-auto items-center rounded-lg gap-2 hover:bg-orange-400 transition-all hover:-translate-y-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
