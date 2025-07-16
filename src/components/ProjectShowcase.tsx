import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Filter,
  ArrowRight,
  MapPin,
  Calendar,
  User,
  ZoomIn,
} from "lucide-react";
import { images } from "@/assets/images/image";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "models", label: "Architectural Models" },
    { id: "construction", label: "Construction" },
  ];

  const projects = [
    {
      id: 1,
      title: "Marriott Hotel Architectural Model",
      category: "models",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "Vaidhomes and Models",
      description:
        "An intricately detailed 1:500 scale architectural model of a modern Marriott hotel complex, measuring 1200x2400 units, showcasing multiple interconnected buildings, lush landscaping, miniature vehicles, and illuminated elements. This highly realistic model provides a comprehensive view of the hotel's design, including its external facade, recreational areas, and surrounding infrastructure. Produced by Vaidhomes and Models over 3 weeks, it highlights precision and attention to detail in architectural visualization.",
      images: [images.model04],
      featured: true,
    },
    {
      id: 2,
      title: "Illuminated Luxury Residential Estate Model",
      category: "models",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "Vaidhomes and Models",
      description:
        "An intricately detailed and illuminated architectural model of a luxury residential estate, featuring multiple contemporary homes, a winding road with miniature vehicles, and lush landscaping. This model serves as a powerful testament to the impact of precision visualization in real estate, enabling developers to present their properties with unparalleled clarity and drive significant sales. It embodies the 'real men' approach to luxury branding, transcending mere sketches to bring dreams to life, affirming that superior presentation is key to establishing a formidable brand.",
      images: [images.model06],
      featured: false,
    },
    {
      id: 3,
      title: "Detailed Illuminated Residential Estate Model",
      category: "models",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "VaidHomes",
      description:
        "An extensive and highly detailed architectural model showcasing a modern residential estate. This illuminated model features numerous multi-story homes with distinctive dark roofs and light facades, a meticulously designed street layout with miniature vehicles, and vibrant landscaping including palm trees and streetlights. The glowing interiors and streetlights bring the miniature community to life, highlighting the planned ambiance and layout of the development.",
      images: [images.model08],
      featured: false,
    },
    {
      id: 4,
      title: "Extensive Illuminated Urban Model",
      category: "models",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "VaidHomes",
      description:
        "A sophisticated, illuminated architectural model showcasing a well-planned urban residential complex. This detailed model, featuring multiple buildings, intricate road networks, and integrated lighting, is crucial for demonstrating strong project commitment and aiding investor confidence. It vividly illustrates the project's layout and design, fostering credibility and ensuring clarity for all stakeholders.",
      images: [images.model09],
      featured: true,
    },
    {
      id: 6,
      title: "The Leonardo By Sujimoto Architectural Model",
      category: "models",
      location: "Banana Island, Lagos, Nigeria",
      year: "2024",
      client: "Sujimoto",
      description:
        "An architectural model of The Leonardo By Sujimoto, a luxury residential development inspired by the 16th-century Italian artist, Leonardo da Vinci. Located in Africa's most exclusive neighbourhood, Banana Island, this project merges Sujimoto's renowned quality with an affordable price and unmatched finishing, offering 2, 3, and 4-bedroom residences.",
      images: [images.model11],
      featured: false,
    },
    {
      id: 5,
      title: "TAF City Architectural Model",
      category: "models",
      location: "TAF City, The Gambia",
      year: "2021",
      client: "TAF Africa Global",
      description:
        "Created in 2021, this detailed architectural model of TAF City, The Gambia, remains a key tool for visitor engagement and subscriptions. It vividly showcases the progress of the largest and one of the greenest cities in Africa. The model was recently utilized by Mr. Mustapha Njie, MD of TAF Africa Global, to tour the Hon. Baboucarr Ousmaila Joof, Minister of Trade, Industry, Regional Integration and Employment, and delegates. Model by Vaidhomes and Models.",
      images: [images.model12],
      featured: false,
    },

    {
      id: 7,
      title: "Maryam Court Architectural Model",
      category: "models",
      location: "Lagos, Nigeria",
      year: "2022",
      client: "Livitikal Realties",
      description:
        "An illuminated architectural model of the 'Maryam Court' residential building, meticulously displayed in Lagos, Nigeria. This detailed model showcases a multi-story building with illuminated windows, intricate surrounding landscapes, and miniature vehicles on a road, highlighting the planned ambiance and layout. Its continued display by Livitikal Realties underscores the lasting quality and effectiveness of our models in real estate visualization and sales.",
      images: [images.model13, images.model14, images.model15],
      featured: true,
    },
    {
      id: 8,
      title: "Residential Home Architectural Model",
      category: "models",
      location: "Abuja, Nigeria",
      year: "2024",
      client: "Vaidhomes and Models",
      description:
        "A meticulously crafted architectural model of a modern single-family home, showcasing a distinctive red roof, white facades with red trim around windows, a lush green lawn, and a paved driveway with a miniature red car. The model's intricate details, including subtle lighting and landscaping, exemplify precision visualization, offering a tangible and highly realistic representation of a prospective residence.",
      images: [images.model17],
      featured: false,
    },
    {
      id: 9,
      title: "18th Africa International Housing Show Model",
      category: "models",
      location: "Abuja, Nigeria",
      year: "2024",
      client: "Listo Construction (Modeled by Vaidhomes)",
      description:
        "An architectural model exhibited at the 18th Africa International Housing Show, held at the Abuja International Stadium. This stunning model was showcased by Listo Construction and proudly crafted and modeled by Vaidhomes, highlighting precision and innovation in architectural visualization.",
      images: [images.model18],
      featured: false,
    },
    {
      id: 10,
      title: "Levita & Primestack Project Model",
      category: "models",
      location: "Abuja, Nigeria",
      year: "2024",
      client: "Primestack & Levita",
      description:
        "A meticulously crafted architectural model for Primestack and Levita, highlighting the enduring value and indispensable role of physical models in design evaluation and conveying project authenticity.",
      images: [images.model19],
      featured: false,
    },
    {
      id: 11,
      title: "Primestack for Levita Architectural Model",
      category: "models",
      location: "Abuja, Nigeria",
      year: "2024",
      client: "Primestack & Levita",
      description:
        "This architectural model for Primestack and Levita demonstrates the enduring power of physical models in design evaluation, conveying confidence, depth, and genuine project dedication.",
      images: [images.model20, images.model22],
      featured: false,
    },

    {
      id: 12,
      title: "Maryam Court: From Model to Reality",
      category: "construction",
      location: "Victoria Island, Lagos, Nigeria",
      year: "2024",
      client: "Livitikal Realties",
      description:
        "Our prototype model for Maryam Court, created two years ago, has successfully evolved into this stunning real-world development.",
      images: [images.image1],
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
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="h-64 bg-muted flex items-center justify-center text-muted-foreground relative overflow-hidden cursor-pointer group">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <User className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[100vw] h-[100vh] p-4 flex flex-col overflow-hidden">
                    <h4 className="text-xl font-bold text-card-foreground mb-4">
                      {project.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center flex-grow overflow-y-auto">
                      {project.images.map((imgSrc, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center"
                        >
                          <img
                            src={imgSrc}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>

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
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground relative overflow-hidden cursor-pointer">
                    <img
                      style={{ filter: "contrast(140%)" }}
                      src={project.images[0]}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[100vw] h-[100vh] p-4 flex flex-col overflow-hidden">
                  <h4 className="text-xl font-bold text-card-foreground mb-4">
                    {project.title}
                  </h4>
                  <div className="flex gap-4 place-items-center flex-grow overflow-y-auto">
                    {project.images.map((imgSrc, index) => (
                      <div
                        key={index}
                        className="h-[35vh] flex items-center justify-center"
                      >
                        <img
                          src={imgSrc}
                          alt={`${project.title} - Image ${index + 1}`}
                          className=" object-contain rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

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
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
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
