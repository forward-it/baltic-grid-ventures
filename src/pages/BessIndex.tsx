import { useMemo, useState } from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChevronDown, ChevronUp } from "lucide-react";

const DATA = [
  { year: 2025, da: 70000, frr: 492000, fcr: 38000 },
  { year: 2026, da: 70000, frr: 443000, fcr: 36000 },
  { year: 2027, da: 67000, frr: 399000, fcr: 34000 },
  { year: 2028, da: 66000, frr: 359000, fcr: 33000 },
  { year: 2029, da: 65000, frr: 323000, fcr: 31000 },
  { year: 2030, da: 63000, frr: 291000, fcr: 29000 },
  { year: 2031, da: 62000, frr: 261000, fcr: 28000 },
  { year: 2032, da: 61000, frr: 235000, fcr: 27000 },
  { year: 2033, da: 60000, frr: 212000, fcr: 25000 },
  { year: 2034, da: 58000, frr: 191000, fcr: 24000 },
  { year: 2035, da: 57000, frr: 172000, fcr: 23000 },
  { year: 2036, da: 56000, frr: 154000, fcr: 22000 },
  { year: 2037, da: 55000, frr: 139000, fcr: 21000 },
  { year: 2038, da: 54000, frr: 125000, fcr: 20000 },
  { year: 2039, da: 53000, frr: 113000, fcr: 19000 },
  { year: 2040, da: 52000, frr: 101000, fcr: 18000 },
];

const fmt = (v: number) =>
  "€" + v.toLocaleString("en-US", { maximumFractionDigits: 0 });

const HIGHLIGHT_YEARS: Record<number, string> = {
  2025: "Current — baseline from TSO data for Latvia",
  2031: "Approaching current Clean Horizon 2h Index of Sweden (€368K)",
  2032: "Approaching current Clean Horizon 2h Index of Finland (€329K)",
  2036: "Approaching current Clean Horizon 2h Index of Germany (€236K)",
};

const GLOSSARY = [
  { term: "BESS", def: "Battery Energy Storage System. A facility that stores electrical energy in batteries for later dispatch into the grid." },
  { term: "Day-Ahead Arbitrage (DA)", def: "Revenue earned by buying electricity at low prices and selling at high prices on the Nord Pool day-ahead market, scheduled one day before delivery." },
  { term: "Frequency Restoration Reserve (FRR)", def: "A balancing service that restores grid frequency after disturbances. Includes automatic FRR (aFRR), activated within seconds, and manual FRR (mFRR), activated within minutes by the transmission system operator." },
  { term: "aFRR", def: "Automatic Frequency Restoration Reserve. Activated automatically within 30 seconds to restore frequency." },
  { term: "mFRR", def: "Manual Frequency Restoration Reserve. Activated manually within 12.5 minutes by the TSO." },
  { term: "FCR", def: "Frequency Containment Reserve. The fastest grid balancing product — activated automatically within seconds to contain frequency deviations before FRR takes over." },
  { term: "Clean Horizon Storage Index", def: "An industry benchmark tracking revenue performance of energy storage assets across European markets." },
  { term: "Decay Factor", def: "A multiplier (less than 1) applied annually to model declining per-MW revenue as more storage capacity enters the market and competition increases." },
  { term: "Nord Pool", def: "The leading power exchange for the Nordic and Baltic electricity markets." },
  { term: "TSO", def: "Transmission System Operator. The entity responsible for operating the high-voltage electricity grid and procuring balancing services." },
];

const chartData = DATA.map((d) => ({
  year: d.year,
  "Day-Ahead": d.da,
  FRR: d.frr,
  FCR: d.fcr,
  Total: d.da + d.frr + d.fcr,
}));

const daShareData = DATA.map((d) => {
  const total = d.da + d.frr + d.fcr;
  return {
    year: d.year,
    "DA Share": parseFloat(((d.da / total) * 100).toFixed(1)),
  };
});

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const total = payload.reduce((s: number, p: any) => s + (p.value || 0), 0);
  return (
    <div className="bg-[hsl(220,25%,10%)] border border-white/10 rounded-lg px-4 py-3 text-sm shadow-xl">
      <p className="font-display font-semibold text-white mb-2">{label}</p>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex justify-between gap-6 text-white/70">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: p.color }} />
            {p.dataKey}
          </span>
          <span className="font-mono text-white">{fmt(p.value)}</span>
        </div>
      ))}
      <div className="border-t border-white/10 mt-2 pt-2 flex justify-between font-semibold text-white">
        <span>Total</span>
        <span className="font-mono">{fmt(total)}</span>
      </div>
    </div>
  );
};

const DAShareTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[hsl(220,25%,10%)] border border-white/10 rounded-lg px-4 py-3 text-sm shadow-xl">
      <p className="font-display font-semibold text-white mb-1">{label}</p>
      <p className="text-emerald-400 font-mono">{payload[0].value}%</p>
    </div>
  );
};

