import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const assetTypes = ["Battery storage", "CHP + battery", "Solar PV + battery", "Flexible industrial load"];
const durations = ["1 hour", "2 hours", "4 hours"];
const countries = ["Latvia", "Lithuania", "Estonia"];

// Revenue ranges per MW per year by country and duration (low, high) in €K
const revenueTable: Record<string, Record<string, [number, number]>> = {
  "Latvia": { "1 hour": [100, 160], "2 hours": [130, 210], "4 hours": [140, 280] },
  "Lithuania": { "1 hour": [90, 150], "2 hours": [120, 200], "4 hours": [130, 260] },
  "Estonia": { "1 hour": [85, 140], "2 hours": [110, 190], "4 hours": [120, 240] },
};

const RevenueCalculator = () => {
  const [assetType, setAssetType] = useState(assetTypes[0]);
  const [powerMW, setPowerMW] = useState(2);
  const [duration, setDuration] = useState(durations[1]);
  const [country, setCountry] = useState(countries[0]);
  const [includeSolar, setIncludeSolar] = useState(false);
  const [includeCHP, setIncludeCHP] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Advanced params
  const [roundTrip, setRoundTrip] = useState(88);
  const [cycleLimit, setCycleLimit] = useState(365);
  const [socMin, setSocMin] = useState(10);
  const [socMax, setSocMax] = useState(90);

  const base = revenueTable[country]?.[duration] || [140, 280];
  const hybridMultiplier = 1 + (includeSolar ? 0.08 : 0) + (includeCHP ? 0.12 : 0);
  const assetMultiplier = assetType === "CHP + battery" ? 1.15 : assetType === "Solar PV + battery" ? 1.1 : assetType === "Flexible industrial load" ? 0.7 : 1;
  const efficiencyFactor = roundTrip / 88;
  const socFactor = (socMax - socMin) / 80;

  const low = Math.round(base[0] * powerMW * hybridMultiplier * assetMultiplier * efficiencyFactor * socFactor);
  const high = Math.round(base[1] * powerMW * hybridMultiplier * assetMultiplier * efficiencyFactor * socFactor);
  const platformShareLow = Math.round(low * 0.175);
  const platformShareHigh = Math.round(high * 0.175);

  return (
    <section id="calculator" className="section-padding bg-muted/50">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Revenue Calculator
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Estimate annual revenue potential for your battery energy storage project in Baltic markets.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-6">
            {/* Asset type */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Asset Type</label>
              <select
                value={assetType}
                onChange={(e) => setAssetType(e.target.value)}
                className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              >
                {assetTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Power slider */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Battery Power: <span className="text-accent-brand font-bold">{powerMW} MW</span>
              </label>
              <input
                type="range"
                min={0.5}
                max={50}
                step={0.5}
                value={powerMW}
                onChange={(e) => setPowerMW(parseFloat(e.target.value))}
                className="w-full accent-accent-warm"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0.5 MW</span>
                <span>50 MW</span>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Battery Duration</label>
              <div className="flex gap-2">
                {durations.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                      duration === d
                        ? "gradient-accent text-accent-foreground"
                        : "bg-card border border-border text-foreground hover:bg-secondary"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Hybrid */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Optional Hybrid Asset</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSolar}
                    onChange={(e) => setIncludeSolar(e.target.checked)}
                    className="rounded border-border accent-accent-warm"
                  />
                  Include Solar PV
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCHP}
                    onChange={(e) => setIncludeCHP(e.target.checked)}
                    className="rounded border-border accent-accent-warm"
                  />
                  Include CHP
                </label>
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              >
                {countries.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Advanced */}
            <div className="border border-border rounded-lg">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Advanced Configuration
                {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {showAdvanced && (
                <div className="px-4 pb-4 space-y-4 border-t border-border pt-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Round-trip Efficiency: {roundTrip}%</label>
                    <input type="range" min={70} max={96} value={roundTrip} onChange={(e) => setRoundTrip(+e.target.value)} className="w-full accent-accent-warm" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Annual Cycle Limit: {cycleLimit}</label>
                    <input type="range" min={100} max={730} value={cycleLimit} onChange={(e) => setCycleLimit(+e.target.value)} className="w-full accent-accent-warm" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Min SoC: {socMin}%</label>
                    <input type="range" min={0} max={30} value={socMin} onChange={(e) => setSocMin(+e.target.value)} className="w-full accent-accent-warm" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Max SoC: {socMax}%</label>
                    <input type="range" min={70} max={100} value={socMax} onChange={(e) => setSocMax(+e.target.value)} className="w-full accent-accent-warm" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Grid import/export constraints and tariff parameters available upon request.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Output */}
          <div>
            <div className="bg-card border border-border rounded-lg p-8 sticky top-24">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Estimated Annual Revenue</p>
              <p className="font-display text-4xl md:text-5xl font-bold text-foreground mb-1">
                €{low.toLocaleString()}K – €{high.toLocaleString()}K
              </p>
              <p className="text-muted-foreground text-sm mb-8">
                for {powerMW} MW / {parseFloat(duration) * powerMW} MWh {assetType.toLowerCase()} in {country}
              </p>

              <div className="border-t border-border pt-6 mb-8">
                <p className="text-sm text-muted-foreground mb-1">Estimated platform profit share (17.5%)</p>
                <p className="font-display text-lg font-semibold text-foreground">
                  €{platformShareLow.toLocaleString()}K – €{platformShareHigh.toLocaleString()}K
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Example Case</p>
                <div className="bg-accent-warm-light rounded-lg p-5">
                  <p className="font-medium text-foreground mb-2">2 MW / 4 MWh battery</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Day-ahead arbitrage · Intraday trading · mFRR balancing
                  </p>
                  <p className="font-display text-2xl font-bold text-accent-brand">€280K – €420K / year</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                Estimates based on historical Baltic market data. Actual results vary by asset and market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculator;
