import {
  FlaskConical,
  TestTubes,
  Lightbulb,
  GraduationCap,
  Apple,
  Stethoscope,
} from "lucide-react";

export const services = [
  {
    slug: "pharmaceutical-quality-testing",
    icon: FlaskConical,
    title: "Pharmaceutical Quality Testing",
    desc: "Ensuring compliance with national and international regulatory standards throughout the product lifecycle.",
    image: "service-pharma",
    features: [
      "Raw Material & API Testing",
      "In-Process Quality Control",
      "Finished Product Analysis",
      "Stability Studies",
      "Microbiological Testing",
      "Assay, Dissolution & Impurity Profiling",
    ],
    longDesc:
      "Our pharmaceutical quality testing services ensure that every product meets the stringent requirements set by national and international regulatory bodies. From raw material analysis to finished product testing, we provide end-to-end quality assurance throughout the entire product lifecycle. Our state-of-the-art instrumentation and experienced team guarantee accurate, reliable, and timely results that you can trust.",
  },
  {
    slug: "method-development-validation",
    icon: TestTubes,
    title: "Method Development & Validation",
    desc: "Comprehensive analytical method services for regulatory compliance.",
    image: "service-method",
    features: [
      "Accuracy & Precision Testing",
      "Specificity & Selectivity",
      "Linearity & Range",
      "Robustness & Reproducibility",
      "Complete Regulatory Documentation",
    ],
    longDesc:
      "We specialize in developing and validating robust analytical methods that meet ICH, USP, and other international guidelines. Our expert team ensures your methods are accurate, precise, specific, and reproducible — providing complete regulatory documentation for seamless submissions and audits.",
  },
  {
    slug: "rnd-consultation",
    icon: Lightbulb,
    title: "R&D Consultation",
    desc: "Expert guidance for product development and process optimization.",
    image: "service-rnd",
    features: [
      "Product Formulation",
      "Process Optimization",
      "Stability Improvement",
      "Regulatory Guidance",
      "Troubleshooting & Improvement",
    ],
    longDesc:
      "Our R&D consultation services bridge the gap between innovation and commercialization. We work closely with pharmaceutical and nutraceutical companies to optimize formulations, improve stability profiles, navigate regulatory pathways, and troubleshoot manufacturing challenges.",
  },
  {
    slug: "university-research-support",
    icon: GraduationCap,
    title: "Research Support for Universities",
    desc: "Laboratory and analytical support for academic research projects.",
    image: "service-university",
    features: [
      "Laboratory & Experimental Support",
      "Instrumental Analysis",
      "Thesis & Dissertation Support",
      "Data Interpretation & Reporting",
      "Collaborative Research",
    ],
    longDesc:
      "We are proud to support the academic community by providing access to advanced analytical instrumentation and expert guidance. From thesis research to collaborative projects, our team helps students and faculty achieve meaningful results with professional-grade laboratory support.",
  },
  {
    slug: "food-testing",
    icon: Apple,
    title: "Food Testing Services",
    desc: "Comprehensive food quality and safety testing services.",
    image: "service-food",
    features: [
      "Nutritional Analysis",
      "Microbiological Examination",
      "Chemical & Contaminant Testing",
      "Adulteration Detection",
      "Shelf-Life Studies",
    ],
    longDesc:
      "Our food testing laboratory provides comprehensive analysis to ensure food safety and quality compliance. From nutritional labeling support to microbiological examinations and adulteration detection, we help food manufacturers and distributors meet regulatory standards and protect consumer health.",
  },
  {
    slug: "livestock-veterinary-testing",
    icon: Stethoscope,
    title: "Livestock & Veterinary Testing",
    desc: "Quality analysis for veterinary products and livestock feed.",
    image: "service-livestock",
    features: [
      "Feed Quality Analysis",
      "Disease Screening",
      "Residue Testing",
      "Veterinary Product Evaluation",
    ],
    longDesc:
      "Our veterinary and livestock testing services support the animal health sector with comprehensive feed analysis, disease screening, residue testing, and veterinary product evaluation. We help ensure the safety and efficacy of products used in animal agriculture and veterinary medicine.",
  },
];
