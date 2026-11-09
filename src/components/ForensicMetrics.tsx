import React, { useState } from 'react';
import { CORE_METRIC_DISPARITIES, GOALTENDING_DEEP_DIVE } from '../data/advancedMetricsData';
import { InteractiveTrendChart } from './InteractiveTrendChart';

export const ForensicMetrics: React.FC = () => {
  const [activeVector, setActiveVector] = useState<'rush' | 'powerplay' | 'goalies' | 'defense' | 'slot'>('rush');
  const [activeTableFilter, setActiveTableFilter] = useState<'all' | 'catastrophic'>('all');

  const filteredMetrics = CORE_METRIC_DISPARITIES.filter(m =>
    activeTableFilter === 'all' ? true : m.verdict === 'Catastrophic'
  );

  return (
    <div className="space-y-10">
      {/* Header section */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
          <span>Root Cause Analysis</span>
          <span aria-hidden="true">·</span>
          <span>Advanced Statistical Breakdown</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight font-athletic uppercase">
          The Anatomy of Failure: 5 Forensic Vectors
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
          Why do high standings fail to translate into postseason wins? Tracking data uncovers distinct mechanical breakdown points that recur every spring, invisible to standard box scores.
        </p>
      </div>

      {/* Vector Selector Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto">
        <button
          onClick={() => setActiveVector('rush')}
          className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
            activeVector === 'rush' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          1. Rush vs Heavy Forecheck
        </button>
        <button
          onClick={() => setActiveVector('powerplay')}
          className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
            activeVector === 'powerplay' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          2. Power Play Freeze
        </button>
        <button
          onClick={() => setActiveVector('goalies')}
          className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
            activeVector === 'goalies' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          3. Goaltending: Scapegoat or Reality?
        </button>
        <button
          onClick={() => setActiveVector('defense')}
          className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
            activeVector === 'defense' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          4. D-Zone Transition Fragility
        </button>
        <button
          onClick={() => setActiveVector('slot')}
          className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
            activeVector === 'slot' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          5. Slot Shrinkage & Screen Deficit
        </button>
      </div>

      {/* Dynamic Vector Content Area */}
      <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800">
        {activeVector === 'rush' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Vector 01</span>
                <h3 className="text-xl font-bold text-white mt-1">The Regular Season Mirage: Rush Offense Disappearance</h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono-numbers">
                <div>
                  <div className="text-slate-400">Regular Season Rush xGF</div>
                  <div className="text-lg font-bold text-emerald-400">6.8 / 60 <span className="text-xs font-normal text-slate-400">(#2 NHL)</span></div>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <div className="text-slate-400">Playoff Rush xGF</div>
                  <div className="text-lg font-bold text-rose-400">3.9 / 60 <span className="text-xs font-normal text-rose-300">(-42.6%)</span></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
              <div className="space-y-3">
                <h4 className="font-semibold text-white text-base">The Structural Regular Season Trick</h4>
                <p>
                  Over 82 regular season games, opponents play varying tactical schemes. Defensemen routinely back up to avoid getting burned by Auston Matthews, Mitch Marner, or William Nylander off the rush. Toronto feasts in transition, generating the 2nd-most rush scoring chances in hockey.
                </p>
                <p>
                  This inflates regular season point totals (105-115 points) and creates a false sense of offensive invulnerability. The Leafs believe their dynamic speed can solve any defense.
                </p>
              </div>

              <div className="space-y-3 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
                <h4 className="font-semibold text-rose-300 text-base">The Playoff Wall: 1-2-2 & Heavy Forechecks</h4>
                <p>
                  When May arrives, every playoff opponent (Boston, Montreal, Tampa, Florida) institutes disciplined 1-2-2 or 1-3-1 neutral zone traps. Defensemen step up at the blue line, denying clean controlled entries.
                </p>
                <p>
                  Playoffs require <strong className="text-white">"greasy hockey"</strong>: chipping the puck deep, sustaining 40-second cycles, punishing defensemen along the end boards, and converting rebound scrums. Toronto ranked <strong className="text-rose-400">15th of 16 playoff teams in tip-in goals (0.18/60)</strong>, compared to Florida (0.72/60) and Vegas (0.68/60).
                </p>
              </div>
            </div>
          </div>
        )}

        {activeVector === 'powerplay' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Vector 02</span>
                <h3 className="text-xl font-bold text-white mt-1">Special Teams Catastrophe: The Power Play Freeze</h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono-numbers">
                <div>
                  <div className="text-slate-400">Regular Season PP%</div>
                  <div className="text-lg font-bold text-emerald-400">25.4% <span className="text-xs font-normal text-slate-400">(Top 3)</span></div>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <div className="text-slate-400">Playoffs PP%</div>
                  <div className="text-lg font-bold text-rose-400">14.8%</div>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <div className="text-slate-400">Elimination Games</div>
                  <div className="text-lg font-bold text-rose-500">9.7% <span className="text-xs font-normal text-rose-400">(4 for 41)</span></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
              <div className="space-y-3">
                <h4 className="font-semibold text-white text-base">Predictable Umbrella Mechanics</h4>
                <p>
                  Toronto’s power play has historically run through Mitch Marner on the right half-wall, feeding Auston Matthews in the left faceoff circle for his one-timer, or John Tavares in the bumper. In October and January, this setup is lethal because opposing penalty killers hesitate.
                </p>
                <p>
                  In a seven-game playoff series, coaching staffs study video intensely. Penalty kills aggressively flush Marner to his backhand and station a stick in the seam pass lane.
                </p>
              </div>

              <div className="space-y-3 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
                <h4 className="font-semibold text-rose-300 text-base">The 2024 Boston Bruins Climax: 1 for 21 (4.8%)</h4>
                <p>
                  In the 2024 first round against Boston, Toronto generated just <strong className="text-white">one power-play goal on 21 opportunities</strong>.
                </p>
                <p>
                  Because Morgan Rielly lacks an overpowering slapshot from the point, penalty kill diamond formations cheat lower and wider. Without a shooting threat from the blue line, the entire man-advantage collapses into stationary perimeter passing that bleeds precious two-minute clocks.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeVector === 'goalies' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Vector 03</span>
                <h3 className="text-xl font-bold text-white mt-1">Goaltending: Scapegoat or True Culprit?</h3>
              </div>
              <div className="text-xs font-mono-numbers text-right">
                <div className="text-slate-400">Opponents' Closeout SV%</div>
                <div className="text-lg font-bold text-rose-400">.941 Average</div>
              </div>
            </div>

            <div className="text-sm text-slate-300 leading-relaxed space-y-2">
              <p>
                {GOALTENDING_DEEP_DIVE.overallVerdict}
              </p>
            </div>

            {/* Goalie Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {GOALTENDING_DEEP_DIVE.leafsGoalies.map((g) => (
                <div key={g.name} className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs space-y-2">
                  <div className="font-bold text-white text-sm">{g.name}</div>
                  <div className="text-slate-400">{g.tenure} · {g.games} GP</div>
                  <div className="flex items-center justify-between border-t border-slate-800/60 pt-2 font-mono-numbers">
                    <div>
                      <span className="text-slate-400">SV%: </span>
                      <span className="text-slate-200 font-semibold">{g.savePct}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">G7 SV%: </span>
                      <span className={g.eliminationGameSvPct < 0.900 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                        {g.eliminationGameSvPct}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-tight pt-1">
                    {g.breakdown}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-blue-950/30 border border-blue-800/50 text-xs text-blue-200 leading-relaxed">
              <strong className="text-white">The Opposing Goalie Trap:</strong> Leafs fans frequently lament facing Carey Price (.932 in 2021), Andrei Vasilevskiy (.937 in 2022 closeouts), Sergei Bobrovsky (.943 in 2023), and Jeremy Swayman (.950 in 2024). But tracking metrics prove that opposing goalies see <strong className="text-white">88.8% of Toronto shots cleanly</strong> without a body screening their eyes. An elite NHL goalie with clear sightlines will stop 95% of pucks all day.
            </div>
          </div>
        )}

        {activeVector === 'defense' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Vector 04</span>
                <h3 className="text-xl font-bold text-white mt-1">D-Zone Transition Fragility Under Forecheck Heat</h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono-numbers">
                <div>
                  <div className="text-slate-400">Leafs Playoff Giveaways</div>
                  <div className="text-lg font-bold text-rose-400">14.8 / 60</div>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <div className="text-slate-400">Cup Winner Average</div>
                  <div className="text-lg font-bold text-emerald-400">7.4 / 60 <span className="text-xs font-normal text-slate-400">(Vegas / Florida)</span></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
              <div className="space-y-3">
                <h4 className="font-semibold text-white text-base">Lack of Size and Board Leverage</h4>
                <p>
                  Until the 2024 additions of Chris Tanev and Oliver Ekman-Larsson, Toronto’s defensive corps featured Morgan Rielly, Tyson Barrie, Justin Holl, Travis Dermott, Timothy Liljegren, and Rasmus Sandin. While skilled, this blueline lacked the physical bulk to absorb forechecking hits from Matthew Tkachuk, Sam Bennett, or Brad Marchand.
                </p>
                <p>
                  When pressured below the goal line, Toronto blueliners frequently resorted to blind reverse passes or rimming the puck along the glass, leading to clean turnovers in the slot.
                </p>
              </div>

              <div className="space-y-3 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
                <h4 className="font-semibold text-rose-300 text-base">The Catastrophic Overtime Breakdown</h4>
                <p>
                  In Game 7 overtime vs Boston in 2024, Hampus Lindholm launched a routine bank pass off the end boards. Both Toronto defensemen were caught flat-footed, allowing David Pastrnak to dart behind them untouched and slip the puck past Samsonov.
                </p>
                <p>
                  In 2023 Round 2 Game 5 vs Florida, Nick Cousins scored the series-clincher in OT after Radko Gudas pinned Calle Jarnkrok's stick at the blue line. Toronto's crease defense consistently failed in sudden-death moments.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeVector === 'slot' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Vector 05</span>
                <h3 className="text-xl font-bold text-white mt-1">Slot Shrinkage: The Perimeter Funnel</h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono-numbers">
                <div>
                  <div className="text-slate-400">Inner Slot Shot Share</div>
                  <div className="text-lg font-bold text-rose-400">21.0% <span className="text-xs font-normal text-rose-300">in Closeouts</span></div>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <div className="text-slate-400">Net-Front Screen Rate</div>
                  <div className="text-lg font-bold text-rose-400">11.2% <span className="text-xs font-normal text-slate-400">(vs 26% Florida)</span></div>
                </div>
              </div>
            </div>

            {/* Interactive Hockey Ice Rink Slot Visualization */}
            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-64 h-56 relative bg-slate-900/90 rounded border border-slate-700/80 overflow-hidden flex items-center justify-center">
                {/* Rink markings SVG */}
                <svg viewBox="0 0 200 180" className="w-full h-full text-slate-700">
                  {/* Goal crease */}
                  <path d="M 85 20 A 15 15 0 0 1 115 20 Z" fill="rgba(59, 130, 246, 0.25)" stroke="#3b82f6" strokeWidth="1" />
                  <line x1="70" y1="20" x2="130" y2="20" stroke="#ef4444" strokeWidth="2" />
                  {/* Faceoff circles */}
                  <circle cx="50" cy="70" r="28" fill="none" stroke="#64748b" strokeWidth="0.8" strokeDasharray="2,2" />
                  <circle cx="150" cy="70" r="28" fill="none" stroke="#64748b" strokeWidth="0.8" strokeDasharray="2,2" />
                  {/* High Danger Inner Slot Box */}
                  <rect x="75" y="25" width="50" height="45" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="1" />
                  <text x="100" y="50" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">INNER SLOT</text>
                  {/* High Danger Outer Slot */}
                  <polygon points="60,70 140,70 160,110 40,110" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="0.8" />
                  <text x="100" y="90" textAnchor="middle" fill="#f59e0b" fontSize="7">PERIMETER FUNNEL</text>
                  {/* Leafs Playoff Shot cluster dots */}
                  <circle cx="48" cy="80" r="3" fill="#60a5fa" />
                  <circle cx="52" cy="95" r="3" fill="#60a5fa" />
                  <circle cx="145" cy="85" r="3" fill="#60a5fa" />
                  <circle cx="155" cy="72" r="3" fill="#60a5fa" />
                  <circle cx="100" cy="115" r="3" fill="#60a5fa" />
                  <circle cx="95" cy="35" r="3" fill="#ef4444" opacity="0.6" />
                </svg>
              </div>

              <div className="flex-1 text-xs text-slate-300 space-y-2">
                <div className="font-semibold text-white text-sm">Where the Shots Actually Go</div>
                <p>
                  In the regular season, Auston Matthews and John Tavares establish position inside the <span className="text-rose-400 font-bold">red Inner Slot (0–15 ft)</span>, producing a 19.4% shooting conversion.
                </p>
                <p>
                  In playoff elimination games, opposing defenders pack the paint with cross-checks, pushing the Leafs into the <span className="text-amber-400 font-bold">amber Perimeter Funnel</span>. The Leafs still fire 35 shots on goal, but they arrive from 32+ feet out, with zero net-front traffic to deflect pucks or disrupt the goaltender.
                </p>
                <div className="text-[11px] text-slate-400 font-mono-numbers pt-1">
                  Average shot distance: Regular Season 21.2 ft ➔ Elimination Games 29.8 ft (+8.6 ft retreat).
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Interactive Trend Chart with Hoverable Breakdowns */}
      <InteractiveTrendChart />

      {/* Comprehensive Metric Comparison Table */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white uppercase font-athletic">
              Comprehensive Disparity Ledger: Regular Season vs Playoffs
            </h3>
            <p className="text-xs text-slate-400">
              Comparing Toronto's 82-game regular season averages to playoff elimination games and Stanley Cup champions.
            </p>
          </div>
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTableFilter('all')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTableFilter === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Metrics
            </button>
            <button
              onClick={() => setActiveTableFilter('catastrophic')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeTableFilter === 'catastrophic' ? 'bg-rose-950/80 text-rose-300 border border-rose-800' : 'text-slate-400 hover:text-white'
              }`}
            >
              Catastrophic Flaws Only
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Metric Category</th>
                <th className="py-3 px-4 text-right">Regular Season</th>
                <th className="py-3 px-4 text-right">Playoffs (Total)</th>
                <th className="py-3 px-4 text-right text-rose-400">Elimination Games</th>
                <th className="py-3 px-4 text-right text-emerald-400">Cup Winner Avg</th>
                <th className="py-3 px-4">Impact Finding</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono-numbers">
              {filteredMetrics.map((row) => (
                <tr key={row.category} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-4 font-sans font-medium text-white">
                    {row.category}
                  </td>
                  <td className="py-3 px-4 text-right text-slate-300">
                    {row.regularSeason}{row.unit}
                  </td>
                  <td className="py-3 px-4 text-right text-slate-300">
                    {row.playoffs}{row.unit}
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-rose-400">
                    {row.eliminationGames}{row.unit}
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-emerald-400">
                    {row.cupWinnerAvg}{row.unit}
                  </td>
                  <td className="py-3 px-4 font-sans text-slate-400 max-w-md leading-relaxed text-[11px]">
                    {row.explanation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
