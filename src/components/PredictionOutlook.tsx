import React, { useState } from 'react';
import {
  PREDICTION_FACTORS,
  THE_FOUR_INVARIANTS,
  ANALYTIC_PREDICTION_SUMMARY,
} from '../data/predictionModelData';

export const PredictionOutlook: React.FC = () => {
  // Interactive Curse Breaker simulator state
  const [screenRate, setScreenRate] = useState<number>(11.2);
  const [ppPercent, setPpPercent] = useState<number>(14.8);
  const [dZoneTurnovers, setDZoneTurnovers] = useState<number>(14.8);
  const [goalieGSAx, setGoalieGSAx] = useState<number>(0.5);

  // Dynamic calculated probability based on user inputs
  const simulatedRound1Win = Math.min(
    92,
    Math.max(
      15,
      Math.round(
        35 +
        ((screenRate - 11.2) * 2.1) +
        ((ppPercent - 14.8) * 1.6) -
        ((dZoneTurnovers - 7.4) * 1.8) +
        (goalieGSAx * 3.5)
      )
    )
  );

  const simulatedCupProb = Math.min(
    28,
    Math.max(1, Math.round((simulatedRound1Win / 100) ** 3 * 25))
  );

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
          <span>Forecasting Model</span>
          <span aria-hidden="true">·</span>
          <span>Tactical Upgrades & Reality Check</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight font-athletic uppercase">
          What Is Potentially Different This Year? The Algorithmic Verdict
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
          Has Toronto finally fixed the mechanical flaws that sabotaged previous postseasons, or are they doomed to repeat the cycle? We evaluate the Jim Hiller coaching transition (hired June 17, 2026), the Kirill Marchenko trade acquisition, and test them against the Four Playoff Invariants.
        </p>
      </div>

      {/* The Honest Algorithmic Prediction Banner */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-900 border border-rose-900/50 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
              The Cold Hard Algorithmic Prediction
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-athletic uppercase mt-0.5">
              {ANALYTIC_PREDICTION_SUMMARY.headlineVerdict}
            </h3>
          </div>
          <div className="text-right font-mono-numbers">
            <div className="text-xs text-slate-400">Exit Probability (R1 or R2)</div>
            <div className="text-2xl font-black text-rose-400">{ANALYTIC_PREDICTION_SUMMARY.baselineEliminationProbability}%</div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {ANALYTIC_PREDICTION_SUMMARY.modelRationale}
        </p>

        {/* Round by Round Probability Table */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 font-mono-numbers text-xs">
          {ANALYTIC_PREDICTION_SUMMARY.winProbabilityMatrix.map((item) => (
            <div key={item.round} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-sans truncate">{item.round}</div>
              <div className="text-lg font-bold text-white mt-1">{item.winProb}%</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Hist: {item.historicalComparison}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What Has Actually Changed: Roster & Coaching Audit */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white uppercase font-athletic">
          Roster & Systemic Modifications: The Upgrade Audit
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PREDICTION_FACTORS.map((f) => (
            <div key={f.factor} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs uppercase tracking-wide truncate max-w-[200px]">
                  {f.factor.split('(')[0]}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    f.verdict === 'Upgraded'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : f.verdict === 'Vulnerable'
                      ? 'bg-rose-950 text-rose-400 border border-rose-800'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {f.verdict}
                </span>
              </div>

              <div className="text-xs space-y-1.5 text-slate-300 border-t border-slate-800/80 pt-2">
                <div>
                  <span className="text-slate-400">Previous Era: </span>
                  <span className="text-slate-300 text-[11px]">{f.historicTrend}</span>
                </div>
                <div>
                  <span className="text-slate-400">Current Era: </span>
                  <span className="text-white text-[11px] font-medium">{f.currentYearChange}</span>
                </div>
              </div>

              <p className="text-[11px] text-blue-300/80 leading-relaxed border-t border-slate-800/60 pt-2">
                <strong>Impact:</strong> {f.impactDescription}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* The Four Playoff Invariants */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white uppercase font-athletic">
            The Four Playoff Invariants: The Statistical Gates
          </h3>
          <p className="text-xs text-slate-400">
            Four objective thresholds that historically separate Stanley Cup champions from first-round casualties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {THE_FOUR_INVARIANTS.map((inv) => (
            <div key={inv.invariant} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 font-mono-numbers">
              <div className="font-bold text-white text-xs font-sans">{inv.invariant}</div>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800/60">
                <span className="text-slate-400 font-sans">Leafs Historical:</span>
                <span className="text-rose-400 font-bold">{inv.currentLeafsValue}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-sans">Target Bar:</span>
                <span className="text-emerald-400 font-bold">{inv.targetBenchmark}</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed pt-1">
                {inv.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Curse-Breaker Simulation Engine */}
      <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-blue-500/30 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Interactive Mathematical Model
            </div>
            <h3 className="text-2xl font-black text-white font-athletic uppercase mt-0.5">
              The "Curse Breaker" Playoff Simulator
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Adjust the tactical metrics below to see what combination of changes can mathematically push Toronto into genuine Stanley Cup contention.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-right font-mono-numbers">
            <div className="text-xs text-slate-400">Simulated R1 Win Prob</div>
            <div className="text-2xl font-black text-emerald-400">{simulatedRound1Win}%</div>
          </div>
        </div>

        {/* 4 Interactive Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-white font-semibold">Screen Rate %</span>
              <span className="text-blue-400 font-mono-numbers font-bold">{screenRate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="8"
              max="28"
              step="0.5"
              value={screenRate}
              onChange={(e) => setScreenRate(parseFloat(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="text-[10px] text-slate-500">Historical: 11.2% · Target: 25.4%</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-white font-semibold">Playoff PP%</span>
              <span className="text-blue-400 font-mono-numbers font-bold">{ppPercent.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="4"
              max="30"
              step="0.5"
              value={ppPercent}
              onChange={(e) => setPpPercent(parseFloat(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="text-[10px] text-slate-500">Historical: 14.8% · Target: 22.0%</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-white font-semibold">D-Zone Giveaways/60</span>
              <span className="text-amber-400 font-mono-numbers font-bold">{dZoneTurnovers.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              step="0.5"
              value={dZoneTurnovers}
              onChange={(e) => setDZoneTurnovers(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="text-[10px] text-slate-500">Historical: 14.8 · Target: 7.4</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-white font-semibold">Goalie GSAx / Series</span>
              <span className="text-emerald-400 font-mono-numbers font-bold">+{goalieGSAx.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="-6"
              max="8"
              step="0.5"
              value={goalieGSAx}
              onChange={(e) => setGoalieGSAx(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="text-[10px] text-slate-500">Historical: -0.8 · Target: +4.0</div>
          </div>
        </div>

        {/* Live Simulation Summary */}
        <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-numbers">
          <div className="space-y-1 text-slate-300 font-sans">
            <div className="font-bold text-white text-sm">Simulated Playoff Result:</div>
            <div>
              {simulatedRound1Win < 45
                ? 'High Risk of another 1st Round Collapse in Games 6 or 7.'
                : simulatedRound1Win < 65
                ? 'Competitive First Round Survival; Second Round Exit against heavy forecheck.'
                : 'Legitimate Eastern Conference Finalist and Stanley Cup Contender Profile.'}
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <div className="text-slate-400 font-sans">Stanley Cup Odds</div>
              <div className="text-xl font-black text-blue-400">{simulatedCupProb}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
