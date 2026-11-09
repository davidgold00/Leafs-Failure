import React, { useState } from 'react';

interface TrendMetricDetail {
  id: string;
  label: string;
  unit: string;
  regSeason: number;
  playoffs: number;
  closeouts: number;
  cupWinner: number;
  deltaPercent: number; // change from reg to closeout
  tacticalReason: string;
  cupWinnerDifference: string;
}

const TREND_METRICS: TrendMetricDetail[] = [
  {
    id: 'sh-pct',
    label: '5v5 Shooting Percentage',
    unit: '%',
    regSeason: 9.8,
    playoffs: 6.1,
    closeouts: 4.4,
    cupWinner: 9.6,
    deltaPercent: -55.1,
    tacticalReason: 'Defenses pack the low slot in elimination games, forcing Toronto to shoot from 29+ feet out where shooting percentages drop to 4%.',
    cupWinnerDifference: 'Cup champions like Florida (8.8%) and Vegas (10.2%) maintain shooting percentages by generating dirty net-front rebounds.',
  },
  {
    id: 'pp-pct',
    label: 'Power Play Conversion Rate',
    unit: '%',
    regSeason: 25.4,
    playoffs: 14.8,
    closeouts: 10.6,
    cupWinner: 23.2,
    deltaPercent: -58.3,
    tacticalReason: 'Opposing penalty kills pre-scout the predictable half-wall umbrella and aggressively flush the puck carrier, knowing Toronto lacks a point slapshot.',
    cupWinnerDifference: 'Stanley Cup winners deploy heavy point shooters and two-flank one-timer threats to prevent penalty kills from cheating toward one circle.',
  },
  {
    id: 'screen-rate',
    label: 'Net-Front Screen Rate on Shots',
    unit: '%',
    regSeason: 18.5,
    playoffs: 11.2,
    closeouts: 9.4,
    cupWinner: 25.4,
    deltaPercent: -49.2,
    tacticalReason: 'Toronto forwards historically avoided paying the physical toll in the crease. Opposing goalies see over 88% of shots cleanly.',
    cupWinnerDifference: 'Florida (26.1%) and Vegas (24.5%) lead the NHL in screening opposing goalies, creating screens and deflections that beat elite goalies.',
  },
  {
    id: 'rush-chances',
    label: 'Rush Scoring Chances per 60',
    unit: '/60',
    regSeason: 6.8,
    playoffs: 3.9,
    closeouts: 2.7,
    cupWinner: 4.8,
    deltaPercent: -60.3,
    tacticalReason: 'In the regular season, opponents give up open ice. In the playoffs, structured 1-2-2 neutral trap defenses choke off rush transition entirely.',
    cupWinnerDifference: 'Championship teams do not rely exclusively on rush offense; they thrive on heavy dump-and-chase board battles and prolonged offensive-zone cycles.',
  },
  {
    id: 'dzone-giveaways',
    label: 'D-Zone Giveaways Under Forecheck',
    unit: '/60',
    regSeason: 9.4,
    playoffs: 14.8,
    closeouts: 17.2,
    cupWinner: 7.4,
    deltaPercent: 83.0,
    tacticalReason: 'When heavy forechecks pin Toronto defensemen against the end boards, panicky blind reverse passes lead directly to slot turnovers.',
    cupWinnerDifference: 'Championship bluelines (e.g. Vegas\' 6\'3"+ defensemen) absorb forechecking hits and execute clean, simple chips into neutral ice.',
  },
  {
    id: 'closeout-goals',
    label: 'Goals Scored per Game',
    unit: ' G/GP',
    regSeason: 3.62,
    playoffs: 2.38,
    closeouts: 1.95,
    cupWinner: 3.45,
    deltaPercent: -46.1,
    tacticalReason: 'The ultimate bottom line: across 14 elimination/closeout games in the Matthews era, Toronto scored 2 or fewer goals in 11 of them.',
    cupWinnerDifference: 'Cup winners maintain a scoring floor of 3.2+ goals per game in elimination contests through balanced depth across lines 1 through 3.',
  },
];

