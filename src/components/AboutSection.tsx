import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Microscope, Award } from "lucide-react";

const highlights = [
  { icon: Target, title: "Precision", desc: "Advanced instrumentation for accurate results" },
  { icon: Shield, title: "Compliance", desc: "National & international regulatory standards" },
  { icon: Microscope, title: "Innovation", desc: "Cutting-edge research capabilities" },
  { icon: Award, title: "Excellence", desc: "Experienced scientists & quality assurance" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
            A Premier Analytical & Quality Testing Laboratory
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Crest Research Laboratories Pvt. Ltd. is a premier analytical and quality testing laboratory located in Imadol, Lalitpur. We deliver accurate, reliable, and internationally compliant laboratory services to the pharmaceutical, food, livestock, and academic sectors.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            With advanced instrumentation and experienced scientists, we are a trusted partner for quality assurance, innovation, and research excellence in Nepal.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
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
      </div>
    </section>
  );
};

export default AboutSection;
