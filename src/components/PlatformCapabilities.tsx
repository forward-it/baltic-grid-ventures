import { BarChart3, Zap, Brain, Layers, Shield, DollarSign } from "lucide-react";

const capabilities = [
  { icon: BarChart3, title: "Automated Market Bidding", desc: "Continuous bid optimization across day-ahead, intraday, and balancing markets." },
  { icon: Zap, title: "Real-time Dispatch Control", desc: "Sub-second dispatch signals to assets based on market signals and grid conditions." },
  { icon: Brain, title: "Price Forecasting", desc: "Proprietary electricity price forecasting for Baltic markets." },
  { icon: Layers, title: "Multi-market Optimization", desc: "Simultaneous optimization across multiple revenue streams." },
  { icon: Shield, title: "Grid Constraint Management", desc: "Automatic compliance with grid export/import limits and TSO requirements." },
  { icon: DollarSign, title: "Revenue Maximization", desc: "Continuous re-optimization to capture maximum value from flexible assets." },
];

const PlatformCapabilities = () => {
  return (
    <section id="platform" className="section-padding surface-dark">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-dark-foreground mb-4">
          Operational Dispatch & Trading Platform
        </h2>
        <p className="text-surface-dark-foreground/60 text-lg mb-12 max-w-2xl">
          Our platform continuously optimizes asset dispatch and market participation across multiple electricity markets.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-surface-dark-foreground/10 rounded-lg p-6 hover:border-accent-warm/30 transition-colors">
              <Icon className="h-5 w-5 text-accent-warm mb-3" />
              <h3 className="font-display font-semibold text-surface-dark-foreground mb-2">{title}</h3>
              <p className="text-surface-dark-foreground/60 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;
