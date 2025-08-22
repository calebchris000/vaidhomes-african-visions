import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  Send,
  CheckCircle,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [state, handleSubmit, reset] = useForm("mlekdbdj");

  useEffect(() => {
    if (state.succeeded) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
      reset();
    }
  }, [state]);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+234 703 747 6267",
      action: "https://wa.me/2347037476267",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@vaidhomes.com",
      action: "mailto:info@vaidhomes.com",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Lagos, Nigeria",
      action: "#contact",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/victor-etim-a28423231/",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/vaidhomes/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project or learn more about our services? We'd
            love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Send us a message
            </h3>

            {formSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-card-foreground mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-muted-foreground">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      First Name
                    </label>
                    <Input name="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Last Name
                    </label>
                    <Input name="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    I'm interested in
                  </label>
                  <Select name="interestedIn">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="investor">
                        Investment Opportunity
                      </SelectItem>
                      <SelectItem value="Project Services">
                        Project Services
                      </SelectItem>
                      <SelectItem value="Patnership">Partnership</SelectItem>
                      <SelectItem value="Media Inquiry">
                        Media Inquiry
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" variant="cta" className="w-full group">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                  <div className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">{info.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground group"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <h4 className="text-xl font-bold text-card-foreground mb-4">
                Office Hours
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-navy-deep text-white rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Quick Facts</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gold-rich">24hrs</div>
                  <div className="text-gray-300 text-sm">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-african">
                    100%
                  </div>
                  <div className="text-gray-300 text-sm">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Prefer a different way to reach us?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={(e) => {
                window.open("https://wa.me/2347037476267");
              }}
              variant="outline"
              className="group"
            >
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Call
            </Button>
            <Button
              onClick={(e) => {
                window.open("mailto:victor@vaidhomes.com");
              }}
              variant="outline"
              className="group"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Direct Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
