const RevenuePotential = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Typical Revenue Potential
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Battery storage systems participating in Baltic electricity markets can generate approximately:
          </p>

          <div className="bg-accent-warm-light border border-accent-warm/20 rounded-lg p-8 mb-8">
            <p className="font-display text-4xl md:text-5xl font-bold text-accent-brand mb-2">
              €120K – €300K
            </p>
            <p className="text-foreground font-medium">per MW per year</p>
          </div>

          <p className="text-muted-foreground mb-4">Revenue streams include:</p>
          <ul className="space-y-2 text-foreground mb-6">
            {[
              "Day-ahead arbitrage",
              "Intraday market optimization",
              "Balancing services (mFRR, aFRR, FCR)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent-brand mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground text-sm mb-6">
            Actual revenue depends on asset configuration, grid constraints, and market conditions.
          </p>

          <a
            href="/bess-index"
            className="inline-flex items-center gap-2 text-accent-brand hover:underline font-medium text-sm"
          >
            View the full Baltic BESS Revenue Index (2025–2040) →
          </a>
        </div>
      </div>
    </section>
  );
};

export default RevenuePotential;