export const InteractiveTrendChart: React.FC = () => {
  const [selectedMetricId, setSelectedMetricId] = useState<string>('sh-pct');
  const [hoveredStage, setHoveredStage] = useState<'reg' | 'playoff' | 'closeout' | 'cup' | null>(null);

  const metric = TREND_METRICS.find(m => m.id === selectedMetricId) || TREND_METRICS[0];

  // Max value calculation for bar chart scaling
  const maxValue = Math.max(metric.regSeason, metric.playoffs, metric.closeouts, metric.cupWinner) * 1.25;

  const getBarHeight = (val: number) => {
    return Math.max(12, Math.round((val / maxValue) * 160));
  };

  return (
    <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
      {/* Header & Metric Picker */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
            <span>Interactive Data Visualizer</span>
            <span aria-hidden="true">·</span>
            <span>Hover to Inspect Breakdown</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-athletic tracking-wide">
            The Playoff Variance Engine
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Select any metric below to observe the dramatic drop between the 82-game regular season, playoff series totals, and must-win elimination games.
          </p>
        </div>

        {/* Metric Selector Buttons */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg shrink-0">
          {TREND_METRICS.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMetricId(m.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedMetricId === m.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {m.label.split(' ')[0]} {m.label.split(' ')[1] || ''}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive SVG Bar Chart (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950/70 p-5 rounded-xl border border-slate-800/80">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-6 font-mono-numbers">
            <span className="font-sans font-semibold text-white">{metric.label}</span>
            <span className={metric.deltaPercent < 0 ? 'text-rose-400 font-bold' : 'text-amber-400 font-bold'}>
              Variance: {metric.deltaPercent > 0 ? `+${metric.deltaPercent}%` : `${metric.deltaPercent}%`}
            </span>
          </div>

          {/* SVG Visual Bars with Hover Targets */}
          <div className="flex items-end justify-between gap-3 sm:gap-6 h-52 px-2 sm:px-6 border-b border-slate-800 pb-2">
            {/* Bar 1: Regular Season */}
            <div
              className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
              onMouseEnter={() => setHoveredStage('reg')}
              onMouseLeave={() => setHoveredStage(null)}
            >
              <span className="text-xs font-mono-numbers font-bold text-emerald-400">
                {metric.regSeason}{metric.unit}
              </span>
              <div
                style={{ height: `${getBarHeight(metric.regSeason)}px` }}
                className={`w-full max-w-[54px] rounded-t-md transition-all ${
                  hoveredStage === 'reg'
                    ? 'bg-emerald-400 shadow-lg shadow-emerald-500/20'
                    : 'bg-emerald-600/80 group-hover:bg-emerald-500'
                }`}
              />
              <span className="text-[11px] font-medium text-slate-400 text-center leading-tight">
                Regular Season
              </span>
            </div>

            {/* Bar 2: Playoffs Total */}
            <div
              className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
              onMouseEnter={() => setHoveredStage('playoff')}
              onMouseLeave={() => setHoveredStage(null)}
            >
              <span className="text-xs font-mono-numbers font-bold text-blue-400">
                {metric.playoffs}{metric.unit}
              </span>
              <div
                style={{ height: `${getBarHeight(metric.playoffs)}px` }}
                className={`w-full max-w-[54px] rounded-t-md transition-all ${
                  hoveredStage === 'playoff'
                    ? 'bg-blue-400 shadow-lg shadow-blue-500/20'
                    : 'bg-blue-600/80 group-hover:bg-blue-500'
                }`}
              />
              <span className="text-[11px] font-medium text-slate-400 text-center leading-tight">
                Playoffs (Total)
              </span>
            </div>

            {/* Bar 3: Elimination Games */}
            <div
              className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
              onMouseEnter={() => setHoveredStage('closeout')}
              onMouseLeave={() => setHoveredStage(null)}
            >
              <span className="text-xs font-mono-numbers font-bold text-rose-400">
                {metric.closeouts}{metric.unit}
              </span>
              <div
                style={{ height: `${getBarHeight(metric.closeouts)}px` }}
                className={`w-full max-w-[54px] rounded-t-md transition-all ${
                  hoveredStage === 'closeout'
                    ? 'bg-rose-400 shadow-lg shadow-rose-500/30'
                    : 'bg-rose-600 group-hover:bg-rose-500'
                }`}
              />
              <span className="text-[11px] font-bold text-rose-400 text-center leading-tight">
                Elimination G5-7
              </span>
            </div>

            {/* Bar 4: Stanley Cup Champions */}
            <div
              className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
              onMouseEnter={() => setHoveredStage('cup')}
              onMouseLeave={() => setHoveredStage(null)}
            >
              <span className="text-xs font-mono-numbers font-bold text-amber-300">
                {metric.cupWinner}{metric.unit}
              </span>
              <div
                style={{ height: `${getBarHeight(metric.cupWinner)}px` }}
                className={`w-full max-w-[54px] rounded-t-md border-t-2 border-dashed border-amber-400 transition-all ${
                  hoveredStage === 'cup'
                    ? 'bg-amber-500 shadow-lg shadow-amber-500/20'
                    : 'bg-amber-600/70 group-hover:bg-amber-500'
                }`}
              />
              <span className="text-[11px] font-medium text-amber-300 text-center leading-tight">
                Cup Winner Bar
              </span>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-slate-400 text-center">
            Tip: Hover over or tap any column above to inspect the strategic cause.
          </div>
        </div>

        {/* Dynamic Detail Card (5 Cols) */}
        <div className="lg:col-span-5 p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              {hoveredStage === 'reg'
                ? 'Phase 1: Regular Season Baseline'
                : hoveredStage === 'playoff'
                ? 'Phase 2: Playoff Attrition'
                : hoveredStage === 'closeout'
                ? 'Phase 3: The Elimination Game Wall'
                : hoveredStage === 'cup'
                ? 'Benchmark: Stanley Cup Champion Model'
                : 'Analytical Takeaway'}
            </span>
            <span className="text-xs text-slate-400 font-mono-numbers">
              {metric.unit}
            </span>
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <div>
              <div className="font-semibold text-white text-sm mb-1">
                The Mechanical Flaw:
              </div>
              <p className="text-slate-300">
                {metric.tacticalReason}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <div className="font-semibold text-amber-300 text-xs mb-1">
                How Champions Solve It:
              </div>
              <p className="text-slate-400">
                {metric.cupWinnerDifference}
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 font-mono-numbers text-xs flex justify-between items-center">
            <span className="text-slate-400">Closeout vs. Champion Gap:</span>
            <span className="font-bold text-rose-400">
              {(metric.cupWinner - metric.closeouts).toFixed(1)}{metric.unit} deficit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
