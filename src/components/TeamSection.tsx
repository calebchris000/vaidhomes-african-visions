import { Linkedin, Mail, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TeamSection() {
  const founder = {
    name: "Victor Etim",
    role: "Founder & CEO",
    quote:
      "From carton paper to commanding skylines — our story is Made in Africa.",
    image: "[Victor Etim Photo Placeholder]",
    description:
      "Visionary leader driving Africa's architectural model-making revolution with over a decade of experience in real estate development.",
    linkedin: "https://www.linkedin.com/in/victor-etim-a28423231/",
    email: "Victor@vaidhomes.com",
  };

  const teamMembers = [
    {
      name: "Joshua Etim",
      role: "Business Development Manager",
      experience: "5+ years",
      specialty: "Client Relations & Market Expansion",
      image: "[Joshua Etim Photo Placeholder]",
      linkedin: "",
      email: "",
    },
    {
      name: "Uyime Ekpo",
      role: "Chief Accountant",
      experience: "7+ years",
      specialty: "Financial Management & Strategy",
      image: "[Uyime Ekpo Photo Placeholder]",
      linkedin: "",
      email: "",
    },
    {
      name: "Emmanuel Ntia",
      role: "Senior Civil Engineer",
      experience: "10+ years",
      specialty: "Project Supervision & Infrastructure",
      image: "[Emmanuel Ntia Photo Placeholder]",
      linkedin: "",
      email: "",
    },
    {
      name: "Iwueze Shallon",
      role: "Surveyor & GIS Analyst",
      experience: "8+ years",
      specialty: "Land Surveying & Geospatial Analysis",
      image: "[Iwueze Shallon Photo Placeholder]",
      linkedin: "",
      email: "",
    },

    {
      name: "Barr. Jeremiah Aneji",
      role: "Real Estate Attorney",
      experience: "10+ years",
      specialty: "Legal Affairs & Property Law",
      image: "[Jeremiah Aneji Photo Placeholder]",
      linkedin: "",
      email: "",
    },
    {
      name: "Ifiok Okosi",
      role: "Senior Quantity Surveyor",
      experience: "15+ years",
      specialty: "Cost Management & Estimation",
      image: "[Ifiok Okosi Photo Placeholder]",
      linkedin: "",
      email: "",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the experts building Africa's architectural future with decades
            of combined experience
          </p>
        </div>

        {/* Founder Spotlight */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-premium overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="h-80 md:h-auto bg-muted flex items-center justify-center text-muted-foreground">
                {founder.image}
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-gold-rich" />
                  <span className="text-sm font-medium text-gold-rich uppercase tracking-wide">
                    Founder & Visionary
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                  {founder.name}
                </h3>

                <p className="text-lg text-muted-foreground mb-6 italic">
                  "{founder.quote}"
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {founder.description}
                </p>

                <div className="flex gap-3">
                  <Button
                    onClick={() => {
                      window.open(founder.linkedin, "_blank");
                    }}
                    variant="outline"
                    size="sm"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    onClick={() => {
                      window.open(`mailto:${founder.email}`);
                    }}
                    variant="outline"
                    size="sm"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-48 bg-muted rounded-xl flex items-center justify-center text-muted-foreground mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                {member.image}
              </div>

              {/* Content */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-card-foreground mb-2">
                  {member.name}
                </h4>

                <p className="text-orange-african font-medium mb-2">
                  {member.role}
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{member.experience} Experience</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {member.specialty}
                </p>

                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              60+
            </div>
            <div className="text-muted-foreground">
              Years Combined Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              6
            </div>
            <div className="text-muted-foreground">Core Specialists</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              100%
            </div>
            <div className="text-muted-foreground">African Expertise</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              5+
            </div>
            <div className="text-muted-foreground">
              Professional Disciplines
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to work with Africa's leading architectural team?
          </p>
          <Button variant="cta" size="xl">
            Join Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
}
