import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Shield, Microscope, Award, ShieldCheck, BadgeCheck } from "lucide-react";
import { services } from "@/lib/services-data";

import servicePharma from "@/assets/service-pharma.jpg";
import serviceMethod from "@/assets/service-method.jpg";
import serviceRnd from "@/assets/service-rnd.jpg";
import serviceUniversity from "@/assets/service-university.jpg";
import serviceFood from "@/assets/service-food.jpg";
import serviceLivestock from "@/assets/service-livestock.jpg";

const imageMap: Record<string, string> = {
  "service-pharma": servicePharma,
  "service-method": serviceMethod,
  "service-rnd": serviceRnd,
  "service-university": serviceUniversity,
  "service-food": serviceFood,
  "service-livestock": serviceLivestock,
};

const highlights = [
  { icon: Target, title: "Precision", desc: "Advanced instrumentation for accurate results" },
  { icon: Shield, title: "Compliance", desc: "National & international regulatory standards" },
  { icon: Microscope, title: "Innovation", desc: "Cutting-edge research capabilities" },
  { icon: Award, title: "Excellence", desc: "Experienced scientists & quality assurance" },
];

const Index = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* About Preview */}
      <section className="section-padding bg-muted/50" ref={aboutRef}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={aboutInView ? { opacity: 1, y: 0 } : {}} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
              A Premier Analytical & Quality Testing Laboratory
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Crest Research Laboratories Pvt. Ltd. delivers accurate, reliable, and internationally compliant laboratory services to the pharmaceutical, food, livestock, and academic sectors.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {highlights.map((h, i) => (
              <motion.div key={h.title} initial={{ opacity: 0, y: 30 }} animate={aboutInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <h.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{h.title}</h3>
                <p className="text-muted-foreground text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/about" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding" ref={servicesRef}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              Comprehensive Laboratory Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From pharmaceutical testing to academic research support, we offer a full spectrum of analytical services.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i }}>
                <Link to={`/services/${s.slug}`} className="block group">
                  <div className="glass-card rounded-xl overflow-hidden hover-lift">
                    <div className="relative h-40 overflow-hidden">
                      <img src={imageMap[s.image]} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                          <s.icon size={18} className="text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
                      <p className="text-muted-foreground text-sm">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Accreditation Preview */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Accreditation</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-3 mb-8">Recognized & Approved</h2>
          <div className="max-w-xl mx-auto glass-card-dark rounded-2xl p-8 animate-pulse-glow mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-2">DDA Approved Laboratory</h3>
            <p className="text-secondary-foreground/60 mb-4">Approved by the Department of Drug Administration (DDA), Nepal</p>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-primary">
                <BadgeCheck size={20} />
                <span className="text-sm text-secondary-foreground/70">Certified</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Award size={20} />
                <span className="text-sm text-secondary-foreground/70">Compliant</span>
              </div>
            </div>
          </div>
          <Link to="/accreditation" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
            Learn More <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8">Contact us today for a consultation or to learn more about our laboratory services.</p>
          <Link to="/contact" className="bg-primary hover:bg-emerald-glow text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(160_84%_39%/0.4)]">
            Request a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