const BessIndex = () => {
  const [assumptionsOpen, setAssumptionsOpen] = useState(false);

  const tableRows = useMemo(
    () =>
      DATA.map((d) => ({
        ...d,
        total: d.da + d.frr + d.fcr,
        highlight: HIGHLIGHT_YEARS[d.year],
      })),
    []
  );

  return (
    <div className="min-h-screen bg-[hsl(220,25%,6%)] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-6 text-xs font-medium">
            Market Intelligence
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Baltic BESS Revenue Index
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mb-6">
            Projected annual revenue per 1 MW / 2 MWh of battery energy storage in Latvia — 2025 to 2040
          </p>
          <p className="text-white/40 max-w-3xl leading-relaxed">
            This index models expected gross revenue for a 1 MW / 2 MWh battery energy storage system (BESS)
            participating in Baltic electricity markets. The 2025 baseline is derived from TSO data.
            Future projections apply market-specific decay factors to model saturation as storage
            capacity grows, and are cross-referenced against the Clean Horizon Storage Index for
            comparable European markets.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "€600,000", title: "2025 Baseline", label: "Based on TSO data for Latvia" },
            { value: "€351,000", title: "2031 Projected", label: "Approaching Sweden saturation level" },
            { value: "€232,000", title: "2036 Projected", label: "Approaching Germany saturation level" },
            { value: "12% → 30%", title: "DA Share Growth", label: "Day-ahead arbitrage share of revenue, 2025 to 2040" },
          ].map((m) => (
            <div
              key={m.title}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6"
            >
              <p className="text-2xl md:text-3xl font-display font-bold text-emerald-400 mb-1">
                {m.value}
              </p>
              <p className="text-sm font-semibold text-white/90 mb-1">{m.title}</p>
              <p className="text-xs text-white/40">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Model Assumptions */}
      <section className="pb-10 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Collapsible open={assumptionsOpen} onOpenChange={setAssumptionsOpen}>
            <CollapsibleTrigger className="flex items-center gap-2 w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-6 py-4 hover:bg-white/[0.05] transition-colors text-left">
              <span className="font-display font-semibold text-white text-sm flex-1">Model Assumptions</span>
              {assumptionsOpen ? (
                <ChevronUp className="h-4 w-4 text-white/40" />
              ) : (
                <ChevronDown className="h-4 w-4 text-white/40" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-2 bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <p className="text-xs text-white/40 mb-1">Battery</p>
                  <p className="text-sm font-mono text-white/80">1 MW / 2 MWh (2-hour duration)</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1">2025 Baseline</p>
                  <p className="text-sm font-mono text-white/80">€600,000 /MW/yr</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1">Baseline Source</p>
                  <p className="text-sm font-mono text-white/80">TSO</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1">Decay Factors</p>
                  <p className="text-sm font-mono text-white/80">DA: 0.98 · FRR: 0.90 · FCR: 0.95</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs text-white/40 mb-1">2025 Breakdown</p>
                  <p className="text-sm font-mono text-white/80">
                    DA €70,000 (11.67%) · FRR €492,000 (82.00%) · FCR €38,000 (6.33%)
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Table */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Revenue Projection Table</h2>
          <div className="border border-white/[0.06] rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-white/[0.06] hover:bg-transparent">
                  <TableHead className="text-white/50 font-medium">Year</TableHead>
                  <TableHead className="text-white/50 font-medium text-right">Day-Ahead (€)</TableHead>
                  <TableHead className="text-white/50 font-medium text-right">FRR (€)</TableHead>
                  <TableHead className="text-white/50 font-medium text-right">FCR (€)</TableHead>
                  <TableHead className="text-white/50 font-medium text-right">Total (€)</TableHead>
                  <TableHead className="text-white/50 font-medium" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableRows.map((r) => (
                  <TableRow
                    key={r.year}
                    className={`border-white/[0.04] ${
                      r.highlight
                        ? "bg-emerald-500/[0.06] hover:bg-emerald-500/[0.09]"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <TableCell className="font-display font-semibold text-white">{r.year}</TableCell>
                    <TableCell className="text-right font-mono text-white/70">{fmt(r.da)}</TableCell>
                    <TableCell className="text-right font-mono text-white/70">{fmt(r.frr)}</TableCell>
                    <TableCell className="text-right font-mono text-white/70">{fmt(r.fcr)}</TableCell>
                    <TableCell className="text-right font-mono font-semibold text-white">
                      {fmt(r.total)}
                    </TableCell>
                    <TableCell>
                      {r.highlight && (
                        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] whitespace-nowrap">
                          {r.highlight}
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Stacked Area Chart */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Revenue Projection Chart</h2>
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
            <ResponsiveContainer width="100%" height={420}>
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gDA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gFRR" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gFCR" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`}
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ paddingTop: 16, fontSize: 12, color: "rgba(255,255,255,0.5)" }}
                />
                <ReferenceLine
                  x={2031}
                  stroke="rgba(255,255,255,0.2)"
                  strokeDasharray="4 4"
                  label={{ value: "Sweden level", fill: "rgba(255,255,255,0.3)", fontSize: 10, position: "top" }}
                />
                <ReferenceLine
                  x={2032}
                  stroke="rgba(255,255,255,0.2)"
                  strokeDasharray="4 4"
                  label={{ value: "Finland level", fill: "rgba(255,255,255,0.3)", fontSize: 10, position: "top" }}
                />
                <ReferenceLine
                  x={2036}
                  stroke="rgba(255,255,255,0.2)"
                  strokeDasharray="4 4"
                  label={{ value: "Germany level", fill: "rgba(255,255,255,0.3)", fontSize: 10, position: "top" }}
                />
                <Area
                  type="monotone"
                  dataKey="Day-Ahead"
                  stackId="1"
                  stroke="#22c55e"
                  fill="url(#gDA)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="FRR"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="url(#gFRR)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="FCR"
                  stackId="1"
                  stroke="#f59e0b"
                  fill="url(#gFCR)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* DA Share Trend Chart */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-2">Day-Ahead Share of Revenue</h2>
          <p className="text-white/40 max-w-3xl leading-relaxed mb-6 text-sm">
            As balancing markets saturate, day-ahead arbitrage becomes a larger share of total
            revenue — driven by increasing renewable penetration and persistent price spreads.
          </p>
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={daShareData} margin={{ top: 10, right: 10, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                  domain={[0, 35]}
                />
                <Tooltip content={<DAShareTooltip />} />
                <Line
                  type="monotone"
                  dataKey="DA Share"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ fill: "#22c55e", r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Index Methodology</h2>
          <div className="space-y-4 text-white/60 leading-relaxed max-w-4xl">
            <p>
              The 2025 baseline of €600,000/MW/yr is derived from TSO data for a 1 MW / 2 MWh BESS
              in Latvia. For context, Clean Horizon reports Baltic 2h BESS revenues of €700K–€3.5M/MW/yr
              since the balancing market opened in February 2025. Our baseline sits below this range to
              account for operational ramp-up and seasonal variation.
            </p>
            <p>
              Future projections apply annual decay factors to each revenue stream to model increasing
              competition as more storage capacity enters the Baltic market. The decay factors are:
              Day-Ahead Arbitrage — 0.98 per year (slower decay, as increasing renewable penetration
              sustains and may increase price volatility), Frequency Restoration Reserve (aFRR + mFRR)
              — 0.90 per year (faster decay, because Baltic balancing markets are small and saturate
              quickly), Frequency Containment Reserve (FCR) — 0.95 per year (moderate decay, as FCR
              volumes are limited but more stable).
            </p>
            <p>
              Because balancing services decay faster than day-ahead arbitrage, the DA share of total
              revenue grows from approximately 12% in 2025 to over 30% by 2040. This reflects a
              structural transition from an ancillary-service-dominated revenue mix to a more
              trading-oriented model — consistent with the trajectory observed in more mature European
              storage markets.
            </p>
            <p>
              The model is cross-referenced against the Clean Horizon Storage Index (2-hour duration,
              2025 monthly averages) for comparable markets: Sweden SE3 (€367,500/MW/yr), Finland
              (€329,083/MW/yr), and Germany (€235,500/MW/yr). These represent progressively more mature
              storage markets. By 2031, projected Latvian revenue approaches the current Swedish level.
              By 2036, it approaches the current German level.
            </p>
            <p>
              The Baltic balancing market (FCR, aFRR, mFRR) opened in February 2025. All projections
              extrapolate from less than one full year of operating history. Revenue figures are gross —
              grid fees, taxes, degradation costs, and state-of-charge management costs are not deducted.
              The Clean Horizon Storage Index is calculated using the COSMOS optimisation tool with 1.5
              cycles/day constraint and historical market prices, and is now distributed via Nord Pool.
            </p>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Glossary</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {GLOSSARY.map((g) => (
              <div
                key={g.term}
                className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4"
              >
                <dt className="font-display font-semibold text-emerald-400 text-sm mb-1">
                  {g.term}
                </dt>
                <dd className="text-white/50 text-sm leading-relaxed">{g.def}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Estimate Revenue for Your Asset
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            Use our revenue calculator to get a personalized estimate based on your battery storage
            configuration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.forwardit.ai/#calculator"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold transition-colors text-center"
            >
              Open Revenue Calculator
            </a>
            <a
              href="mailto:info@forwardit.lv?subject=Technical Consultation Request"
              className="border border-white/20 text-white px-8 py-4 rounded-md font-medium hover:bg-white/5 transition-colors text-center"
            >
              Request Technical Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BessIndex;
