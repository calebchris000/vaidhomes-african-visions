import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const founderQuote = "We don't just model buildings. We model the future.";

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Work", href: "#showcase" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Investors", href: "#investors" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Architectural Models",
    "Construction Supervision",
    "Shortlet Development",
    "Project Management",
    "Real Estate Consulting",
    "Urban Planning",
  ];

  const contactInfo = [
    { icon: Phone, text: "+234 703 747 6267", href: "tel:+2347037476267" },
    {
      icon: Mail,
      text: "Victor@vaidhomes.com",
      href: "mailto:Victor@vaidhomes.com",
    },
    { icon: MapPin, text: "Lagos, Nigeria", href: "#" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "vhttps://www.linkedin.com/company/vaidhomes-and-models/",
      name: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/vaidhomes/",
      name: "Instagram",
    },
  ];

  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              VaidHomes
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Africa's first full-scale architectural model-making and real
              estate innovation company, building the future of African living.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-accent transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold-rich transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-orange-african rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-gold-rich transition-colors duration-300 group"
                  >
                    <contact.icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Quote */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <Building2 className="w-8 h-8 mx-auto mb-4 text-gold-rich" />
              <blockquote className="text-xl md:text-2xl font-light italic text-gray-200 mb-4">
                "{founderQuote}"
              </blockquote>
              <cite className="text-gold-rich font-medium">
                — Victor Etim, Founder & CEO
              </cite>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-gold-rich">100+</div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-orange-african">₦100M+</div>
            <div className="text-gray-400 text-sm">Revenue</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-white">12+</div>
            <div className="text-gray-400 text-sm">Locations</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-gold-rich">20+</div>
            <div className="text-gray-400 text-sm">Partners</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 VaidHomes. All rights reserved. | Building Africa's Future
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gold-rich text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold-rich text-sm transition-colors"
              >
                Terms of Service
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-gold-rich"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
