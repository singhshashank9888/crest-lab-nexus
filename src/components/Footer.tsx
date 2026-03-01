import { FlaskConical, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/lib/services-data";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">C</span>
              </div>
              <span className="font-heading font-bold text-lg">Crest Research</span>
            </Link>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Advancing Quality. Ensuring Safety. Empowering Research.
            </p>
            <div className="mt-4 flex items-center gap-2 text-primary text-xs font-medium">
              <FlaskConical size={14} />
              DDA Approved Laboratory
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/accreditation", label: "Accreditation" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-secondary-foreground/60 hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/60">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                crest.lab151@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                +977 9860070675
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary shrink-0" />
                Imadol, Lalitpur, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center text-sm text-secondary-foreground/40">
          © {new Date().getFullYear()} Crest Research Laboratories Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
