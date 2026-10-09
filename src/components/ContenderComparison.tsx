import React, { useState } from 'react';
import { CONTENDER_PROFILES } from '../data/advancedMetricsData';

export const ContenderComparison: React.FC = () => {
  const [selectedContender, setSelectedContender] = useState<string>('Florida Panthers');

  const leafsProfile = CONTENDER_PROFILES.find(p => p.team.includes('Leafs'))!;
  const currentContender = CONTENDER_PROFILES.find(p => p.team === selectedContender)!;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
          <span>Comparative Analytics</span>
          <span aria-hidden="true">·</span>
          <span>Stanley Cup Champions vs Toronto</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight font-athletic uppercase">
          The Contenders Gap: Why Champions Advance and Toronto Fails
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
          How do the Maple Leafs measure up against the actual teams that have won the Stanley Cup or eliminated them? The divergence in salary cap distribution, net-front grease, and defensive transition reveals the blueprint of a champion.
        </p>
      </div>

      {/* Contender selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {CONTENDER_PROFILES.filter(p => !p.team.includes('Leafs')).map((c) => (
          <button
            key={c.team}
            onClick={() => setSelectedContender(c.team)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
              selectedContender === c.team
                ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800/60'
            }`}
          >
            {c.team} ({c.season})
          </button>
        ))}
      </div>

      {/* Side-by-Side Comparison Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Toronto Profile */}
        <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">The Failure Blueprint</span>
              <h3 className="text-2xl font-black text-white font-athletic uppercase mt-0.5">{leafsProfile.team}</h3>
              <div className="text-xs text-slate-400">{leafsProfile.season} · {leafsProfile.result}</div>
            </div>
            <div className="text-right font-mono-numbers">
              <div className="text-xs text-slate-400">Top-4 Cap Share</div>
              <div className="text-2xl font-black text-rose-400">{leafsProfile.top4CapShare}%</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 italic bg-slate-950/60 p-3.5 rounded border border-slate-800/80">
            "{leafsProfile.definingPlayoffIdentity}"
          </p>

          <div className="space-y-3 font-mono-numbers text-xs">
            <div className="flex items-center justify-between p-2.5 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 font-sans">Net-Front Screen Rate</span>
              <span className="font-bold text-rose-400">{leafsProfile.netFrontScreenRate}% (Rank 15/16)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 font-sans">D-Zone Giveaways / 60</span>
              <span className="font-bold text-rose-400">{leafsProfile.dZoneGiveawaysPer60} (Worst tier)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 font-sans">Playoff 5v5 Shooting %</span>
              <span className="font-bold text-rose-400">{leafsProfile.playoff5v5ShPercent}%</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 font-sans">Playoff Power Play %</span>
              <span className="font-bold text-slate-300">{leafsProfile.playoffPPPercent}%</span>
            </div>
          </div>
        </div>

        {/* Selected Champion Profile */}
        <div className="p-6 rounded-xl bg-slate-900/80 border border-emerald-900/50 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">The Champion Blueprint</span>
              <h3 className="text-2xl font-black text-white font-athletic uppercase mt-0.5">{currentContender.team}</h3>
              <div className="text-xs text-slate-400">{currentContender.season} · {currentContender.result}</div>
            </div>
            <div className="text-right font-mono-numbers">
              <div className="text-xs text-slate-400">Top-4 Cap Share</div>
              <div className="text-2xl font-black text-emerald-400">{currentContender.top4CapShare}%</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 italic bg-slate-950/60 p-3.5 rounded border border-slate-800/80">
            "{currentContender.definingPlayoffIdentity}"
          </p>

          <div className="space-y-3 font-mono-numbers text-xs">
            <div className="flex items-center justify-between p-2.5 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 font-sans">Net-Front Screen Rate</span>
              <span className="font-bold text-emerald-400">{currentContender.netFrontScreenRate}% (+{((currentContender.netFrontScreenRate - leafsProfile.netFrontScreenRate)).toFixed(1)}%)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 font-sans">D-Zone Giveaways / 60</span>
              <span className="font-bold text-emerald-400">{currentContender.dZoneGiveawaysPer60} (-{((leafsProfile.dZoneGiveawaysPer60 - currentContender.dZoneGiveawaysPer60)).toFixed(1)})</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 font-sans">Playoff 5v5 Shooting %</span>
              <span className="font-bold text-emerald-400">{currentContender.playoff5v5ShPercent}%</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-slate-950/50 border border-slate-800">
              <span className="text-slate-400 font-sans">Playoff Power Play %</span>
              <span className="font-bold text-emerald-400">{currentContender.playoffPPPercent}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Analytical Synthesis Grid */}
      <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
        <h4 className="text-lg font-bold text-white uppercase font-athletic">
          Why Stanley Cup Contenders Built Differently
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1.5">
            <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">Vegas Model (2023)</div>
            <p>
              Vegas had <strong className="text-white">zero players making &gt;$10 million</strong>. They invested heavily in six giant, mobile defensemen (Pietrangelo, Theodore, McNabb, Whitecloud, Hague, Martinez) who absorbed hits and shielded the slot.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1.5">
            <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">Florida Model (2024)</div>
            <p>
              Florida allocated 34.2% to their top-4. They constructed a relentless 2-1-2 forecheck, leading the NHL with a 26.1% screen rate. They bullied opponents into their own zone, turning hockey into a war of physical attrition.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1.5">
            <div className="font-bold text-rose-400 uppercase tracking-wider text-[11px]">Toronto's Cap Stranglehold</div>
            <p>
              Toronto locked $46.6M (49.7%) into four forwards who play primarily off the rush or from the perimeter. As a consequence, they could never afford a championship-caliber blue line or physical bottom-six forward depth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
