import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground mt-3 mb-4">
              Get in Touch
            </h1>
            <p className="text-secondary-foreground/60 text-lg">
              Ready to partner with us? Reach out for inquiries, consultations, or service requests.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "crest.lab151@gmail.com", href: "mailto:crest.lab151@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+977 9860070675", href: "tel:+9779860070675" },
                  { icon: Phone, label: "Phone", value: "+977 9822306491", href: "tel:+9779822306491" },
                  { icon: MapPin, label: "Location", value: "Imadol, Lalitpur, Nepal" },
                  { icon: Clock, label: "Working Hours", value: "Sun - Fri: 10:00 AM - 5:00 PM" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <c.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-foreground font-medium hover:text-primary transition-colors">{c.value}</a>
                      ) : (
                        <p className="text-foreground font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  title="Crest Research Laboratories Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5!2d85.3340!3d27.6600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM5JzM2LjAiTiA4NcKwMjAnMDIuNCJF!5e0!3m2!1sen!2snp!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-6 md:p-8 space-y-5"
            >
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Send Us a Message</h3>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="Your full name" maxLength={100}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="you@example.com" maxLength={255}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="+977 XXXXXXXXXX" maxLength={20}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                  placeholder="Tell us about your requirements..." maxLength={1000}
                />
              </div>
              <button type="submit"
                className="w-full bg-primary hover:bg-emerald-glow text-primary-foreground py-3.5 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(160_84%_39%/0.4)]"
              >
                Request a Consultation <Send size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
