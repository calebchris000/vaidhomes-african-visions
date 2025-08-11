import { Linkedin, Mail, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/images/image";

export default function TeamSection() {
  const founder = {
    name: "Victor Etim",
    role: "Founder & CEO",
    quote:
      "I started with carton paper from my mother’s provision store. Today, I’m helping build Africa — one model, one home at a time.",
    image: images.victorEtim,
    description:
      "Visionary architect and CEO passionate about design. Has led numerous large-scale projects across Nigeria, The Gambia, and Sierra Leone. Known for creativity, dedication, and architectural excellence.",
    linkedin: "https://www.linkedin.com/in/victor-etim-a28423231/",
    email: "victor@vaidhomes.com",
  };

  const teamMembers = [
    {
      name: "Stephen Stephen",
      role: "Project Supervisor",
      experience: "10+ years",
      specialty:
        "Experienced project supervisor with over 10 years managing major real estate projects across Nigeria and West Africa. Known for efficiency, smart work, and quality delivery. A valued team asset.",
      image: images.stephenStephen,
      linkedin: "",
      email: "",
    },
    {
      name: "JEREMIAH E. ANEJI",
      role: "Legal Practitioner",
      // experience: "10+ years",
      specialty:
        "Seasoned legal expert in real estate, corporate law, and finance. Led major legal negotiations, project advisories, and now serves as Managing Partner at Brightins Solicitors and Director Legal at vaidhomes.",
      image: images.jeremiahAnejif,
      linkedin: "",
      email: "",
    },
    {
      name: "Peter Josu",
      role: "Chief Marketing Officer (CMO)",
      // experience: "10+ years",
      specialty:
        "Peter Josu is a proven sales strategist who led ₦500M+ in real estate revenue through grassroots marketing, team leadership, and relationship-driven brand growth. He trained and mentored a lean team that has already generated ₦100 million in the first half of 2025 alone.",
      image: images.peterJosu,
      linkedin: "",
      email: "",
    },
    {
      name: "Joshua Etim",
      role: "Head of Business Development",
      experience: "5+ years",
      specialty:
        "Results-driven Business Development Manager with expertise in sales strategy, client relationship management, market expansion, and team leadership to drive revenue growth and build long-term business success.",
      image: images.joshuaEtim,
      linkedin: "",
      email: "",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the experts building Africa's architectural future with decades
            of combined experience
          </p>
        </div>

        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-premium overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-80 md:h-auto bg-muted flex items-center justify-center text-muted-foreground">
                <img
                  className="hidden"
                  onLoad={(e) => {
                    (e.target as HTMLElement).style.display = "block";
                  }}
                  src={founder.image}
                />
                {/*<span className="font-bold text-6xl">
                  {founder.name
                    .split(" ")
                    .map((i) => i.charAt(0).toUpperCase())
                    .join("")}
                </span>*/}
              </div>

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
              <div className="h-48 bg-muted rounded-xl flex items-center justify-center text-muted-foreground mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <span className="font-bold text-6xl">
                  <img
                    className="hidden"
                    onLoad={(e) => {
                      (e.target as HTMLElement).style.display = "block";
                    }}
                    src={member.image}
                  />
                  {/*<span>
                    {member.name
                      .split(" ")
                      .map((i) => i.charAt(0).toUpperCase())
                      .join("")}
                  </span>*/}
                </span>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-card-foreground mb-2">
                  {member.name}
                </h4>

                <p className="text-orange-african font-medium mb-2">
                  {member.role}
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{member.experience ?? ""} Experience</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {member.specialty}
                </p>

                <div className="flex justify-center gap-2">
                  <Button
                    style={!member.linkedin ? { display: "none" } : {}}
                    variant="ghost"
                    size="sm"
                    className="p-2"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    style={!member.email ? { display: "none" } : {}}
                    variant="ghost"
                    size="sm"
                    className="p-2"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to work with Africa's leading architectural team?
          </p>
          <Button
            onClick={() => {
              window.location.href = "/#contact";
            }}
            variant="cta"
            size="xl"
          >
            Join Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
}
