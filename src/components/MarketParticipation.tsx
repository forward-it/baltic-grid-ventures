import { CheckCircle } from "lucide-react";

const MarketParticipation = () => {
  return (
    <section id="markets" className="section-padding bg-background">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Electricity Market Participation
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Forward Power Markets participates in Baltic electricity markets through the following registrations:
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Registrations</h3>
            <div className="space-y-4">
              {[
                { main: "Registered electricity trader", sub: "EIC 43X-STJ02709060N · ACER A00250726.LV" },
                { main: "Registered balancing service provider in Latvia" },
                { main: "Nord Pool market participant" },
              ].map((item) => (
                <div key={item.main} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-brand mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground">{item.main}</p>
                    {item.sub && <p className="text-sm text-muted-foreground mt-0.5">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Markets Supported</h3>
            <div className="space-y-3">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium text-foreground">Nord Pool</p>
                <p className="text-sm text-muted-foreground mt-1">Day-Ahead · Intraday market</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium text-foreground">Baltic Balancing Capacity Market</p>
                <p className="text-sm text-muted-foreground mt-1">mFRR · aFRR · FCR</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium text-foreground">Baltic Balancing Energy Market</p>
                <p className="text-sm text-muted-foreground mt-1">mFRR · aFRR · FCR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketParticipation;
