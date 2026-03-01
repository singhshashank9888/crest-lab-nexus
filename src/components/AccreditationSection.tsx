import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, BadgeCheck, Award } from "lucide-react";

const AccreditationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="accreditation" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Accreditation</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-3 mb-4">
            Recognized & Approved
          </h2>
          <p className="text-secondary-foreground/60 text-lg">
            Our certifications reflect our commitment to the highest standards of quality and safety.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card-dark rounded-2xl p-8 md:p-10 text-center animate-pulse-glow">
            <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-2">
              DDA Approved Laboratory
            </h3>
            <p className="text-secondary-foreground/60 text-lg mb-6">
              Approved by the Department of Drug Administration (DDA), Nepal
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-primary">
                <BadgeCheck size={20} />
                <span className="text-sm font-medium text-secondary-foreground/70">Certified</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Award size={20} />
                <span className="text-sm font-medium text-secondary-foreground/70">Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccreditationSection;
