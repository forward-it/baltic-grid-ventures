import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const assetTypes = ["Battery storage", "CHP + battery", "Solar PV + battery"];
const durations = ["1 hour", "2 hours", "4 hours"];

const baseRevenue: Record<string, [number, number]> = {
  "1 hour": [120, 200],
  "2 hours": [160, 260],
  "4 hours": [200, 300],
};

const RevenueCalculator = () => {
  const [assetType, setAssetType] = useState(assetTypes[0]);
  const [powerMW, setPowerMW] = useState(1);
  const [duration, setDuration] = useState(durations[1]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [roundTrip, setRoundTrip] = useState(88);
  const [socMin, setSocMin] = useState(10);
  const [socMax, setSocMax] = useState(90);

  const base = baseRevenue[duration] || [160, 260];
  const assetMultiplier =
    assetType === "CHP + battery" ? 1.1 : assetType === "Solar PV + battery" ? 1.05 : 1;
  const efficiencyFactor = roundTrip / 88;
  const socFactor = (socMax - socMin) / 80;

  const low = Math.round(base[0] * powerMW * assetMultiplier * efficiencyFactor * socFactor);
  const high = Math.round(base[1] * powerMW * assetMultiplier * efficiencyFactor * socFactor);

  return (
    <section id="calculator" className="section-padding bg-background">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Revenue Calculator
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Estimate annual revenue potential for your energy asset in Baltic electricity markets.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
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
                    <label className="block text-xs text-muted-foreground mb-1">Min SoC: {socMin}%</label>
                    <input type="range" min={0} max={30} value={socMin} onChange={(e) => setSocMin(+e.target.value)} className="w-full accent-accent-warm" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Max SoC: {socMax}%</label>
                    <input type="range" min={70} max={100} value={socMax} onChange={(e) => setSocMax(+e.target.value)} className="w-full accent-accent-warm" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Grid export limits and tariff parameters available upon request.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="bg-card border border-border rounded-lg p-8 sticky top-24">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Estimated Annual Revenue</p>
              <p className="font-display text-4xl md:text-5xl font-bold text-foreground mb-1">
                €{low.toLocaleString()}K – €{high.toLocaleString()}K
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                for {powerMW} MW / {parseFloat(duration) * powerMW} MWh {assetType.toLowerCase()}
              </p>

              <div className="border-t border-border pt-6 mb-6">
                <p className="text-sm text-muted-foreground mb-3">Revenue sources typically include:</p>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>• Day-ahead arbitrage</li>
                  <li>• Intraday trading</li>
                  <li>• Balancing services</li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground">
                Estimates are based on historical Baltic electricity market data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculator;
