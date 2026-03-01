import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Award, FileCheck, CheckCircle, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import accreditationBg from "@/assets/accreditation-bg.jpg";

const benefits = [
  { icon: ShieldCheck, title: "Quality Assurance", desc: "All testing follows validated, DDA-approved standard operating procedures." },
  { icon: FileCheck, title: "Regulatory Compliance", desc: "Results accepted by DDA and other regulatory bodies for drug registration and licensing." },
  { icon: Building, title: "Facility Standards", desc: "Our lab meets the infrastructure and equipment requirements set by DDA guidelines." },
  { icon: BadgeCheck, title: "Qualified Personnel", desc: "Our scientists hold required qualifications and undergo regular competency assessments." },
];

const AccreditationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={accreditationBg} alt="Accreditation certificates" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/40" />
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Accreditation</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground mt-3 mb-4">
                Recognized & Approved
              </h1>
              <p className="text-secondary-foreground/60 text-lg">
                Our certifications reflect our commitment to the highest standards of quality and safety.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DDA Badge */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-card-dark rounded-2xl p-10 text-center animate-pulse-glow">
              <div className="w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={48} className="text-primary" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-secondary-foreground mb-3">
                DDA Approved Laboratory
              </h2>
              <p className="text-secondary-foreground/60 text-lg mb-6">
                Approved by the Department of Drug Administration (DDA), Nepal
              </p>
              <div className="flex items-center justify-center gap-8">
                <div className="flex items-center gap-2 text-primary">
                  <BadgeCheck size={22} />
                  <span className="text-sm font-medium text-secondary-foreground/70">Certified</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Award size={22} />
                  <span className="text-sm font-medium text-secondary-foreground/70">Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle size={22} />
                  <span className="text-sm font-medium text-secondary-foreground/70">Trusted</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What DDA Approval Means */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">What DDA Approval Means</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The Department of Drug Administration (DDA) approval signifies that our laboratory meets all the standards required for pharmaceutical quality testing in Nepal.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <b.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-heading font-bold text-secondary-foreground mb-4">Our Commitment to Quality</h2>
            <p className="text-secondary-foreground/60 text-lg leading-relaxed mb-8">
              We are committed to maintaining the highest standards of laboratory practice. Our quality management system ensures that every test result is accurate, reproducible, and compliant with regulatory requirements. We continuously invest in staff training, equipment calibration, and process improvement.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccreditationPage;
