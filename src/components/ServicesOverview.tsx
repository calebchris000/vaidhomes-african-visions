import { Building2, Hammer, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/images/image";

export default function ServicesOverview() {
  const services = [
    {
      icon: Building2,
      title: "Architectural Models",
      description:
        "As pioneers, we craft meticulously detailed, visually stunning architectural models, including Banjul's largest city model (2021), to elevate properties and showcase investment potential.",
      features: [
        "Landmark City Models (Banjul, 2021)",
        "High-Fidelity & Visually Stunning",
        "Driving Property Impact & Sales",
        "Showcasing Investment Potential",
      ],
      image: images.model01,
    },
    {
      icon: Hammer,
      title: "Grand Scale Architectural Models",
      description:
        "We crafted a monumental, Emirates-inspired architectural model, over 1.65m tall, for a luxury brand client. This ambitious project was brought to life through our unwavering commitment, exceeding all expectations.",
      features: [
        "Life-sized Model (>1.65m Tall)",
        "Emirates-Inspired Grandeur",
        "Luxury Brand Client Focus",
        "Unwavering Project Realization",
        "Exceeded Expectations & Client Satisfaction",
      ],
      image: images.model02,
    },
    {
      icon: Home,
      title: "Master-Planned Community Models",
      description:
        "We craft expansive, highly detailed master-planned community models that bring complex urban visions to life. Meticulously representing large residential developments with housing, illuminated road networks, and realistic terrain, these models are invaluable tools for planners, developers, and investors, offering immersive visualization of future communities.",
      features: [
        "Comprehensive Community Layouts",
        "Detailed Residential & Infrastructure Design",
        "Realistic Terrain & Landscaping",
        "Integrated Illumination for Realism",
        "Ideal for Urban Planning & Sales Visualization",
      ],
      image: images.model18,
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
                <img
                  style={{ filter: "contrast(140%)" }}
                  src={service.image}
                  className="w-full aspect-[16/9] object-cover"
                  alt={service.description}
                />
              </div>

              <Button variant="outline" className="group w-full">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          {/* <Button variant="cta" size="xl">
            View All Our Projects
            <ArrowRight className="w-5 h-5" />
          </Button> */}
        </div>
      </div>
    </section>
  );
}
