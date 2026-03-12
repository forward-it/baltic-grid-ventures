const steps = [
  { num: "01", title: "Market Data Ingestion", desc: "Continuous ingestion of real-time and historical market data from Nord Pool and TSO systems." },
  { num: "02", title: "Electricity Price Forecasting", desc: "Proprietary price forecasting models for Baltic day-ahead, intraday, and balancing markets." },
  { num: "03", title: "Multi-market Optimization", desc: "Simultaneous optimization across all available revenue streams for each asset." },
  { num: "04", title: "Automated Market Bidding", desc: "Automated bid submission to Nord Pool and TSO ancillary service markets." },
  { num: "05", title: "Real-time Dispatch Control", desc: "Direct dispatch signals to asset SCADA systems for optimal market execution." },
];

const integrations = ["Nord Pool markets", "Latvian TSO (AST)", "Asset SCADA systems"];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          How the Platform Works
        </h2>

        <div className="space-y-0">
          {steps.map(({ num, title, desc }, i) => (
            <div key={num} className="flex gap-6 relative">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-accent-foreground text-sm font-bold shrink-0">
                  {num}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-2" />}
              </div>
              <div className="pb-10">
                <h3 className="font-display font-semibold text-foreground text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Integrated with:</p>
          <div className="flex flex-wrap gap-3">
            {integrations.map((item) => (
              <span key={item} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
