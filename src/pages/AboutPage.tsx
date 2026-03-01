import { motion } from "framer-motion";
import { Target, Shield, Microscope, Award, Users, Globe, Beaker, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const highlights = [
  { icon: Target, title: "Precision", desc: "Advanced instrumentation for accurate results" },
  { icon: Shield, title: "Compliance", desc: "National & international regulatory standards" },
  { icon: Microscope, title: "Innovation", desc: "Cutting-edge research capabilities" },
  { icon: Award, title: "Excellence", desc: "Experienced scientists & quality assurance" },
];

const values = [
  { icon: CheckCircle, title: "Accuracy", desc: "We are committed to delivering precise and reliable analytical results every time." },
  { icon: Users, title: "Collaboration", desc: "We work closely with our clients as trusted partners in quality and research." },
  { icon: Globe, title: "Global Standards", desc: "Our processes align with international pharmacopeial and regulatory guidelines." },
  { icon: Beaker, title: "Innovation", desc: "We continuously invest in advanced technology and scientific expertise." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground mt-3 mb-6">
              A Premier Analytical & Quality Testing Laboratory
            </h1>
            <p className="text-secondary-foreground/60 text-lg leading-relaxed">
              Advancing Quality. Ensuring Safety. Empowering Research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Crest Research Laboratories Pvt. Ltd. is a premier analytical and quality testing laboratory located in Imadol, Lalitpur. We deliver accurate, reliable, and internationally compliant laboratory services to the pharmaceutical, food, livestock, and academic sectors.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                With advanced instrumentation and experienced scientists, we are a trusted partner for quality assurance, innovation, and research excellence in Nepal.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our laboratory is equipped with cutting-edge analytical instruments including HPLC, UV-Vis Spectrophotometry, dissolution testing apparatus, and microbiological testing facilities — all maintained to the highest calibration standards.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div key={h.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="glass-card rounded-xl p-6 text-center hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <h.icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{h.title}</h3>
                  <p className="text-muted-foreground text-sm">{h.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card-dark rounded-2xl p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-4">Our Mission</h3>
              <p className="text-secondary-foreground/70 leading-relaxed">
                To provide world-class analytical and quality testing services that empower pharmaceutical, food, and veterinary industries to achieve the highest standards of safety, quality, and regulatory compliance.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass-card-dark rounded-2xl p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-4">Our Vision</h3>
              <p className="text-secondary-foreground/70 leading-relaxed">
                To become Nepal's most trusted and technologically advanced research laboratory — a center of excellence for quality testing, method development, and scientific innovation.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Values</span>
            <h2 className="text-3xl font-heading font-bold text-foreground mt-3">What Drives Us</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="glass-card rounded-xl p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
