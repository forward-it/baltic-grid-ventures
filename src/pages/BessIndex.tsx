import { useMemo } from "react";
import {
  AreaChart,
  Area,
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
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DATA = [
  { year: 2025, da: 70000, frr: 492000, fcr: 38000 },
  { year: 2026, da: 66500, frr: 442800, fcr: 36100 },
  { year: 2027, da: 63175, frr: 398520, fcr: 34295 },
  { year: 2028, da: 60016.25, frr: 358668, fcr: 32580.25 },
  { year: 2029, da: 57015.44, frr: 322801.2, fcr: 30951.24 },
  { year: 2030, da: 54164.67, frr: 290521.08, fcr: 29403.68 },
  { year: 2031, da: 51456.43, frr: 261468.97, fcr: 27933.49 },
  { year: 2032, da: 48883.61, frr: 235322.07, fcr: 26536.82 },
  { year: 2033, da: 46439.43, frr: 211789.87, fcr: 25209.98 },
  { year: 2034, da: 44117.46, frr: 190610.88, fcr: 23949.48 },
  { year: 2035, da: 41911.59, frr: 171549.79, fcr: 22752 },
  { year: 2036, da: 39816.01, frr: 154394.81, fcr: 21614.4 },
  { year: 2037, da: 37825.21, frr: 138955.33, fcr: 20533.68 },
  { year: 2038, da: 35933.95, frr: 125059.8, fcr: 19507 },
  { year: 2039, da: 34137.25, frr: 112553.82, fcr: 18531.65 },
  { year: 2040, da: 32430.39, frr: 101298.44, fcr: 17605.07 },
];

const fmt = (v: number) =>
  "€" + v.toLocaleString("en-US", { maximumFractionDigits: 0 });

const HIGHLIGHT_YEARS: Record<number, string> = {
  2025: "Current — Clean Horizon Storage Index of Latvia",
  2036: "Projected — Clean Horizon Storage Index of Sweden",
  2040: "Projected — Clean Horizon Storage Index of Finland",
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

const BessIndex = () => {
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
      {/* Nav */}
      <nav className="border-b border-white/5 bg-[hsl(220,25%,8%)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Forward Power Markets
          </Link>
        </div>
      </nav>

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
            participating in Baltic electricity markets. Projections are based on current market data
            from the Clean Horizon Storage Index and model future market saturation using empirically
            derived decay factors.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "€600,000", title: "2025 Revenue per MW", label: "Current Clean Horizon Storage Index (Latvia)" },
            { value: "€215,825", title: "2036 Projected", label: "Reaching Sweden saturation level" },
            { value: "€151,334", title: "2040 Projected", label: "Reaching Finland saturation level" },
            { value: "3 Revenue Streams", title: "Market Participation", label: "Day-Ahead · FRR · FCR" },
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

      {/* Chart */}
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
                  x={2025}
                  stroke="rgba(255,255,255,0.2)"
                  strokeDasharray="4 4"
                  label={{ value: "Latvia (current)", fill: "rgba(255,255,255,0.3)", fontSize: 10, position: "top" }}
                />
                <ReferenceLine
                  x={2036}
                  stroke="rgba(255,255,255,0.2)"
                  strokeDasharray="4 4"
                  label={{ value: "Sweden level", fill: "rgba(255,255,255,0.3)", fontSize: 10, position: "top" }}
                />
                <ReferenceLine
                  x={2040}
                  stroke="rgba(255,255,255,0.2)"
                  strokeDasharray="4 4"
                  label={{ value: "Finland level", fill: "rgba(255,255,255,0.3)", fontSize: 10, position: "top" }}
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

      {/* Methodology */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Index Methodology</h2>
          <div className="space-y-4 text-white/60 leading-relaxed max-w-4xl">
            <p>
              The 2025 baseline reflects actual market data: average gross revenue of €600,000 per
              1 MW / 2 MWh of battery storage capacity in Latvia, sourced from the Clean Horizon Storage
              Index.
            </p>
            <p>
              Future projections apply market saturation decay factors to each revenue stream to
              model increasing competition as more storage capacity enters the Baltic market. The
              decay factors used are: Day-Ahead Arbitrage — 0.95 per year, Frequency Restoration
              Reserve (aFRR + mFRR) — 0.90 per year, Frequency Containment Reserve (FCR) — 0.95
              per year. The Frequency Restoration Reserve decays faster because balancing markets in
              the Baltics are smaller and saturate more quickly.
            </p>
            <p>
              The model is calibrated against current storage revenue benchmarks in comparable Nordic
              markets. By 2036, projected Latvian revenue converges with the current Clean Horizon
              Storage Index of Sweden. By 2040, it converges with the current Clean Horizon Storage
              Index of Finland — both more mature storage markets.
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
