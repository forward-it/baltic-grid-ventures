const ProfitShareModel = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Profit Share Model
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We operate on a profit-share basis only.
          </p>

          <div className="bg-accent-warm-light border border-accent-warm/20 rounded-lg p-8 mb-8">
            <p className="text-accent-warm font-display text-3xl font-bold mb-2">15–20%</p>
            <p className="text-foreground font-medium">of additional market revenue generated</p>
          </div>

          <p className="text-muted-foreground mb-4">The exact share depends on:</p>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent-warm mt-1">•</span>
              Asset class (BESS, CHP, hybrid assets)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-warm mt-1">•</span>
              Generation or load profile
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-warm mt-1">•</span>
              Market participation strategy
            </li>
          </ul>
          <p className="text-muted-foreground mt-6 text-sm">
            This model aligns incentives between asset owners and the platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfitShareModel;
