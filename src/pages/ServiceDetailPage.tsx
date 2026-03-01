import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground">Service not found</h1>
          <Link to="/services" className="text-primary mt-4 inline-block hover:underline">
            ← Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={imageMap[service.image]} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/30" />
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link to="/services" className="text-primary text-sm font-medium flex items-center gap-1 mb-4 hover:underline">
                <ArrowLeft size={14} /> All Services
              </Link>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground">{service.title}</h1>
              </div>
              <p className="text-secondary-foreground/60 text-lg max-w-2xl">{service.desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{service.longDesc}</p>

              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">What We Offer</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 glass-card rounded-lg p-4">
                    <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground font-medium text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {/* CTA Card */}
              <div className="glass-card-dark rounded-2xl p-6 sticky top-28">
                <h3 className="text-lg font-heading font-semibold text-secondary-foreground mb-3">Need This Service?</h3>
                <p className="text-secondary-foreground/60 text-sm mb-6">
                  Contact us to discuss your testing requirements and get a consultation.
                </p>
                <Link
                  to="/contact"
                  className="w-full bg-primary hover:bg-emerald-glow text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(160_84%_39%/0.4)]"
                >
                  Request a Consultation
                </Link>

                {/* Next Service */}
                <div className="mt-6 pt-6 border-t border-secondary-foreground/10">
                  <p className="text-secondary-foreground/40 text-xs uppercase tracking-wider mb-3">Next Service</p>
                  <Link to={`/services/${nextService.slug}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <nextService.icon size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-secondary-foreground text-sm font-medium group-hover:text-primary transition-colors">{nextService.title}</p>
                    </div>
                    <ArrowRight size={14} className="text-primary" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
