import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Modern analytical laboratory" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
              <FlaskConical size={16} className="text-primary" />
              <span className="text-primary text-sm font-medium">DDA Approved Laboratory</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
            Crest Research{" "}
            <span className="gradient-text">Laboratories</span>{" "}
            Pvt. Ltd.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 leading-relaxed"
          >
            Advancing Quality. Ensuring Safety. Empowering Research.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              className="bg-primary hover:bg-emerald-glow text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(160_84%_39%/0.4)]"
            >
              Request a Consultation
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-primary-foreground/20 text-primary-foreground/80 hover:border-primary hover:text-primary px-8 py-3.5 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-16 max-w-lg"
          >
            {[
              { value: "6+", label: "Service Areas" },
              { value: "DDA", label: "Approved" },
              { value: "100%", label: "Compliance" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{s.value}</p>
                <p className="text-primary-foreground/50 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
