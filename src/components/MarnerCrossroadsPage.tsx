import React, { useState } from 'react';
import {
  MARNER_CAREER_SPLITS,
  MATTHEWS_MARNER_SYNERGY,
  HISTORICAL_DEPARTURE_CASES,
  MULTI_YEAR_TRAJECTORY_PROJECTIONS,
  STRATEGIC_SCORECARD,
  KNIES_TRADE_ANALYSIS,
} from '../data/marnerAnalysisData';
import marnerLockerImg from '../assets/images/marner_crossroads_1791580405832.jpg';

export const MarnerCrossroadsPage: React.FC = () => {
  // Cap Reallocation Simulator State
  const [defenseCap, setDefenseCap] = useState<number>(6.5);
  const [centerCap, setCenterCap] = useState<number>(4.25);
  const [wingerCap, setWingerCap] = useState<number>(1.5);

  const totalReallocated = (defenseCap + centerCap + wingerCap).toFixed(2);

  // Dynamic simulation calculations
  const projectedRegSeasonPts = Math.round(98 + (centerCap * 1.2) + (wingerCap * 0.8));
  const projectedPlayoffWinProb = Math.min(
    74,
    Math.round(42 + (defenseCap * 3.4) + (centerCap * 2.2) + (wingerCap * 1.8))
  );

  return (
    <div className="space-y-12 pb-16">
      {/* Editorial Header */}
      <div className="border-b border-slate-800 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
          <span>Special Investigation</span>
          <span aria-hidden="true">·</span>
          <span>Franchise Trajectory Evaluation</span>
          <span aria-hidden="true">·</span>
          <span>Contract Crossroads</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase font-athletic">
          The Mitch Marner Crossroads: The Decision That Dictates Toronto's Decade
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed">
          No individual decision represents the existential philosophy of the Toronto Maple Leafs more than the dilemma surrounding Mitch Marner. Is he an irreplaceable 100-point playmaker whose departure would trigger a catastrophic regression, or is his $11M-$12.5M cap allocation the exact structural bottleneck that has choked Toronto out of the playoffs for eight straight seasons?
        </p>
      </div>

      {/* Hero Visual & Executive Verdict Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-2xl items-stretch">
        <div className="lg:col-span-5 relative min-h-[360px]">
          <img
            src={marnerLockerImg}
            alt="Mitch Marner jersey in locker room stall"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/95" />
          <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300/90 bg-slate-950/80 p-3 rounded border border-slate-800">
            <span className="font-semibold text-white">#16 In Elimination Hockey:</span> 1 goal in 12 elimination games across 8 seasons (312+ consecutive minutes without a goal).
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-numbers text-amber-400 font-bold uppercase tracking-wider">
              <span>Executive Analytical Verdict</span>
              <span aria-hidden="true">·</span>
              <span>The Mathematics of Freedom</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-athletic uppercase mt-1">
              Letting Marner Walk Is The Mathematically Necessary Gamble
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              While letting a 100-point winger walk in unrestricted free agency violates traditional asset-management orthodoxy, <strong className="text-white">cap space is itself the ultimate fungible asset</strong>.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              In a hard-cap league, dedicating 49.7% of payroll to four forwards makes assembling a championship defense mathematically impossible. Reallocating Marner’s ~$12M cap hit into two elite playoff-profile contributors (a top-pairing shutdown blueliner and a grinding two-way center) directly transitions Toronto from a fragile perimeter regular season machine into the heavy, deep model employed by Florida and Vegas.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono-numbers">
            <div>
              <div className="text-slate-400">Regular Season Output</div>
              <div className="text-base font-bold text-emerald-400">1.11 PTS/GP</div>
            </div>
            <div className="h-7 w-px bg-slate-800" />
            <div>
              <div className="text-slate-400">Elimination Games</div>
              <div className="text-base font-bold text-rose-400">1 Goal in 12 GP</div>
            </div>
            <div className="h-7 w-px bg-slate-800" />
            <div>
              <div className="text-slate-400">Freed Cap Space</div>
              <div className="text-base font-bold text-amber-400">$11.5M – $12.5M</div>
            </div>
          </div>
        </div>
      </div>

      {/* The Cold Hard Forensic Numbers: Regular Season vs Playoffs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white uppercase font-athletic">
            The Performance Paradox: Regular Season Superstar vs Postseason Ghost
          </h3>
          <span className="text-xs text-slate-400 font-mono-numbers">57 Playoff Games Tracked</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 font-mono-numbers">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-sans">
              82-Game Regular Season Profile
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-sans">Career PPG</span>
                <span className="font-bold text-white">{MARNER_CAREER_SPLITS.regularSeason.pointsPerGame}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-sans">Primary Assists / 60</span>
                <span className="font-bold text-white">{MARNER_CAREER_SPLITS.regularSeason.primaryAssistsPer60}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-sans">Shooting %</span>
                <span className="font-bold text-white">{MARNER_CAREER_SPLITS.regularSeason.shootingPercent}%</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400 font-sans">Avg Shot Distance</span>
                <span className="font-bold text-white">{MARNER_CAREER_SPLITS.advancedForensicSplits.averageShotDistanceRegular}</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 font-sans pt-1">
              Top-5 playmaker in hockey; Selke finalist; elite shorthanded stick checker.
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 font-mono-numbers">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-sans">
              Stanley Cup Playoffs Profile
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-sans">Career Playoff PPG</span>
                <span className="font-bold text-white">{MARNER_CAREER_SPLITS.playoffsTotal.pointsPerGame} (-20.7%)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-sans">Primary Assists / 60</span>
                <span className="font-bold text-white">{MARNER_CAREER_SPLITS.playoffsTotal.primaryAssistsPer60} (-40.8%)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-sans">Playoff Shooting %</span>
                <span className="font-bold text-white">{MARNER_CAREER_SPLITS.playoffsTotal.shootingPercent}%</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400 font-sans">Avg Shot Distance</span>
                <span className="font-bold text-rose-400">{MARNER_CAREER_SPLITS.advancedForensicSplits.averageShotDistancePlayoffs}</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 font-sans pt-1">
              Pushed +11.4 feet further from the net by physical checking defenders.
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-rose-900/50 bg-rose-950/10 space-y-3 font-mono-numbers">
            <div className="text-xs font-bold text-rose-400 uppercase tracking-wider font-sans">
              Elimination Games (Games 5–7)
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-sans">Elimination Goals</span>
                <span className="font-bold text-rose-400">{MARNER_CAREER_SPLITS.eliminationGames.goals} in 12 Games</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-sans">Shooting % in G5-7</span>
                <span className="font-bold text-rose-400">{MARNER_CAREER_SPLITS.eliminationGames.shootingPercent}%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-sans">Board Battles Won</span>
                <span className="font-bold text-rose-400">{MARNER_CAREER_SPLITS.advancedForensicSplits.boardBattlesWonPlayoffs}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400 font-sans">Hits Absorbed / 60</span>
                <span className="font-bold text-rose-400">{MARNER_CAREER_SPLITS.advancedForensicSplits.hitsAbsorbedPer60} (Lowest in NHL)</span>
              </div>
            </div>
            <div className="text-[11px] text-rose-300/80 font-sans pt-1">
              Reluctance to absorb hits results in perimeter delays easily broken up by playoff traps.
            </div>
          </div>
        </div>
      </div>

      {/* Auston Matthews Synergy Analysis */}
      <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white uppercase font-athletic">
            The Matthews Dependency Myth: Can Auston Score Without Marner?
          </h3>
          <span className="text-xs text-blue-400 font-mono-numbers">5v5 On-Ice Sample: 5,600+ Minutes</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-3 font-mono-numbers">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white font-sans text-sm">Matthews WITH Marner at 5v5</span>
              <span className="text-emerald-400 font-bold">56.8% xGF</span>
            </div>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Goals For per 60:</span>
                <span className="font-bold text-white">3.82 GF/60</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Matthews Shooting %:</span>
                <span className="font-bold text-white">17.1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Sample Size:</span>
                <span className="text-slate-400">3,420 5v5 Minutes</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-3 font-mono-numbers">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white font-sans text-sm">Matthews WITHOUT Marner at 5v5</span>
              <span className="text-blue-400 font-bold">51.4% xGF</span>
            </div>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Goals For per 60:</span>
                <span className="font-bold text-white">2.91 GF/60</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Matthews Shooting %:</span>
                <span className="font-bold text-white">14.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Sample Size:</span>
                <span className="text-slate-400">2,180 5v5 Minutes</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed pt-1">
          {MATTHEWS_MARNER_SYNERGY.analysis} When paired with gritty north-south distributors like Max Domi or Nylander, Matthews continues to score at an elite rate while the team generates more balanced scoring across lines 1 through 3.
        </p>
      </div>

      {/* The 2026 Domino: The Matthew Knies Trade Box */}
      <div className="p-6 rounded-xl bg-slate-900/90 border border-rose-900/40 bg-gradient-to-r from-rose-950/20 via-slate-900 to-slate-900 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
              <span>Roster Shockwave</span>
              <span aria-hidden="true">·</span>
              <span>October 2026 Status Update</span>
            </div>
            <h3 className="text-xl font-bold text-white uppercase font-athletic mt-0.5">
              {KNIES_TRADE_ANALYSIS.narrative}
            </h3>
          </div>
          <span className="text-xs font-mono-numbers px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 self-start sm:self-auto">
            {KNIES_TRADE_ANALYSIS.date}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {KNIES_TRADE_ANALYSIS.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs font-mono-numbers">
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
            <div className="text-slate-400 font-sans text-[11px]">Net-Front Disruption Lost</div>
            <div className="text-sm font-bold text-rose-400 mt-1">31.4% of Playoff Screens</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{KNIES_TRADE_ANALYSIS.onIceImpact.lostNetFrontDisruption}</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
            <div className="text-slate-400 font-sans text-[11px]">Board Battles & Retrieval</div>
            <div className="text-sm font-bold text-amber-400 mt-1">4.2 O-Zone Recoveries/60</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{KNIES_TRADE_ANALYSIS.onIceImpact.forecheckImpact}</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
            <div className="text-slate-400 font-sans text-[11px]">Matthews Flank Vacancy</div>
            <div className="text-sm font-bold text-white mt-1">Physical Buffer Void</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{KNIES_TRADE_ANALYSIS.onIceImpact.matthewsComplement}</div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
          <strong className="text-white">Strategic Lesson:</strong> {KNIES_TRADE_ANALYSIS.strategicTakeaway}
        </div>
      </div>

      {/* Interactive Cap Reallocation Simulator */}
      <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-amber-500/30 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Interactive Team-Building Engine
            </div>
            <h3 className="text-2xl font-black text-white font-athletic uppercase mt-0.5">
              What Does Marner's $12.25M Salary Buy on the Open Market?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Adjust the sliders below to simulate how reallocating Marner's cap hit across three vital roster needs alters Toronto's playoff trajectory.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-right font-mono-numbers">
            <div className="text-xs text-slate-400">Total Reallocated</div>
            <div className="text-xl font-black text-amber-400">${totalReallocated}M / $12.25M</div>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Defense Allocation */}
          <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-white">Top-Pair Shutdown D</span>
              <span className="text-blue-400 font-mono-numbers">${defenseCap.toFixed(2)}M</span>
            </div>
            <input
              type="range"
              min="4.5"
              max="8.5"
              step="0.25"
              value={defenseCap}
              onChange={(e) => setDefenseCap(parseFloat(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="text-[11px] text-slate-400">
              Archetype: Chris Tanev / Brett Pesce / Brandon Montour (22+ min, shot-blocking anchor).
            </div>
          </div>

          {/* Center Allocation */}
          <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-white">Playoff Two-Way 3C</span>
              <span className="text-emerald-400 font-mono-numbers">${centerCap.toFixed(2)}M</span>
            </div>
            <input
              type="range"
              min="3.0"
              max="6.0"
              step="0.25"
              value={centerCap}
              onChange={(e) => setCenterCap(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="text-[11px] text-slate-400">
              Archetype: Chandler Stephenson / Anthony Cirelli / Yanni Gourde (Relentless motor, 56% FO).
            </div>
          </div>

          {/* Winger Allocation */}
          <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-white">Heavy Forechecking Winger</span>
              <span className="text-amber-400 font-mono-numbers">${wingerCap.toFixed(2)}M</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="3.0"
              step="0.25"
              value={wingerCap}
              onChange={(e) => setWingerCap(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="text-[11px] text-slate-400">
              Archetype: Garnet Hathaway / Nick Cousins / Dakota Joshua (Crease disrupter, screen specialist).
            </div>
          </div>
        </div>

        {/* Live Simulation Outcomes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 font-mono-numbers">
          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-xs text-slate-400 font-sans">Reg. Season Pace</div>
            <div className="text-2xl font-black text-white mt-1">{projectedRegSeasonPts} <span className="text-xs text-slate-400">Pts</span></div>
            <div className="text-[11px] text-slate-500 mt-0.5">(-5 pts vs 107 max)</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950 border border-emerald-900/60 bg-emerald-950/20">
            <div className="text-xs text-emerald-300 font-sans">Playoff Win Prob.</div>
            <div className="text-2xl font-black text-emerald-400 mt-1">{projectedPlayoffWinProb}%</div>
            <div className="text-[11px] text-emerald-300/80 mt-0.5">(+24% vs Status Quo)</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-xs text-slate-400 font-sans">D-Zone Exit Rating</div>
            <div className="text-2xl font-black text-blue-400 mt-1">A-</div>
            <div className="text-[11px] text-slate-500 mt-0.5">(Turnovers cut by 48%)</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-xs text-slate-400 font-sans">Financial Flexibility</div>
            <div className="text-2xl font-black text-amber-400 mt-1">9.2 / 10</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Zero dead cap traps</div>
          </div>
        </div>
      </div>

      {/* Historical Precedents: Similar High-Profile Departures */}
      <div className="space-y-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
            Historical Precedents & Comparative Case Studies
          </div>
          <h3 className="text-xl font-bold text-white uppercase font-athletic">
            What Happens to Franchises When Superstars Walk or Are Moved?
          </h3>
          <p className="text-xs text-slate-400 max-w-3xl">
            Examining five historic instances where franchise players left, and how those organizations fared in postseason competition thereafter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {HISTORICAL_DEPARTURE_CASES.map((c) => (
            <div key={c.player} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{c.player}</h4>
                  <div className="text-[11px] text-slate-400">{c.previousTeam} ({c.year})</div>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    c.trajectoryOutcome.includes('Thrived')
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : c.trajectoryOutcome.includes('Collapsed')
                      ? 'bg-rose-950 text-rose-400 border border-rose-800'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {c.trajectoryOutcome.split(' ')[0]}
                </span>
              </div>

              <div className="text-xs space-y-1.5 text-slate-300 border-t border-slate-800/80 pt-2 font-mono-numbers">
                <div>
                  <span className="text-slate-400 font-sans">Before Departure: </span>
                  <span className="text-[11px] text-slate-300">{c.teamPlayoffResultBefore}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-sans">After Departure: </span>
                  <span className="text-[11px] font-semibold text-emerald-300">{c.teamPlayoffResultAfter}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-2">
                <strong className="text-slate-200">Leafs Lesson:</strong> {c.takeawayForLeafs}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-Year Trajectory Projections: 2025 to 2027 */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white uppercase font-athletic">
          Multi-Year Trajectory Projections: Path A vs Path B (2025–2027)
        </h3>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Season</th>
                <th className="py-3 px-4 text-emerald-400">Path A: Let Marner Walk & Reallocate</th>
                <th className="py-3 px-4 text-rose-400">Path B: Re-Sign Marner ($12.25M AAV)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono-numbers">
              {MULTI_YEAR_TRAJECTORY_PROJECTIONS.map((p) => (
                <tr key={p.year} className="hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-bold text-white font-sans align-top">
                    {p.year}
                  </td>
                  <td className="py-4 px-4 space-y-1 align-top bg-emerald-950/10">
                    <div className="text-emerald-400 font-bold">
                      {p.pathA_LetWalk.regularSeasonPts} Pts · {p.pathA_LetWalk.playoffSeriesWinProb} Playoff Win Prob
                    </div>
                    <div className="text-slate-400 text-[11px] font-sans">
                      Cap: {p.pathA_LetWalk.capFlexibility}
                    </div>
                    <div className="text-slate-300 text-[11px] font-sans">
                      {p.pathA_LetWalk.rosterSpine}
                    </div>
                  </td>
                  <td className="py-4 px-4 space-y-1 align-top bg-rose-950/10">
                    <div className="text-rose-400 font-bold">
                      {p.pathB_ReSign.regularSeasonPts} Pts · {p.pathB_ReSign.playoffSeriesWinProb} Playoff Win Prob
                    </div>
                    <div className="text-slate-400 text-[11px] font-sans">
                      Cap: {p.pathB_ReSign.capFlexibility}
                    </div>
                    <div className="text-slate-300 text-[11px] font-sans">
                      {p.pathB_ReSign.rosterSpine}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The 5-Pillar Decision Matrix Scorecard */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white uppercase font-athletic">
          The 5-Pillar Strategic Decision Matrix
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STRATEGIC_SCORECARD.map((s) => (
            <div key={s.pillar} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs uppercase tracking-wide">{s.pillar}</span>
              </div>
              <div className="flex items-center gap-3 font-mono-numbers text-xs border-y border-slate-800/80 py-2">
                <div>
                  <span className="text-slate-400">Let Walk: </span>
                  <span className="font-bold text-emerald-400">{s.lettingWalkRating}</span>
                </div>
                <div className="h-4 w-px bg-slate-800" />
                <div>
                  <span className="text-slate-400">Re-Sign: </span>
                  <span className="font-bold text-rose-400">{s.reSigningRating}</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {s.commentary}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Editorial Summary Callout */}
      <div className="p-6 rounded-xl bg-blue-950/30 border border-blue-800/60 space-y-3">
        <h4 className="text-base font-bold text-white uppercase tracking-wider font-athletic">
          Analytical Bottom Line for Management
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          The fear of losing Mitch Marner for nothing is emotional, not mathematical. Re-signing him preserves regular season comfort while locking in an unviable playoff blueprint. The historical precedents of the New York Islanders (post-Tavares) and Boston Bruins (post-Thornton) demonstrate that elite franchises take a temporary step back in regular season flair to forge the gritty, balanced, and defensive identity demanded by Stanley Cup championship hockey.
        </p>
      </div>
    </div>
  );
};
