import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Target,
  Eye,
  Award,
  Users,
  Globe,
  TrendingUp,
  Lightbulb,
  Heart,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import team images (using existing images as placeholders)
import image1 from "@/assets/images/image-1.jpeg";
import image2 from "@/assets/images/image-2.jpeg";
import image3 from "@/assets/images/image-3.jpeg";
import image4 from "@/assets/images/image-4.jpeg";
import TeamSection from "@/components/TeamSection";
import { images } from "@/assets/images/image";

export default function AboutPage() {
  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Expert Team Members" },
    { value: "10+", label: "Countries Served" },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pioneering new techniques in architectural modeling and visualization",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Delivering accurate, detailed models that exceed client expectations",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Dedicated to bringing architectural visions to life with enthusiasm",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Building trust through transparent practices and ethical standards",
    },
  ];

  const team = [
    {
      name: "John Adewale",
      role: "Founder & CEO",
      image: image1,
      bio: "With over 20 years in architectural modeling, John leads VaidHomes with vision and expertise.",
    },
    {
      name: "Sarah Okonkwo",
      role: "Head of Design",
      image: image2,
      bio: "Sarah brings creative excellence to every project, ensuring stunning visual outcomes.",
    },
    {
      name: "Michael Mensah",
      role: "Technical Director",
      image: image3,
      bio: "Michael oversees our advanced 3D visualization and interactive technology solutions.",
    },
    {
      name: "Fatima Al-Hassan",
      role: "Operations Manager",
      image: image4,
      bio: "Fatima ensures smooth project delivery and exceptional client satisfaction.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-0">
        {/* Hero Section */}
        <section className="py-24 pt-40 h bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About VaidHomes
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Africa's First Full-Scale Architectural Model-Making Company
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a vision to revolutionize architectural
                    visualization in Africa, VaidHomes has grown from a small
                    startup to the continent's leading architectural
                    model-making company.
                  </p>
                  <p>
                    We specialize in creating high-fidelity scale models,
                    industrial replicas, and cutting-edge digital presentations
                    that help architects, developers, and engineers bring their
                    visions to life.
                  </p>
                  <p>
                    Our commitment to innovation, precision, and excellence has
                    made us the trusted partner for over 100 successful projects
                    across Nigeria and beyond.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={images.image20}
                  alt="VaidHomes workshop"
                  className="rounded-xl shadow-premium"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold-rich text-navy-deep p-6 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold">15+ Years</p>
                  <p className="text-sm">of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-gold-rich/20">
                <CardContent className="p-8">
                  <Eye className="w-12 h-12 text-gold-rich mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be the global leader in architectural modeling and
                    visualization, setting new standards for quality and
                    innovation in the African real estate industry.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gold-rich/20">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-gold-rich mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To deliver exceptional architectural models and
                    visualization services that empower our clients to
                    communicate their vision effectively and make informed
                    decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-navy-deep text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              VaidHomes by the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold-rich mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do at VaidHomes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-premium transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <Icon className="w-12 h-12 text-gold-rich mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <TeamSection />

        <section className="py-16 bg-gradient-accent text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Partner with Africa's leading architectural model-making company
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-gold-rich hover:bg-gray-100"
                asChild
              >
                <Link to="/products">Explore Our Services</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
