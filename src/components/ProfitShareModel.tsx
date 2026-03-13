const ProfitShareModel = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Profit Share Model
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Forward Power Markets operates on a profit-share basis.
          </p>

          <div className="bg-accent-warm-light border border-accent-warm/20 rounded-lg p-8 mb-8">
            <p className="font-display text-3xl font-bold text-accent-brand mb-2">10–15%</p>
            <p className="text-foreground font-medium">of generated income</p>
          </div>

          <p className="text-muted-foreground mb-4">The exact share depends on:</p>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent-brand mt-1">•</span>
              Asset class (battery storage, CHP, hybrid assets)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-brand mt-1">•</span>
              Generation or load profile
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-brand mt-1">•</span>
              Selected market participation strategy
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfitShareModel;
