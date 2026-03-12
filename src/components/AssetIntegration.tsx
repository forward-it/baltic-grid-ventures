import { Settings, Cpu, Radio } from "lucide-react";

const AssetIntegration = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Asset Integration and Qualification Support
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Forward Power Markets supports asset owners during the technical integration and qualification process required for market participation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <Settings className="h-6 w-6 text-accent-brand mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-3">SCADA and RTU Integration</h3>
            <p className="text-muted-foreground text-sm">
              Integration of energy assets with monitoring and dispatch control systems.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <Cpu className="h-6 w-6 text-accent-brand mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-3">BMS Integration</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Integration with battery management systems and hybrid energy assets including:
            </p>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Battery storage</li>
              <li>• Solar PV plants</li>
              <li>• CHP plants</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <Radio className="h-6 w-6 text-accent-brand mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-3">Grid Operator Communication</h3>
            <p className="text-muted-foreground text-sm">
              Implementation of communication with distribution and transmission system operators using IEC-60870-5-104 protocol.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetIntegration;
