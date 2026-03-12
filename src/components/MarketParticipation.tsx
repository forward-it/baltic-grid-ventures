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
                "Registered electricity trader",
                "Registered balancing service provider in Latvia",
                "Nord Pool market participant",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-brand mt-0.5 shrink-0" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Markets Supported</h3>
            <div className="space-y-3">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium text-foreground">Nord Pool day-ahead market</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium text-foreground">Nord Pool intraday market</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium text-foreground">Baltic ancillary services markets</p>
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
