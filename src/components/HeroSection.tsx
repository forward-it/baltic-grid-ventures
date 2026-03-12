const HeroSection = () => {
  return (
    <section className="surface-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground leading-tight mb-6">
            Monetize Flexible Energy Assets in Baltic Electricity Markets
          </h1>
          <p className="text-surface-dark-foreground/70 text-lg mb-4">
            Battery storage, CHP and hybrid energy assets can generate additional revenue through participation in:
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Nord Pool day-ahead market",
              "Nord Pool intraday market",
              "Baltic balancing services (mFRR, aFRR, FCR)",
            ].map((item) => (
              <span
                key={item}
                className="bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 text-surface-dark-foreground/80 px-4 py-2 rounded-md text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-surface-dark-foreground/60 text-base mb-10 max-w-2xl">
            Forward Power Markets develops dispatch and trading systems that enable energy assets to participate in Baltic electricity markets and optimize their operational revenue.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#calculator"
              className="gradient-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              Estimate Asset Revenue
            </a>
            <a
              href="#contact"
              className="border border-surface-dark-foreground/20 text-surface-dark-foreground px-8 py-3 rounded-md font-medium hover:bg-surface-dark-foreground/5 transition-colors"
            >
              Request Technical Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
