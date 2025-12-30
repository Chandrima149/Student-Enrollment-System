import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  programs: [
    { label: "Full-Stack Development", href: "/programs" },
    { label: "AI/ML Engineering", href: "/programs" },
    { label: "Data Analytics", href: "/programs" },
    { label: "School Bootcamps", href: "/programs" },
  ],
  company: [
    { label: "About Us", href: "/" },
    { label: "Careers", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Contact", href: "/counseling" },
  ],
  support: [
    { label: "Help Center", href: "/" },
    { label: "FAQs", href: "/" },
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-background" />
              </div>
              <span className="font-display font-bold text-xl">AlgoAscend</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering the next generation of tech professionals with industry-ready skills and hands-on experience.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>contact@algoascend.in</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Nikaya City, Chira Chas, Bokaro, Jharkhand-827013, India</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 AlgoAscend. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
