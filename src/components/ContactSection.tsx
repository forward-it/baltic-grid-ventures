import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding surface-dark">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-dark-foreground mb-4">
            Monetize Your Energy Assets
          </h2>
          <p className="text-surface-dark-foreground/60 text-lg mb-10">
            Request a detailed revenue assessment for your battery storage, CHP, or hybrid energy asset in Baltic electricity markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:info@forwardit.lv?subject=Asset Revenue Assessment Request"
              className="gradient-accent text-accent-foreground px-8 py-4 rounded-md font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Estimate Asset Revenue
            </a>
            <a
              href="mailto:info@forwardit.lv?subject=Technical Consultation Request"
              className="border border-surface-dark-foreground/20 text-surface-dark-foreground px-8 py-4 rounded-md font-medium hover:bg-surface-dark-foreground/5 transition-colors text-center"
            >
              Book Technical Consultation
            </a>
          </div>

          <div className="flex justify-center text-surface-dark-foreground/50 text-sm">
            <a href="mailto:info@forwardit.lv" className="flex items-center gap-2 hover:text-surface-dark-foreground transition-colors">
              <Mail className="h-4 w-4" /> info@forwardit.lv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
