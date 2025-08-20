import { Building2, Hammer, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/images/image";

export default function ServicesOverview() {
  const services = [
    {
      icon: Building2,
      title: "Architectural Models",
      description:
        "We specialize in crafting exquisite office building models, bringing to life prestigious projects like our detailed 7-star property office model, meticulously rendered at a precise 1:200 scale.",
      features: [],
      image: images.image34,
    },
    {
      icon: Hammer,
      title: "Grand Scale Architectural Models",
      description:
        "We meticulously crafted the 'Arizon' architectural model for Zylus Group International, scaled at 1:1000 and measuring an impressive 1.5m by 2.4m. This monumental project, brought to life by Vaidhomes and Models, showcases our expertise in delivering large-scale, detailed visualizations.",
      features: [],
      image: images.image15,
    },
    {
      icon: Home,
      title: "Master-Planned Community Models",
      description:
        "Experience our master-planned community models, meticulously crafted to human scale. Standing at 1.5m high and 0.45m wide, these edifices include a 21-storey model in the heart of Bolidon, Lagos, and a 12-storey building from Zenith Street, Victoria Island, Lagos, all tastefully finished for your viewing pleasure.",
      features: [],
      image: images.image37,
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

              <div className="w-full h-48 bg-muted rounded-xl my-8 mt-12 flex items-center justify-center text-muted-foreground">
                <img
                  style={{ filter: "contrast(140%)" }}
                  src={service.image}
                  className="w-full aspect-[16/9] object-cover"
                  alt={service.description}
                />
              </div>

              <Button
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                className="group w-full"
              >
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
