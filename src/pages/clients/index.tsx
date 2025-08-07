import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Award,
  Handshake,
  Quote,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import images for client logos and testimonials
import image20 from "@/assets/images/image-20.jpeg";
import image21 from "@/assets/images/image-21.jpeg";
import image22 from "@/assets/images/image-22.jpeg";
import image23 from "@/assets/images/image-23.jpeg";
import image24 from "@/assets/images/image-24.jpeg";
import image25 from "@/assets/images/image-25.jpeg";

export default function ClientsPage() {
  // Client categories
  const clientCategories = [
    {
      title: "Government Agencies",
      icon: Building2,
      clients: [
        "Federal Ministry of Works and Housing",
        "Lagos State Government",
        "Abuja Municipal Area Council",
        "Nigerian Institute of Architects",
      ],
    },
    {
      title: "Real Estate Developers",
      icon: Users,
      clients: [
        "Eko Atlantic City",
        "Orange Island Development Company",
        "Mixta Africa",
        "Rendeavour Nigeria",
      ],
    },
    {
      title: "Corporate Organizations",
      icon: Award,
      clients: [
        "Dangote Group",
        "GTBank",
        "Shell Nigeria",
        "Nigerian National Petroleum Corporation",
      ],
    },
    {
      title: "International Partners",
      icon: Handshake,
      clients: [
        "UN-Habitat",
        "World Bank",
        "African Development Bank",
        "International Finance Corporation",
      ],
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Kemi",
      role: "Principal Architect, KAA Design Group",
      company: "KAA Design Group",
      image: image20,
      content:
        "VaidHomes transformed our complex architectural designs into stunning scale models that helped us win multiple high-profile projects. Their attention to detail is unmatched.",
      rating: 5,
      project: "Lagos Marina Towers",
    },
    {
      name: "David",
      role: "Project Director",
      company: "Eko Atlantic City",
      image: image21,
      content:
        "The interactive models created by VaidHomes were instrumental in showcasing our smart city vision to investors. Their innovative approach exceeded our expectations.",
      rating: 5,
      project: "Eko Atlantic Smart District",
    },
    {
      name: "Fatima",
      role: "CEO",
      company: "Pinnacle Real Estate",
      image: image22,
      content:
        "Working with VaidHomes has been a game-changer for our sales presentations. Their 3D visualizations and models have significantly improved our conversion rates.",
      rating: 5,
      project: "Pinnacle Heights Residences",
    },
  ];

  // Featured projects with clients
  const featuredProjects = [
    {
      client: "Lagos State Government",
      project: "Lagos Blue Line Rail",
      category: "Infrastructure Model",
      image: image23,
      description:
        "27km rail line model showcasing stations and urban integration",
    },
    {
      client: "Dangote Refinery",
      project: "Refinery Complex Model",
      category: "Industrial Model",
      image: image24,
      description: "Detailed scale model of Africa's largest oil refinery",
    },
    {
      client: "GTBank Headquarters",
      project: "Corporate Tower Model",
      category: "Architectural Model",
      image: image25,
      description: "25-story headquarters building with interior details",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Trusted Clients
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Partnering with Africa's leading organizations to bring visions
                to life
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-navy-deep text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gold-rich mb-2">
                  200+
                </div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-rich mb-2">
                  15+
                </div>
                <div className="text-gray-300">Years of Trust</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-rich mb-2">
                  98%
                </div>
                <div className="text-gray-300">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-rich mb-2">
                  10+
                </div>
                <div className="text-gray-300">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Who We Work With
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From government agencies to international organizations, we
                serve diverse sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-premium transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <Icon className="w-10 h-10 text-gold-rich mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {category.title}
                      </h3>
                      <ul className="space-y-2">
                        {category.clients.map((client, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-gold-rich mr-2">•</span>
                            {client}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied
                clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-premium transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-gold-rich/20 mb-4" />
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-gold-rich">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-gold-rich text-gold-rich"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-accent text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Growing List of Satisfied Clients
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Experience the VaidHomes difference in your next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-gold-rich hover:bg-gray-100"
                asChild
              >
                <Link to="/products">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  window.location.href = "/#contact";
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
