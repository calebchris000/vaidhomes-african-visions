import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter, ArrowRight, MapPin, Calendar, User } from 'lucide-react';

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'models', label: 'Architectural Models' },
    { id: 'construction', label: 'Construction' },
    { id: 'shortlets', label: 'Shortlet Rentals' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Taf Global Estates Urban Model',
      category: 'models',
      location: 'Lagos, Nigeria',
      year: '2024',
      client: 'Taf Africa Global',
      description: 'Precision-crafted urban planning model showcasing mixed-use development with residential and commercial spaces.',
      image: '[Model Project Image Placeholder]',
      featured: true
    },
    {
      id: 2,
      title: 'Zylus Housing Prototype',
      category: 'construction',
      location: 'Lekki, Lagos',
      year: '2024',
      client: 'Zylus Group',
      description: 'Multi-block housing project supervision with sustainable design elements and modern African architecture.',
      image: '[Construction Project Image Placeholder]',
      featured: true
    },
    {
      id: 3,
      title: 'Executive Shortlet Suite',
      category: 'shortlets',
      location: 'Victoria Island, Lagos',
      year: '2024',
      client: 'VaidHomes',
      description: 'Fully furnished luxury shortlet with renewable energy systems, targeting digital nomads and business travelers.',
      image: '[Shortlet Interior Image Placeholder]',
      featured: false
    },
    {
      id: 4,
      title: 'Ondo State Government Complex Model',
      category: 'models',
      location: 'Akure, Ondo State',
      year: '2023',
      client: 'Ondo State Government',
      description: 'Large-scale architectural model for government complex planning and public presentation.',
      image: '[Government Project Image Placeholder]',
      featured: true
    },
    {
      id: 5,
      title: 'Residential Estate Development',
      category: 'construction',
      location: 'Abuja, Nigeria',
      year: '2023',
      client: 'Private Developer',
      description: 'Complete project supervision for 50-unit residential estate with modern amenities.',
      image: '[Estate Project Image Placeholder]',
      featured: false
    },
    {
      id: 6,
      title: 'Creative Studio Shortlet',
      category: 'shortlets',
      location: 'Ikeja, Lagos',
      year: '2024',
      client: 'VaidHomes',
      description: 'Designer shortlet space optimized for creative professionals with workspace and living areas.',
      image: '[Studio Shortlet Image Placeholder]',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Showcasing Africa's real estate future through precision, innovation, and local expertise
          </p>
        </div>

        {/* Featured Projects Highlight */}
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
                {/* Image */}
                <div className="h-64 bg-muted flex items-center justify-center text-muted-foreground relative overflow-hidden">
                  {project.image}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <User className="w-4 h-4" />
                      <span>{project.client}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
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

                  <Button variant="outline" size="sm" className="group">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
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

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">
                {project.image}
              </div>

              {/* Content */}
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
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of our work or discuss your project?
          </p>
          <Button variant="cta" size="xl">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}