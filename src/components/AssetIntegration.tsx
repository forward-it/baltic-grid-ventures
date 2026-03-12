import { Settings, Cpu, Radio } from "lucide-react";

const AssetIntegration = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Asset Integration & Qualification Support
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          We support asset owners during the technical setup and qualification stage required for market participation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <Settings className="h-6 w-6 text-accent-warm mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-3">SCADA & RTU</h3>
            <p className="text-muted-foreground text-sm">
              SCADA integration and RTU installation for real-time asset monitoring and control.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <Cpu className="h-6 w-6 text-accent-warm mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-3">BMS Integration</h3>
            <p className="text-muted-foreground text-sm">
              Integration with battery management systems and flexible assets including battery storage, solar PV plants, and CHP plants.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <Radio className="h-6 w-6 text-accent-warm mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-3">Grid Operator Integration</h3>
            <p className="text-muted-foreground text-sm">
              Communication and control integration with DSO and TSO operators. IEC-60870-5-104 protocol support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetIntegration;
