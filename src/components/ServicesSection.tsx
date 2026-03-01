import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FlaskConical,
  TestTubes,
  Lightbulb,
  GraduationCap,
  Apple,
  Stethoscope,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Pharmaceutical Quality Testing",
    desc: "Ensuring compliance with national and international regulatory standards throughout the product lifecycle.",
    features: [
      "Raw Material & API Testing",
      "In-Process Quality Control",
      "Finished Product Analysis",
      "Stability Studies",
      "Microbiological Testing",
      "Assay, Dissolution & Impurity Profiling",
    ],
  },
  {
    icon: TestTubes,
    title: "Method Development & Validation",
    desc: "Comprehensive analytical method services for regulatory compliance.",
    features: [
      "Accuracy & Precision Testing",
      "Specificity & Selectivity",
      "Linearity & Range",
      "Robustness & Reproducibility",
      "Complete Regulatory Documentation",
    ],
  },
  {
    icon: Lightbulb,
    title: "R&D Consultation",
    desc: "Expert guidance for product development and process optimization.",
    features: [
      "Product Formulation",
      "Process Optimization",
      "Stability Improvement",
      "Regulatory Guidance",
      "Troubleshooting & Improvement",
    ],
  },
  {
    icon: GraduationCap,
    title: "Research Support for Universities",
    desc: "Laboratory and analytical support for academic research projects.",
    features: [
      "Laboratory & Experimental Support",
      "Instrumental Analysis",
      "Thesis & Dissertation Support",
      "Data Interpretation & Reporting",
      "Collaborative Research",
    ],
  },
  {
    icon: Apple,
    title: "Food Testing Services",
    desc: "Comprehensive food quality and safety testing services.",
    features: [
      "Nutritional Analysis",
      "Microbiological Examination",
      "Chemical & Contaminant Testing",
      "Adulteration Detection",
      "Shelf-Life Studies",
    ],
  },
  {
    icon: Stethoscope,
    title: "Livestock & Veterinary Testing",
    desc: "Quality analysis for veterinary products and livestock feed.",
    features: [
      "Feed Quality Analysis",
      "Disease Screening",
      "Residue Testing",
      "Veterinary Product Evaluation",
    ],
  },
];

const ServiceCard = ({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="glass-card rounded-xl p-6 hover-lift group"
    >
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
        <service.icon size={24} className="text-primary" />
      </div>
      <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
      >
        {expanded ? "Hide" : "View"} Details
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {expanded && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-3 space-y-1.5"
        >
          {service.features.map((f) => (
            <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {f}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Comprehensive Laboratory Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From pharmaceutical testing to academic research support, we offer a full spectrum of analytical services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
