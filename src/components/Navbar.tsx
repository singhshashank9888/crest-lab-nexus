import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { services } from "@/lib/services-data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="img" className="w-[150px]"/>
         
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "text-primary-foreground/70 hover:text-primary"}`}>
            Home
          </Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-primary" : "text-primary-foreground/70 hover:text-primary"}`}>
            About
          </Link>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${isServicesActive ? "text-primary" : "text-primary-foreground/70 hover:text-primary"}`}
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-secondary/95 backdrop-blur-xl border border-primary/10 rounded-xl shadow-2xl overflow-hidden"
                >
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors border-b border-primary/10"
                  >
                    All Services →
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-primary-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      <s.icon size={16} className="text-primary shrink-0" />
                      {s.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/accreditation" className={`text-sm font-medium transition-colors ${isActive("/accreditation") ? "text-primary" : "text-primary-foreground/70 hover:text-primary"}`}>
            Accreditation
          </Link>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-glow transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary/95 backdrop-blur-lg border-t border-primary/10"
          >
            <div className="container mx-auto py-4 flex flex-col gap-1">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary py-2.5 font-medium">Home</Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary py-2.5 font-medium">About</Link>

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-primary-foreground/80 hover:text-primary py-2.5 font-medium text-left flex items-center justify-between"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="pl-4 space-y-1">
                    <Link to="/services" className="block text-primary text-sm py-1.5 font-medium">All Services →</Link>
                    {services.map((s) => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-2 text-primary-foreground/60 text-sm py-1.5 hover:text-primary">
                        <s.icon size={14} className="text-primary" />
                        {s.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/accreditation" className="text-primary-foreground/80 hover:text-primary py-2.5 font-medium">Accreditation</Link>
              <Link to="/contact" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold mt-2 text-center">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
