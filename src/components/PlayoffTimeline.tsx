import React, { useState } from 'react';
import { PLAYOFF_SERIES_HISTORY } from '../data/playoffSeriesData';
import { PlayoffSeries } from '../types/leafsAnalytics';

export const PlayoffTimeline: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<PlayoffSeries>(
    PLAYOFF_SERIES_HISTORY[PLAYOFF_SERIES_HISTORY.length - 1] // default to 2024 Bruins
  );

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
          <span>Historical Retrospective</span>
          <span aria-hidden="true">·</span>
          <span>11 Playoff Series</span>
          <span aria-hidden="true">·</span>
          <span>2017–2025</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight font-athletic uppercase">
          Playoff Series Autopsy Ledger
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
          Select any series in the Auston Matthews era to inspect the tactical and statistical breakdown of how each postseason campaign concluded.
        </p>
      </div>

      {/* Series Horizontal Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {PLAYOFF_SERIES_HISTORY.map((s) => {
          const isSelected = selectedSeries.id === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSelectedSeries(s)}
              className={`p-3 rounded-lg border text-left transition-all shrink-0 cursor-pointer w-44 ${
                isSelected
                  ? 'bg-blue-950/60 border-blue-500 shadow-md ring-1 ring-blue-500/50'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono-numbers">
                <span className="font-bold text-white">{s.year}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    s.result === 'W'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : 'bg-rose-950 text-rose-400 border border-rose-800'
                  }`}
                >
                  {s.result === 'W' ? 'WON' : 'LOST'} {s.score}
                </span>
              </div>
              <div className="mt-2 text-xs font-semibold text-slate-200 truncate">
                vs {s.opponent}
              </div>
              <div className="mt-1 text-[11px] text-slate-400">
                {s.round}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Series Detail Card */}
      <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
        {/* Top series banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>{selectedSeries.year} Stanley Cup Playoffs</span>
              <span aria-hidden="true">·</span>
              <span>{selectedSeries.round}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-numbers">{selectedSeries.gamesPlayed} Games</span>
            </div>
            <h3 className="text-2xl font-black text-white mt-1 font-athletic uppercase tracking-wide">
              Toronto Maple Leafs vs {selectedSeries.opponent} ({selectedSeries.score})
            </h3>
            <div className="mt-1 text-xs text-slate-300">
              Elimination Game: <strong className="text-rose-400">{selectedSeries.eliminationGameScore}</strong> on {selectedSeries.eliminationDate}
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-numbers bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <div>
              <div className="text-slate-400">Goals For / Against</div>
              <div className="text-sm font-bold text-white mt-0.5">
                {selectedSeries.leafsGoalsFor} – {selectedSeries.leafsGoalsAgainst}
              </div>
            </div>
            <div className="h-7 w-px bg-slate-800" />
            <div>
              <div className="text-slate-400">5v5 xGF%</div>
              <div className="text-sm font-bold text-blue-400 mt-0.5">
                {selectedSeries.team5v5xGFPercent}%
              </div>
            </div>
            <div className="h-7 w-px bg-slate-800" />
            <div>
              <div className="text-slate-400">5v5 SH%</div>
              <div className="text-sm font-bold text-amber-400 mt-0.5">
                {selectedSeries.team5v5ShootingPercent}%
              </div>
            </div>
            <div className="h-7 w-px bg-slate-800" />
            <div>
              <div className="text-slate-400">PP%</div>
              <div className="text-sm font-bold text-slate-300 mt-0.5">
                {selectedSeries.powerPlayPercent}%
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Autopsy and Critical Moment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Autopsy Diagnostic
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedSeries.autopsyFinding}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
              The Fatal Inflection Point
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedSeries.criticalMoment}
            </p>
          </div>
        </div>

        {/* Core Four Box Score Production */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-white uppercase tracking-wider">
              Core Four Series Scoring Breakdown
            </span>
            <span className="text-slate-400 font-mono-numbers">
              Combined Cap: ~$46.6M
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-numbers text-xs">
            {/* Matthews */}
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="text-slate-400 font-sans font-semibold">Auston Matthews</div>
              <div className="text-lg font-bold text-white mt-1">
                {selectedSeries.coreFourPoints.matthews.g}G · {selectedSeries.coreFourPoints.matthews.a}A
              </div>
              <div className="text-slate-400 text-[11px] mt-0.5">
                {selectedSeries.coreFourPoints.matthews.pts} PTS · {selectedSeries.coreFourPoints.matthews.shots} SOG
              </div>
            </div>

            {/* Marner */}
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="text-slate-400 font-sans font-semibold">Mitch Marner</div>
              <div className="text-lg font-bold text-white mt-1">
                {selectedSeries.coreFourPoints.marner.g}G · {selectedSeries.coreFourPoints.marner.a}A
              </div>
              <div className="text-slate-400 text-[11px] mt-0.5">
                {selectedSeries.coreFourPoints.marner.pts} PTS · {selectedSeries.coreFourPoints.marner.shots} SOG
              </div>
            </div>

            {/* Nylander */}
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="text-slate-400 font-sans font-semibold">William Nylander</div>
              <div className="text-lg font-bold text-white mt-1">
                {selectedSeries.coreFourPoints.nylander.g}G · {selectedSeries.coreFourPoints.nylander.a}A
              </div>
              <div className="text-slate-400 text-[11px] mt-0.5">
                {selectedSeries.coreFourPoints.nylander.pts} PTS · {selectedSeries.coreFourPoints.nylander.shots} SOG
              </div>
            </div>

            {/* Tavares */}
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="text-slate-400 font-sans font-semibold">John Tavares</div>
              {selectedSeries.coreFourPoints.tavares ? (
                <>
                  <div className="text-lg font-bold text-white mt-1">
                    {selectedSeries.coreFourPoints.tavares.g}G · {selectedSeries.coreFourPoints.tavares.a}A
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    {selectedSeries.coreFourPoints.tavares.pts} PTS · {selectedSeries.coreFourPoints.tavares.shots} SOG
                  </div>
                </>
              ) : (
                <div className="text-slate-500 text-xs mt-2 italic font-sans">
                  Not on roster in {selectedSeries.year}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Goaltending Duel Comparison in Selected Series */}
        <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 text-xs">
          <div className="text-slate-400 font-semibold uppercase tracking-wider mb-3">
            Goaltending Duel: Leafs Netminder vs Opponent Netminder
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-numbers">
            <div className="flex items-center justify-between p-3 rounded bg-slate-900/60 border border-slate-800">
              <div>
                <div className="font-sans font-bold text-white">{selectedSeries.leafsStartingGoalie.name} (TOR)</div>
                <div className="text-slate-400 text-[11px]">GSAx: {selectedSeries.leafsStartingGoalie.gsax > 0 ? `+${selectedSeries.leafsStartingGoalie.gsax}` : selectedSeries.leafsStartingGoalie.gsax}</div>
              </div>
              <div className="text-base font-bold text-slate-200">
                {selectedSeries.leafsStartingGoalie.savePercent} SV%
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded bg-slate-900/60 border border-slate-800">
              <div>
                <div className="font-sans font-bold text-white">{selectedSeries.opposingGoalie.name} ({selectedSeries.opponentLogo})</div>
                <div className="text-slate-400 text-[11px]">GSAx: +{selectedSeries.opposingGoalie.gsax}</div>
              </div>
              <div className={`text-base font-bold ${selectedSeries.opposingGoalie.savePercent >= 0.930 ? 'text-rose-400' : 'text-slate-200'}`}>
                {selectedSeries.opposingGoalie.savePercent} SV%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
