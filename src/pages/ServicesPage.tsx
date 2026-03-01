import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground mt-3 mb-4">
              Comprehensive Laboratory Solutions
            </h1>
            <p className="text-secondary-foreground/60 text-lg">
              From pharmaceutical testing to academic research support, we offer a full spectrum of analytical services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/services/${s.slug}`} className="block group">
                  <div className="glass-card rounded-2xl overflow-hidden hover-lift">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={imageMap[s.image]}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                          <s.icon size={20} className="text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
