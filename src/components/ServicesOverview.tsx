import { Building2, Hammer, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServicesOverview() {
  const services = [
    {
      icon: Building2,
      title: 'Architectural Models',
      description: 'Precision-crafted physical miniatures designed and built locally — not imported. From urban planning to residential complexes.',
      features: ['High-fidelity miniatures', 'Local production', 'Urban planning models', 'Residential prototypes'],
      image: '[Model Making Image Placeholder]'
    },
    {
      icon: Hammer,
      title: 'Construction & Supervision',
      description: 'End-to-end project management from blueprint to building, ensuring quality and adherence to specifications.',
      features: ['Project supervision', 'Quality assurance', 'Blueprint to building', 'Timeline management'],
      image: '[Construction Image Placeholder]'
    },
    {
      icon: Home,
      title: 'Shortlet Development',
      description: 'Fully furnished, premium shortlet units with renewable energy design, targeting digital nomads and professionals.',
      features: ['Luxury furnishing', 'Renewable energy', 'Digital nomad ready', 'Professional hosting'],
      image: '[Shortlet Interior Image Placeholder]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide local architectural production — from miniature to masonry
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-orange-african rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Image Placeholder */}
              <div className="w-full h-48 bg-muted rounded-xl mb-6 flex items-center justify-center text-muted-foreground">
                {service.image}
              </div>

              {/* CTA */}
              <Button variant="outline" className="group w-full">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="cta" size="xl">
            View All Our Projects
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}