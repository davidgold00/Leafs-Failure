import React from 'react';
import { ELIMINATION_GAMES_RECORD } from '../data/playoffSeriesData';
import heroImg from '../assets/images/leafs_editorial_hero_1791580386046.jpg';

interface OverviewHeroProps {
  onNavigate: (tab: string) => void;
  onOpenAnalyst: () => void;
}

export const OverviewHero: React.FC<OverviewHeroProps> = ({ onNavigate, onOpenAnalyst }) => {
  return (
    <div className="space-y-10">
      {/* Editorial Hero Banner Split */}
      <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px]">
          {/* Left Column: Editorial Narrative */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
                <span>Investigative Sports Analytics</span>
                <span aria-hidden="true">·</span>
                <span>Oct 9, 2026 Edition</span>
                <span aria-hidden="true">·</span>
                <span>The Matthews Era</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase font-athletic">
                Why Elite Regular Seasons Turn Into Playoff Ghosts
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Since drafting Auston Matthews 1st overall in 2016, the Toronto Maple Leafs have assembled one of the highest-scoring, 100+ point rosters in modern NHL history. Yet across nine seasons, they have produced <strong className="text-white">two series victories</strong> (overcoming Tampa Bay in 2023 and Ottawa in 2025) while enduring a persistent struggle in closeout situations with a <strong className="text-rose-400">2-12 record in elimination games</strong>.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                This investigation leverages advanced tracking metrics—high-danger slot share, net-front screen rates, forecheck turnover frequencies, and cap concentration curves—to reveal the mathematical reality hidden behind regular season dominance.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('forensics')}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-md hover:shadow-blue-500/20"
              >
                Inspect The 5 Failure Vectors
              </button>
              <button
                onClick={() => onNavigate('marner')}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/40 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                The Marner Decision Deep Dive
              </button>
              <button
                onClick={onOpenAnalyst}
                className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                Query AI Playoff Analyst
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image with measured scrim */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={heroImg}
              alt="Playoff hockey arena atmosphere in Toronto"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-slate-900 lg:via-transparent lg:to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300/80 bg-slate-950/70 backdrop-blur-sm p-3 rounded border border-slate-800/80">
              <span className="font-semibold text-white">Scotiabank Arena Under Spotlight:</span> Two series victories (Tampa Bay 2023, Ottawa 2025) across 11 playoff rounds.
            </div>
          </div>
        </div>
      </div>

      {/* 5-Column High-Impact KPI Strip */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
        <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="text-xs font-medium text-slate-400">Playoff Series Record</div>
          <div className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
            2 – 9
          </div>
          <div className="mt-1 text-xs text-blue-400 flex items-center gap-1">
            <span>18.2% Series Win Rate</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 leading-tight">
            Series wins: Tampa Bay (2023) & Ottawa (2025).
          </div>
        </div>

        <div className="p-4 rounded-lg bg-slate-900/80 border border-rose-900/40 bg-rose-950/10">
          <div className="text-xs font-medium text-slate-400">Elimination Games</div>
          <div className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono-numbers">
            2 – 12
          </div>
          <div className="mt-1 text-xs text-rose-300">
            <span>{ELIMINATION_GAMES_RECORD.winRate} Win Rate</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 leading-tight">
            2-11 in potential closeout opportunities.
          </div>
        </div>

        <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="text-xs font-medium text-slate-400">Closeout Scoring Crash</div>
          <div className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
            1.95 <span className="text-sm font-normal text-slate-400">G/GP</span>
          </div>
          <div className="mt-1 text-xs text-rose-400">
            <span>-46.1% vs Reg Season</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 leading-tight">
            Down from 3.62 regular season goals per game.
          </div>
        </div>

        <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="text-xs font-medium text-slate-400">Cap in "Core Four"</div>
          <div className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono-numbers">
            49.7%
          </div>
          <div className="mt-1 text-xs text-slate-400">
            <span>$46.65M Cap Hit</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 leading-tight">
            Highest concentration of forward cap in NHL history.
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 p-4 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="text-xs font-medium text-slate-400">Opposing Goalie SV%</div>
          <div className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
            .938
          </div>
          <div className="mt-1 text-xs text-blue-400">
            <span>Elimination Games</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-400 leading-tight">
            Driven by 11.2% unscreened perimeter shots.
          </div>
        </div>
      </div>

      {/* The Central Thesis Box */}
      <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-wide uppercase font-athletic">
            The Fundamental Autopsy Thesis
          </h2>
          <span className="text-xs text-slate-400 font-mono-numbers">Sample: 69 Playoff Games (2017–2025) · Sourced Oct 2026</span>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          The Toronto Maple Leafs have not failed due to bad luck, officiating conspiracies, or random goalie hot streaks. Their failures are <strong className="text-white">mechanically engineered by how their roster was constructed and how their offensive system generates shots</strong>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <div className="text-xs font-semibold text-blue-400 mb-1">01. The Rush vs. Cycle Illusion</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Toronto builds 105-point regular seasons by leading the NHL in transition rush scoring chances. In the postseason, 1-2-2 neutral trap systems eliminate rush ice, exposing Toronto's bottom-tier net-front deflection and rebound presence.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <div className="text-xs font-semibold text-blue-400 mb-1">02. Special Teams Collapse</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              A 26% regular season power play routinely evaporates to under 14% (and 4.8% vs Boston in 2024). Opposing PK units pre-scout predictable half-wall seam passes, knowing Toronto lacks a point slapshot threat.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <div className="text-xs font-semibold text-blue-400 mb-1">03. The Cap Allocation Trap</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              By dedicating ~50% of cap space to four forwards, Toronto starved its blue line of heavy, 6'3"+ shutdown defenders and starved lines 3 and 4 of gritty secondary scorers who win board battles in May and June.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
