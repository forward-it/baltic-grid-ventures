import { CheckCircle } from "lucide-react";

const MarketParticipation = () => {
  return (
    <section id="markets" className="section-padding bg-background">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Market Participation
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          We operate directly in Baltic electricity markets.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Credentials</h3>
            <div className="space-y-4">
              {[
                "Registered balancing service provider in Latvia",
                "Registered electricity trader",
                "Nord Pool market participant",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-warm mt-0.5 shrink-0" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Markets Operated</h3>
            <div className="space-y-3">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium text-foreground">Day-ahead spot market</p>
                <p className="text-sm text-muted-foreground">Nord Pool</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium text-foreground">Intraday market</p>
                <p className="text-sm text-muted-foreground">Nord Pool</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-medium text-foreground">Ancillary service markets</p>
                <p className="text-sm text-muted-foreground">Latvian TSO (AST) — mFRR · aFRR · FCR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketParticipation;
