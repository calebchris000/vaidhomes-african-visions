import { Building2, Hammer, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/images/image";

export default function ServicesOverview() {
  const services = [
    {
      icon: Building2,
      title: "Architectural Models",
      description:
        "Precision-crafted physical miniatures designed and built locally — not imported. From urban planning to residential complexes.",
      features: [
        "High-fidelity miniatures",
        "Local production",
        "Urban planning models",
        "Residential prototypes",
      ],
      image: images.model03,
    },
    {
      icon: Hammer,
      title: "Modern Apartment Construction",
      description:
        "Expertly managed construction of contemporary multi-storey residential buildings, featuring clean lines, spacious balconies, and integrated landscaping. We deliver turnkey solutions from foundation to finishing, ensuring every detail meets modern standards.",
      features: [
        "Multi-storey residential expertise",
        "Contemporary architectural style",
        "Spacious balconies & natural light",
        "Turnkey project delivery",
      ],
      image: images.image1,
    },
    {
      icon: Home,
      title: "Luxury Villa Residences",
      description:
        "Modern, architect-designed villas featuring sleek facades, expansive windows, private parking, and lush landscaping. Ideal for upscale living in a serene, gated community.",
      features: [
        "Contemporary architecture",
        "Private parking spaces",
        "Landscaped surroundings",
        "Spacious interiors & balconies",
      ],
      image: images.image3,
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide local architectural production — from miniature to
            masonry
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-african rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="w-full h-48 bg-muted rounded-xl my-8 mt-12 flex items-center justify-center text-muted-foreground">
                <img src={service.image} alt={service.description} />
              </div>

              <Button variant="outline" className="group w-full">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

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
