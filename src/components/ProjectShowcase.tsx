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
      title: "Residential Model Prototype",
      category: "models",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "Vaidhomes and Models",
      description:
        "A meticulously crafted residential model prototype built to a 1:200 scale. This great piece from our stable of architectural models showcases a modern residential design with intricate details, lush landscaping, and miniature elements. It offers a highly realistic representation, highlighting precision and attention to detail in architectural visualization.",
      images: [images.image43],
      featured: true,
    },
    {
      id: 2,
      title: "Arizon Architectural Model",
      category: "models",
      location: "Lagos, Nigeria",
      year: "2024",
      client: "Vaidhomes and Models",
      description:
        "A meticulously crafted architectural model for Zylus Group International, known as the 'Arizon' model. Built to a precise 1:1000 scale, this impressive model measures 1.5m by 2.4m, showcasing a detailed representation of the project. Crafted by Vaidhomes and Models, it serves as a powerful visualization tool for the client's vision.",
      images: [images.image16],
      featured: true,
    },
    {
      id: 3,
      title: "Simple Residential Models Designs",
      category: "models",
      location: "Sierra Leone, The Gambia, Nigeria",
      year: "2024",
      client: "Vaidhomes and Models",
      description:
        "Attentively modeled by Vaidhomes and Models to reflect the different housing units for Taf Salone, Taf City, and Greater Taf City projects in Sierra Leone, The Gambia, and Nigeria.",
      images: [images.image56],
      featured: true,
    },
  ];

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
                  <DialogTrigger className="w-full">
                    <div className="h-64 bg-muted flex items-center w-full justify-center text-muted-foreground relative overflow-hidden cursor-pointer group">
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
                  <DialogContent className="max-w-[100vw] bg-transparent border-none h-[100vh] p-4 flex flex-col overflow-hidden">
                    <h4 className="text-xl font-bold text-card-foreground mb-4">
                      {project.title}
                    </h4>
                    <div className="place-items-center flex-grow -translate-y-20">
                      {project.images.map((imgSrc, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center"
                        >
                          <img
                            src={imgSrc}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="rounded-lg w-full"
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
                </div>
              </div>
            ))}
          </div>
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
