import { Battery, TrendingUp, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="surface-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="text-accent-warm font-medium text-sm tracking-wider uppercase mb-4">
            Battery Revenue Potential
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground leading-tight mb-6">
            Up to <span className="text-accent-brand">€180K per MW</span> / year
            <br />in Baltic electricity markets
          </h1>
          <p className="text-surface-dark-foreground/70 text-lg mb-8 max-w-2xl">
            Revenue generated through optimized participation in:
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Nord Pool day-ahead market", "Intraday market", "mFRR, aFRR, FCR balancing services"].map((item) => (
              <span key={item} className="bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 text-surface-dark-foreground/80 px-4 py-2 rounded-md text-sm">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#contact" className="gradient-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
              Request Asset Revenue Assessment
            </a>
            <a href="#calculator" className="border border-surface-dark-foreground/20 text-surface-dark-foreground px-8 py-3 rounded-md font-medium hover:bg-surface-dark-foreground/5 transition-colors">
              Revenue Calculator
            </a>
          </div>
          <p className="text-surface-dark-foreground/40 text-xs">
            Actual revenue depends on asset configuration, grid constraints, and market participation strategy.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-surface-dark-foreground/10">
          {[
            { icon: Battery, label: "Grid-scale assets", value: "> 500 kW" },
            { icon: TrendingUp, label: "Markets operated", value: "Day-ahead · Intraday · Balancing" },
            { icon: Zap, label: "Dispatch", value: "Real-time automated control" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label}>
              <Icon className="h-5 w-5 text-accent-warm mb-2" />
              <p className="text-surface-dark-foreground/50 text-xs uppercase tracking-wider mb-1">{label}</p>
              <p className="text-surface-dark-foreground font-medium text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
